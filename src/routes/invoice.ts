import express, { Request, Response } from "express";
const invoiceRouter = express.Router();
import { prisma } from "@lib/prisma";
import { userAuth } from "../middleware/auth";

invoiceRouter.get(
  "/invoice/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const workDetails = await prisma.workDetail.findUnique({
        where: {
          id: id
        },
        select: {
          district: true,
          block: true,
          panchayat: true
        }
      });
      if (!workDetails) {
        return res.status(404).json({
          success: false,
          message: "work Details  not found for this work detail"
        });
      }

      const vendorDetails = await prisma.vendorDetail.findUnique({
        where: {
          workDetailId: id
        },
        select: {
          vendorNameOne: true,
          vendorGstOne: true
        }
      });

      if (!vendorDetails) {
        return res.status(404).json({
          success: false,
          message: "Vendor detail not found for this work detail"
        });
      }

      return res.status(200).json({
        success: true,
        data: {
          vendorDetails: vendorDetails,
          workDetails: workDetails
        }
      });
    } catch (error) {
      console.error("Error fetching detail:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  }
);

export default invoiceRouter;
