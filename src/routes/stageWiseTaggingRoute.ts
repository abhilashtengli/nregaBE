import { prisma } from "@lib/prisma";
import express, { Request, Response } from "express";
import axios from "axios";
import * as cheerio from "cheerio";
import { findPanchayatByCode } from "../utils/findPanchayat";
import { userAuth } from "../middleware/auth";
import dotenv from "dotenv";
dotenv.config();
// Types
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

interface StageWisePhotosData {
  workCode: string;
  workName: string;
  financialYear: string;
  district: string;
  taluka: string;
  gramPanchayat: string;
  beforeStageImageUrl: string;
  duringStageImageUrl: string;
  afterStageImageUrl: string;
}

interface StageWisePhotosResponse {
  success: boolean;
  data?: StageWisePhotosData;
  error?: string;
  code?: string;
  message?: string;
}

interface ImageUrls {
  beforeStageImageUrl: string;
  duringStageImageUrl: string;
  afterStageImageUrl: string;
}

// Helper function to validate and sanitize input
const validateWorkId = (id: string): boolean => {
  return Boolean(id && typeof id === "string" && id.trim().length > 0);
};

// Helper function to validate work code format
const validateWorkCode = (workCode: string): boolean => {
  return Boolean(
    workCode && typeof workCode === "string" && workCode.includes("/")
  );
};

const stageWisePhotosRouter = express.Router();

// Helper function to extract panchayat code from work code
const extractPanchayatCode = (workCode: string): string => {
  // Extract the first part before the slash (e.g., "1515001014" from "1515001014/RC/93393042892467706")
  const parts = workCode.split("/");
  return parts[0];
};

// // Helper function to modify Before stage image URL
// const modifyBeforeImageUrl = (url: string): string => {
//   if (!url || url === "NA" || url === "#") return "";

//   try {
//     // Replace fdc1.nrsc.gov.in with fdc1.nrsc.gov.in/object
//     // Replace nrega_fdcs2 with nrega_fdc
//     const modifiedUrl = url.replace(
//       "fdc1.nrsc.gov.in/nrega_fdcs2",
//       "fdc1.nrsc.gov.in/object/nrega_fdc"
//     );

//     return modifiedUrl;
//   } catch (error) {
//     console.error("Error modifying before image URL:", error);
//     return "";
//   }
// };

// // Helper function to scrape geotagged photographs
// const scrapeGeotaggedPhotographs = async (
//   url: string,
//   workCode: string
// ): Promise<ImageUrls | null> => {
//   try {
//     if (!url || !workCode) {
//       throw new Error("URL and work code are required for scraping");
//     }

//     const response = await axios.get(url, {
//       timeout: 15000,
//       maxRedirects: 5,
//       headers: {
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
//         Accept:
//           "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
//         "Accept-Language": "en-US,en;q=0.5",
//         "Accept-Encoding": "gzip, deflate",
//         Connection: "keep-alive"
//       }
//     });

//     if (!response.data) {
//       throw new Error("No data received from the geotagged photographs URL");
//     }

//     const $ = cheerio.load(response.data);

//     // Find the table row that matches the work code
//     let targetRow: any = null;

//     $("table tr").each((index, element) => {
//       const row = $(element);
//       const cells = row.find("td");

//       if (cells.length > 1) {
//         const rowWorkCode = cells.eq(1).text().trim();
//         if (rowWorkCode === workCode) {
//           targetRow = row;
//           return false; // Break the loop
//         }
//       }
//     });

//     if (!targetRow) {
//       console.warn(
//         `Work code ${workCode} not found in geotagged photographs data`
//       );
//       return {
//         beforeStageImageUrl: "",
//         duringStageImageUrl: "",
//         afterStageImageUrl: ""
//       };
//     }

//     const cells = targetRow.find("td");

//     if (cells.length < 7) {
//       throw new Error("Invalid table structure in geotagged photographs data");
//     }

//     // Extract URLs from the Before, During, and After columns
//     const beforeCell = cells.eq(4); // Before column
//     const duringCell = cells.eq(5); // During column
//     const afterCell = cells.eq(6); // After column

