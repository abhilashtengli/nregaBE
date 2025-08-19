import express, { Request, Response } from "express";
import axios from "axios";
import * as cheerio from "cheerio";
import { prisma } from "@lib/prisma";
import { findPanchayatByCode } from "../utils/findPanchayat";
import { userAuth } from "../middleware/auth";
import dotenv from "dotenv";
import { proxyAgent } from "../services/ProxyService/proxyServiceAgent";
dotenv.config();
const ftoRouter = express.Router();

// Types for the FTO data structure
interface FTOItem {
  slNo: number;
  jobCardNo: string;
  applicantNo: number;
  applicantName: string;
  mustrollNo: string;
  wageListNo: string;
  referenceNo: string;
  ftoNo: string;
  verifyPo: string;
  status: string;
  bankName: string;
  wgApbCrAccount: string;
  favoringAsPerBank: string;
}

interface FTOData {
  workCode: string;
  workName?: string;
  gramPanchayat: string;
  taluka: string;
  district: string;
  ftoData: FTOItem[];
}

interface FTOResponse {
  success: boolean;
  data?: FTOData;
  error?: string;
  code?: string;
  message?: string;
}

// Function to scrape FTO data from the wageListFTO link
async function scrapeWageListFTO(url: string): Promise<FTOItem[]> {
  try {
    // Set up axios with timeout and proper headers
    // const response = await axios.get(url, {
    //   timeout: 30000,
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    //     Accept:
    //       "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    //     "Accept-Language": "en-US,en;q=0.5",
    //     "Accept-Encoding": "gzip, deflate",
    //     Connection: "keep-alive",
    //     "Upgrade-Insecure-Requests": "1"
    //   }
    // });
    // const response = await axios.get("http://api.scraperapi.com", {
    //   params: {
    //     api_key: process.env.SCRAPER_API_KEY,
    //     url: url,
    //     keep_headers: "true"
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
    const ftoItems: FTOItem[] = [];

    // Find all table rows (excluding header)
    $("table tr").each((index, element) => {
      // Skip header row (first row with th elements)
      if ($(element).find("th").length > 0) {
        return;
      }

      const cells = $(element).find("td");
      if (cells.length >= 17) {
        // Ensure we have all required columns
        const ftoItem: FTOItem = {
          slNo: parseInt($(cells[0]).text().trim()) || 0,
          jobCardNo: $(cells[2]).text().trim(), // Job Card No is at index 2
          applicantNo: parseInt($(cells[3]).text().trim()) || 0,
          applicantName: $(cells[4]).text().trim(),
          mustrollNo: $(cells[5]).text().trim(),
          wageListNo: $(cells[6]).text().trim(),
          referenceNo: $(cells[10]).text().trim(), // Reference No is at index 10
          ftoNo: $(cells[11]).text().trim(),
          verifyPo: $(cells[12]).text().trim(),
          status: $(cells[13]).text().trim(),
          bankName: $(cells[14]).text().trim(),
          wgApbCrAccount: $(cells[15]).text().trim(),
          favoringAsPerBank: $(cells[16]).text().trim()
        };

        // Only add if we have valid data
        if (ftoItem.slNo > 0 && ftoItem.jobCardNo) {
          ftoItems.push(ftoItem);
        }
      }
    });

    return ftoItems;
  } catch (error: any) {
    console.error("Error scraping wage list FTO:", error);
    throw new Error(`Failed to scrape FTO data: ${error.message}`);
  }
}

