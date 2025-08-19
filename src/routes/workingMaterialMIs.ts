// File: server.ts
import express, { Request, Response, Application } from "express";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import * as cheerio from "cheerio";
import winston, { Logger } from "winston";
import { URL } from "url";
import { prisma } from "@lib/prisma";
import { findPanchayatByCode } from "../utils/findPanchayat";
import {
  MaterialVoucherData,
  scrapeMaterialVoucherData
} from "../services/form32Service";
import { userAuth } from "../middleware/auth";
import { proxyAgent } from "../services/ProxyService/proxyServiceAgent";

const workingtestingVendorScrape = express.Router();

// Type definitions
interface ProcessResult {
  tables: string[][] | null;
  url: string;
}

interface LinkData {
  url: string;
  linkId: string;
}

interface SessionResult {
  success: boolean;
  links: string[];
}

interface MaterialData {
  billNo: string;
  billAmount: string;
  billDate: string;
  dateOfPayment: string;
  material: string;
  unitPrice: string;
  quantity: string;
  amount: string;
}

interface ExtractedData {
  workCode: string;
  vendorName: string;
  financialYear: string;
  materialData: MaterialData[];
}

interface ApiResponse {
  success?: boolean;
  code?: string;
  message: string;
  totalTime: number;
  data?: ExtractedData;
}

interface ErrorResponse {
  error: string;
}

export interface RequestData {
  workCode: string;
  financialYear: string;
  blockName: string;
  blockCode: string;
  panchayatName: string;
  panchayatCode: string;
}

// Set up logging
const logger: Logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} - ${level.toUpperCase()} - ${message}`;
    })
  ),
  transports: [new winston.transports.Console()]
});

const headers: Record<string, string> = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  "Accept-Encoding": "gzip, deflate, br",
  DNT: "1",
  Connection: "keep-alive",
  "Upgrade-Insecure-Requests": "1",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1"
};

const MAX_CONCURRENT_REQUESTS: number = 2;

// Simple cookie storage
let cookieStore: string = "";

// Create axios instance with proxy agent and manual cookie handling
const axiosInstance: AxiosInstance = axios.create({
  timeout: 20000,
  maxRedirects: 5,
  httpsAgent: proxyAgent,
  validateStatus: (status: number): boolean =>
    (status >= 200 && status < 300) ||
    [429, 500, 502, 503, 504].includes(status)
});

// Add request interceptor to include cookies
axiosInstance.interceptors.request.use((config) => {
  if (cookieStore) {
    config.headers["Cookie"] = cookieStore;
  }
  return config;
});

// Add response interceptor to store cookies
axiosInstance.interceptors.response.use(
  (response) => {
    const setCookieHeader = response.headers["set-cookie"];
    if (setCookieHeader) {
      cookieStore = setCookieHeader
        .map((cookie) => cookie.split(";")[0])
        .join("; ");
    }
    return response;
  },
  (error) => {
    // Handle errors but still return the promise rejection
    return Promise.reject(error);
  }
);

// Generate financial years based on user input
const generateFinancialYears = (userFinancialYear: string): string[] => {
  const [startYear] = userFinancialYear.split("-");
  const nextYear = (parseInt(startYear) + 1).toString();
  const nextFinancialYear = `${nextYear}-${(parseInt(nextYear) + 1).toString()}`;

  return [userFinancialYear, nextFinancialYear];
};

// Generate dynamic URL
const generateUrl = (data: RequestData, financialYear: string): string => {
  const baseUrl =
    "https://nregastrep.nic.in/netnrega/IndexFrame.aspx?lflag=eng&District_Code=1515&district_name=KALABURAGI&state_name=KARNATAKA&state_Code=15&";

  return `${baseUrl}block_name=${encodeURIComponent(data.blockName)}&block_code=${data.blockCode}&fin_year=${financialYear}&check=1&Panchayat_name=${encodeURIComponent(data.panchayatName)}&Panchayat_Code=${data.panchayatCode}`;
};

// Improved retry request with better session handling
const retryRequest = async (
  url: string,
  retries: number = 3,
  backoff: number = 1000,
  referer?: string
): Promise<AxiosResponse | null> => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const config: any = {
        headers: {
          ...headers,
          Referer: referer || url,
          "Cache-Control": "no-cache",
          Pragma: "no-cache"
        }
      };

      logger.info(`Attempting to fetch ${url} (attempt ${attempt})`);
      const response: AxiosResponse = await axiosInstance.get(url, config);

      if (response.status >= 200 && response.status < 300) {
        logger.info(
          `Successfully fetched ${url} with status ${response.status}`
        );
        return response;
      } else {
        logger.warn(`Received status ${response.status} for ${url}`);
      }
    } catch (error: any) {
      logger.error(
        `Error fetching ${url} (attempt ${attempt}): ${error.message}`
      );

      // Enhanced error logging
      if (error.response) {
        logger.error(`Response status: ${error.response.status}`);
        logger.error(
          `Response data preview: ${JSON.stringify(error.response.data).substring(0, 200)}`
        );
      } else if (error.request) {
        logger.error(`Request failed - no response received`);
      } else {
        logger.error(`Request setup error: ${error.message}`);
      }
    }

    if (attempt < retries) {
      const delay = backoff * Math.pow(2, attempt - 1);
      logger.info(`Retrying after ${delay}ms...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  logger.error(`Failed to fetch ${url} after ${retries} attempts`);
  return null;
};

