import { prisma } from "@lib/prisma";
import express, { Request, Response } from "express";
import { scrapeEMusterRollData } from "../services/workOrderService";
import { subtractOneDay } from "../utils/substractOneday";
import { findPanchayatByCode } from "../utils/findPanchayat";
import { userAuth } from "../middleware/auth";

const workOrderRouter = express.Router();

workOrderRouter.get(
  "/work-order/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      console.log("Fetching Work order for ID:", id);

      // Validate ID parameter
      if (!id) {
        res.status(400).json({
          success: false,
          error: "Work Detail ID is required",
          code: "MISSING_ID"
        });
        return;
      }

      // Fetch work details with related panchayat data
      const workDetail = await prisma.workDetail.findUnique({
        where: {
          id: id
        },
        select: {
          id: true,
          workCode: true,
          workName: true,
          panchayat: true,
          block: true,
          estimatedCost: true
        }
      });

      // Check if work detail exists
      if (!workDetail) {
        res.status(404).json({
          success: false,
          error: "Work Detail not found",
          code: "WORK_DETAIL_NOT_FOUND"
        });
        return;
      }
      const workCodeParts = workDetail.workCode.split("/");
      const panchayatCode = workCodeParts[0];
      const panchayatData = findPanchayatByCode(panchayatCode);

      const workDocument = await prisma.workDocuments.findUnique({
        where: { workCode: workDetail.workCode },
        select: {
          filledEMusterRolls: true
        }
      });
      // Initialize e-Muster roll data
      let eMusterRollData = null;

      // If we have a filled e-Muster rolls URL, scrape it
      if (workDocument?.filledEMusterRolls) {
        console.log(
          "Scraping e-Muster roll data from:",
          workDocument.filledEMusterRolls
        );
        eMusterRollData = await scrapeEMusterRollData(
          workDocument.filledEMusterRolls
        );
      }
      const safeDate = eMusterRollData?.dateFrom;
      const responseData = {
        workCode: workDetail.workCode,
        workName: workDetail.workName,
        panchayat: panchayatData?.panchayat_name_kn,
        block: panchayatData?.block_name_kn,
        estimatedCost: workDetail.estimatedCost?.toFixed(2),
        date: safeDate ? subtractOneDay(safeDate) : ""
      };

      // Return successful response with scraped data
      res.status(200).json({
        success: true,
        data: responseData,
        message: "Work details retrieved successfully"
      });
    } catch (error: any) {
      console.error("Error in get-Work order endpoint:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Internal server error",
        code: "FETCH_WORK_ORDER_ERROR"
      });
      return;
    }
  }
);

export default workOrderRouter;