//     // Extract href attributes from anchor tags
//     const beforeLink = beforeCell.find("a").attr("href")?.trim() || "";
//     const duringLink = duringCell.find("a").attr("href")?.trim() || "";
//     const afterLink = afterCell.find("a").attr("href")?.trim() || "";

//     // Check if links are "NA" or empty and process accordingly
//     const beforeStageImageUrl =
//       beforeLink && beforeLink !== "NA" && beforeLink !== "#"
//         ? modifyBeforeImageUrl(beforeLink)
//         : "";

//     const duringStageImageUrl =
//       duringLink && duringLink !== "NA" && duringLink !== "#" ? duringLink : "";

//     const afterStageImageUrl =
//       afterLink && afterLink !== "NA" && afterLink !== "#" ? afterLink : "";

//     return {
//       beforeStageImageUrl,
//       duringStageImageUrl,
//       afterStageImageUrl
//     };
//   } catch (error) {
//     console.error("Error scraping geotagged photographs:", {
//       error: error instanceof Error ? error.message : "Unknown error",
//       url,
//       workCode,
//       timestamp: new Date().toISOString()
//     });
//     return null;
//   }
// };

// Import your actual findPanchayatByCode function
// import { findPanchayatByCode } from "../utils/panchayatHelper"; // Adjust import path as needed

// Main API endpoint
stageWisePhotosRouter.get(
  "/get-stage-wise-photos/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate ID parameter
      if (!validateWorkId(id)) {
        res.status(400).json({
          success: false,
          error: "Valid Work Detail ID is required",
          code: "INVALID_ID"
        } as StageWisePhotosResponse);
        return;
      }

      // Step 1: Fetch work details from database
      const workDetail = await prisma.workDetail.findUnique({
        where: { id: id.trim() },
        select: {
          id: true,
          workCode: true,
          workName: true,
          financialYear: true
        }
      });

      if (!workDetail) {
        res.status(404).json({
          success: false,
          error: "Work Detail not found",
          code: "WORK_DETAIL_NOT_FOUND"
        } as StageWisePhotosResponse);
        return;
      }

      // Validate work code format
      if (!validateWorkCode(workDetail.workCode)) {
        res.status(400).json({
          success: false,
          error: "Invalid work code format",
          code: "INVALID_WORK_CODE_FORMAT"
        } as StageWisePhotosResponse);
        return;
      }

      // Step 2: Extract panchayat code from work code
      const panchayatCode = extractPanchayatCode(workDetail.workCode);

      // Step 3: Get panchayat data
      const panchayatData = await findPanchayatByCode(panchayatCode);

      if (!panchayatData) {
        res.status(404).json({
          success: false,
          error: "Panchayat data not found",
          code: "PANCHAYAT_DATA_NOT_FOUND"
        } as StageWisePhotosResponse);
        return;
      }

      // Step 4: Fetch work documents to get geotagged photographs link
      const workDocument = await prisma.workDocuments.findFirst({
        where: { workCode: workDetail.workCode },
        select: {
          id: true,
          workCode: true,
          geotaggedPhotographs: true
        }
      });

      if (!workDocument) {
        res.status(404).json({
          success: false,
          error: "Work Document not found",
          code: "WORK_DOCUMENT_NOT_FOUND"
        } as StageWisePhotosResponse);
        return;
      }

      // Step 5: Initialize default image URLs
      let imageUrls: ImageUrls = {
        beforeStageImageUrl: "",
        duringStageImageUrl: "",
        afterStageImageUrl: ""
      };

      // Step 6: Scrape geotagged photographs if URL exists
      if (workDocument.geotaggedPhotographs?.trim()) {
        const scrapedImageUrls = await scrapeGeotaggedPhotographs(
          workDocument.geotaggedPhotographs.trim(),
          workDetail.workCode
        );

        if (scrapedImageUrls) {
          imageUrls = scrapedImageUrls;
        } else {
          console.warn(
            `Failed to scrape image URLs for work code: ${workDetail.workCode}`
          );
        }
      } else {
        console.info(
          `No geotagged photographs URL found for work code: ${workDetail.workCode}`
        );
      }

      // Step 7: Prepare response data
      const responseData: StageWisePhotosData = {
        workCode: workDetail.workCode,
        workName: workDetail.workName || "",
        financialYear: workDetail.financialYear || "",
        district: panchayatData.district_name_kn,
        taluka: panchayatData.block_name_kn,
        gramPanchayat: panchayatData.panchayat_name_kn,
        beforeStageImageUrl: imageUrls.beforeStageImageUrl,
        duringStageImageUrl: imageUrls.duringStageImageUrl,
        afterStageImageUrl: imageUrls.afterStageImageUrl
      };
      console.log();

      res.status(200).json({
        success: true,
        data: responseData,
        message: "Stage wise photos data retrieved successfully"
      } as StageWisePhotosResponse);
    } catch (error: any) {
      console.error("Error in get-stage-wise-photos endpoint:", {
        error: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString(),
        workId: req.params.id
      });

      res.status(500).json({
        success: false,
        error: "An unexpected error occurred while processing your request",
        code: "FETCH_STAGE_WISE_PHOTOS_ERROR"
      } as StageWisePhotosResponse);
    }
  }
);

