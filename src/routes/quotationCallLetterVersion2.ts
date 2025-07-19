// import express, { Request, Response } from "express";
// import { prisma } from "@lib/prisma";

// import {
//   saveQuotationCallToDatabase,
//   MaterialData,
//   QuotationCallData,
//   QuotationCallResponse,
//   scrapeAdministrativeSanctionNumber,
//   scrapeTechnicalEstimateMaterialData,
//   validateAndCleanMaterialData
// } from "../services/quotationCallLetterServiceVersion2";

// const quotationCallRouter = express.Router();

// /**
//  * Main API endpoint - Get quotation call data by work detail ID and save to database
//  */
// quotationCallRouter.get(
//   "/get-quotation-call/:id",
//   async (req: Request, res: Response) => {
//     try {
//       const { id } = req.params;

//       // Validate ID parameter
//       if (!id) {
//         res.status(400).json({
//           success: false,
//           error: "Work Detail ID is required",
//           code: "MISSING_ID"
//         } as QuotationCallResponse);
//         return;
//       }

//       // Fetch work details from database
//       const workDetail = await prisma.workDetail.findUnique({
//         where: { id: id },
//         select: {
//           id: true,
//           workCode: true,
//           workName: true,
//           sanctionYear: true,
//           panchayat: true,
//           block: true,
//           district: true
//         }
//       });

//       if (!workDetail) {
//         res.status(404).json({
//           success: false,
//           error: "Work Detail not found",
//           code: "WORK_DETAIL_NOT_FOUND"
//         } as QuotationCallResponse);
//         return;
//       }

//       // Fetch work documents to get required links
//       const workDocument = await prisma.workDocuments.findFirst({
//         where: { workCode: workDetail.workCode },
//         select: {
//           id: true,
//           workCode: true,
//           technicalEstimate: true,
//           administrativeSanction: true
//         }
//       });

//       if (!workDocument) {
//         res.status(404).json({
//           success: false,
//           error: "Work Document not found",
//           code: "WORK_DOCUMENT_NOT_FOUND"
//         } as QuotationCallResponse);
//         return;
//       }

//       // Initialize default values
//       let materialData: MaterialData[] = [];
//       let administrativeSanctionNo = "";

//       // Scrape material data from technical estimate
//       if (workDocument.technicalEstimate) {
//         console.log(
//           `Fetching material data from: ${workDocument.technicalEstimate}`
//         );
//         materialData = await scrapeTechnicalEstimateMaterialData(
//           workDocument.technicalEstimate
//         );

//         // Validate and clean material data
//         materialData = validateAndCleanMaterialData(materialData);
//       }

//       // Scrape administrative sanction number
//       if (workDocument.administrativeSanction) {
//         console.log(
//           `Fetching administrative sanction from: ${workDocument.administrativeSanction}`
//         );
//         administrativeSanctionNo = await scrapeAdministrativeSanctionNumber(
//           workDocument.administrativeSanction,
//           workDetail.workCode
//         );
//       }

//       // Check if we have material data
//       if (materialData.length === 0) {
//         console.log("No material data found. Debugging information:");
//         console.log("Work Detail:", workDetail);
//         console.log("Work Document:", workDocument);
//         console.log("Technical Estimate URL:", workDocument.technicalEstimate);

//         res.status(404).json({
//           success: false,
//           error:
//             "No material data found in the technical estimate. Please check the URL and try again.",
//           code: "NO_MATERIAL_DATA_FOUND",
//           debug: {
//             workCode: workDetail.workCode,
//             technicalEstimateUrl: workDocument.technicalEstimate,
//             administrativeSanctionUrl: workDocument.administrativeSanction
//           }
//         } as QuotationCallResponse);
//         return;
//       }

//       // Prepare the response data
//       const quotationCallData: QuotationCallData = {
//         gramPanchayat: workDetail.panchayat || "",
//         taluka: workDetail.block || "",
//         district: workDetail.district || "",
//         year: workDetail.sanctionYear || "",
//         administrativeSanction: administrativeSanctionNo,
//         workCode: workDetail.workCode,
//         workName: workDetail.workName || "",
//         materialData: materialData
//       };

//       // Save to database
//       try {
//         await saveQuotationCallToDatabase(workDetail.id, quotationCallData);
//         console.log("Quotation call data saved to database successfully");
//       } catch (dbError: any) {
//         console.error("Error saving to database:", dbError);
//         // Continue with response even if database save fails
//       }

