import express, { Request, Response } from "express";
import { MgnregaScraperService } from "../services/service";
import { MgnregaUrlParams } from "../types/nrega";
import {
  deleteWork,
  getAllWorks,
  getWorkByCode,
  saveWorkData
} from "../services/databaseService";
import { findPanchayatByCode } from "../utils/findPanchayat";
import {
  MaterialVoucherData,
  scrapeMaterialVoucherData
} from "../services/form32Service";
import { prisma } from "@lib/prisma";
import { getKalaburagiVendors } from "../services/routeService";
import { userAuth } from "../middleware/auth";

const scrapRouter = express.Router();
const scraperService = new MgnregaScraperService();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerifiedEmail: boolean;
    sessionId: string;
  } | null;
}
/**
 * POST /api/mgnrega/scrape-by-params
 * Builds URL from parameters and scrapes MGNREGA work data
 */
scrapRouter.post(
  "/scrape-by-workcode",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { workCode, finYear } = req.body;
      const user = (req as RequestWithUser).user;
      const userPanchayatCode = await prisma.user.findUnique({
        where: {
          id: user?.id
        },
        select: {
          panchayatCode: true
        }
      });

      // Validate inputs
      if (!workCode || typeof workCode !== "string") {
        return res.status(400).json({
          success: false,
          error: "Work code is required"
        });
      }

      if (!finYear || typeof finYear !== "string") {
        return res.status(400).json({
          success: false,
          error: "Financial year (finYear) is required"
        });
      }

      console.log(`Processing work code: ${workCode}`);

      // Extract panchayat code from work code
      // Work code format: 1515004003/WC/93393042892651835
      // Panchayat code is the first part before /WC/
      const workCodeParts = workCode.split("/");

      if (workCodeParts.length < 3) {
        return res.status(400).json({
          success: false,
          error:
            "Invalid work code format. Expected format: PANCHAYAT_CODE/WC/WORK_ID"
        });
      }

      const panchayatCode = workCodeParts[0];
      if (user?.role === "viewer") {
        if (userPanchayatCode?.panchayatCode !== panchayatCode) {
          res.status(403).json({
            success: false,
            message: `You are not allowed to access data for Panchayat code ${panchayatCode}`,
            code: "NOT_ALLOWED_PANCHAYATCODE"
          });
          return;
        }
      }

      // Find panchayat data from constants
      const panchayatData = findPanchayatByCode(panchayatCode);

      if (!panchayatData) {
        res.status(404).json({
          success: false,
          error: `Panchayat data not found for code: ${panchayatCode}. Please add this panchayat to your constants file.`
        });
        return;
      }

      console.log(`Found panchayat data:`, {
        district: panchayatData.district_name_en,
        block: panchayatData.block_name_en,
        panchayat: panchayatData.panchayat_name_en
      });

      // Determine state code and short name based on district
      // For Karnataka, state_code is 15 and short_name is KN
      // You may need to expand this logic for other states
      const stateCode = "15";
      const shortName = "KN";
      const stateName = "KARNATAKA";

      // Build the complete URL
      const url =
        `https://mnregaweb4.nic.in/netnrega/specific_work_rpt_dtl.aspx?lflag=eng` +
        `state_name=${encodeURIComponent(stateName)}` +
        `&state_code=${stateCode}` +
        `&short_name=${shortName}` +
        `&district_name=${encodeURIComponent(panchayatData.district_name_en)}` +
        `&district_code=${panchayatData.district_code}` +
        `&block_name=${encodeURIComponent(panchayatData.block_name_en)}` +
        `&block_code=${panchayatData.block_code}` +
        `&panchayat_name=${encodeURIComponent(panchayatData.panchayat_name_en)}` +
        `&panchayat_code=${panchayatData.panchayat_code}` +
        `&work_code=${encodeURIComponent(workCode)}` +
        `&fin_year=${finYear}`;

      // const materialReportURl =
      //   `https://nregastrep.nic.in/netnrega/IndexFrame.aspx?` +
      //   `lflag=eng` +
      //   `&District_Code=${panchayatData.district_code}` +
      //   `&district_name=${encodeURIComponent(panchayatData.district_name_en)}` +
      //   `&state_name=${encodeURIComponent(stateName)}` +
      //   `&state_Code=${stateCode}` +
      //   `&block_name=${encodeURIComponent(panchayatData.block_name_en)}` +
      //   `&block_code=${panchayatData.block_code}` +
      //   `&fin_year=${finYear}` +
      //   `&check=1` +
      //   `&Panchayat_name=${encodeURIComponent(panchayatData.panchayat_name_en)}` +
      //   `&Panchayat_Code=${panchayatData.panchayat_code}`;

      console.log(`Built URL: ${url}`);

      // Scrape the data
      const scrapedData = await scraperService.scrapeWorkData(url);

      // Validate scraped data
      if (!scrapedData.workDetail.workCode) {
        return res.status(400).json({
          success: false,
          error: "There is no Work Details for this workcode."
        });
      }

      // Save to database
      const savedData = await saveWorkData(scrapedData);

      const workDocument = await prisma.workDocuments.findUnique({
        where: {
          workCode: workCode
        },
        select: {
          materialVouchers: true
        }
      });
      if (!workDocument) {
        res.status(404).json({
          success: false,
          error: "Work Document not found",
          code: "WORK_DOCUMENT_NOT_FOUND"
        });
        return;
      }
      //Scrape vendor name
      let materialVoucherData: MaterialVoucherData | null = null;

      // Check if WorkDocuments exists and has materialVouchers link
      if (workDocument && workDocument.materialVouchers) {
        try {
          // Scrape material voucher data
          materialVoucherData = await scrapeMaterialVoucherData(
            workDocument.materialVouchers
          );

          if (materialVoucherData) {
          } else {
            console.warn("Failed to scrape material voucher data");
          }
        } catch (scrapeError: any) {
          console.error(
            "Error scraping material voucher data:",
            scrapeError.message
          );
          // Continue execution even if scraping fails
        }
      }

      const vendorName = materialVoucherData?.vendorName;
      const { success, data: vendors } = await getKalaburagiVendors();

      const vendorDetails = vendors?.find(
        (v) =>
          v.vendorName.toLowerCase().trim() === vendorName?.toLowerCase().trim()
      );
      const vendorGstNo = vendorDetails?.gstNo;
      if (vendorGstNo && vendorName) {
        await prisma.workDetail.update({
          where: {
            workCode: workCode
          },
          data: {
            vendorName: vendorName,
            vendorGstNo: vendorGstNo
          }
        });
      }

      console.log(
        `Data saved successfully for work code: ${savedData.workDetail.workCode}`
      );

      return res.status(200).json({
        success: true,
        // message: "Data scraped and saved successfully",
        data: {
          // ...savedData,
          metadata: {
            id: savedData.workDetail.id,
            workDocumentId: savedData.workDocuments.id,
            panchayatCode,
            vendorName,
            vendorGstNo,
            district: panchayatData.district_name_en,
            block: panchayatData.block_name_en,
            panchayat: panchayatData.panchayat_name_en,
            urlUsed: url,
            data: scrapedData
            //   materialReportURl: materialReportURl
          }
        }
      });
    } catch (error: any) {
      console.error("Error in scrape-by-workcode endpoint:", error);
      return res.status(500).json({
        success: false,
        error: error.message || "Internal server error"
      });
    }
  }
);

