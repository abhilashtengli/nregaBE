import express, { Request, Response } from "express";
import { prisma } from "@lib/prisma";
import { z } from "zod";
import {
  saveQuotationCallToDatabase,
  MaterialData,
  QuotationCallData,
  QuotationCallResponse,
  scrapeAdministrativeSanctionNumber,
  scrapeTechnicalEstimateMaterialData,
  validateAndCleanMaterialData
} from "../services/quotationCallLetterServiceVersion2";
import { addDays } from "../utils/addDays";
import { findMaterialUnit } from "../utils/findMaterialUnit";
import { findPanchayatByCode } from "../utils/findPanchayat";
import { userAuth } from "../middleware/auth";

const comparativeStatementRouter = express.Router();

type VendorQuoteData = {
  slNo: number;
  materialName: string;
  quantity: string;
  unit: string; // Added unit field
  rate: string;
  contractor1Rate: string;
  contractor2Rate: string;
  contractor3Rate: string;
};

/**
 * Main API endpoint - Get quotation call data by work detail ID and save to database
 */
comparativeStatementRouter.get(
  "/comparative-statement/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate ID parameter
      if (!id) {
        res.status(400).json({
          success: false,
          error: "Work Detail ID is required",
          code: "MISSING_ID"
        } as QuotationCallResponse);
        return;
      }

      // Fetch work details from database
      const workDetail = await prisma.workDetail.findUnique({
        where: { id: id },
        select: {
          id: true,
          workCode: true,
          workName: true,
          sanctionYear: true,
          panchayat: true,
          block: true,
          district: true
        }
      });

      if (!workDetail) {
        res.status(404).json({
          success: false,
          error: "Work Detail not found",
          code: "WORK_DETAIL_NOT_FOUND"
        } as QuotationCallResponse);
        return;
      }
      const workCodeParts = workDetail.workCode.split("/");
      const panchayatCode = workCodeParts[0];
      const panchayatData = findPanchayatByCode(panchayatCode);

      const vendorData = await prisma.vendorDetail.findUnique({
        where: {
          workDetailId: id
        }
      });
      let temporaryVendors;
      if (!vendorData) {
        res.status(404).json({
          success: false,
          message: "No Vendor data Found please add the vendors",
          code: "NO_VENDORS_FOUND"
        });
      }

      //create temporary vendor in database

      const vendorDetailResponse = {
        vendorNameOne: vendorData?.vendorNameOne,
        vendorGstOne: vendorData?.vendorGstOne,
        VendorOneQuotationSubmissiondate: vendorData?.fromDate
          ? addDays(vendorData.fromDate, 2) // Now accepts Date objects
          : "",
        vendorNameTwo: vendorData?.vendorNameTwo,
        vendorGstTwo: vendorData?.vendorGstTwo,
        vendorTwoQuotationSubmissiondate: vendorData?.fromDate
          ? addDays(vendorData.fromDate, 1)
          : "",
        vendorNameThree: vendorData?.vendorNameThree,
        vendorGstThree: vendorData?.vendorGstThree,
        vendorThreeQuotationSubmissiondate: vendorData?.fromDate
          ? addDays(vendorData.fromDate, 3)
          : // Now accepts Date objects
            ""
      };

      // Fetch work documents to get required links
      const workDocument = await prisma.workDocuments.findFirst({
        where: { workCode: workDetail.workCode },
        select: {
          id: true,
          workCode: true,
          technicalEstimate: true,
          administrativeSanction: true
        }
      });

      if (!workDocument) {
        res.status(404).json({
          success: false,
          error: "Work Document not found",
          code: "WORK_DOCUMENT_NOT_FOUND"
        } as QuotationCallResponse);
        return;
      }
      const quotationCallLetterData =
        await prisma.quotationCallLetter.findUnique({
          where: {
            workDetailId: id
          },
          select: {
            administrativeSanction: true,
            materialItems: true
          }
        });
      let vendorWithVendorQuotation: VendorQuoteData[] = [];

      if (quotationCallLetterData?.materialItems) {
        for (const material of quotationCallLetterData.materialItems) {
          const vendorMaterialQuote: VendorQuoteData = {
            slNo: material.slNo,
            materialName: material.materialName,
            quantity: material.quantity, // you had this field in the type but it's not from DB, so default to empty string
            unit: material.unit || "",
            rate: material.price,
            contractor1Rate: material.price,
            contractor2Rate: (Number(material.price) * 1.02).toFixed(2),
            contractor3Rate: (Number(material.price) * 1.025).toFixed(2)
          };
          vendorWithVendorQuotation.push(vendorMaterialQuote);
        }
      }
      const sortedMaterialData =
        quotationCallLetterData?.materialItems?.sort(
          (a, b) => a.slNo - b.slNo
        ) || [];

      const data = {
        gramPanchayat: panchayatData?.panchayat_name_kn || "",
        tenderPublishDate: vendorData?.fromDate || "",
        tenderSubmissionDate: vendorData?.toDate || "",
        taluka: panchayatData?.block_name_kn || "",
        district: panchayatData?.district_name_kn || "",
        year: workDetail.sanctionYear || "",
        administrativeSanction: quotationCallLetterData?.administrativeSanction,
        workCode: workDetail.workCode,
        workName: workDetail.workName || "",
        materialData: sortedMaterialData, // Now includes unit field
        vendorDetails: vendorDetailResponse,
        vendorWithVendorQuotation: vendorWithVendorQuotation // Now includes unit field
      };

      res.status(200).json({
        success: true,
        data: data,
        message: "Quotation call data retrieved and saved successfully"
      });
    } catch (error: any) {
      console.error("Error in get-quotation-call endpoint:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Internal server error",
        code: "FETCH_QUOTATION_CALL_ERROR"
      } as QuotationCallResponse);
    }
  }
);

