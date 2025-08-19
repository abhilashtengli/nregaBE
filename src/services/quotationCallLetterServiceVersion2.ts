import axios from "axios";
import * as cheerio from "cheerio";
import { prisma } from "@lib/prisma";
import { findMaterialUnit } from "../utils/findMaterialUnit";
import dotenv from "dotenv";
import { proxyAgent } from "./ProxyService/proxyServiceAgent";
dotenv.config();
export interface MaterialData {
  slNo: number;
  materialName: string;
  quantity: string;
  price: string;
  unit?: string; // Added unit field
  totalPrice?: string; // Optional, used for total price in some contexts
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
  debug?: any;
}

// Import the findMaterialUnit function - make sure this is imported in your actual implementation
// import { findMaterialUnit } from "../utils/materialUtils";

/**
 * Scrapes material data from technical estimate URL
 * Now specifically targets the GridView1 table for material data
 */
export const scrapeTechnicalEstimateMaterialData = async (
  url: string
): Promise<MaterialData[]> => {
  try {
    console.log(`Scraping technical estimate from: ${url}`);

    // const response = await axios.get(url, {
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    //   }
    // });
    // const response = await axios.get("http://api.scraperapi.com", {
    //   params: {
    //     api_key: process.env.SCRAPER_API_KEY,
    //     url: url,
    //     keep_headers: "true",
    //   },
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0.0.0 Safari/537.36",
    //     Accept: "text/html,application/xhtml+xml"
    //   }
    // });
    const response = await axios.get(url, {
      httpsAgent: proxyAgent
    });

    const $ = cheerio.load(response.data);
    const materialData: MaterialData[] = [];

    // Specifically target the GridView1 table that contains material data
    const materialTable = $("#ctl00_ContentPlaceHolder1_GridView1");

    if (materialTable.length === 0) {
      console.log("Material table (GridView1) not found");
      return [];
    }

    console.log("Found material table, processing rows...");

    // Process each data row in the material table (skip header row)
    materialTable.find("tr").each((index, element) => {
      const row = $(element);
      const cells = row.find("td");

      // Skip header row and rows with insufficient cells
      if (cells.length < 6) return;

      const slNoText = cells.eq(0).text().trim();
      const materialName = cells.eq(1).text().trim();
      const quantity = cells.eq(2).text().trim();
      const unitPrice = cells.eq(4).text().trim(); // Skip balance quantity, get unit price
      const total = cells.eq(5).text().trim();

      console.log(`Processing row ${index}:`, {
        slNoText,
        materialName: materialName.substring(0, 50) + "...",
        quantity,
        unitPrice,
        total
      });

      // Parse serial number
      const slNo = parseInt(slNoText);

      // Only add if we have valid data
      if (!isNaN(slNo) && slNo > 0 && materialName && quantity && unitPrice) {
        // Find unit for the material
        const materialInfo = findMaterialUnit(materialName);
        const unit = materialInfo?.unit || ""; // Default to empty string if not found

        materialData.push({
          slNo: slNo,
          materialName: materialName,
          quantity: quantity,
          price: unitPrice,
          unit: unit, // Add unit to material data
          totalPrice: total // Using unit price as the price field
        });
        console.log(
          `Added material item ${slNo}: ${materialName.substring(0, 30)}... with unit: ${unit}`
        );
      }
    });

    console.log(
      `Successfully extracted ${materialData.length} material items from GridView1`
    );
    return materialData;
  } catch (error) {
    console.error("Error scraping technical estimate material data:", error);
    return [];
  }
};

/**
 * Scrapes administrative sanction number from administrative sanction URL
 */
export const scrapeAdministrativeSanctionNumber = async (
  url: string,
  workCode: string
) => {
  try {
    console.log(`Scraping administrative sanction from: ${url}`);
    console.log(`Looking for work code: ${workCode}`);

    // const response = await axios.get(url, {
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    //   }
    // });
    // const response = await axios.get("http://api.scraperapi.com", {
    //   params: {
    //     api_key: process.env.SCRAPER_API_KEY,
    //     url: url,
    //     keep_headers: "true",
    //   },
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0.0.0 Safari/537.36",
    //     Accept: "text/html,application/xhtml+xml"
    //   }
    // });
    const response = await axios.get(url, {
      httpsAgent: proxyAgent
    });

    const $ = cheerio.load(response.data);

    // Find the table row that matches the work code
    let targetRowElement: any = null;

    $("table tr").each((index, element) => {
      const row = $(element);
      const cells = row.find("td");

      if (cells.length > 1) {
        const rowWorkCode = cells.eq(1).text().trim();
        console.log(`Row ${index}: Work Code = "${rowWorkCode}"`);

        if (rowWorkCode === workCode) {
          targetRowElement = element;
          return false; // Break the loop
        }
      }
    });

    if (!targetRowElement) {
      console.log(
        `Work code ${workCode} not found in administrative sanction data`
      );
      return "";
    }

    const targetRow = $(targetRowElement);
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
      if (!item.totalPrice || item.totalPrice.trim() === "") return false;
      if (isNaN(item.slNo) || item.slNo <= 0) return false;

      return true;
    })
    .map((item) => {
      // Ensure unit is included during validation
      const materialInfo = findMaterialUnit(item.materialName);
      const unit = item.unit || materialInfo?.unit || "";

      return {
        slNo: item.slNo,
        materialName: item.materialName.trim(),
        quantity: item.quantity.trim(),
        price: item.price.trim(),
        unit: unit, // Include unit in cleaned data
        totalPrice: item.totalPrice?.trim() // Ensure totalPrice is always a string
      };
    });
};

