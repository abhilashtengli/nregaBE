import { prisma } from "@lib/prisma";
import express, { Request, Response } from "express";
import { scrapeAdministrativeSanctionNumber } from "../services/quotationCallLetterServiceVersion2";
import { scrapeTechnicalSanction } from "../services/frontPage";
import { findPanchayatByCode } from "../utils/findPanchayat";
import { userAuth } from "../middleware/auth";
const workCompletionRouter = express.Router();

type WorkCompletionResponse = {
  gramPanchayat: string;
  taluka: string;
  district: string;
  year: string;
  workCode: string;
  workName: string;
  administrativeSanctionNo: string;
  workStartDate: string;
  wage: string;
  material: string;
  total: string;
};
workCompletionRouter.get(
  "/work-completion/:id",
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
          panchayat: true,
          block: true,
          district: true,
          workStartDate: true,
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
        return res.status(404).json({
          success: false,
          error: "Work Document not found",
          code: "WORK_DOCUMENT_NOT_FOUND"
        });
      }
      let technicalSanctionData;
      let administrativeSanctionNo = "";
      if (workDocument.technicalSanction) {
        technicalSanctionData = await scrapeTechnicalSanction(
          workDocument.technicalSanction,
          workDetail.workCode
        );
      }
      if (workDocument.administrativeSanction) {
        administrativeSanctionNo = await scrapeAdministrativeSanctionNumber(
          workDocument.administrativeSanction,
          workDetail.workCode
        );
      }

      const totalAmount =
        Number(technicalSanctionData?.estimateLabourCharge ?? "0") +
        Number(technicalSanctionData?.estimatedMaterialCharge ?? "0");
      const responseData: WorkCompletionResponse = {
        gramPanchayat: panchayatData?.panchayat_name_kn || "",
        taluka: panchayatData?.block_name_kn || "",
        district: panchayatData?.district_name_kn || "",
        year: workDetail.financialYear || "",
        workCode: workDetail.workCode,
        workName: workDetail.workName || "",
        administrativeSanctionNo: administrativeSanctionNo,
        workStartDate: workDetail.workStartDate
          ? workDetail.workStartDate.toISOString()
          : "",
        wage: technicalSanctionData?.estimateLabourCharge ?? "0",
        material: technicalSanctionData?.estimatedMaterialCharge ?? "0",
        total: totalAmount.toString()
      };
      res.status(200).json({
        success: true,
        code: "WORK_COMPLETION_DATA_FETCHED",
        data: responseData
      });
      return;
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

export default workCompletionRouter;
