import express, { Request, Response } from "express";
const vendorRouter = express.Router();
import { prisma } from "@lib/prisma";

// Interface for the request body
interface VendorDetailRequest {
  vendorNameOne?: string;
  vendorNameTwo?: string;
  vendorNameThree?: string;
  vendorGstOne?: string;
  vendorGstTwo?: string;
  vendorGstThree?: string;
  fromDate?: string; // ISO string format
  toDate?: string; // ISO string format
  workDetailId: string;
}

// POST endpoint to create vendor details
vendorRouter.post(
  "/add-vendor-details",
  async (req: Request, res: Response) => {
    try {
      const {
        vendorNameOne,
        vendorNameTwo,
        vendorNameThree,
        vendorGstOne,
        vendorGstTwo,
        vendorGstThree,
        fromDate,
        toDate,
        workDetailId
      }: VendorDetailRequest = req.body;

      // Validate required fields
      if (!workDetailId) {
        return res.status(400).json({
          success: false,
          message: "workDetailId is required"
        });
      }

      // Check if workDetail exists
      const workDetailExists = await prisma.workDetail.findUnique({
        where: { id: workDetailId }
      });

      if (!workDetailExists) {
        return res.status(404).json({
          success: false,
          message: "Work detail not found"
        });
      }

      // Check if vendor detail already exists for this work detail
      const existingVendorDetail = await prisma.vendorDetail.findUnique({
        where: { workDetailId }
      });

      if (existingVendorDetail) {
        return res.status(400).json({
          success: false,
          message: "Vendor detail already exists for this work detail"
        });
      }

      // Create vendor detail
      const vendorDetail = await prisma.vendorDetail.create({
        data: {
          vendorNameOne,
          vendorNameTwo,
          vendorNameThree,
          vendorGstOne,
          vendorGstTwo,
          vendorGstThree,
          fromDate: fromDate ? new Date(fromDate) : null,
          toDate: toDate ? new Date(toDate) : null,
          workDetailId
        }
      });

      return res.status(201).json({
        success: true,
        message: "Vendor detail created successfully",
        data: vendorDetail
      });
    } catch (error) {
      console.error("Error creating vendor detail:", error);

      // Handle Prisma specific errors
      if (error instanceof Error) {
        if (error.message.includes("Foreign key constraint")) {
          return res.status(400).json({
            success: false,
            message: "Invalid workDetailId"
          });
        }
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  }
);

// GET endpoint to retrieve vendor detail by workDetailId
vendorRouter.get(
  "/vendor-details/:workDetailId",
  async (req: Request, res: Response) => {
    try {
      const { workDetailId } = req.params;

      const vendorDetail = await prisma.vendorDetail.findUnique({
        where: { workDetailId },
        include: {
          workDetail: {
            select: {
              workCode: true,
              workName: true,
              state: true,
              district: true
            }
          }
        }
      });

      if (!vendorDetail) {
        return res.status(404).json({
          success: false,
          message: "Vendor detail not found for this work detail"
        });
      }

      return res.status(200).json({
        success: true,
        data: vendorDetail
      });
    } catch (error) {
      console.error("Error fetching vendor detail:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  }
);

// GET endpoint to retrieve all vendor details
vendorRouter.get("/vendor-details", async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const [vendorDetails, total] = await Promise.all([
      prisma.vendorDetail.findMany({
        skip,
        take: Number(limit),
        include: {
          workDetail: {
            select: {
              workCode: true,
              workName: true,
              state: true,
              district: true
            }
          }
        },
        orderBy: { createdAt: "desc" }
      }),
      prisma.vendorDetail.count()
    ]);

    return res.status(200).json({
      success: true,
      data: vendorDetails,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error("Error fetching vendor details:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
});

// PUT endpoint to update vendor details
vendorRouter.put("/vendor-details/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      vendorNameOne,
      vendorNameTwo,
      vendorNameThree,
      vendorGstOne,
      vendorGstTwo,
      vendorGstThree,
      fromDate,
      toDate
    }: Partial<VendorDetailRequest> = req.body;

    // Check if vendor detail exists
    const existingVendorDetail = await prisma.vendorDetail.findUnique({
      where: { id }
    });

    if (!existingVendorDetail) {
      return res.status(404).json({
        success: false,
        message: "Vendor detail not found"
      });
    }

    // Update vendor detail
    const updatedVendorDetail = await prisma.vendorDetail.update({
      where: { id },
      data: {
        vendorNameOne,
        vendorNameTwo,
        vendorNameThree,
        vendorGstOne,
        vendorGstTwo,
        vendorGstThree,
        fromDate: fromDate ? new Date(fromDate) : undefined,
        toDate: toDate ? new Date(toDate) : undefined
      }
    });

    return res.status(200).json({
      success: true,
      message: "Vendor detail updated successfully",
      data: updatedVendorDetail
    });
  } catch (error) {
    console.error("Error updating vendor detail:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
});

// DELETE endpoint to delete vendor details
vendorRouter.delete(
  "/vendor-details/:id",
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Check if vendor detail exists
      const existingVendorDetail = await prisma.vendorDetail.findUnique({
        where: { id }
      });

      if (!existingVendorDetail) {
        return res.status(404).json({
          success: false,
          message: "Vendor detail not found"
        });
      }

      // Delete vendor detail
      await prisma.vendorDetail.delete({
        where: { id }
      });

      return res.status(200).json({
        success: true,
        message: "Vendor detail deleted successfully"
      });
    } catch (error) {
      console.error("Error deleting vendor detail:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  }
);

export default vendorRouter;
