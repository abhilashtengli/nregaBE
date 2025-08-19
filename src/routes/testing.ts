// File: server.ts
import express, { Request, Response, Application } from "express";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import * as cheerio from "cheerio";
import winston, { Logger } from "winston";
import { URL } from "url";
import { userAuth } from "../middleware/auth";
import { proxyAgent } from "../services/ProxyService/proxyServiceAgent";

const testingVendorScrape = express.Router();

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

interface ApiResponse {
  message: string;
  totalTime: number;
}

interface ErrorResponse {
  error: string;
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

// Configuration
const URLS: string[] = [
  "https://nregastrep.nic.in/netnrega/IndexFrame.aspx?lflag=eng&District_Code=1515&district_name=KALABURAGI&state_name=KARNATAKA&state_Code=15&block_name=JEVARGI&block_code=1515006&fin_year=2025-2026&check=1&Panchayat_name=NEDALGI&Panchayat_Code=1515006041"
];

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

const FINANCIAL_YEARS: string[] = ["2024-2025", "2025-2026"];
const WORK_CODE: string = "1515006041/RC/93393042892473308";
const MAX_CONCURRENT_REQUESTS: number = 2;

// Simple cookie storage
let cookieStore: string = "";

// Create axios instance with manual cookie handling
// const axiosInstance: AxiosInstance = axios.create({
//   timeout: 20000,
//   maxRedirects: 5,
//   validateStatus: (status: number): boolean =>
//     (status >= 200 && status < 300) ||
//     [429, 500, 502, 503, 504].includes(status)
// });

// // Add request interceptor to include cookies
// axiosInstance.interceptors.request.use((config) => {
//   if (cookieStore) {
//     config.headers["Cookie"] = cookieStore;
//   }
//   return config;
// });

// // Add response interceptor to store cookies
// axiosInstance.interceptors.response.use((response) => {
//   const setCookieHeader = response.headers["set-cookie"];
//   if (setCookieHeader) {
//     cookieStore = setCookieHeader
//       .map((cookie) => cookie.split(";")[0])
//       .join("; ");
//     logger.info(`Stored cookies: ${cookieStore}`);
//   }
//   return response;
// });

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
      // const response: AxiosResponse = await axiosInstance.get(url, config);

      // const response = await axios.get("http://api.scraperapi.com", {
      //   params: {
      //     api_key: process.env.SCRAPER_API_KEY!,
      //     url,
      //     keep_headers: "true"
      //   },
      //   timeout: config.timeout ?? 20000,
      //   maxRedirects: config.maxRedirects ?? 5,
      //   validateStatus: (status: number): boolean =>
      //     (status >= 200 && status < 300) ||
      //     [429, 500, 502, 503, 504].includes(status),
      //   headers: {
      //     "User-Agent":
      //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/91.0.4472.124 Safari/537.36",
      //     Accept:
      //       "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      //     "Accept-Language": "en-US,en;q=0.5",
      //     "Accept-Encoding": "gzip, deflate",
      //     Connection: "keep-alive",
      //     "Upgrade-Insecure-Requests": "1",
      //     ...(cookieStore && { Cookie: cookieStore }),
      //     ...config.headers
      //   }
      // });
      const response = await axios.get(url, {
        httpsAgent: proxyAgent,
        timeout: config.timeout ?? 20000,
        maxRedirects: config.maxRedirects ?? 5,
        validateStatus: (status: number): boolean =>
          (status >= 200 && status < 300) ||
          [429, 500, 502, 503, 504].includes(status)
      });

