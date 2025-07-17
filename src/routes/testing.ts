import express, { Request, Response } from "express";
import { prisma } from "@lib/prisma";
import { findPanchayatByCode } from "../utils/findPanchayat";
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

const testingVendorScrape = express.Router();

// Types/Interfaces
interface TableData {
  headers: string[];
  rows: string[][];
}

interface ScrapedData {
  tables: TableData[];
  metadata: {
    url: string;
    workCode?: string;
    financialYear: string;
    state: string;
    reportType: string;
    linkId: string;
  };
}

interface VendorScraperResponse {
  success: boolean;
  data?: {
    fyData?: ScrapedData[];
    vendorData?: ScrapedData[];
    gpwrkbilldtlData?: ScrapedData[];
  };
  message?: string;
  error?: string;
  code?: string;
}

interface PanchayatData {
  district_name_kn: string;
  district_name_en: string;
  district_code: string;
  block_name_kn: string;
  block_name_en: string;
  block_code: string;
  panchayat_name_kn: string;
  panchayat_name_en: string;
  panchayat_code: string;
}

// Constants
const FINANCIAL_YEARS = ["2024-2025", "2025-2026"];
const SINGLE_FY_LINKS = new Set([
  "Main_URL",
  "Link_2",
  "Link_3",
  "Link_4",
  "Link_5",
  "Link_7",
  "Link_8",
  "Link_9",
  "Link_11",
  "Link_13",
  "Link_14",
  "Link_15",
  "Link_16",
  "Link_17",
  "Link_18",
  "Vendor"
]);
const BOTH_FY_LINKS = new Set(["Link_6", "Link_10", "Link_12", "gpwrkbilldtl"]);
const SKIP_LINKS = new Set();

/**
 * Extract panchayat code from work code
 */
function extractPanchayatCode(workCode: string): string {
  const workCodeParts = workCode.split("/");
  if (workCodeParts.length < 3) {
    throw new Error(
      "Invalid work code format. Expected format: PANCHAYAT_CODE/WC/WORK_ID"
    );
  }
  return workCodeParts[0];
}

/**
 * Clean HTML table data
 */
function cleanTable(table: cheerio.Cheerio<any>): TableData | null {
  try {
    const rows = table.find("tr");
    if (rows.length === 0) return null;

    const firstRow = rows.first();
    const headers = firstRow
      .find("th, td")
      .map((i: number, el: any) => cheerio.load(el).text().trim())
      .get()
      .filter((text: string) => text);

    if (headers.length === 0) return null;

    const tableRows: string[][] = [];
    rows.slice(1).each((i: number, row: any) => {
      const $row = cheerio.load(row);
      const cells = $row("td, th");
      if (cells.length > 0) {
        const rowData = cells
          .map((j: number, cell: any) => cheerio.load(cell).text().trim())
          .get();

        if (rowData.some((cell: string) => cell)) {
          // Normalize row length
          while (rowData.length < headers.length) {
            rowData.push("");
          }
          if (rowData.length > headers.length) {
            rowData.splice(headers.length);
          }
          tableRows.push(rowData);
        }
      }
    });

    return tableRows.length > 0 ? { headers, rows: tableRows } : null;
  } catch (error) {
    console.error("Error cleaning table:", error);
    return null;
  }
}

/**
 * Clean table for work code matching
 */
function cleanTableWC(table: cheerio.Cheerio<any>): TableData | null {
  try {
    const rows = table.find("tr");
    if (rows.length === 0) return null;

    const tableRows: string[][] = [];
    let headers: string[] = [];

    rows.each((index: number, row: any) => {
      const $row = cheerio.load(row);
      const cells = $row("td, th");
      if (cells.length > 0) {
        const rowData = cells
          .map((j: number, cell: any) => cheerio.load(cell).text().trim())
          .get()
          .filter((text: string) => text);

        if (rowData.length > 0) {
          if (index === 0) {
            headers = rowData;
          }
          tableRows.push(rowData);
        }
      }
    });

    if (tableRows.length === 0) return null;

    // Normalize all rows to same length
    const maxCols = Math.max(...tableRows.map((row) => row.length));
    const normalizedRows = tableRows.map((row) => {
      while (row.length < maxCols) {
        row.push("");
      }
      return row;
    });

    return {
      headers: headers.length > 0 ? headers : normalizedRows[0],
      rows: normalizedRows.slice(headers.length > 0 ? 1 : 0)
    };
  } catch (error) {
    console.error("Error cleaning table for work code:", error);
    return null;
  }
}

/**
 * Check if table contains work code
 */