comparativeStatementRouter.get(
  "/material-vendor-data-version2/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate ID parameter
      if (!id) {
        res.status(400).json({
          success: false,
          error: "Work Detail ID is required",
          code: "MISSING_ID"
        } as QuotationCallResponse);
        return;
      }
      const quotationCallLetterData =
        await prisma.quotationCallLetter.findUnique({
          where: {
            workDetailId: id
          }
        });
      let vendorWithVendorQuotation: VendorQuoteData[] = [];
      let vendorData;

      if (!quotationCallLetterData) {
        // Fetch work details from database
        const workDetail = await prisma.workDetail.findUnique({
          where: { id: id },
          select: {
            id: true,
            workCode: true,
            workName: true,
            sanctionYear: true,
            panchayat: true,
            block: true,
            district: true
          }
        });

        if (!workDetail) {
          res.status(404).json({
            success: false,
            error: "Work Detail not found",
            code: "WORK_DETAIL_NOT_FOUND"
          } as QuotationCallResponse);
          return;
        }
        const vendorAlreadyPresent = await prisma.vendorDetail.findUnique({
          where: {
            workDetailId: id
          }
        });
        if (vendorAlreadyPresent) {
          await prisma.vendorDetail.delete({
            where: {
              workDetailId: id
            }
          });
        }
        const temporaryVendors = await prisma.vendorDetail.create({
          data: {
            vendorNameOne: "vendor1",
            vendorGstOne: "",
            vendorNameTwo: "vendor2",
            vendorGstTwo: "",
            vendorNameThree: "vendor3",
            vendorGstThree: "",
            fromDate: new Date(), // ✅ Direct Date object
            toDate: new Date(),
            workDetailId: workDetail.id
          }
        });

        if (!temporaryVendors) {
          res.status(404).json({
            success: false,
            error: "Vendor Details not created",
            code: "VENDOR_DETAILS_ERROR",
            message: "Vendor creation error, Try again later!"
          });
          return;
        }

        // Fetch work documents to get required links
        const workDocument = await prisma.workDocuments.findFirst({
          where: { workCode: workDetail.workCode },
          select: {
            id: true,
            workCode: true,
            technicalEstimate: true,
            administrativeSanction: true
          }
        });

        if (!workDocument) {
          res.status(404).json({
            success: false,
            error: "Work Document not found",
            code: "WORK_DOCUMENT_NOT_FOUND"
          } as QuotationCallResponse);
          return;
        }
        // Initialize default values
        let materialData: MaterialData[] = [];
        let administrativeSanctionNo = "";

        // Scrape material data from technical estimate
        if (workDocument.technicalEstimate) {
          console.log(
            `Fetching material data from: ${workDocument.technicalEstimate}`
          );
          materialData = await scrapeTechnicalEstimateMaterialData(
            workDocument.technicalEstimate
          );

          // Validate and clean material data
          materialData = validateAndCleanMaterialData(materialData);
        }

        // Scrape administrative sanction number
        if (workDocument.administrativeSanction) {
          console.log(
            `Fetching administrative sanction from: ${workDocument.administrativeSanction}`
          );
          administrativeSanctionNo = await scrapeAdministrativeSanctionNumber(
            workDocument.administrativeSanction,
            workDetail.workCode
          );
        }
        // Check if we have material data
        if (materialData.length === 0) {
          console.log("No material data found. Debugging information:");

          res.status(404).json({
            success: false,
            error:
              "No material data found in the technical estimate. Please check the URL and try again.",
            code: "NO_MATERIAL_DATA_FOUND",
            debug: {
              workCode: workDetail.workCode,
              technicalEstimateUrl: workDocument.technicalEstimate,
              administrativeSanctionUrl: workDocument.administrativeSanction
            }
          } as QuotationCallResponse);
          return;
        }

        // Ensure all materials have units (in case scraping didn't get them)
        materialData = materialData.map((material) => {
          if (!material.unit) {
            const materialInfo = findMaterialUnit(material.materialName);
            material.unit = materialInfo?.unit || "";
          }
          return material;
        });

        const quotationCallData: QuotationCallData = {
          gramPanchayat: workDetail.panchayat || "",
          taluka: workDetail.block || "",
          district: workDetail.district || "",
          year: workDetail.sanctionYear || "",
          administrativeSanction: administrativeSanctionNo,
          workCode: workDetail.workCode,
          workName: workDetail.workName || "",
          materialData: materialData
        };

        // Save to database
        try {
          await saveQuotationCallToDatabase(workDetail.id, quotationCallData);
          console.log("Quotation call data saved to database successfully");
        } catch (dbError: any) {
          console.error("Error saving to database:", dbError);
          // Continue with response even if database save fails
        }
        materialData.map((material) => {
          const vendorMaterialQuote: VendorQuoteData = {
            slNo: material.slNo,
            materialName: material.materialName,
            quantity: material.quantity,
            unit: material.unit || "", // Include unit
            rate: material.price,
            contractor1Rate: material.price,
            contractor2Rate: (Number(material.price) * 1.02).toString(), // Adds 2%
            contractor3Rate: (Number(material.price) * 1.025).toString()
          };
          vendorWithVendorQuotation.push(vendorMaterialQuote);
        });
      } else {
        const materialData = await prisma.quotationCallLetter.findUnique({
          where: {
            workDetailId: id
          },
          select: {
            materialItems: {
              select: {
                id: true,
                slNo: true,
                materialName: true,
                quantity: true,
                price: true,
                unit: true
              }
            }
          }
        });
        if (materialData?.materialItems) {
          for (const material of materialData.materialItems) {
            const vendorMaterialQuote: VendorQuoteData = {
              slNo: material.slNo,
              materialName: material.materialName,
              quantity: material.quantity, // you had this field in the type but it's not from DB, so default to empty string
              unit: material.unit || "",
              rate: material.price,
              contractor1Rate: material.price,
              contractor2Rate: (Number(material.price) * 1.02).toFixed(2),
              contractor3Rate: (Number(material.price) * 1.025).toFixed(2)
            };
            vendorWithVendorQuotation.push(vendorMaterialQuote);
          }
        }
        vendorData = await prisma.vendorDetail.findUnique({
          where: {
            workDetailId: id
          },
          select: {
            vendorNameOne: true,
            vendorNameTwo: true,
            vendorNameThree: true,
            vendorGstOne: true,
            vendorGstTwo: true,
            vendorGstThree: true,
            fromDate: true,
            toDate: true
          }
        });
      }

      res.status(200).json({
        success: true,
        data: {
          vendorWithVendorQuotationData: vendorWithVendorQuotation,
          vendorData
        },
        message: "FETCH_MATERIAL_DATA_SUCCESSFUL"
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message || "Internal server error",
        code: "FETCH_MATERIAL_ERROR"
      });
    }
  }
);