/**
 * Saves quotation call data to database - NOW SUPPORTS MULTIPLE MATERIAL ITEMS WITH UNITS
 */
export const saveQuotationCallToDatabase = async (
  workDetailId: string,
  quotationCallData: QuotationCallData
): Promise<void> => {
  try {
    console.log("=== STARTING DATABASE SAVE OPERATION ===");
    console.log(`Work Detail ID: ${workDetailId}`);
    console.log(
      `Administrative Sanction: ${quotationCallData.administrativeSanction}`
    );
    console.log(
      `Material Data Count: ${quotationCallData.materialData.length}`
    );

    // Check if the workDetail exists
    const workDetailExists = await prisma.workDetail.findUnique({
      where: { id: workDetailId }
    });

    if (!workDetailExists) {
      console.error(`WorkDetail with ID ${workDetailId} does not exist!`);
      throw new Error(`WorkDetail with ID ${workDetailId} does not exist`);
    }

    // Check if quotation call letter already exists for this work detail
    const existingQuotationCall = await prisma.quotationCallLetter.findUnique({
      where: { workDetailId: workDetailId },
      include: { materialItems: true } // Changed from materialItem to materialItems
    });

    if (existingQuotationCall) {
      console.log("=== UPDATING EXISTING QUOTATION CALL ===");
      console.log(`Existing quotation call ID: ${existingQuotationCall.id}`);

      // Delete existing material items if they exist
      if (
        existingQuotationCall.materialItems &&
        existingQuotationCall.materialItems.length > 0
      ) {
        console.log(
          `Deleting ${existingQuotationCall.materialItems.length} existing material items...`
        );
        await prisma.materialItem.deleteMany({
          where: { quotationCallLetterId: existingQuotationCall.id }
        });
        console.log("Deleted existing material items");
      }

      // Update the quotation call letter
      await prisma.quotationCallLetter.update({
        where: { id: existingQuotationCall.id },
        data: {
          administrativeSanction: quotationCallData.administrativeSanction,
          updatedAt: new Date()
        }
      });

      // Create ALL new material items with units
      console.log(
        `Creating ${quotationCallData.materialData.length} new material items...`
      );
      for (const materialItem of quotationCallData.materialData) {
        await prisma.materialItem.create({
          data: {
            slNo: materialItem.slNo,
            materialName: materialItem.materialName,
            quantity: materialItem.quantity,
            price: materialItem.price,
            unit: materialItem.unit || "", // Include unit field
            quotationCallLetterId: existingQuotationCall.id
          }
        });
      }
      console.log(
        `Successfully created ${quotationCallData.materialData.length} material items`
      );
    } else {
      console.log("=== CREATING NEW QUOTATION CALL ===");

      // Create new quotation call letter
      const quotationCallLetter = await prisma.quotationCallLetter.create({
        data: {
          workDetailId: workDetailId,
          administrativeSanction: quotationCallData.administrativeSanction
        }
      });

      // Create ALL material items with units
      console.log(
        `Creating ${quotationCallData.materialData.length} new material items...`
      );
      for (const materialItem of quotationCallData.materialData) {
        await prisma.materialItem.create({
          data: {
            slNo: materialItem.slNo,
            materialName: materialItem.materialName,
            quantity: materialItem.quantity,
            price: materialItem.price,
            unit: materialItem.unit || "", // Include unit field
            quotationCallLetterId: quotationCallLetter.id
          }
        });
      }
      console.log(
        `Successfully created ${quotationCallData.materialData.length} material items`
      );
    }

    // Verify the data was saved
    const verifyQuotationCall = await prisma.quotationCallLetter.findUnique({
      where: { workDetailId: workDetailId },
      include: { materialItems: true }
    });

    console.log(
      `=== VERIFICATION: Successfully saved ${verifyQuotationCall?.materialItems?.length || 0} material items ===`
    );
    console.log("=== DATABASE SAVE OPERATION COMPLETED SUCCESSFULLY ===");
  } catch (error) {
    console.error("=== DATABASE SAVE OPERATION FAILED ===");
    console.error("Error details:", error);
    throw error;
  }
};

// Helper function declaration - implement this based on your materialUnit data