function tableContainsWorkcode(
  tableData: TableData,
  workCode: string
): boolean {
  const workCodeParts = workCode.split("/").pop() || "";
  const searchTerms = [workCode.toLowerCase(), workCodeParts.toLowerCase()];

  for (const row of [...[tableData.headers], ...tableData.rows]) {
    for (const cell of row) {
      const cellLower = cell.toLowerCase();
      if (searchTerms.some((term) => cellLower.includes(term))) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Extract main tables from HTML
 */
function extractMainTable(html: string, linkId: string): TableData[] {
  const $ = cheerio.load(html);
  const tables = $("table")
    .map((i: number, table: any) => cleanTable($(table)))
    .get()
    .filter((table): table is TableData => table !== null);

  if (linkId === "Link_2") {
    const activityHeaders = [
      "S.No",
      "Activity taken upon musteroll",
      "Quantity",
      "Unit Price (in Rs.)",
      "Total (in Rs.)"
    ];
    const materialHeaders = [
      "S.No",
      "Material",
      "Quantity",
      "Balance Quantity",
      "Unit Price (in Rs.)",
      "Total (in Rs.)"
    ];

    return tables.filter(
      (table) =>
        JSON.stringify(table.headers) === JSON.stringify(activityHeaders) ||
        JSON.stringify(table.headers) === JSON.stringify(materialHeaders)
    );
  }

  return tables;
}

/**
 * Extract tables matching work code
 */
function extractTablesWC(html: string, workCode: string): TableData[] {
  const $ = cheerio.load(html);
  const tables = $("table")
    .map((i: number, table: any) => cleanTableWC($(table)))
    .get()
    .filter((table): table is TableData => table !== null);

  return tables.filter((table) => tableContainsWorkcode(table, workCode));
}

/**
 * Extract vendor tables
 */
function extractTablesVendor(html: string): TableData[] {
  const $ = cheerio.load(html);
  return $("table")
    .map((i: number, table: any) => cleanTable($(table)))
    .get()
    .filter((table): table is TableData => table !== null);
}

/**
 * Fetch available links from page
 */
async function fetchAvailableLinks(url: string): Promise<string[]> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  try {
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    );

    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
    const html = await page.content();

    const $ = cheerio.load(html);
    const seen = new Set<string>();
    const baseUrl = "https://mnregaweb4.nic.in/netnrega/";

    const links: string[] = [];
    $("a[href]").each((i: number, element: any) => {
      const link = $(element).attr("href");
      if (link && !link.startsWith("javascript:") && !seen.has(link)) {
        seen.add(link);
        const fullUrl = link.startsWith("http")
          ? link
          : new URL(link, baseUrl).href;
        links.push(fullUrl);
      }
    });

    console.log(`Found ${links.length} links to process`);
    return links;
  } finally {
    await browser.close();
  }
}

/**
 * Fetch gpwrkbilldtl links
 */
async function fetchGpwrkbilldtlLinks(url: string): Promise<string[]> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  try {
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    );

    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
    const html = await page.content();

    const $ = cheerio.load(html);
    const seen = new Set<string>();
    const baseUrl = "https://nregastrep.nic.in/netnrega/";

    const links: string[] = [];
    $("a[href]").each((i: number, element: any) => {
      const link = $(element).attr("href");
      if (link && link.includes("gpwrkbilldtl.aspx") && !seen.has(link)) {
        seen.add(link);
        const fullUrl = new URL(link, baseUrl).href;
        links.push(fullUrl);
      }
    });

    console.log(`Found ${links.length} links containing gpwrkbilldtl.aspx`);
    return links;
  } finally {
    await browser.close();
  }
}

/**
 * Fetch vendor links
 */
async function fetchVendorLinks(url: string): Promise<string[]> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  try {
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    );

    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
    const html = await page.content();

    const $ = cheerio.load(html);
    const seen = new Set<string>();
    const baseUrl = "https://nregastrep.nic.in/netnrega/state_html/";

    const links: string[] = [];
    $("a[href]").each((i: number, element: any) => {
      const link = $(element).attr("href");
      if (
        link &&
        link.includes("freez_vendorrpt_det.aspx") &&
        !link.includes("mode=frz") &&
        !link.includes("mode=tot") &&
        !seen.has(link)
      ) {
        seen.add(link);
        const cleanLink = link.startsWith("/") ? link.substring(1) : link;
        const fullUrl = new URL(cleanLink, baseUrl).href;
        if (fullUrl.includes("district_code=1515")) {
          links.push(fullUrl);
        }
      }
    });

    console.log(
      `Found ${links.length} vendor detail links matching district_code=1515`
    );
    return links;
  } finally {
    await browser.close();
  }
}