// Validation schemas
const VendorSchema = z.object({
  vendorName: z
    .string()
    .min(1, "Vendor name is required")
    .max(255, "Vendor name too long"),
  gstNo: z
    .string()
    .regex(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/,
      "Invalid GST number format"
    )
});

const MaterialSchema = z.object({
  slNo: z.number().int().positive("Serial number must be positive"),
  materialName: z
    .string()
    .min(1, "Material name is required")
    .max(500, "Material name too long"),
  quantity: z.string().optional(),
  unit: z.string().optional(),
  vendor1Rate: z.string().regex(/^\d+(\.\d{1,2})?$/, "Invalid rate format")
});

const UpdateVendorMaterialDataSchema = z
  .object({
    workId: z.string(),
    workDocumentId: z.string(),
    fromDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
    toDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
    vendors: z.object({
      vendor1: VendorSchema,
      vendor2: VendorSchema,
      vendor3: VendorSchema
    }),
    materials: z
      .array(MaterialSchema)
      .min(1, "At least one material is required")
  })
  .refine((data) => new Date(data.fromDate) <= new Date(data.toDate), {
    message: "From date must be before or equal to to date",
    path: ["toDate"]
  });

interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  timestamp: string;
}

class ValidationError extends Error {
  constructor(
    message: string,
    public details?: any
  ) {
    super(message);
    this.name = "ValidationError";
  }
}