      if (response.status >= 200 && response.status < 300) {
        logger.info(`Successfully fetched ${url} on attempt ${attempt}`);
        return response;
      }
      logger.error(`Request to ${url} failed with status ${response.status}`);
    } catch (error: any) {
      logger.error(
        `Error fetching ${url} (attempt ${attempt}): ${error.message}`
      );
      if (error.response) {
        logger.error(`Response status: ${error.response.status}`);
        logger.error(
          `Response headers: ${JSON.stringify(error.response.headers)}`
        );
      }
    }
    if (attempt < retries) {
      const delay = backoff * Math.pow(2, attempt - 1);
      logger.info(`Retrying ${url} in ${delay}ms...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
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
  // Debug: Log the HTML content to see what we're actually receiving
  //   console.log("========== DEBUG HTML CONTENT START ==========");
  //   console.log("URL:", url);
  //   console.log("HTML Length:", $.html().length);
  //   console.log("First 1500 characters of HTML:");
  //   console.log($.html().substring(0, 1500));
  //   console.log("========== DEBUG HTML CONTENT END ==========");

  // Check if the HTML contains expected content
  const htmlContent = $.html();
  //   console.log("HTML contains 'table':", htmlContent.toLowerCase().includes('table'));
  //   console.log("HTML contains 'gpwrkbilldtl':", htmlContent.toLowerCase().includes('gpwrkbilldtl'));
  //   console.log("HTML contains workcode:", htmlContent.toLowerCase().includes(workcode.toLowerCase()));
  //   console.log("HTML contains 'error':", htmlContent.toLowerCase().includes('error'));
  //   console.log("HTML contains 'not found':", htmlContent.toLowerCase().includes('not found'));

  // Try different table selectors
  const tables: any[] = $("table").get();
  console.log("Tables found with 'table' selector:", tables.length);

  // Try alternative selectors
  const tableAlternatives = [
    $("table[border]").get(),
    $("table[cellpadding]").get(),
    $("table[cellspacing]").get(),
    $("tbody").get(),
    $("[role='table']").get(),
    $(".table").get()
  ];

  console.log("Alternative table selectors:");
  tableAlternatives.forEach((alt, index) => {
    const selectors = [
      "table[border]",
      "table[cellpadding]",
      "table[cellspacing]",
      "tbody",
      "[role='table']",
      ".table"
    ];
    console.log(`${selectors[index]}: ${alt.length} elements`);
  });

  logger.info(`4. Found ${tables.length} tables to process`);

  // If no tables found, let's check what elements are available
  if (tables.length === 0) {
    console.log("========== NO TABLES FOUND - DEBUGGING ==========");
    console.log("All element types found:");
    const allElements = $("*").get();
    const elementTypes = new Set();
    allElements.forEach((el) => {
      if (el.type === "tag" && (el as any).name) {
        elementTypes.add((el as any).name.toLowerCase());
      }
    });
    console.log("Element types:", Array.from(elementTypes).sort());

    // Check for forms, divs, or other containers that might hold the data
    console.log("Forms found:", $("form").length);
    console.log("Divs found:", $("div").length);
    console.log("Spans found:", $("span").length);
    console.log("Input fields found:", $("input").length);
    console.log("Select dropdowns found:", $("select").length);

    // Look for any text that contains the workcode
    console.log("Searching for workcode in all text...");
    let foundWorkcode = false;
    $("*").each((_, element) => {
      const text = $(element).text();
      if (text && text.includes(workcode)) {
        const elementName =
          element.type === "tag" ? (element as any).name : element.type;
        console.log(
          "Found workcode in element:",
          elementName,
          text.substring(0, 200)
        );
        foundWorkcode = true;
      }
    });
    if (!foundWorkcode) {
      console.log("Workcode not found in any element text");

      // Try searching for parts of the workcode
      const workcodeParts = workcode.split("/");
      workcodeParts.forEach((part) => {
        if (htmlContent.includes(part)) {
          console.log(`Found workcode part "${part}" in HTML`);
        }
      });
    }

    // Check for any error messages or redirects
    const bodyText = $("body").text().toLowerCase();
    if (
      bodyText.includes("error") ||
      bodyText.includes("not found") ||
      bodyText.includes("redirect")
    ) {
      console.log("Possible error or redirect detected in body text");
      console.log("Body text snippet:", $("body").text().substring(0, 500));
    }

    // Check for title and meta information
    const title = $("title").text();
    console.log("Page title:", title);

    // Check for JavaScript redirects or dynamic content indicators
    const scripts = $("script");
    console.log("Script tags found:", scripts.length);
    scripts.each((_, script) => {
      const scriptText = $(script).html();
      if (
        scriptText &&
        (scriptText.includes("location") ||
          scriptText.includes("redirect") ||
          scriptText.includes("window"))
      ) {
        console.log(
          "Potential JS redirect found:",
          scriptText.substring(0, 200)
        );
      }
    });

    // Look for any data in specific containers
    const dataContainers = [
      "#content",
      ".content",
      "#main",
      ".main",
      "#data",
      ".data"
    ];
    dataContainers.forEach((selector) => {
      const element = $(selector);
      if (element.length > 0) {
        console.log(`Found ${selector}: ${element.text().substring(0, 200)}`);
      }
    });

    console.log("========== END DEBUGGING ==========");
  }

  const cleanedTables: (string[][] | null)[] = tables.map(cleanTableWc($));
  console.log("------------------------------------------ 1 : ");
  //   console.log("CLEANED TABLES : ", cleanedTables);
  console.log("------------------------------------------ 1 : ");

  const validTables: string[][][] = cleanedTables.filter(
    (table): table is string[][] =>
      table !== null && tableContainsWorkcode(table, workcode)
  );

  logger.info(
    `5. Extracted ${validTables.length} tables matching workcode ${workcode}`
  );
  return validTables;
};

const fetchAvailableLinksWc = ($: cheerio.CheerioAPI): string[] => {
  const seen: Set<string> = new Set();
  const orderedLinks: string[] = [];
  const baseUrl: string = "https://nregastrep.nic.in/netnrega/";

  console.log("========== LINK EXTRACTION DEBUG ==========");
  console.log("Looking for links containing 'gpwrkbilldtl.aspx'...");

  $("a[href]").each((_, a) => {
    const link: string | undefined = $(a).attr("href");
    const linkText = $(a).text().trim();

    if (link) {
      console.log(`Found link: ${link} (text: "${linkText}")`);

      if (link.includes("gpwrkbilldtl.aspx")) {
        const fullUrl: string = new URL(link, baseUrl).href;
        if (!seen.has(fullUrl)) {
          seen.add(fullUrl);
          orderedLinks.push(fullUrl);
          console.log(`Added gpwrkbilldtl link: ${fullUrl}`);
        }
      }
    }
  });
  console.log("========== END LINK EXTRACTION DEBUG ==========");

  logger.info(
    `Found ${orderedLinks.length} links containing gpwrkbilldtl.aspx`
  );
  return orderedLinks;
};

const initializeSession = async (mainUrl: string): Promise<SessionResult> => {
  try {
    console.log("========== SESSION INITIALIZATION ==========");
    console.log("Main URL:", mainUrl);

    const response: AxiosResponse | null = await retryRequest(mainUrl);
    if (!response) {
      logger.error(`Failed to initialize session with main URL: ${mainUrl}`);
      return { success: false, links: [] };
    }

    console.log("Session response received, parsing HTML...");
    logger.info(`2. Session initialized with main URL: ${mainUrl}`);

    const $: cheerio.CheerioAPI = cheerio.load(response.data);
    const links: string[] = fetchAvailableLinksWc($);

    console.log("========== END SESSION INITIALIZATION ==========");
    return { success: true, links };
  } catch (error: any) {
    logger.error(
      `Failed to initialize session with main URL: ${error.message}`
    );
    return { success: false, links: [] };
  }
};

const processGpwrkbilldtlUrl = async (
  url: string,
  linkId: string,
  financialYear: string,
  workcode: string = WORK_CODE,
  referer?: string
): Promise<ProcessResult> => {
  logger.info(
    `Processing gpwrkbilldtl URL: ${url} for ${financialYear} with link_id: ${linkId}`
  );
  try {
    const response: AxiosResponse | null = await retryRequest(
      url,
      3,
      1000,
      referer
    );
    if (!response) {
      logger.error(
        `Failed to fetch gpwrkbilldtl page ${url}: Request failed after retries`
      );
      return { tables: null, url };
    }

    console.log("========== RESPONSE DEBUG ==========");
    console.log("Response status:", response.status);
    console.log(
      "Response headers content-type:",
      response.headers["content-type"]
    );
    console.log("Response data length:", response.data?.length || 0);
    console.log("Response data type:", typeof response.data);
    console.log(
      "First 800 chars of response:",
      typeof response.data === "string"
        ? response.data.substring(0, 800)
        : "Not a string"
    );
    console.log(
      "Response contains 'html':",
      typeof response.data === "string"
        ? response.data.toLowerCase().includes("html")
        : false
    );
    console.log(
      "Response contains 'table':",
      typeof response.data === "string"
        ? response.data.toLowerCase().includes("table")
        : false
    );
    console.log(
      "Response contains workcode:",
      typeof response.data === "string"
        ? response.data.toLowerCase().includes(workcode.toLowerCase())
        : false
    );
    console.log("========== END RESPONSE DEBUG ==========");

    const $: cheerio.CheerioAPI = cheerio.load(response.data);
    const tables: string[][][] = extractTablesWc($, workcode, url);

    console.log("--------------------------------------------- : ");
    console.log("TABLES : ", tables);
    console.log("--------------------------------------------- : ");

    if (tables.length > 0) {
      logger.info(`6. Processed ${tables.length} tables for URL: ${url}`);
      return { tables: tables[0] || null, url };
    }
    logger.info(`No tables found for URL: ${url}`);
    return { tables: null, url };
  } catch (error: any) {
    logger.error(`Failed to fetch gpwrkbilldtl page ${url}: ${error.message}`);
    return { tables: null, url };
  }
};

const mainGpwrkbilldtl = async (): Promise<void> => {
  const startTime: number = Date.now();
  const initialUrlTemplate: string = URLS[0];

  for (const financialYear of FINANCIAL_YEARS) {
    logger.info(
      `1. Processing gpwrkbilldtl data for financial year: ${financialYear}`
    );
    const mainUrl: string = initialUrlTemplate.replace(
      /&fin_year=\d{4}-\d{4}/,
      `&fin_year=${financialYear}`
    );

    // Clear cookies for each financial year
    cookieStore = "";

    const { success, links }: SessionResult = await initializeSession(mainUrl);
    if (!success) {
      logger.error(
        `gpwrkbilldtl session initialization failed for ${financialYear}. Exiting.`
      );
      continue;
    }
    if (!links.length) {
      logger.error(`No gpwrkbilldtl.aspx links found for ${financialYear}`);
      continue;
    }

    logger.info(
      `3. Processing ${links.length} gpwrkbilldtl detail links for ${financialYear}`
    );

    // Process links in batches to avoid overwhelming the server
    const batches: string[][] = [];
    for (let i = 0; i < links.length; i += MAX_CONCURRENT_REQUESTS) {
      batches.push(links.slice(i, i + MAX_CONCURRENT_REQUESTS));
    }

    let successfulResults: ProcessResult[] = [];
    for (const batch of batches) {
      const linkData: LinkData[] = batch.map((url, index) => ({
        url,
        linkId: `gpwrkbilldtl_${links.indexOf(url) + 1}`
      }));
      console.log("Processing batch:", batch.length, "links");

      const results: ProcessResult[] = await Promise.all(
        linkData.map(({ url, linkId }) =>
          processGpwrkbilldtlUrl(url, linkId, financialYear, WORK_CODE, mainUrl)
        )
      );

      successfulResults = successfulResults.concat(
        results.filter((result) => result.tables !== null)
      );

      // Add delay between batches to be respectful to the server
      if (batches.indexOf(batch) < batches.length - 1) {
        logger.info("Waiting 3 seconds before next batch...");
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
    }

    logger.info(
      `7. Successfully processed ${successfulResults.length} gpwrkbilldtl reports for ${financialYear}`
    );
    if (successfulResults.length) {
      logger.info(
        `8. gpwrkbilldtl data extraction completed successfully for ${financialYear}`
      );
    } else {
      logger.info(
        `8. No gpwrkbilldtl data found in the processed links for ${financialYear}`
      );
    }
  }

  logger.info(
    `9. gpwrkbilldtl extraction complete. Total time: ${(Date.now() - startTime) / 1000} seconds`
  );
};

// Express route to trigger processing
testingVendorScrape.get(
  "/process-gpwrkbilldtl",
  userAuth,
  async (req: Request, res: Response<ApiResponse | ErrorResponse>) => {
    try {
      const totalStartTime: number = Date.now();
      await mainGpwrkbilldtl();
      const totalTime: number = (Date.now() - totalStartTime) / 1000;
      logger.info(`Total execution complete. Total time: ${totalTime} seconds`);
      res.status(200).json({
        message: "gpwrkbilldtl processing completed successfully",
        totalTime
      });
    } catch (error: any) {
      logger.error(`Error in processing: ${error.message}`);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

export default testingVendorScrape;
