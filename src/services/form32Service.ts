import axios from "axios";
import * as cheerio from "cheerio";
import dotenv from "dotenv";
import { proxyAgent } from "./ProxyService/proxyServiceAgent";
dotenv.config();

export interface MaterialVoucherData {
  vendorName: string;
  billDate: string;
  financialYear: string;
}

// Helper function to calculate financial year from bill date
const calculateFinancialYear = (billDate: string): string => {
  const [day, month, year] = billDate.split("/").map(Number);

  if (month <= 3) {
    return `${year - 1}-${year}`;
  } else {
    return `${year}-${year + 1}`;
  }
};

// Helper function to check if the page has "Not available" message
const hasNoDataAvailable = ($: any): boolean => {
  // Check for the "Not available!!!" message
  const notAvailableText = $('td:contains("Not available")').text();
  if (notAvailableText && notAvailableText.includes("Not available")) {
    return true;
  }

  // Also check if the table has the specific structure with the error message
  const errorRow = $('tr.myclass td[colspan="11"]').text();
  if (errorRow && errorRow.includes("Not available")) {
    return true;
  }

  return false;
};

// Helper function to modify financial year in URL
const modifyFinancialYear = (url: string, yearsToAdd: number): string => {
  const urlObj = new URL(url);
  const currentFinYear = urlObj.searchParams.get("Fin_Year");

  if (!currentFinYear) {
    throw new Error("Financial year not found in URL");
  }

  const [startYear, endYear] = currentFinYear.split("-").map(Number);

  const newStartYear = startYear + yearsToAdd;
  const newEndYear = endYear + yearsToAdd;

  const newFinYear = `${newStartYear}-${newEndYear}`;
  urlObj.searchParams.set("Fin_Year", newFinYear);

  // Remove the Digest parameter when changing financial year
  urlObj.searchParams.delete("Digest");

  return urlObj.toString();
};

// Helper function to extract data from a valid row
const extractDataFromRow = ($: any, row: any): MaterialVoucherData | null => {
  const cells = row.find("td");

  if (cells.length < 7) {
    console.log(`Invalid row structure - only ${cells.length} columns found`);
    return null;
  }

  // Based on the HTML structure:
  // Column 6 (index 5) = Bill Date
  // Column 7 (index 6) = Vender Name and TIN-material wise
  // Note: jQuery eq() uses 0-based indexing
  const billDate = cells.eq(5).text().trim(); // 6th column - Bill Date
  const vendorName = cells.eq(6).text().trim(); // 7th column - Vendor Name

  console.log(
    `Extracted - Bill Date: "${billDate}", Vendor Name: "${vendorName}"`
  );

  if (!billDate || !vendorName) {
    console.log("Could not extract bill date or vendor name from row");
    console.log("Row HTML for debugging:", $.html(row).substring(0, 500));
    return null;
  }

  // Validate date format (dd/mm/yyyy)
  const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!datePattern.test(billDate)) {
    console.log(`Invalid date format: ${billDate}`);
    return null;
  }

  const financialYear = calculateFinancialYear(billDate);

  return {
    vendorName,
    billDate,
    financialYear
  };
};

// Helper function to attempt scraping with better error handling
const attemptScraping = async (
  scrapeUrl: string
): Promise<{ data: MaterialVoucherData | null; hasNoData: boolean }> => {
  try {
    console.log(`Attempting to fetch: ${scrapeUrl}`);

    const response = await axios.get(scrapeUrl, {
      httpsAgent: proxyAgent,
      timeout: 30000, // 30 second timeout
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
      }
    });

    console.log(`Response status: ${response.status}`);

    const $ = cheerio.load(response.data);

    // First check if there's a "Not available" message
    if (hasNoDataAvailable($)) {
      console.log("Page shows 'Not available' message");
      return { data: null, hasNoData: true };
    }

    // Look for the main data table
    const table = $("#ctl00_ContentPlaceHolder1_gvwdisplay");

    if (table.length === 0) {
      console.log("Main table not found, searching for any table with data...");
    }

    // Find the first valid data row
    let extractedData: MaterialVoucherData | null = null;

    $("table tr").each((index: number, element: any) => {
      if (extractedData) return false; // Already found data, stop iterating

      const row = $(element);
      const cells = row.find("td");

      // Skip header rows and error rows
      if (cells.length >= 7) {
        const firstCell = cells.eq(0).text().trim();

        // Check if this looks like a data row (starts with a serial number)
        if (firstCell && !isNaN(Number(firstCell))) {
          console.log(`Found potential data row at index ${index}`);
          extractedData = extractDataFromRow($, row);
          if (extractedData) {
            console.log("Successfully extracted data:", extractedData);
            return false; // Break the loop
          }
        }
      }
    });

    return { data: extractedData, hasNoData: false };
  } catch (error: any) {
    console.error(`Error during scraping attempt: ${error.message}`);
    return { data: null, hasNoData: false };
  }
};

