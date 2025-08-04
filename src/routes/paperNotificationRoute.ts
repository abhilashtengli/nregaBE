import express, { Request, Response } from "express";
import { prisma } from "@lib/prisma";
import {
  MaterialData,
  scrapeTechnicalEstimateMaterialData,
  validateAndCleanMaterialData
} from "../services/quotationCallLetterServiceVersion2";
import { findPanchayatByCode } from "../utils/findPanchayat";
import { userAuth } from "../middleware/auth";

const paperNotificationRouter = express.Router();

type ResponseData = {
  district: string;
  taluka: string;
  gramPanchayat: string;
  year: string;
  date: string;
  workName: string;
  quotationAmount: string;
  fromDate: string;
  toDate: string;
  prebidMeetingDate: string;
  documentSubmissionDate: string;
  envelopeOpeningDetails: string;
};

paperNotificationRouter.get(
  "/get-paper-notification/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate ID parameter
      if (!id) {
        return res.status(400).json({
          success: false,
          error: "Work Detail ID is required",
          code: "MISSING_ID"
        });
      }

      // Fetch work detail
      const workDetail = await prisma.workDetail.findUnique({
        where: { id: id },
        select: {
          workCode: true,
          workName: true,
          sanctionYear: true,
          panchayat: true,
          block: true,
          district: true,
          financialYear: true
        }
      });

      if (!workDetail) {
        return res.status(404).json({
          success: false,
          error: "Work Detail not found",
          code: "WORK_DETAIL_NOT_FOUND"
        });
      }
      const workCodeParts = workDetail.workCode.split("/");
      const panchayatCode = workCodeParts[0];
      const panchayatData = findPanchayatByCode(panchayatCode);

      // Fetch vendor details
      const vendorDetails = await prisma.vendorDetail.findUnique({
        where: { workDetailId: id },
        select: {
          fromDate: true,
          toDate: true
        }
      });

      if (!vendorDetails) {
        return res.status(404).json({
          success: false,
          error: "Dates not found",
          code: "DATES_NOT_FOUND"
        });
      }

      // Fetch work document
      const workDocument = await prisma.workDocuments.findFirst({
        where: { workCode: workDetail.workCode },
        select: {
          id: true,
          workCode: true,
          technicalEstimate: true
        }
      });

      if (!workDocument) {
        return res.status(404).json({
          success: false,
          error: "Work Document not found",
          code: "WORK_DOCUMENT_NOT_FOUND"
        });
      }

      // Initialize default values
      let materialData: MaterialData[] = [];

      // Scrape material data from technical estimate
      if (workDocument.technicalEstimate) {
        try {
          materialData = await scrapeTechnicalEstimateMaterialData(
            workDocument.technicalEstimate
          );
          // Validate and clean material data
          materialData = validateAndCleanMaterialData(materialData);
        } catch (scrapeError) {
          console.error("Error scraping technical estimate data:", scrapeError);
          // Continue with empty material data rather than failing the entire request
          materialData = [];
        }
      }

      // Calculate quotation amount
      let quotationAmount = 0;
      try {
        materialData.forEach((item) => {
          const price = parseFloat(item.totalPrice || "0");
          if (!isNaN(price)) {
            quotationAmount += price;
          }
        });
      } catch (calculationError) {
        console.error("Error calculating quotation amount:", calculationError);
        quotationAmount = 0;
      }

      // Prepare response data
      const responseData: ResponseData = {
        district: panchayatData?.district_name_kn || "",
        taluka: panchayatData?.block_name_kn || "",
        gramPanchayat: panchayatData?.panchayat_name_kn || "",
        workName: workDetail.workName || "",
        year: workDetail.financialYear || "",
        date: vendorDetails.fromDate
          ? vendorDetails.fromDate.toISOString()
          : "",
        quotationAmount: quotationAmount.toString(),
        fromDate: vendorDetails.fromDate?.toISOString() || "",
        toDate: vendorDetails.toDate?.toISOString() || "",
        prebidMeetingDate: vendorDetails.toDate?.toISOString() || "",
        documentSubmissionDate: vendorDetails.toDate?.toISOString() || "",
        envelopeOpeningDetails: vendorDetails.toDate?.toISOString() || ""
      };

      return res.status(200).json({
        success: true,
        code: "PAPER_NOTIFICATION_FETCHED",
        data: responseData
      });
    } catch (error) {
      // Handle specific Prisma errors
      if (error instanceof Error) {
        if (error.message.includes("P2002")) {
          return res.status(409).json({
            success: false,
            error: "Conflict: Duplicate record",
            code: "DUPLICATE_RECORD"
          });
        }

        if (error.message.includes("P2025")) {
          return res.status(404).json({
            success: false,
            error: "Record not found",
            code: "RECORD_NOT_FOUND"
          });
        }

        if (error.message.includes("Connection")) {
          return res.status(503).json({
            success: false,
            error: "Database connection error",
            code: "DATABASE_CONNECTION_ERROR"
          });
        }
      }

      // Generic server error
      return res.status(500).json({
        success: false,
        error: "Internal server error",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

export default paperNotificationRouter;
