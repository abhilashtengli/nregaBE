import express, { Request, Response } from "express";
import axios from "axios";
import * as cheerio from "cheerio";
import { prisma } from "@lib/prisma";
import {
  scrapeTechnicalSanction,
  scrapeAdministrativeSanction
} from "../services/frontPage";
import { findPanchayatByCode } from "../utils/findPanchayat";

const frontPageRouter = express.Router();

export interface ScrapedTechnicalData {
  estimateLabourCharge: string;
  estimatedMaterialCharge: string;
  estimatedSkilledCost: string;
  estimatedSemiSkilledCost: string;
  contingencyCost: string;
  technicalSanctionNo: string;
}

// Interface for scraped data
interface TechnicalSanctionData {
  technicalSanctionNo: string;
  estimateLabourCharge: string;
  estimatedMaterialCharge: string;
  estimatedSkilledCost: string;
  estimatedSemiSkilledCost: string;
  contingencyCost: string;
}

interface AdministrativeSanctionData {
  financialSanctionAmount: string;
}

// Helper function to scrape technical sanction data

// Helper function to format date
function formatDate(date: Date | null): string {
  if (!date) return "";
  return date.toLocaleDateString("en-GB"); // DD/MM/YYYY format
}

// Helper function to clean and validate numeric strings
function cleanNumericValue(value: string): string {
  if (!value) return "0";
  // Remove any non-numeric characters except decimal points
  const cleaned = value.replace(/[^\d.-]/g, "");
  return cleaned || "0";
}

// Main API endpoint
frontPageRouter.get(
  "/get-frontpage-data/:id",
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

      console.log(`Fetching MGNREGA data for ID: ${id}`);

      // Fetch work details with documents from database
      const workDetail = await prisma.workDetail.findUnique({
        where: {
          id: id
        },
        include: {
          workDocuments: true
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

      console.log(`Found work detail: ${workDetail.workCode}`);

      // Initialize scraped data with default values
      let technicalData: TechnicalSanctionData = {
        technicalSanctionNo: "",
        estimateLabourCharge: "0",
        estimatedMaterialCharge: "0",
        estimatedSkilledCost: "0",
        estimatedSemiSkilledCost: "0",
        contingencyCost: "0"
      };

      let administrativeData: AdministrativeSanctionData = {
        financialSanctionAmount: "0"
      };

      // Check if documents exist and scrape data
      if (workDetail.workDocuments) {
        const { technicalSanction, administrativeSanction } =
          workDetail.workDocuments;

        // Scrape technical sanction data if URL exists
        if (technicalSanction && technicalSanction !== "Not Available") {
          console.log(`Scraping technical sanction: ${technicalSanction}`);
          technicalData = await scrapeTechnicalSanction(
            technicalSanction,
            workDetail.workCode
          );
        }

        // Scrape administrative sanction data if URL exists
        if (
          administrativeSanction &&
          administrativeSanction !== "Not Available"
        ) {
          console.log(
            `Scraping administrative sanction: ${administrativeSanction}`
          );
          administrativeData = await scrapeAdministrativeSanction(
            administrativeSanction,
            workDetail.workCode
          );
        }
      }

      // Clean numeric values
      const cleanedTechnicalData = {
        ...technicalData,
        estimateLabourCharge: cleanNumericValue(
          technicalData.estimateLabourCharge
        ),
        estimatedMaterialCharge: cleanNumericValue(
          technicalData.estimatedMaterialCharge
        ),
        estimatedSkilledCost: cleanNumericValue(
          technicalData.estimatedSkilledCost
        ),
        estimatedSemiSkilledCost: cleanNumericValue(
          technicalData.estimatedSemiSkilledCost
        ),
        contingencyCost: cleanNumericValue(technicalData.contingencyCost)
      };

      const cleanedAdministrativeData = {
        financialSanctionAmount: cleanNumericValue(
          administrativeData.financialSanctionAmount
        )
      };

      // Prepare the response data
      const mgnregaData = {
        // Database fields (comment //1)
        state: "ಕರ್ನಾಟಕ",
        district: panchayatData?.district_name_kn || "",
        taluka: panchayatData?.block_name_kn || "", // mapped from block
        gramPanchayat: panchayatData?.panchayat_name_kn || "", // mapped from panchayat
        workCategory: workDetail.workCategory || "",
        workName: workDetail.workName || "",
        workCode: workDetail.workCode || "",
        sanctionedYear: workDetail.sanctionYear || "",
        projectLocation: panchayatData?.panchayat_name_kn || "", // mapped from panchayat
        grama: panchayatData?.panchayat_name_kn || "", // mapped from panchayat
        gramaPanchayat: panchayatData?.panchayat_name_kn || "", // mapped from panchayat
        talukaDetails: panchayatData?.block_name_kn || "", // mapped from block
        districtDetails: panchayatData?.district_name_kn || "", // mapped from district
        legislativeAssemblyConstituency: panchayatData?.block_name_kn || "", // mapped from block
        lokSabhaConstituency: panchayatData?.district_name_kn || "", // mapped from district
        stateDetails: "ಕರ್ನಾಟಕ", // mapped from state
        workStartDate: formatDate(workDetail.workStartDate),

        // Technical Sanction scraped data (comment //3)
        technicalSanctionNo: cleanedTechnicalData.technicalSanctionNo,
        estimateLabourCharge: cleanedTechnicalData.estimateLabourCharge,
        estimatedMaterialCharge: cleanedTechnicalData.estimatedMaterialCharge,
        estimatedSkilledCost: cleanedTechnicalData.estimatedSkilledCost,
        estimatedSemiSkilledCost: cleanedTechnicalData.estimatedSemiSkilledCost,
        contingencyCost: cleanedTechnicalData.contingencyCost,

        // Administrative Sanction scraped data (comment //4)
        estimatedTotal: cleanedAdministrativeData.financialSanctionAmount,
        throughMGNREGAfunding:
          cleanedAdministrativeData.financialSanctionAmount, // same as estimatedTotal

        // Optional spent amounts (empty for now)
        spentLabourCharges: "",
        spentMaterialCharges: "",
        spentTotalCharges: ""
      };

      console.log("Successfully processed MGNREGA data");

      // Return successful response
      res.status(200).json({
        success: true,
        data: mgnregaData,
        message: "MGNREGA data retrieved and processed successfully"
      });
    } catch (error: any) {
      console.error("Error in get-mgnrega-data endpoint:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Internal server error",
        code: "FETCH_MGNREGA_DATA_ERROR"
      });
      return;
    }
  }
);

export default frontPageRouter;