export const scrapeMaterialVoucherData = async (
  url: string
): Promise<MaterialVoucherData | null> => {
  try {
    // Array of year offsets to try: 0 (current), +1 (next), -1 (previous), -2, etc.
    const yearOffsetsToTry = [0, 1, -1, -2, 2, -3];

    for (const yearOffset of yearOffsetsToTry) {
      let attemptUrl = url;

      if (yearOffset !== 0) {
        attemptUrl = modifyFinancialYear(url, yearOffset);
      }

      const yearDescription =
        yearOffset === 0
          ? "original"
          : yearOffset > 0
            ? `+${yearOffset} year(s)`
            : `${yearOffset} year(s)`;

      console.log(
        `\n--- Attempting with ${yearDescription} financial year ---`
      );

      const { data, hasNoData } = await attemptScraping(attemptUrl);

      if (data) {
        console.log(
          `✓ Successfully found data with ${yearDescription} financial year`
        );
        return data;
      }

      if (hasNoData) {
        console.log(
          `✗ No data available for ${yearDescription} financial year`
        );
      } else {
        console.log(
          `✗ Failed to extract data for ${yearDescription} financial year`
        );
      }
    }

    // If we've tried all year offsets and found nothing
    throw new Error(
      "No data found in material voucher table after checking multiple financial years"
    );
  } catch (error: any) {
    console.error(`Error in scrapeMaterialVoucherData: ${error.message}`);
    return null;
  }
};

export const scrapeMaterialVoucherDataByWorkCode = async (
  url: string,
  workCode: string
): Promise<MaterialVoucherData | null> => {
  try {
    console.log(`Looking for work code: ${workCode}`);

    // Try multiple years as with the main function
    const yearOffsetsToTry = [0, 1, -1, -2, 2, -3];

    for (const yearOffset of yearOffsetsToTry) {
      let attemptUrl = url;

      if (yearOffset !== 0) {
        attemptUrl = modifyFinancialYear(url, yearOffset);
      }

      console.log(`Attempting to fetch: ${attemptUrl}`);

      const response = await axios.get(attemptUrl, {
        httpsAgent: proxyAgent,
        timeout: 30000,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
        }
      });

      const $ = cheerio.load(response.data);

      // Check for "Not available" message
      if (hasNoDataAvailable($)) {
        console.log(`No data available for year offset ${yearOffset}`);
        continue;
      }

      // Find the table row that contains the specific work code
      let targetRow: any = null;

      $("table tr").each((index: number, element: any) => {
        const row = $(element);
        const cells = row.find("td");

        if (cells.length >= 2) {
          // Check multiple columns for the work code
          const rowText = row.text();
          if (rowText.includes(workCode)) {
            targetRow = row;
            console.log(`Found work code in row ${index}`);
            return false; // Break the loop
          }
        }
      });

      if (targetRow) {
        const extractedData = extractDataFromRow($, targetRow);
        if (extractedData) {
          console.log(`Successfully extracted data for work code ${workCode}`);
          return extractedData;
        }
      }
    }

    throw new Error(
      `Work code ${workCode} not found after checking multiple financial years`
    );
  } catch (error: any) {
    console.error(
      `Error in scrapeMaterialVoucherDataByWorkCode: ${error.message}`
    );
    return null;
  }
};
