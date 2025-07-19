import express, { Request, Response } from "express";
import { prisma } from "@lib/prisma";
import { findPanchayatByCode } from "../utils/findPanchayat";
import {
  MaterialVoucherData,
  scrapeMaterialVoucherData
} from "../services/form32Service";
import { mainGpwrkbilldtl, RequestData } from "./workingMaterialMIs";

const form32Router = express.Router();

form32Router.get("/form-32/:id", async (req: Request, res: Response) => {
  try {
    const totalStartTime: number = Date.now();
    const { id } = req.params;

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
        district: true,
        financialYear: true,
        workName: true,
        panchayat: true,
        block: true,
        estimatedPersonDays: true
      }
    });

    if (!workDetail) {
      res.status(404).json({
        success: false,
        error: "Work Detail not found",
        code: "WORK_DETAIL_NOT_FOUND"
      });
      return;
    }

    const workDocument = await prisma.workDocuments.findUnique({
      where: { workCode: workDetail.workCode },
      select: {
        materialVouchers: true
      }
    });

    const workCodeParts = workDetail.workCode.split("/");
    const panchayatCode = workCodeParts[0];
    const panchayatData = findPanchayatByCode(panchayatCode);

    if (!panchayatData) {
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
      return res.status(400).json({
        error:
          "Missing required fields: workCode, financialYear, blockName, blockCode, panchayatName, panchayatCode"
      });
    }

    // Get the main data first
    const extractedData = await mainGpwrkbilldtl(requestData);

    if (!extractedData) {
      res.status(404).json({
        error: "No data found for the specified work code and financial year"
      });
      return;
    }

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

    const totalTime: number = (Date.now() - totalStartTime) / 1000;

    // Include scraped data in response
    const responseData = {
      district: workDetail.district,
      taluka: workDetail.block,
      ...extractedData,
      vendorName: extractedData.vendorName
        ? `${extractedData.vendorName} | ${materialVoucherData?.vendorName || ""}`
        : materialVoucherData?.vendorName || "",

      financialYear: extractedData.financialYear
        ? `${extractedData.financialYear} | ${materialVoucherData?.financialYear || ""}`
        : materialVoucherData?.financialYear || "",

      materialVoucherInfo: materialVoucherData
        ? {
            vendorName: materialVoucherData.vendorName,
            financialYear: materialVoucherData.financialYear
          }
        : null
    };

    res.status(200).json({
      message: "gpwrkbilldtl processing completed successfully",
      totalTime,
      data: responseData
    });
  } catch (error: any) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default form32Router;
