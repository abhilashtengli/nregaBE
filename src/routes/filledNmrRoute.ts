import express, { Request, Response } from "express";
import { prisma } from "@lib/prisma";
import { scrapeBlankNmrAdministrativeSanction } from "../services/blankNmrService";
import { scrapeFilledNmrData } from "../services/filledNmrService";

const filledNmrRouter = express.Router();

type WorkerData = {
  slNo: number;
  name: string;
  jobCardNo: string;
  totalAttendance: number;
  oneDayWage: number;
  pendingAmountByAttendance: number;
  totalCashPayment: number;
  bankName: string;
  wagelistNo: string;
  creditedDate: string;
  signature: string;
  attendanceBy: string;
};

type MusterRollData = {
  musterRollNo: string;
  fromDate: string;
  toDate: string;
  data: WorkerData[];
};

type ResponseFilledENmr = {
  state?: string;
  district?: string;
  taluka?: string;
  panchayat?: string;
  fromDate?: string;
  toDate?: string;
  totalAttendanceCount: number;
  approvalNo?: string;
  approvalDate?: string;
  workCode?: string;
  workName?: string;
  financialYear?: string;
  totalWage?: number;
  wage?: number;
  workersData?: MusterRollData[];
  mbNo?: string;
  pageNo?: string;
};

interface AdministrativeSanctionData {
  financialSanctionNo: string;
  financialSanctionDate: string;
}

filledNmrRouter.get(
  "/filled-e-nmr/:id",
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate ID parameter
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
          state: true,
          district: true,
          block: true,
          panchayat: true,
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
        });
        return;
      }

      // Fetch work documents to get required links
      const workDocument = await prisma.workDocuments.findFirst({
        where: { workCode: workDetail.workCode },
        select: {
          id: true,
          workCode: true,
          administrativeSanction: true,
          filledEMusterRolls: true,
          wageListFTO: true
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

      // Scrape Administrative sanction data
      let administrativeSanctionData: AdministrativeSanctionData = {
        financialSanctionNo: "",
        financialSanctionDate: ""
      };

      if (workDocument.administrativeSanction) {
        const scrapedAdministrativeData =
          await scrapeBlankNmrAdministrativeSanction(
            workDocument.administrativeSanction,
            workDetail.workCode
          );
        if (scrapedAdministrativeData) {
          administrativeSanctionData = scrapedAdministrativeData;
        }
      }

      // Scrape filled e-muster rolls and wage list data
      let scrapedFilledNmrData = {
        workersData: [] as MusterRollData[],
        totalAttendanceCount: 0,
        wage: 0,
        totalWage: 0
      };

      if (workDocument.filledEMusterRolls && workDocument.wageListFTO) {
        scrapedFilledNmrData = await scrapeFilledNmrData(
          workDocument.filledEMusterRolls,
          workDocument.wageListFTO
        );
      }

      // Get fromDate and toDate from the first muster roll data
      let fromDate = "";
      let toDate = "";
      if (scrapedFilledNmrData.workersData.length > 0) {
        fromDate = scrapedFilledNmrData.workersData[0].fromDate;
        toDate = scrapedFilledNmrData.workersData[0].toDate;
      }

      // Build response
      const response: ResponseFilledENmr = {
        state: workDetail.state || "",
        district: workDetail.district || "",
        taluka: workDetail.block || "", // Using block as taluka
        panchayat: workDetail.panchayat || "",
        fromDate,
        toDate,
        totalAttendanceCount: scrapedFilledNmrData.totalAttendanceCount,
        approvalNo: administrativeSanctionData.financialSanctionNo || "",
        approvalDate: administrativeSanctionData.financialSanctionDate || "",
        workCode: workDetail.workCode || "",
        workName: workDetail.workName || "",
        financialYear: workDetail.financialYear || "",
        totalWage: scrapedFilledNmrData.totalWage,
        wage: scrapedFilledNmrData.wage,
        workersData: scrapedFilledNmrData.workersData,
        mbNo: "",
        pageNo: ""
      };

      res.status(200).json({
        success: true,
        data: response
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

      // Log the error for debugging
      console.error("Error in filled-e-nmr route:", error);

      // Generic server error
      return res.status(500).json({
        success: false,
        error: "Internal server error",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

export default filledNmrRouter;