export default stageWisePhotosRouter;

//---------------------------------------------

const extractFinancialYear = (url: string): string | null => {
  const match = url.match(/(\d{4}-\d{4})/);
  return match ? match[1] : null;
};

const modifyBeforeImageUrl = (url: string): string => {
  if (!url || url === "NA" || url === "#") return "";

  try {
    const financialYear = extractFinancialYear(url);

    if (!financialYear) {
      console.error("Could not extract financial year from URL");
      return "";
    }

    let modifiedUrl = url;

    switch (financialYear) {
      case "2021-2022":
        // Remove _comp2 and change photo1 to photo2
        modifiedUrl = modifiedUrl.replace("_comp2", "");
        modifiedUrl = modifiedUrl.replace("photo1", "photo2");
        break;

      case "2022-2023":
        // Add / after photos and before 1
        modifiedUrl = modifiedUrl.replace("/photos1/", "/photos/1/");
        break;

      case "2023-2024":
        // Remove s2 from fdcs2 and add / after photos and before 1
        modifiedUrl = modifiedUrl.replace("fdcs2", "fdc");
        modifiedUrl = modifiedUrl.replace("/photos1/", "/photos/1/");
        // Also replace domain with object path
        modifiedUrl = modifiedUrl.replace(
          "bhuvan-fdc1.nrsc.gov.in/nrega_fdc",
          "bhuvan-fdc1.nrsc.gov.in/object/nrega_fdc"
        );
        break;

      case "2024-2025":
        // Current logic - Replace domain and path
        modifiedUrl = modifiedUrl.replace(
          "fdc1.nrsc.gov.in/nrega_fdcs2",
          "fdc1.nrsc.gov.in/object/nrega_fdc"
        );
        break;

      default:
        console.warn(
          `Unknown financial year: ${financialYear}. Applying default transformation.`
        );
        // Apply default transformation for unknown years
        modifiedUrl = modifiedUrl.replace(
          "fdc1.nrsc.gov.in/nrega_fdcs2",
          "fdc1.nrsc.gov.in/object/nrega_fdc"
        );
    }

    return modifiedUrl;
  } catch (error) {
    console.error("Error modifying before image URL:", error);
    return "";
  }
};