/**
 * Process a single URL and extract data
 */
async function processUrl(
  url: string,
  linkId: string,
  financialYear: string,
  reportType: "fy" | "vendor" | "gpwrkbilldtl",
  workCode?: string
): Promise<ScrapedData | null> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  try {
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    );

    console.log(
      `Processing ${reportType} URL: ${url} for ${financialYear} with link_id: ${linkId}`
    );

    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
    const html = await page.content();

    let tables: TableData[] = [];

    switch (reportType) {
      case "fy":
        tables = extractMainTable(html, linkId);
        break;
      case "vendor":
        tables = extractTablesVendor(html);
        break;
      case "gpwrkbilldtl":
        if (workCode) {
          tables = extractTablesWC(html, workCode);
        }
        break;
    }

    if (tables.length === 0) {
      console.log(`No relevant tables found in ${url} for ${linkId}`);
      return null;
    }

    const scrapedData: ScrapedData = {
      tables,
      metadata: {
        url,
        workCode,
        financialYear,
        state: "KARNATAKA",
        reportType:
          reportType === "fy"
            ? "Financial Year Report"
            : reportType === "vendor"
              ? "Vendor Report"
              : "gpwrkbilldtl Report",
        linkId
      }
    };

    console.log(`Successfully processed ${tables.length} tables for ${linkId}`);
    return scrapedData;
  } catch (error) {
    console.error(`Failed to process ${reportType} page ${url}:`, error);
    return null;
  } finally {
    await browser.close();
  }
}

/**
 * Build URLs for different report types
 */
function buildUrls(
  panchayatData: PanchayatData,
  workCode: string
): {
  fyUrl: string;
  vendorUrl: string;
  gpwrkbilldtlUrl: string;
} {
  const fyUrl = `https://mnregaweb4.nic.in/netnrega/specific_work_rpt_dtl.aspx?state_name=KARNATAKA&state_code=15&short_name=KN&district_name=${encodeURIComponent(panchayatData.district_name_en)}&district_code=${panchayatData.district_code}&block_name=${encodeURIComponent(panchayatData.block_name_en)}&block_code=${panchayatData.block_code}&panchayat_name=${encodeURIComponent(panchayatData.panchayat_name_en)}&panchayat_code=${panchayatData.panchayat_code}&work_code=${encodeURIComponent(workCode)}&work_name=&fin_year=2024-2025`;

  const vendorUrl = `https://nregastrep.nic.in/netnrega/state_html/freez_vendor_rpt.aspx?lflag=eng&state_code=15&state_name=KARNATAKAeng&fin_year=2025-2026&page=s&typ=R&Digest=but25WfrW49/I1g/iECl7A`;

  const gpwrkbilldtlUrl = `https://nregastrep.nic.in/netnrega/IndexFrame.aspx?lflag=eng&District_Code=${panchayatData.district_code}&district_name=${encodeURIComponent(panchayatData.district_name_en)}&state_name=KARNATAKA&state_Code=15&block_name=${encodeURIComponent(panchayatData.block_name_en)}&block_code=${panchayatData.block_code}&fin_year=2025-2026&check=1&Panchayat_name=${encodeURIComponent(panchayatData.panchayat_name_en)}&Panchayat_Code=${panchayatData.panchayat_code}`;

  return { fyUrl, vendorUrl, gpwrkbilldtlUrl };
}

/**
 * Main API endpoint
 */
