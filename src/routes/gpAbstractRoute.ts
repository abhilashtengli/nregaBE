import { prisma } from "@lib/prisma";
import express, { Request, Response } from "express";
import { scrapeTechnicalSanction } from "../services/frontPage";
import {
  AdministractionSanctionData,
  formatMusterRollData,
  scrapeGeotaggedPhotographs,
  scrapeGpAbstractTechnicalEstimate,
  scrapeMusterRolls,
  scrapeAdministrativeSanctionNumber
} from "../services/gpAbstractService";

const gpAbstractRouter = express.Router();

type ExpenditureIncurredType = {
  unskilled: string;
  semiSkilled: string;
  skilled: string;
  material: string;
  contingency: string;
  total: string;
};

type ResponseGpAbstractType = {
  workName: string;
  workCode: string;
  sanctionedYear: string;
  workStatus: string;
  workPurposeStatus: string;
  sanctionNoAndDate: string;
  includedInPerspectivePlan: string;
  approvedInAnnualPlan: string;
  estimatedCost: string;
  workStartDate: string;
  expenditureIncurred: ExpenditureIncurredType;
  employmentGenerated: {
    unskilled: {
      persondays: string;
      totalPersons: string;
    };
    semiSkilled: {
      persondays: string;
      totalPersons: string;
    };
    skilled: {
      persondays: string;
      totalPersons: string;
    };
  };
  musterRollDetails: string;
  beforeWorkPhoto: string | null;
  duringWorkPhoto: string | null;
  afterWorkPhoto?: string | null;
};