const cleanTableWc =
  ($: cheerio.CheerioAPI) =>
  (table: any): string[][] | null => {
    try {
      const rows = $(table).find("tr");
      if (!rows.length) return null;

      const tableData: string[][] = [];
      rows.each((_, row) => {
        const cells = $(row).find("td, th");
        if (cells.length) {
          const rowData: string[] = [];
          cells.each((_, cell) => {
            const text: string = $(cell).text().trim();
            if (text) rowData.push(text);
          });
          if (rowData.length) tableData.push(rowData);
        }
      });

      if (!tableData.length) return null;

      const maxCols: number = Math.max(...tableData.map((row) => row.length));
      return tableData.map((row) => {
        while (row.length < maxCols) row.push("");
        return row;
      });
    } catch (error: any) {
      logger.error(`Error cleaning table: ${error.message}`);
      return null;
    }
  };

const tableContainsWorkcode = (
  tableData: string[][] | null,
  workcode: string
): boolean => {
  if (!tableData) return false;
  const workcodeParts: string = workcode.split("/").pop()?.toLowerCase() || "";
  return tableData.some((row) =>
    row.some(
      (cell) =>
        cell.toLowerCase().includes(workcode.toLowerCase()) ||
        cell.toLowerCase().includes(workcodeParts)
    )
  );
};

const extractTablesWc = (
  $: cheerio.CheerioAPI,
  workcode: string,
  url: string
): string[][][] => {
  const tables: any[] = $("table").get();

  const cleanedTables: (string[][] | null)[] = tables.map(cleanTableWc($));

  const validTables: string[][][] = cleanedTables.filter(
    (table): table is string[][] =>
      table !== null && tableContainsWorkcode(table, workcode)
  );

  logger.info(
    `Found ${validTables.length} valid tables containing workcode ${workcode}`
  );
  return validTables;
};

// 🔥 COMPLETELY NEW EXTRACTION LOGIC 🔥
export const extractDataFromTable = (tableData: string[][]): ExtractedData => {
  const extractedData: ExtractedData = {
    workCode: "",
    vendorName: "",
    financialYear: "",
    materialData: []
  };

  let currentBillData: Partial<MaterialData> = {};

  logger.info(`Extracting data from table with ${tableData.length} rows`);

  for (let i = 0; i < tableData.length; i++) {
    const row = tableData[i];

    // Extract work code from first row
    if (i === 0 && row[0] && row[0].includes("Work Code")) {
      const workCodeMatch = row[0].match(/\(([^)]+)\)/);
      if (workCodeMatch) {
        extractedData.workCode = workCodeMatch[1];
        logger.info(`Extracted work code: ${extractedData.workCode}`);
      }
    }

    // Extract bill information
    if (row[0] && row[0].startsWith("Bill No.")) {
      currentBillData.billNo = row[0].substring(10).trim();
    }
    if (row[1] && row[1].startsWith("Bill Amount")) {
      currentBillData.billAmount = row[1].substring(14).trim();
    }
    if (row[2] && row[2].startsWith("Bill Date")) {
      currentBillData.billDate = row[2].substring(12).trim();
    }
    if (row[3] && row[3].startsWith("Date of Payment")) {
      currentBillData.dateOfPayment = row[3].substring(16).trim();
    }

    // 🎯 NEW VENDOR EXTRACTION LOGIC BASED ON CURRENT FORMAT
    if (row[0] && row[0].startsWith("Vendor name :")) {
      extractedData.vendorName = row[0].substring(14).trim();
      logger.info(`Extracted vendor name: ${extractedData.vendorName}`);
    }

    if (row[1] && row[1].startsWith("Financial Year :")) {
      extractedData.financialYear = row[1].substring(17).trim();
      logger.info(`Extracted financial year: ${extractedData.financialYear}`);
    }

    // 🎯 SUPER SIMPLE MATERIAL DETECTION
    if (row[0] === "Material") {
      if (i + 1 < tableData.length) {
        const nextRow = tableData[i + 1];

        // Simple check: if it's not a special keyword, it's material data
        const isSpecialRow =
          nextRow[0].includes("Bill No.") ||
          nextRow[0].includes("Vendor name") ||
          nextRow[0].includes("Centre GST") ||
          nextRow[0].includes("State GST") ||
          nextRow[0].includes("Total") ||
          nextRow[0].includes("Material") ||
          nextRow[0].trim() === "";

        if (!isSpecialRow && nextRow.length >= 4) {
          const materialEntry: MaterialData = {
            billNo: currentBillData.billNo || "",
            billAmount: currentBillData.billAmount || "",
            billDate: currentBillData.billDate || "",
            dateOfPayment: currentBillData.dateOfPayment || "",
            material: nextRow[0] || "",
            unitPrice: nextRow[1] || "",
            quantity: nextRow[2] || "",
            amount: nextRow[3] || ""
          };

          extractedData.materialData.push(materialEntry);
          logger.info(`Added material entry: ${materialEntry.material}`);
        }
      }
    }
  }

  logger.info(
    `Extraction completed. Found ${extractedData.materialData.length} material entries`
  );
  return extractedData;
};