//       res.status(200).json({
//         success: true,
//         data: quotationCallData,
//         message: "Quotation call data retrieved and saved successfully"
//       } as QuotationCallResponse);
//     } catch (error: any) {
//       console.error("Error in get-quotation-call endpoint:", error);
//       res.status(500).json({
//         success: false,
//         error: error.message || "Internal server error",
//         code: "FETCH_QUOTATION_CALL_ERROR"
//       } as QuotationCallResponse);
//     }
//   }
// );

// /**
//  * Alternative endpoint - Get quotation call data by work code and save to database
//  */
// quotationCallRouter.get(
//   "/get-quotation-call-by-code/:workCode",
//   async (req: Request, res: Response) => {
//     try {
//       const { workCode } = req.params;

//       // Validate work code parameter
//       if (!workCode) {
//         res.status(400).json({
//           success: false,
//           error: "Work Code is required",
//           code: "MISSING_WORK_CODE"
//         } as QuotationCallResponse);
//         return;
//       }

//       // Fetch work details from database by work code
//       const workDetail = await prisma.workDetail.findFirst({
//         where: { workCode: workCode },
//         select: {
//           id: true,
//           workCode: true,
//           workName: true,
//           sanctionYear: true,
//           panchayat: true,
//           block: true,
//           district: true
//         }
//       });

//       if (!workDetail) {
//         res.status(404).json({
//           success: false,
//           error: "Work Detail not found",
//           code: "WORK_DETAIL_NOT_FOUND"
//         } as QuotationCallResponse);
//         return;
//       }

//       // Fetch work documents to get required links
//       const workDocument = await prisma.workDocuments.findFirst({
//         where: { workCode: workDetail.workCode },
//         select: {
//           id: true,
//           workCode: true,
//           technicalEstimate: true,
//           administrativeSanction: true
//         }
//       });

//       if (!workDocument) {
//         res.status(404).json({
//           success: false,
//           error: "Work Document not found",
//           code: "WORK_DOCUMENT_NOT_FOUND"
//         } as QuotationCallResponse);
//         return;
//       }

//       // Initialize default values
//       let materialData: MaterialData[] = [];
//       let administrativeSanctionNo = "";

//       // Scrape material data from technical estimate
//       if (workDocument.technicalEstimate) {
//         console.log(
//           `Fetching material data from: ${workDocument.technicalEstimate}`
//         );
//         materialData = await scrapeTechnicalEstimateMaterialData(
//           workDocument.technicalEstimate
//         );

//         // Validate and clean material data
//         materialData = validateAndCleanMaterialData(materialData);
//       }

//       // Scrape administrative sanction number
//       if (workDocument.administrativeSanction) {
//         console.log(
//           `Fetching administrative sanction from: ${workDocument.administrativeSanction}`
//         );
//         administrativeSanctionNo = await scrapeAdministrativeSanctionNumber(
//           workDocument.administrativeSanction,
//           workDetail.workCode
//         );
//       }

//       // Check if we have material data
//       if (materialData.length === 0) {
//         res.status(404).json({
//           success: false,
//           error: "No material data found in the technical estimate",
//           code: "NO_MATERIAL_DATA_FOUND"
//         } as QuotationCallResponse);
//         return;
//       }

//       // Prepare the response data
//       const quotationCallData: QuotationCallData = {
//         gramPanchayat: workDetail.panchayat || "",
//         taluka: workDetail.block || "",
//         district: workDetail.district || "",
//         year: workDetail.sanctionYear || "",
//         administrativeSanction: administrativeSanctionNo,
//         workCode: workDetail.workCode,
//         workName: workDetail.workName || "",
//         materialData: materialData
//       };

//       // Save to database
//       try {
//         await saveQuotationCallToDatabase(workDetail.id, quotationCallData);
//         console.log("Quotation call data saved to database successfully");
//       } catch (dbError: any) {
//         console.error("Error saving to database:", dbError);
//         // Continue with response even if database save fails
//       }

//       res.status(200).json({
//         success: true,
//         data: quotationCallData,
//         message: "Quotation call data retrieved and saved successfully"
//       } as QuotationCallResponse);
//     } catch (error: any) {
//       console.error("Error in get-quotation-call-by-code endpoint:", error);
//       res.status(500).json({
//         success: false,
//         error: error.message || "Internal server error",
//         code: "FETCH_QUOTATION_CALL_ERROR"
//       } as QuotationCallResponse);
//     }
//   }
// );

// export default quotationCallRouter;