gpAbstractRouter.get(
  "/gp-abstract/:id",
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
          workStatus: true,
          workType: true,
          financialYear: true,
          panchayat: true,
          estimatedCost: true,
          workStartDate: true
        }
      });

      if (!workDetail) {
        return res.status(404).json({
          success: false,
          error: "Work Detail not found",
          code: "WORK_DETAIL_NOT_FOUND"
        });
      }

      const workDocument = await prisma.workDocuments.findFirst({
        where: { workCode: workDetail.workCode },
        select: {
          id: true,
          workCode: true,
          technicalSanction: true,
          administrativeSanction: true,
          technicalEstimate: true,
          filledEMusterRolls: true,
          geotaggedPhotographs: true
        }
      });

      if (!workDocument) {
        return res.status(404).json({
          success: false,
          error: "Work Document not found",
          code: "WORK_DOCUMENT_NOT_FOUND"
        });
      }

      // Scrape administrative sanction data
      let administrativeSanction: AdministractionSanctionData | null = null;
      if (workDocument.administrativeSanction) {
        administrativeSanction = await scrapeAdministrativeSanctionNumber(
          workDocument.administrativeSanction,
          workDetail.workCode
        );
      }

      // Scrape technical sanction data
      let technicalSanctionData;
      if (workDocument.technicalSanction) {
        technicalSanctionData = await scrapeTechnicalSanction(
          workDocument.technicalSanction,
          workDetail.workCode
        );
      }

      // Calculate total cost from technical sanction data
      const totalCost =
        Number(technicalSanctionData?.estimateLabourCharge || 0) +
        Number(technicalSanctionData?.estimatedSemiSkilledCost || 0) +
        Number(technicalSanctionData?.estimatedSkilledCost || 0) +
        Number(technicalSanctionData?.estimatedMaterialCharge || 0) +
        Number(technicalSanctionData?.contingencyCost || 0);

      const expenditureIncurred: ExpenditureIncurredType = {
        unskilled: technicalSanctionData?.estimateLabourCharge || "0",
        semiSkilled: technicalSanctionData?.estimatedSemiSkilledCost || "0",
        skilled: technicalSanctionData?.estimatedSkilledCost || "0",
        material: technicalSanctionData?.estimatedMaterialCharge || "0",
        contingency: technicalSanctionData?.contingencyCost || "0",
        total: totalCost.toString()
      };

      // Scrape technical estimate data
      let technicalEstimateData;
      let approvedInAnnualPlan = "";
      let includedInPerspectivePlan = "";

      if (workDocument.technicalEstimate) {
        technicalEstimateData = await scrapeGpAbstractTechnicalEstimate(
          workDocument.technicalEstimate,
          workDetail.workCode
        );

        if (technicalEstimateData) {
          approvedInAnnualPlan = technicalEstimateData.approvedInAnnualPlan;
          includedInPerspectivePlan =
            technicalEstimateData.includedInPerspectivePlan;
        }
      }

      // Scrape muster rolls data
      let musterRollData;
      let musterRollsString = "";
      let musterRollDetailsString = "";
      let employmentGenerated = {
        unskilled: {
          persondays: "0",
          totalPersons: "0"
        },
        semiSkilled: {
          persondays: "0",
          totalPersons: "0"
        },
        skilled: {
          persondays: "0",
          totalPersons: "0"
        }
      };

      // Utility to convert { '17090': 16752, '17171': 13611 } → "17090(16752), 17171(13611)"
      const formatMusterRollDetails = (
        details: Record<string, number>
      ): string => {
        return Object.entries(details)
          .map(([key, value]) => `${key}(${value})`)
          .join(", ");
      };

      if (workDocument.filledEMusterRolls) {
        musterRollData = await scrapeMusterRolls(
          workDocument.filledEMusterRolls,
          workDetail.workCode
        );

        if (musterRollData) {
          const formattedData = formatMusterRollData(musterRollData);

          // Store string-formatted values
          musterRollsString = formattedData.musterRollsUsed;
          musterRollDetailsString = formatMusterRollDetails(
            formattedData.musterRollDetails
          );

          // Update employment generated data for unskilled workers
          employmentGenerated.unskilled = {
            persondays: formattedData.unskilledPersonDays,
            totalPersons: formattedData.totalUnskilledPersons
          };
        }
      }

      // Scrape geotagged photographs
      let beforeWorkPhoto = null;
      let duringWorkPhoto = null;
      let afterWorkPhoto = null;

      if (workDocument.geotaggedPhotographs) {
        const geotaggedPhotosData = await scrapeGeotaggedPhotographs(
          workDocument.geotaggedPhotographs,
          workDetail.workCode
        );

        if (geotaggedPhotosData) {
          beforeWorkPhoto =
            geotaggedPhotosData.beforeLink !== "NA"
              ? geotaggedPhotosData.beforeLink
              : null;
          duringWorkPhoto =
            geotaggedPhotosData.duringLink !== "NA"
              ? geotaggedPhotosData.duringLink
              : null;
          afterWorkPhoto =
            geotaggedPhotosData.afterLink !== "NA"
              ? geotaggedPhotosData.afterLink
              : null;
        }
      }

      // Format work start date
      const formattedWorkStartDate = workDetail.workStartDate
        ? new Date(workDetail.workStartDate).toLocaleDateString()
        : "";

      // Construct the complete response
      const responseData: ResponseGpAbstractType = {
        workName: workDetail.workName || "",
        workCode: workDetail.workCode,
        sanctionedYear: workDetail.financialYear || "",
        workStatus: workDetail.workStatus || "",
        workPurposeStatus: workDetail.workType || "",
        sanctionNoAndDate: administrativeSanction
          ? `${administrativeSanction.administrativeSanctionNo} , ${administrativeSanction.administrativeSanctionDate}`
          : "Not Available",
        includedInPerspectivePlan: includedInPerspectivePlan,
        approvedInAnnualPlan: approvedInAnnualPlan,
        estimatedCost: workDetail.estimatedCost?.toString() || "0",
        workStartDate: formattedWorkStartDate,
        expenditureIncurred: expenditureIncurred,
        employmentGenerated: employmentGenerated,
        musterRollDetails: musterRollDetailsString,
        beforeWorkPhoto: beforeWorkPhoto,
        duringWorkPhoto: duringWorkPhoto,
        afterWorkPhoto: afterWorkPhoto
      };

      // Send the successful response
      return res.status(200).json({
        success: true,
        data: responseData
      });
    } catch (error) {
      console.error("Error in GP Abstract API:", error);

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

export default gpAbstractRouter;
