import { prisma } from "@lib/prisma";
import express, { Request, Response } from "express";
import { userAuth } from "../middleware/auth";

const materialSupplyRegisterRouter = express.Router();

type MaterialData = {
  materialName: string;
  quantity: string;
};
type MaterialSupplyRegisterResponseData = {
  workCode: string;
  workName: string;
  vendorName: String;
  materialData: MaterialData[];
};
materialSupplyRegisterRouter.get(
  "/material-supply/:id",
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
      const vendor = await prisma.vendorDetail.findUnique({
        where: {
          workDetailId: id
        },
        select: {
          vendorNameOne: true
        }
      });

      const materilItemsData = await prisma.quotationCallLetter.findUnique({
        where: {
          workDetailId: id
        },
        select: {
          materialItems: {
            select: {
              materialName: true,
              quantity: true
            }
          }
        }
      });

      const responseData: MaterialSupplyRegisterResponseData = {
        workCode: workDetail.workCode,
        workName: workDetail.workName || "",
        vendorName: vendor?.vendorNameOne || "",
        materialData: materilItemsData?.materialItems ?? []
      };
      res.status(200).json({
        success: true,
        data: responseData,
        code: "MATERIAL_SUPPLY_REGISTER_FETCHED"
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

export default materialSupplyRegisterRouter;