const modifyDuringImageUrl = (url: string): string => {
  if (!url || url === "NA" || url === "#") return "";

  try {
    const financialYear = extractFinancialYear(url);

    if (!financialYear) {
      console.error("Could not extract financial year from URL");
      return "";
    }

    let modifiedUrl = url;

    switch (financialYear) {
      case "2021-2022":
        // Remove s2 from fdcs2 and add / after photos and before 2
        modifiedUrl = modifiedUrl.replace("nrega_fdcs2", "object/nrega_fdc");
        modifiedUrl = modifiedUrl.replace("/photos2/", "/photos/2/");
        break;

      case "2022-2023":
        // Remove s2 from fdcs2 and add / after photos and before 2
        modifiedUrl = modifiedUrl.replace("fdcs2", "fdc");
        modifiedUrl = modifiedUrl.replace("/photos2/", "/photos/2/");
        break;

      case "2023-2024":
        // Add s2 to fdc (making it fdcs2)
        modifiedUrl = modifiedUrl.replace("/nrega_fdc/", "/nrega_fdcs2/");
        break;

      case "2024-2025":
        // Keep as is - no modifications needed for during stage in 2024-2025
        break;

      default:
        console.warn(
          `Unknown financial year: ${financialYear}. No transformation applied.`
        );
    }

    return modifiedUrl;
  } catch (error) {
    console.error("Error modifying during image URL:", error);
    return "";
  }
};

// Updated scrapeGeotaggedPhotographs function
const scrapeGeotaggedPhotographs = async (
  url: string,
  workCode: string
): Promise<ImageUrls | null> => {
  try {
    if (!url || !workCode) {
      throw new Error("URL and work code are required for scraping");
    }

    // const response = await axios.get(url, {
    //   timeout: 15000,
    //   maxRedirects: 5,
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    //     Accept:
    //       "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    //     "Accept-Language": "en-US,en;q=0.5",
    //     "Accept-Encoding": "gzip, deflate",
    //     Connection: "keep-alive"
    //   }
    // });

    const response = await axios.get("http://api.scraperapi.com", {
      params: {
        api_key: process.env.SCRAPER_API_KEY,
        url: url,
        keep_headers: "true",
      },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml"
      }
    });

    if (!response.data) {
      throw new Error("No data received from the geotagged photographs URL");
    }

    const $ = cheerio.load(response.data);

    // Find the table row that matches the work code
    let targetRow: any = null;

    $("table tr").each((index, element) => {
      const row = $(element);
      const cells = row.find("td");

      if (cells.length > 1) {
        const rowWorkCode = cells.eq(1).text().trim();
        if (rowWorkCode === workCode) {
          targetRow = row;
          return false; // Break the loop
        }
      }
    });

    if (!targetRow) {
      console.warn(
        `Work code ${workCode} not found in geotagged photographs data`
      );
      return {
        beforeStageImageUrl: "",
        duringStageImageUrl: "",
        afterStageImageUrl: ""
      };
    }

    const cells = targetRow.find("td");

    if (cells.length < 7) {
      throw new Error("Invalid table structure in geotagged photographs data");
    }

    // Extract URLs from the Before, During, and After columns
    const beforeCell = cells.eq(4); // Before column
    const duringCell = cells.eq(5); // During column
    const afterCell = cells.eq(6); // After column

    // Extract href attributes from anchor tags
    const beforeLink = beforeCell.find("a").attr("href")?.trim() || "";
    const duringLink = duringCell.find("a").attr("href")?.trim() || "";
    const afterLink = afterCell.find("a").attr("href")?.trim() || "";

    // Check if links are "NA" or empty and process accordingly
    const beforeStageImageUrl =
      beforeLink && beforeLink !== "NA" && beforeLink !== "#"
        ? modifyBeforeImageUrl(beforeLink)
        : "";

    const duringStageImageUrl =
      duringLink && duringLink !== "NA" && duringLink !== "#"
        ? modifyDuringImageUrl(duringLink)
        : "";

    const afterStageImageUrl =
      afterLink && afterLink !== "NA" && afterLink !== "#" ? afterLink : "";

    return {
      beforeStageImageUrl,
      duringStageImageUrl,
      afterStageImageUrl
    };
  } catch (error) {
    console.error("Error scraping geotagged photographs:", {
      error: error instanceof Error ? error.message : "Unknown error",
      url,
      workCode,
      timestamp: new Date().toISOString()
    });
    return null;
  }
};