export const fetchAvailableLinksWc = ($: cheerio.CheerioAPI): string[] => {
  const seen: Set<string> = new Set();
  const orderedLinks: string[] = [];
  const baseUrl: string = "https://nregastrep.nic.in/netnrega/";

  $("a[href]").each((_, a) => {
    const link: string | undefined = $(a).attr("href");

    if (link && link.includes("gpwrkbilldtl.aspx")) {
      const fullUrl: string = new URL(link, baseUrl).href;
      if (!seen.has(fullUrl)) {
        seen.add(fullUrl);
        orderedLinks.push(fullUrl);
      }
    }
  });

  logger.info(`Found ${orderedLinks.length} gpwrkbilldtl links`);
  return orderedLinks;
};

export const initializeSession = async (
  mainUrl: string
): Promise<SessionResult> => {
  try {
    logger.info(`Initializing session with URL: ${mainUrl}`);
    const response: AxiosResponse | null = await retryRequest(mainUrl);
    if (!response) {
      logger.error(`Failed to initialize session with main URL: ${mainUrl}`);
      return { success: false, links: [] };
    }

    const $: cheerio.CheerioAPI = cheerio.load(response.data);
    const links: string[] = fetchAvailableLinksWc($);

    logger.info(
      `Session initialized successfully. Found ${links.length} links`
    );
    return { success: true, links };
  } catch (error: any) {
    logger.error(`Failed to initialize session: ${error.message}`);
    return { success: false, links: [] };
  }
};

export const processGpwrkbilldtlUrl = async (
  url: string,
  linkId: string,
  financialYear: string,
  workcode: string,
  referer?: string
): Promise<ProcessResult> => {
  try {
    logger.info(`Processing gpwrkbilldtl URL: ${url}`);
    const response: AxiosResponse | null = await retryRequest(
      url,
      3,
      1000,
      referer
    );
    if (!response) {
      logger.warn(`No response received for URL: ${url}`);
      return { tables: null, url };
    }

    const $: cheerio.CheerioAPI = cheerio.load(response.data);
    const tables: string[][][] = extractTablesWc($, workcode, url);

    if (tables.length > 0) {
      logger.info(`Successfully extracted ${tables.length} tables from ${url}`);
      return { tables: tables[0] || null, url };
    }

    logger.warn(`No tables found containing workcode ${workcode} in ${url}`);
    return { tables: null, url };
  } catch (error: any) {
    logger.error(`Failed to fetch gpwrkbilldtl page: ${error.message}`);
    return { tables: null, url };
  }
};

export const mainGpwrkbilldtl = async (
  requestData: RequestData
): Promise<ExtractedData | null> => {
  const financialYears = generateFinancialYears(requestData.financialYear);

  logger.info(`Processing financial years: ${financialYears.join(", ")}`);

  for (const financialYear of financialYears) {
    const mainUrl = generateUrl(requestData, financialYear);

    // Clear cookies for each financial year
    cookieStore = "";
    logger.info(`Cleared cookies for financial year: ${financialYear}`);

    const { success, links }: SessionResult = await initializeSession(mainUrl);
    if (!success || !links.length) {
      logger.warn(`No links found for financial year: ${financialYear}`);
      continue;
    }

    // Process the first link only since we expect one gpwrkbilldtl link
    const result = await processGpwrkbilldtlUrl(
      links[0],
      "gpwrkbilldtl_1",
      financialYear,
      requestData.workCode,
      mainUrl
    );

    if (result.tables) {
      logger.info(
        `Successfully found data for financial year: ${financialYear}`
      );
      return extractDataFromTable(result.tables);
    }
  }

  logger.warn(`No data found for any financial year`);
  return null;
};