// Main API endpoint to get FTO data
ftoRouter.get("/get-fto/:id", userAuth, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Validate ID parameter
    if (!id) {
      res.status(400).json({
        success: false,
        error: "Work Detail ID is required",
        code: "MISSING_ID"
      } as FTOResponse);
      return;
    }

    // Fetch work details from database
    const workDetail = await prisma.workDetail.findUnique({
      where: { id: id },
      select: {
        id: true,
        workCode: true,
        panchayat: true,
        block: true,
        workName: true,
        district: true
      }
    });

    if (!workDetail) {
      res.status(404).json({
        success: false,
        error: "Work Detail not found",
        code: "WORK_DETAIL_NOT_FOUND"
      } as FTOResponse);
      return;
    }
    const workCodeParts = workDetail.workCode.split("/");
    const panchayatCode = workCodeParts[0];
    const panchayatData = findPanchayatByCode(panchayatCode);

    // Fetch work documents to get wageListFTO link
    const workDocument = await prisma.workDocuments.findFirst({
      where: { workCode: workDetail.workCode },
      select: {
        id: true,
        workCode: true,
        wageListFTO: true
      }
    });

    if (!workDocument) {
      res.status(404).json({
        success: false,
        error: "Work Document not found",
        code: "WORK_DOCUMENT_NOT_FOUND"
      } as FTOResponse);
      return;
    }

    if (!workDocument.wageListFTO) {
      res.status(404).json({
        success: false,
        error: "Wage List FTO link not found",
        code: "WAGE_LIST_FTO_LINK_NOT_FOUND"
      } as FTOResponse);
      return;
    }

    // Scrape data from the wage list FTO link
    const ftoData = await scrapeWageListFTO(workDocument.wageListFTO);

    if (ftoData.length === 0) {
      res.status(404).json({
        success: false,
        error: "No FTO data found in the scraped content",
        code: "NO_FTO_DATA_FOUND"
      } as FTOResponse);
      return;
    }

    // Prepare the response data
    const responseData: FTOData = {
      workCode: workDetail.workCode,
      workName: workDetail.workName || "",
      gramPanchayat: panchayatData?.panchayat_name_kn || "",
      taluka: panchayatData?.block_name_kn || "",
      district: panchayatData?.district_name_kn || "",
      ftoData: ftoData
    };

    res.status(200).json({
      success: true,
      data: responseData,
      message: "FTO data retrieved successfully"
    } as FTOResponse);
  } catch (error: any) {
    console.error("Error in get-fto endpoint:", error);

    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        res.status(408).json({
          success: false,
          error: "Request timeout while fetching FTO data",
          code: "REQUEST_TIMEOUT"
        } as FTOResponse);
        return;
      }
      if (error.response?.status === 404) {
        res.status(404).json({
          success: false,
          error: "Wage List FTO URL not accessible",
          code: "EXTERNAL_URL_NOT_FOUND"
        } as FTOResponse);
        return;
      }
    }

    res.status(500).json({
      success: false,
      error: error.message || "Internal server error",
      code: "FETCH_FTO_ERROR"
    } as FTOResponse);
  }
});

// Additional endpoint to get FTO data by work code directly
ftoRouter.get(
  "/get-fto-by-workcode/:workCode",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { workCode } = req.params;

      if (!workCode) {
        res.status(400).json({
          success: false,
          error: "Work Code is required",
          code: "MISSING_WORK_CODE"
        } as FTOResponse);
        return;
      }

      // Fetch work details by work code
      const workDetail = await prisma.workDetail.findFirst({
        where: { workCode: workCode },
        select: {
          id: true,
          workCode: true,
          panchayat: true,
          block: true,
          workName: true,
          district: true
        }
      });

      if (!workDetail) {
        res.status(404).json({
          success: false,
          error: "Work Detail not found",
          code: "WORK_DETAIL_NOT_FOUND"
        } as FTOResponse);
        return;
      }

      // Fetch work documents to get wageListFTO link
      const workDocument = await prisma.workDocuments.findFirst({
        where: { workCode: workCode },
        select: {
          id: true,
          workCode: true,
          wageListFTO: true
        }
      });

      if (!workDocument || !workDocument.wageListFTO) {
        res.status(404).json({
          success: false,
          error: "Wage List FTO link not found",
          code: "WAGE_LIST_FTO_LINK_NOT_FOUND"
        } as FTOResponse);
        return;
      }

      // Scrape data from the wage list FTO link
      const ftoData = await scrapeWageListFTO(workDocument.wageListFTO);

      if (ftoData.length === 0) {
        res.status(404).json({
          success: false,
          error: "No FTO data found in the scraped content",
          code: "NO_FTO_DATA_FOUND"
        } as FTOResponse);
        return;
      }

      // Prepare the response data
      const responseData: FTOData = {
        workCode: workDetail.workCode,
        workName: workDetail.workName || "",
        gramPanchayat: workDetail.panchayat,
        taluka: workDetail.block,
        district: workDetail.district,
        ftoData: ftoData
      };

      res.status(200).json({
        success: true,
        data: responseData,
        message: "FTO data retrieved successfully"
      } as FTOResponse);
    } catch (error: any) {
      console.error("Error in get-fto-by-workcode endpoint:", error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          res.status(408).json({
            success: false,
            error: "Request timeout while fetching FTO data",
            code: "REQUEST_TIMEOUT"
          } as FTOResponse);
          return;
        }
        if (error.response?.status === 404) {
          res.status(404).json({
            success: false,
            error: "Wage List FTO URL not accessible",
            code: "EXTERNAL_URL_NOT_FOUND"
          } as FTOResponse);
          return;
        }
      }

      res.status(500).json({
        success: false,
        error: error.message || "Internal server error",
        code: "FETCH_FTO_ERROR"
      } as FTOResponse);
    }
  }
);

export default ftoRouter;
