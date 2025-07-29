import { prisma } from "@lib/prisma";
import express, { Request, Response } from "express";
import { findPanchayatByCode } from "../utils/findPanchayat";
import { scrapeMovementSlipData } from "../services/movementSlipService";
import { subtractOneDay } from "../utils/substractOneday";
import { addDays } from "../utils/addDays";

const movementSlipRouter = express.Router();

type MustrollData = {
  mustrollNo: string;
  data: {
    fromDate: string;
    toDate: string;
    attendanceUpdateMIS: string;
    workMeasure: string;
    misEntryMeasurement: string;
    ftoDate1: string;
    ftoDate2: string;
  };
};
type ResponseMovementSlipType = {
  workCode: string;
  workName: string;
  gramPanchayat: string;
  taluka: string;
  district: string;
  mustrollData: MustrollData[];
};
movementSlipRouter.get(
  "/movement-slip/:id",
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
          workName: true
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

      const workDocument = await prisma.workDocuments.findFirst({
        where: { workCode: workDetail.workCode },
        select: {
          id: true,
          workCode: true,
          filledEMusterRolls: true
        }
      });

      if (!workDocument) {
        return res.status(404).json({
          success: false,
          error: "Work Document not found",
          code: "WORK_DOCUMENT_NOT_FOUND"
        });
      }
      let scrapedData;
      //Scrape data from filledEMusterRolls
      if (workDocument.filledEMusterRolls) {
        scrapedData = await scrapeMovementSlipData(
          workDocument.filledEMusterRolls
        );
      }

      if (!scrapedData) {
        return res.status(500).json({
          success: false,
          error: "Failed to scrape muster roll data",
          code: "SCRAPING_FAILED"
        });
      }

      // Map the scraped data to your required format
      const mustrollData: MustrollData[] = scrapedData.map((item) => ({
        mustrollNo: item.mustrollNo,
        data: {
          fromDate: item.fromDate,
          attendanceUpdateMIS: addDays(item.toDate, 1),
          workMeasure: addDays(item.toDate, 2),
          misEntryMeasurement: addDays(item.toDate, 2),
          toDate: item.toDate,
          ftoDate1: subtractOneDay(item.paymentDate), // You can modify this as needed
          ftoDate2: item.paymentDate // You can modify this as needed
        }
      }));

      const responseData: ResponseMovementSlipType = {
        workCode: workDetail.workCode,
        workName: workDetail.workName || "",
        gramPanchayat: panchayatData?.panchayat_name_kn || "",
        taluka: panchayatData?.block_name_kn || "",
        district: panchayatData?.district_name_kn || "",
        mustrollData: mustrollData
      };
      res.status(200).json({
        success: true,
        data: responseData,
        code: "MOVEMENT_SLIP_FETCHED"
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

export default movementSlipRouter;
