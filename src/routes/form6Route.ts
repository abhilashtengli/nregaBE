import express, { Request, Response } from "express";
import axios from "axios";

import { prisma } from "@lib/prisma";
import { formatDate } from "../utils/formatDate";
import {
  Form6Data,
  Form6Response,
  scrapeDemandApplicationForm
} from "../services/form6Service";
import { subtractOneDay } from "../utils/substractOneday";

const form6Router = express.Router();

// Main API endpoint
form6Router.get("/get-form6/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Validate ID parameter
    if (!id) {
      res.status(400).json({
        success: false,
        error: "Work Detail ID is required",
        code: "MISSING_ID"
      } as Form6Response);
      return;
    }

    // Fetch work details from database
    const workDetail = await prisma.workDetail.findUnique({
      where: { id: id },
      select: {
        id: true,
        workCode: true,
        panchayat: true,
        block: true,
        workName: true,
        district: true
      }
    });

    if (!workDetail) {
      res.status(404).json({
        success: false,
        error: "Work Detail not found",
        code: "WORK_DETAIL_NOT_FOUND"
      } as Form6Response);
      return;
    }

    // Fetch work documents to get demandApplicationForm link
    const workDocument = await prisma.workDocuments.findFirst({
      where: { workCode: workDetail.workCode },
      select: {
        id: true,
        workCode: true,
        demandApplicationForm: true
      }
    });

    if (!workDocument) {
      res.status(404).json({
        success: false,
        error: "Work Document not found",
        code: "WORK_DOCUMENT_NOT_FOUND"
      } as Form6Response);
      return;
    }

    if (!workDocument.demandApplicationForm) {
      res.status(404).json({
        success: false,
        error: "Demand Application Form link not found",
        code: "DEMAND_FORM_LINK_NOT_FOUND"
      } as Form6Response);
      return;
    }

    // Scrape data from the demand application form
    const applicantsData = await scrapeDemandApplicationForm(
      workDocument.demandApplicationForm
    );

    if (applicantsData.length === 0) {
      res.status(404).json({
        success: false,
        error: "No applicant data found in the scraped content",
        code: "NO_APPLICANT_DATA_FOUND"
      } as Form6Response);
      return;
    }

    // Prepare the response data
    const form6Data: Form6Data = {
      workCode: workDetail.workCode,
      workName: workDetail.workName || "",
      gramPanchayat: workDetail.panchayat,
      taluka: workDetail.block,
      date: subtractOneDay(applicantsData[0].workFrom), // Subtract one day from first applicant's workFrom
      district: workDetail.district,
      applicationNumber: id.split("-")[0] || "1", // Simple application number generation
      applicantsData: applicantsData
    };

    res.status(200).json({
      success: true,
      data: form6Data,
      message: "Form6 data retrieved successfully"
    } as Form6Response);
  } catch (error: any) {
    console.error("Error in get-form6 endpoint:", error);

    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        res.status(408).json({
          success: false,
          error: "Request timeout while fetching data",
          code: "REQUEST_TIMEOUT"
        } as Form6Response);
        return;
      }
      if (error.response?.status === 404) {
        res.status(404).json({
          success: false,
          error: "Demand application form URL not accessible",
          code: "EXTERNAL_URL_NOT_FOUND"
        } as Form6Response);
        return;
      }
    }

    res.status(500).json({
      success: false,
      error: error.message || "Internal server error",
      code: "FETCH_FORM6_ERROR"
    } as Form6Response);
  }
});

export default form6Router;