class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

const createApiResponse = <T>(
  success: boolean,
  message: string,
  data?: T,
  error?: string
): ApiResponse<T> => ({
  success,
  message,
  data,
  error,
  timestamp: new Date().toISOString()
});

comparativeStatementRouter.post(
  "/update-vendor-material-data",
  userAuth,
  async (req: Request, res: Response): Promise<void> => {
    const startTime = Date.now();
    let prismaTransaction;

    try {
      // Input validation
      const validatedData = UpdateVendorMaterialDataSchema.parse(req.body);
      const { fromDate, materials, toDate, vendors, workId } = validatedData;

      console.log(
        `[${new Date().toISOString()}] Starting vendor material update for workId: ${workId}`
      );

      // Start database transaction
      prismaTransaction = await prisma.$transaction(async (tx) => {
        // Step 1: Find and validate QuotationCallLetter exists
        const quotationCallLetter = await tx.quotationCallLetter.findUnique({
          where: { workDetailId: workId },
          include: {
            materialItems: {
              select: {
                id: true,
                materialName: true,
                slNo: true
              }
            }
          }
        });

        if (!quotationCallLetter) {
          throw new NotFoundError(
            `Quotation call letter not found for work detail ID: ${workId}`
          );
        }

        console.log(
          `[${new Date().toISOString()}] Found quotation call letter: ${
            quotationCallLetter.id
          }`
        );

        // Step 2: Update vendor details
        const vendorUpdateResult = await tx.vendorDetail.update({
          where: { workDetailId: workId },
          data: {
            vendorNameOne: vendors.vendor1.vendorName.trim(),
            vendorNameTwo: vendors.vendor2.vendorName.trim(),
            vendorNameThree: vendors.vendor3.vendorName.trim(),
            vendorGstOne: vendors.vendor1.gstNo.toUpperCase(),
            vendorGstTwo: vendors.vendor2.gstNo.toUpperCase(),
            vendorGstThree: vendors.vendor3.gstNo.toUpperCase(),
            fromDate: new Date(fromDate),
            toDate: new Date(toDate),
            updatedAt: new Date()
          }
        });

        console.log(
          `[${new Date().toISOString()}] Updated vendor details for workId: ${workId}`
        );

        // Step 3: Get material names from request for comparison
        const requestMaterialNames = materials.map((m) =>
          m.materialName.trim()
        );
        const existingMaterialNames = quotationCallLetter.materialItems.map(
          (m) => m.materialName
        );

        // Step 4: Identify materials to be removed
        const materialsToRemove = existingMaterialNames.filter(
          (name) => !requestMaterialNames.includes(name)
        );

        // Step 5: Remove materials not in the request
        let deletedCount = 0;
        if (materialsToRemove.length > 0) {
          const deleteResult = await tx.materialItem.deleteMany({
            where: {
              quotationCallLetterId: quotationCallLetter.id,
              materialName: { in: materialsToRemove }
            }
          });
          deletedCount = deleteResult.count;
          console.log(
            `[${new Date().toISOString()}] Deleted ${deletedCount} materials: ${materialsToRemove.join(
              ", "
            )}`
          );
        }

        // Step 6: Update existing materials
        let updatedCount = 0;
        const updatePromises = materials.map(async (material) => {
          const updateResult = await tx.materialItem.updateMany({
            where: {
              quotationCallLetterId: quotationCallLetter.id,
              materialName: material.materialName.trim()
            },
            data: {
              slNo: material.slNo,
              quantity: material?.quantity?.trim(),
              price: material.vendor1Rate.trim(),
              unit: material.unit?.trim(),
              updatedAt: new Date()
            }
          });

          if (updateResult.count > 0) {
            updatedCount += updateResult.count;
          }

          return updateResult;
        });

        await Promise.all(updatePromises);

        console.log(
          `[${new Date().toISOString()}] Updated ${updatedCount} materials`
        );

        // Step 7: Validate that all requested materials exist
        const finalMaterialCheck = await tx.materialItem.findMany({
          where: {
            quotationCallLetterId: quotationCallLetter.id,
            materialName: { in: requestMaterialNames }
          },
          select: { materialName: true }
        });

        const foundMaterialNames = finalMaterialCheck.map(
          (m) => m.materialName
        );
        const missingMaterials = requestMaterialNames.filter(
          (name) => !foundMaterialNames.includes(name)
        );

        if (missingMaterials.length > 0) {
          console.warn(
            `[${new Date().toISOString()}] Warning: Some materials were not found for update: ${missingMaterials.join(
              ", "
            )}`
          );
        }

        return {
          vendorUpdate: vendorUpdateResult,
          materialsDeleted: deletedCount,
          materialsUpdated: updatedCount,
          missingMaterials: missingMaterials,
          quotationCallLetterId: quotationCallLetter.id
        };
      });

      const executionTime = Date.now() - startTime;
      console.log(
        `[${new Date().toISOString()}] Transaction completed successfully in ${executionTime}ms`
      );

      // Success response
      res.status(200).json(
        createApiResponse(
          true,
          "Vendor and material data updated successfully",
          {
            workId,
            quotationCallLetterId: prismaTransaction.quotationCallLetterId,
            summary: {
              materialsDeleted: prismaTransaction.materialsDeleted,
              materialsUpdated: prismaTransaction.materialsUpdated,
              missingMaterials: prismaTransaction.missingMaterials,
              executionTimeMs: executionTime
            }
          }
        )
      );
    } catch (error: any) {
      const executionTime = Date.now() - startTime;

      // Handle different types of errors
      if (error instanceof z.ZodError) {
        console.error(
          `[${new Date().toISOString()}] Validation error:`,
          error.errors
        );
        res
          .status(400)
          .json(
            createApiResponse(
              false,
              "Invalid request data",
              null,
              `Validation failed: ${error.errors
                .map((e) => `${e.path.join(".")}: ${e.message}`)
                .join(", ")}`
            )
          );
        return;
      }

      if (error instanceof NotFoundError) {
        console.error(
          `[${new Date().toISOString()}] Not found error:`,
          error.message
        );
        res
          .status(404)
          .json(
            createApiResponse(false, error.message, null, "Resource not found")
          );
        return;
      }

      if (error instanceof ValidationError) {
        console.error(
          `[${new Date().toISOString()}] Business logic error:`,
          error.message
        );
        res
          .status(422)
          .json(
            createApiResponse(
              false,
              error.message,
              null,
              "Business logic validation failed"
            )
          );
        return;
      }

      // Handle Prisma errors
      if (error.code === "P2002") {
        console.error(
          `[${new Date().toISOString()}] Unique constraint error:`,
          error.message
        );
        res
          .status(409)
          .json(
            createApiResponse(
              false,
              "Duplicate entry conflict",
              null,
              "A record with this data already exists"
            )
          );
        return;
      }

      if (error.code === "P2025") {
        console.error(
          `[${new Date().toISOString()}] Record not found error:`,
          error.message
        );
        res
          .status(404)
          .json(
            createApiResponse(
              false,
              "Required record not found",
              null,
              "One or more required records do not exist"
            )
          );
        return;
      }

      // Generic error handling
      console.error(
        `[${new Date().toISOString()}] Unexpected error in update-vendor-material-data:`,
        {
          error: error.message,
          stack: error.stack,
          workId: req.body?.workId,
          executionTime
        }
      );

      res
        .status(500)
        .json(
          createApiResponse(
            false,
            "Internal server error occurred while updating vendor material data",
            null,
            process.env.NODE_ENV === "development"
              ? error.message
              : "An unexpected error occurred"
          )
        );
    }
  }
);

export default comparativeStatementRouter;