/**
 * GET /api/mgnrega/work/:workCode
 * Retrieves work data by work code
 */

scrapRouter.get(
  "/work/:workCode",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { workCode } = req.params;

      if (!workCode) {
        return res.status(400).json({
          success: false,
          error: "Work code is required"
        });
      }

      const workData = await getWorkByCode(workCode);

      if (!workData) {
        return res.status(404).json({
          success: false,
          error: "Work not found"
        });
      }

      return res.status(200).json({
        success: true,
        data: workData
      });
    } catch (error: any) {
      console.error("Error in get work endpoint:", error);
      return res.status(500).json({
        success: false,
        error: error.message || "Internal server error"
      });
    }
  }
);

/**
 * GET /api/mgnrega/works
 * Retrieves all works with optional filtering
 */
scrapRouter.get("/works", userAuth, async (req: Request, res: Response) => {
  try {
    const { workStatus, financialYear, limit, offset } = req.query;

    const filter = {
      workStatus: workStatus as string,
      financialYear: financialYear as string,
      limit: limit ? parseInt(limit as string) : undefined,
      offset: offset ? parseInt(offset as string) : undefined
    };

    const works = await getAllWorks(filter);

    return res.status(200).json({
      success: true,
      count: works.length,
      data: works
    });
  } catch (error: any) {
    console.error("Error in get works endpoint:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Internal server error"
    });
  }
});

/**
 * DELETE /api/mgnrega/work/:workCode
 * Deletes a work and its documents
 */
scrapRouter.delete(
  "/work/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          success: false,
          error: "Work code is required"
        });
      }

      await deleteWork(id);

      return res.status(200).json({
        success: true,
        message: `Work ${id} deleted successfully`
      });
    } catch (error: any) {
      console.error("Error in delete work endpoint:", error);
      return res.status(500).json({
        success: false,
        error: error.message || "Internal server error"
      });
    }
  }
);

export default scrapRouter;
