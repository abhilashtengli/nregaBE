import { prisma } from "@lib/prisma";
import express, { Request, Response } from "express";
import {
  AdministrativeSanctionData,
  scrapeTSTechnicalSanction,
  scrapTSeAdministrativeSanction,
  TechnicalSanctionData,
  TSCopyResponse
} from "../services/tsCopyService";

const tsCopyRouter = express.Router();

// Main API endpoint
tsCopyRouter.get("/get-ts-copy/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log("Fetching TS Copy data for ID:", id);

    // Validate ID parameter
    if (!id) {
      res.status(400).json({
        success: false,
        error: "Work Detail ID is required",
        code: "MISSING_ID"
      } as TSCopyResponse);
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
      res.status(404).json({
        success: false,
        error: "Work Detail not found",
        code: "WORK_DETAIL_NOT_FOUND"
      } as TSCopyResponse);
      return;
    }

    // Fetch work documents to get external links
    const workDocument = await prisma.workDocuments.findFirst({
      where: { workCode: workDetail.workCode },
      select: {
        id: true,
        workCode: true,
        technicalSanction: true,
        administrativeSanction: true
      }
    });

    if (!workDocument) {
      res.status(404).json({
        success: false,
        error: "Work Document not found",
        code: "WORK_DOCUMENT_NOT_FOUND"
      } as TSCopyResponse);
      return;
    }

    // Initialize default values
    let technicalSanctionData: TechnicalSanctionData = {
      sanctionDate: "1/5/2024",
      sanctionDateFormatted: "01/05/2024",
      technicalSanctionNo: "???? ?? ? 2024/25/15",
      unskilledLabourCharges: "320000",
      estimateMaterialCost: "549000"
    };

    let administrativeSanctionData: AdministrativeSanctionData = {
      sanctionedAmount: "549000",
      sanctionedAmountInWords: "Five Lakh Forty Nine Thousand Rupees Only"
    };

    // Scrape technical sanction data if URL exists
    if (workDocument.technicalSanction) {
      const scrapedTechnicalData = await scrapeTSTechnicalSanction(
        workDocument.technicalSanction,
        workDetail.workCode
      );

      if (scrapedTechnicalData) {
        technicalSanctionData = scrapedTechnicalData;
      }
    }

    // Scrape administrative sanction data if URL exists
    if (workDocument.administrativeSanction) {
      const scrapedAdministrativeData = await scrapTSeAdministrativeSanction(
        workDocument.administrativeSanction,
        workDetail.workCode
      );

      if (scrapedAdministrativeData) {
        administrativeSanctionData = scrapedAdministrativeData;
      }
    }

    // Prepare response data
    const responseData = {
      // Database fields (//1)
      workCode: workDetail.workCode,
      financialYear: workDetail.financialYear,
      workName: workDetail.workName,
      gramPanchayat: workDetail.panchayat,
      blockPanchayat: workDetail.block,
      estimatePersonDays: workDetail.estimatedPersonDays?.toString() || "0",

      // External API fields (//3 and //4)
      sanctionDate: technicalSanctionData.sanctionDate,
      sanctionDateFormatted: technicalSanctionData.sanctionDateFormatted,
      technicalSanctionNo: technicalSanctionData.technicalSanctionNo,
      unskilledLabourCharges: technicalSanctionData.unskilledLabourCharges,
      estimateMaterialCost: technicalSanctionData.estimateMaterialCost,
      sanctionedAmount: administrativeSanctionData.sanctionedAmount,
      sanctionedAmountInWords:
        administrativeSanctionData.sanctionedAmountInWords
    };

    res.status(200).json({
      success: true,
      data: responseData,
      message: "TS Copy data retrieved successfully"
    } as TSCopyResponse);
  } catch (error: any) {
    console.error("Error in get-TS Copy endpoint:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Internal server error",
      code: "FETCH_TS_COPY_ERROR"
    } as TSCopyResponse);
  }
});

export default tsCopyRouter;
