import { prisma } from "@lib/prisma";
import express, { Request, Response } from "express";

const checklistRouter = express.Router();

checklistRouter.get(
  "/get-checklist/:id",
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      console.log("Fetching checklist for ID:", id);

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
          sanctionYear: true,
          panchayat: true,
          block: true
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

      // Return successful response
      res.status(200).json({
        success: true,
        data: workDetail,
        message: "Work details retrieved successfully"
      });
    } catch (error: any) {
      console.error("Error in get-checklist endpoint:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Internal server error",
        code: "FETCH_CHECKLIST_ERROR"
      });
      return;
    }
  }
);

export default checklistRouter;
