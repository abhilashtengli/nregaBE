import axios from "axios";
import * as cheerio from "cheerio";

export interface MaterialData {
  slNo: number;
  materialName: string;
  quantity: string;
  price: string;
}

export interface QuotationCallData {
  gramPanchayat: string;
  taluka: string;
  district: string;
  year: string;
  administrativeSanction: string;
  workCode: string;
  workName: string;
  materialData: MaterialData[];
}

export interface QuotationCallResponse {
  success: boolean;
  data?: QuotationCallData;
  message?: string;
  error?: string;
  code?: string;
}

// Service Functions - Following the exact pattern from tsCopy

/**
 * Scrapes material data from technical estimate URL
 * Following the EXACT same pattern as scrapeTSTechnicalSanction - search ALL tables
 */
export const scrapeTechnicalEstimateMaterialData = async (
  url: string
): Promise<MaterialData[]> => {
  try {
    console.log(`Scraping technical estimate from: ${url}`);

    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    const $ = cheerio.load(response.data);
    const materialData: MaterialData[] = [];

    // Search through ALL tables and rows - EXACT same approach as tsCopy
    $("table tr").each((index, element) => {
      const row = $(element);
      const cells = row.find("td");

      // Skip rows with insufficient cells or header rows
      if (cells.length < 5) return;

      const slNoText = cells.eq(0).text().trim();
      const materialName = cells.eq(1).text().trim();
      const quantity = cells.eq(2).text().trim();
      const unitPrice = cells.eq(4).text().trim();

      console.log(`Row ${index} data:`, {
        slNoText,
        materialName: materialName.substring(0, 50),
        quantity,
        unitPrice
      });

      // Parse serial number
      const slNo = parseInt(slNoText);

      // Only add if we have valid data AND it looks like material data
      if (!isNaN(slNo) && slNo > 0 && materialName && quantity && unitPrice) {
        // Additional check to ensure this is actually material data
        // Skip if it looks like header text or other non-material data
        if (
          !materialName.toLowerCase().includes("material") ||
          !materialName.toLowerCase().includes("quantity") ||
          !materialName.toLowerCase().includes("price")
        ) {
          materialData.push({
            slNo: slNo,
            materialName: materialName,
            quantity: quantity,
            price: unitPrice
          });
          console.log(`Added material item ${slNo}: ${materialName}`);
        }
      }
    });

    console.log(`Successfully extracted ${materialData.length} material items`);
    return materialData;
  } catch (error) {
    console.error("Error scraping technical estimate material data:", error);
    return [];
  }
};

/**
 * Scrapes administrative sanction number from administrative sanction URL
 * Following the same pattern as scrapTSeAdministrativeSanction
 */
export const scrapeAdministrativeSanctionNumber = async (
  url: string,
  workCode: string
): Promise<string> => {
  try {
    console.log(`Scraping administrative sanction from: ${url}`);
    console.log(`Looking for work code: ${workCode}`);

    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    const $ = cheerio.load(response.data);

    // Find the table row that matches the work code - same approach as tsCopy
    let targetRow: any = null;

    $("table tr").each((index, element) => {
      const row = $(element);
      const cells = row.find("td");

      if (cells.length > 1) {
        const rowWorkCode = cells.eq(1).text().trim();
        console.log(`Row ${index}: Work Code = "${rowWorkCode}"`);

        if (rowWorkCode === workCode) {
          targetRow = row;
          return false; // Break the loop
        }
      }
    });

    if (!targetRow) {
      console.log(
        `Work code ${workCode} not found in administrative sanction data`
      );
      return "";
    }

    const cells = targetRow.find("td");

    if (cells.length < 4) {
      console.log("Invalid table structure in administrative sanction data");
      return "";
    }

    const administrativeSanction = cells.eq(3).text().trim();
    console.log(`Found administrative sanction: ${administrativeSanction}`);

    return administrativeSanction;
  } catch (error) {
    console.error("Error scraping administrative sanction:", error);
    return "";
  }
};

/**
 * Validates and cleans material data
 */
export const validateAndCleanMaterialData = (
  materialData: MaterialData[]
): MaterialData[] => {
  return materialData
    .filter((item) => {
      // Remove items with invalid data
      if (!item.materialName || item.materialName.trim() === "") return false;
      if (!item.quantity || item.quantity.trim() === "") return false;
      if (!item.price || item.price.trim() === "") return false;
      if (isNaN(item.slNo) || item.slNo <= 0) return false;

      return true;
    })
    .map((item) => ({
      slNo: item.slNo,
      materialName: item.materialName.trim(),
      quantity: item.quantity.trim(),
      price: item.price.trim()
    }));
};
