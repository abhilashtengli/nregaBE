import express, { Request, Response } from "express";
import { prisma } from "@lib/prisma";

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

      //create temporary vendor in database
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

      const vendorDetailResponse = {
        vendorNameOne: temporaryVendors?.vendorNameOne,
        vendorGstOne: temporaryVendors?.vendorGstOne,
        VendorOneQuotationSubmissiondate: temporaryVendors?.fromDate
          ? addDays(temporaryVendors.fromDate, 2) // Now accepts Date objects
          : "",
        vendorNameTwo: temporaryVendors?.vendorNameTwo,
        vendorGstTwo: temporaryVendors?.vendorGstTwo,
        vendorTwoQuotationSubmissiondate: temporaryVendors?.fromDate
          ? addDays(temporaryVendors.fromDate, 1) // Now accepts Date objects
          : "",
        vendorNameThree: temporaryVendors?.vendorNameThree,
        vendorGstThree: temporaryVendors?.vendorGstThree,
        vendorThreeQuotationSubmissiondate: temporaryVendors?.fromDate
          ? addDays(temporaryVendors.fromDate, 3) // Now accepts Date objects
          : ""
      };

      if (!temporaryVendors) {
        res.status(404).json({
          success: false,
          error: "Vendor Details not found",
          code: "VENDOR_DETAILS_NOT_FOUND",
          message: "Please add vendor details first"
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

      const vendorWithVendorQuotation: VendorQuoteData[] = [];
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

      // Prepare the response data
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

      const data = {
        gramPanchayat: workDetail.panchayat || "",
        tenderPublishDate: temporaryVendors?.fromDate || "",
        tenderSubmissionDate: temporaryVendors?.toDate || "",
        taluka: workDetail.block || "",
        district: workDetail.district || "",
        year: workDetail.sanctionYear || "",
        administrativeSanction: administrativeSanctionNo,
        workCode: workDetail.workCode,
        workName: workDetail.workName || "",
        materialData: materialData, // Now includes unit field
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

export default comparativeStatementRouter;