testingVendorScrape.get(
  "/vendor-scraper/:id",
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { reportType = "all" } = req.query;

      // Validate ID parameter
      if (!id) {
        res.status(400).json({
          success: false,
          error: "Work Detail ID is required",
          code: "MISSING_ID"
        } as VendorScraperResponse);
        return;
      }

      console.log(`Processing vendor scraper for work detail ID: ${id}`);

      // Get work details from database
      const workDetail = await prisma.workDetail.findUnique({
        where: { id: id },
        select: {
          id: true,
          workCode: true,
          workName: true,
          panchayat: true,
          block: true,
          district: true,
          financialYear: true
        }
      });

      if (!workDetail) {
        res.status(404).json({
          success: false,
          error: "Work Detail not found",
          code: "WORK_DETAIL_NOT_FOUND"
        } as VendorScraperResponse);
        return;
      }

      const { workCode, workName } = workDetail;
      console.log(`Found work detail - Code: ${workCode}, Name: ${workName}`);

      // Extract panchayat code
      const panchayatCode = extractPanchayatCode(workCode);
      console.log(`Extracted panchayat code: ${panchayatCode}`);

      // Get panchayat data
      const panchayatData = findPanchayatByCode(panchayatCode);
      if (!panchayatData) {
        res.status(404).json({
          success: false,
          error: `Panchayat data not found for code: ${panchayatCode}`,
          code: "PANCHAYAT_NOT_FOUND"
        } as VendorScraperResponse);
        return;
      }

      // Build URLs
      const { fyUrl, vendorUrl, gpwrkbilldtlUrl } = buildUrls(
        panchayatData,
        workCode
      );

      const result: {
        fyData?: ScrapedData[];
        vendorData?: ScrapedData[];
        gpwrkbilldtlData?: ScrapedData[];
      } = {};

      // Process Financial Year data
      if (reportType === "all" || reportType === "fy") {
        console.log("Processing Financial Year data...");
        try {
          const fyLinks = await fetchAvailableLinks(fyUrl);
          const fyData: ScrapedData[] = [];

          // Process main URL
          const mainData = await processUrl(
            fyUrl,
            "Main_URL",
            "2024-2025",
            "fy"
          );
          if (mainData) fyData.push(mainData);

          // Process other links
          for (let i = 0; i < fyLinks.length && i < 20; i++) {
            // Limit to first 20 links
            const linkId = `Link_${i + 1}`;

            if (SINGLE_FY_LINKS.has(linkId)) {
              const data = await processUrl(
                fyLinks[i],
                linkId,
                "2024-2025",
                "fy"
              );
              if (data) fyData.push(data);
            } else if (BOTH_FY_LINKS.has(linkId)) {
              for (const fy of FINANCIAL_YEARS) {
                const fySpecificUrl = fyLinks[i].replace(
                  /fin_year=\d{4}-\d{4}/,
                  `fin_year=${fy}`
                );
                const data = await processUrl(fySpecificUrl, linkId, fy, "fy");
                if (data) fyData.push(data);
              }
            }
          }

          result.fyData = fyData;
          console.log(`Processed ${fyData.length} FY data entries`);
        } catch (error) {
          console.error("Error processing FY data:", error);
        }
      }

      // Process Vendor data
      if (reportType === "all" || reportType === "vendor") {
        console.log("Processing Vendor data...");
        try {
          const vendorLinks = await fetchVendorLinks(vendorUrl);
          const vendorData: ScrapedData[] = [];

          for (let i = 0; i < vendorLinks.length && i < 10; i++) {
            // Limit to first 10 links
            const linkId = `Vendor_${i + 1}`;
            const data = await processUrl(
              vendorLinks[i],
              linkId,
              "2025-2026",
              "vendor"
            );
            if (data) vendorData.push(data);
          }

          result.vendorData = vendorData;
          console.log(`Processed ${vendorData.length} vendor data entries`);
        } catch (error) {
          console.error("Error processing vendor data:", error);
        }
      }

      // Process gpwrkbilldtl data
      if (reportType === "all" || reportType === "gpwrkbilldtl") {
        console.log("Processing gpwrkbilldtl data...");
        try {
          const gpwrkbilldtlData: ScrapedData[] = [];

          for (const financialYear of FINANCIAL_YEARS) {
            const fySpecificUrl = gpwrkbilldtlUrl.replace(
              /fin_year=\d{4}-\d{4}/,
              `fin_year=${financialYear}`
            );
            const gpwrkLinks = await fetchGpwrkbilldtlLinks(fySpecificUrl);

            for (let i = 0; i < gpwrkLinks.length && i < 10; i++) {
              // Limit to first 10 links
              const linkId = `gpwrkbilldtl_${i + 1}`;
              const data = await processUrl(
                gpwrkLinks[i],
                linkId,
                financialYear,
                "gpwrkbilldtl",
                workCode
              );
              if (data) gpwrkbilldtlData.push(data);
            }
          }

          result.gpwrkbilldtlData = gpwrkbilldtlData;
          console.log(
            `Processed ${gpwrkbilldtlData.length} gpwrkbilldtl data entries`
          );
        } catch (error) {
          console.error("Error processing gpwrkbilldtl data:", error);
        }
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Vendor scraper data retrieved successfully"
      } as VendorScraperResponse);
    } catch (error: any) {
      console.error("Error in vendor-scraper endpoint:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Internal server error",
        code: "VENDOR_SCRAPER_ERROR"
      } as VendorScraperResponse);
    }
  }
);

export default testingVendorScrape;