// Express route to trigger processing
workingtestingVendorScrape.get(
  "/material-mis-perfect/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const totalStartTime: number = Date.now();
      const { id } = req.params;

      logger.info(`Processing request for work detail ID: ${id}`);

      if (!id) {
        res.status(400).json({
          success: false,
          error: "Work Detail ID is required",
          code: "MISSING_ID"
        });
        return;
      }

      // Fetch work details from database
      const workDetail = await prisma.workDetail.findUnique({
        where: { id: id },
        select: {
          id: true,
          workCode: true,
          financialYear: true,
          workName: true,
          panchayat: true,
          block: true,
          estimatedPersonDays: true
        }
      });

      if (!workDetail) {
        logger.error(`Work Detail not found for ID: ${id}`);
        res.status(404).json({
          success: false,
          error: "Work Detail not found",
          code: "WORK_DETAIL_NOT_FOUND"
        });
        return;
      }

      const workCodeParts = workDetail.workCode.split("/");
      const panchayatCode = workCodeParts[0];
      const panchayatData = findPanchayatByCode(panchayatCode);

      if (!panchayatData) {
        logger.error(`Panchayat data not found for code: ${panchayatCode}`);
        res.status(404).json({
          success: false,
          error: `Panchayat data not found for code: ${panchayatCode}. Please add this panchayat to your constants file.`
        });
        return;
      }

      const requestData: RequestData = {
        workCode: workDetail.workCode,
        financialYear: workDetail.financialYear || "",
        blockName: panchayatData.block_name_en,
        blockCode: panchayatData.block_code,
        panchayatName: panchayatData.panchayat_name_en || "",
        panchayatCode: panchayatData.panchayat_code
      };

      // Validate required fields
      if (
        !requestData.workCode ||
        !requestData.financialYear ||
        !requestData.blockName ||
        !requestData.blockCode ||
        !requestData.panchayatName ||
        !requestData.panchayatCode
      ) {
        logger.error("Missing required fields in request data");
        return res.status(400).json({
          error:
            "Missing required fields: workCode, financialYear, blockName, blockCode, panchayatName, panchayatCode"
        });
      }

      logger.info(
        `Starting data extraction for work code: ${requestData.workCode}`
      );
      const extractedData = await mainGpwrkbilldtl(requestData);

      const workDocument = await prisma.workDocuments.findUnique({
        where: { workCode: workDetail.workCode },
        select: {
          materialVouchers: true
        }
      });

      let materialVoucherData: MaterialVoucherData | null = null;

      if (workDocument && workDocument.materialVouchers) {
        try {
          logger.info("Scraping material voucher data");
          // Scrape material voucher data
          materialVoucherData = await scrapeMaterialVoucherData(
            workDocument.materialVouchers
          );

          if (materialVoucherData) {
            logger.info("Successfully scraped material voucher data");
          } else {
            logger.warn("Failed to scrape material voucher data");
          }
        } catch (scrapeError: any) {
          logger.error(
            "Error scraping material voucher data:",
            scrapeError.message
          );
          // Continue execution even if scraping fails
        }
      }

      const responseData = {
        ...extractedData,
        workName: workDetail.workName,
        vendorName: extractedData?.vendorName
          ? `${extractedData.vendorName} | ${materialVoucherData?.vendorName || ""}`
          : materialVoucherData?.vendorName || "",

        financialYear: extractedData?.financialYear
          ? `${extractedData.financialYear} | ${materialVoucherData?.financialYear || ""}`
          : materialVoucherData?.financialYear || "",

        materialVoucherInfo: materialVoucherData
          ? {
              vendorName: materialVoucherData.vendorName,
              financialYear: materialVoucherData.financialYear
            }
          : null
      };

      const totalTime: number = (Date.now() - totalStartTime) / 1000;

      if (extractedData) {
        logger.info(
          `Processing completed successfully in ${totalTime} seconds`
        );
        res.status(200).json({
          message: "gpwrkbilldtl processing completed successfully",
          totalTime,
          data: responseData
        });
      } else {
        logger.warn(
          "No data found for the specified work code and financial year"
        );
        res.status(404).json({
          error: "No data found for the specified work code and financial year"
        });
      }
    } catch (error: any) {
      logger.error(`Error in processing: ${error.message}`);
      logger.error(`Error stack: ${error.stack}`);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

export default workingtestingVendorScrape;
