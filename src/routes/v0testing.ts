// // File: server.ts
// import express, { Request, Response, Application } from "express";
// import axios, { AxiosInstance, AxiosResponse } from "axios";
// import * as cheerio from "cheerio";
// import winston, { Logger } from "winston";
// import { URL } from "url";
// import { prisma } from "@lib/prisma";
// import { findPanchayatByCode } from "../utils/findPanchayat";

// const testingVendorScrape = express.Router();

// // Type definitions
// interface ProcessResult {
//   tables: string[][] | null;
//   url: string;
// }

// interface LinkData {
//   url: string;
//   linkId: string;
// }

// interface SessionResult {
//   success: boolean;
//   links: string[];
// }

// interface MaterialData {
//   billNo: string;
//   billAmount: string;
//   billDate: string;
//   dateOfPayment: string;
//   financialYear: string;
//   material: string;
//   unitPrice: string;
//   quantity: string;
//   amount: string;
// }

// interface ExtractedData {
//   workCode: string;
//   vendorName: string;
//   financialYear: string;
//   materialData: MaterialData[];
// }

// interface ApiResponse {
//   code?: string;
//   success?: boolean;
//   message: string;
//   totalTime: number;
//   data?: ExtractedData;
// }

// interface ErrorResponse {
//   error: string;
// }

// interface RequestData {
//   workCode: string;
//   financialYear: string;
//   blockName: string;
//   blockCode: string;
//   panchayatName: string;
//   panchayatCode: string;
// }

// // Set up logging
// const logger: Logger = winston.createLogger({
//   level: "info",
//   format: winston.format.combine(
//     winston.format.timestamp(),
//     winston.format.printf(({ timestamp, level, message }) => {
//       return `${timestamp} - ${level.toUpperCase()} - ${message}`;
//     })
//   ),
//   transports: [new winston.transports.Console()]
// });

// const headers: Record<string, string> = {
//   "User-Agent":
//     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
//   Accept:
//     "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
//   "Accept-Language": "en-US,en;q=0.9",
//   "Accept-Encoding": "gzip, deflate, br",
//   DNT: "1",
//   Connection: "keep-alive",
//   "Upgrade-Insecure-Requests": "1",
//   "Sec-Fetch-Dest": "document",
//   "Sec-Fetch-Mode": "navigate",
//   "Sec-Fetch-Site": "none",
//   "Sec-Fetch-User": "?1"
// };

// const MAX_CONCURRENT_REQUESTS: number = 2;

// // Simple cookie storage
// let cookieStore: string = "";

// // Create axios instance with manual cookie handling
// const axiosInstance: AxiosInstance = axios.create({
//   timeout: 20000,
//   maxRedirects: 5,
//   validateStatus: (status: number): boolean =>
//     (status >= 200 && status < 300) ||
//     [429, 500, 502, 503, 504].includes(status)
// });

// // Add request interceptor to include cookies
// axiosInstance.interceptors.request.use((config) => {
//   if (cookieStore) {
//     config.headers["Cookie"] = cookieStore;
//   }
//   return config;
// });

// // Add response interceptor to store cookies
// axiosInstance.interceptors.response.use((response) => {
//   const setCookieHeader = response.headers["set-cookie"];
//   if (setCookieHeader) {
//     cookieStore = setCookieHeader
//       .map((cookie) => cookie.split(";")[0])
//       .join("; ");
//   }
//   return response;
// });

// // Generate financial years based on user input
// const generateFinancialYears = (userFinancialYear: string): string[] => {
//   const [startYear] = userFinancialYear.split("-");
//   const nextYear = (parseInt(startYear) + 1).toString();
//   const nextFinancialYear = `${nextYear}-${(parseInt(nextYear) + 1).toString()}`;

//   return [userFinancialYear, nextFinancialYear];
// };

// // Generate dynamic URL
// const generateUrl = (data: RequestData, financialYear: string): string => {
//   const baseUrl =
//     "https://nregastrep.nic.in/netnrega/IndexFrame.aspx?lflag=eng&District_Code=1515&district_name=KALABURAGI&state_name=KARNATAKA&state_Code=15&";

//   return `${baseUrl}block_name=${encodeURIComponent(data.blockName)}&block_code=${data.blockCode}&fin_year=${financialYear}&check=1&Panchayat_name=${encodeURIComponent(data.panchayatName)}&Panchayat_Code=${data.panchayatCode}`;
// };

// // Improved retry request with better session handling
// const retryRequest = async (
//   url: string,
//   retries: number = 3,
//   backoff: number = 1000,
//   referer?: string
// ): Promise<AxiosResponse | null> => {
//   for (let attempt = 1; attempt <= retries; attempt++) {
//     try {
//       const config: any = {
//         headers: {
//           ...headers,
//           Referer: referer || url,
//           "Cache-Control": "no-cache",
//           Pragma: "no-cache"
//         }
//       };

//       const response: AxiosResponse = await axiosInstance.get(url, config);

//       if (response.status >= 200 && response.status < 300) {
//         return response;
//       }
//     } catch (error: any) {
//       logger.error(
//         `Error fetching ${url} (attempt ${attempt}): ${error.message}`
//       );
//     }
//     if (attempt < retries) {
//       const delay = backoff * Math.pow(2, attempt - 1);
//       await new Promise((resolve) => setTimeout(resolve, delay));
//     }
//   }
//   return null;
// };

// const cleanTableWc =
//   ($: cheerio.CheerioAPI) =>
//   (table: any): string[][] | null => {
//     try {
//       const rows = $(table).find("tr");
//       if (!rows.length) return null;

//       const tableData: string[][] = [];
//       rows.each((_, row) => {
//         const cells = $(row).find("td, th");
//         if (cells.length) {
//           const rowData: string[] = [];
//           cells.each((_, cell) => {
//             const text: string = $(cell).text().trim();
//             if (text) rowData.push(text);
//           });
//           if (rowData.length) tableData.push(rowData);
//         }
//       });

//       if (!tableData.length) return null;

//       const maxCols: number = Math.max(...tableData.map((row) => row.length));
//       return tableData.map((row) => {
//         while (row.length < maxCols) row.push("");
//         return row;
//       });
//     } catch (error: any) {
//       logger.error(`Error cleaning table: ${error.message}`);
//       return null;
//     }
//   };

// // Extract ONLY tables that contain the specific work code
// const extractTablesForWorkcode = (
//   $: cheerio.CheerioAPI,
//   workcode: string
// ): string[][] => {
//   const tables: any[] = $("table").get();

//   let combinedTableData: string[][] = [];
//   let isCollectingForWorkcode = false;
//   let foundTargetWorkcode = false;

//   tables.forEach((table) => {
//     const cleanedTable = cleanTableWc($)(table);
//     if (!cleanedTable) return;

//     for (const row of cleanedTable) {
//       // Check if this row contains our specific work code
//       if (row.some((cell) => cell.includes(workcode))) {
//         isCollectingForWorkcode = true;
//         foundTargetWorkcode = true;
//       }

//       // Check if we've hit a different work code
//       if (
//         row.some((cell) => {
//           if (cell.includes("Work Code") && cell.includes("(")) {
//             const match = cell.match(/\(([^)]+)\)/);
//             return match && match[1] !== workcode;
//           }
//           // Also check for rows that start with : and contain a different work code
//           if (
//             cell.startsWith(":") &&
//             cell.includes("(") &&
//             cell.includes(")")
//           ) {
//             const match = cell.match(/\(([^)]+)\)/);
//             return match && match[1] !== workcode;
//           }
//           return false;
//         })
//       ) {
//         // If we were collecting and hit a different work code, stop
//         if (isCollectingForWorkcode) {
//           break;
//         }
//       }

//       // Only collect rows if we're in the right work code section
//       if (isCollectingForWorkcode) {
//         combinedTableData.push(row);
//       }
//     }
//   });

//   return combinedTableData;
// };

// // FIXED EXTRACTION LOGIC - Extract data ONLY for the requested work code
// const extractDataFromTable = (
//   tableData: string[][],
//   requestWorkCode: string
// ): ExtractedData | null => {
//   const extractedData: ExtractedData = {
//     workCode: requestWorkCode,
//     vendorName: "",
//     financialYear: "",
//     materialData: []
//   };

//   let currentBillData: Partial<MaterialData> = {};
//   let currentFinancialYear: string = "";
//   let isProcessingCorrectWork = false;

//   for (let i = 0; i < tableData.length; i++) {
//     const row = tableData[i];

//     // Check if we're in the correct work code section
//     if (row[0] && row[0].includes(requestWorkCode)) {
//       isProcessingCorrectWork = true;
//       // Extract work code if it's in the proper format
//       if (row[0].includes("Work Code")) {
//         const workCodeMatch = row[0].match(/\(([^)]+)\)/);
//         if (workCodeMatch) {
//           extractedData.workCode = workCodeMatch[1];
//         }
//       }
//     }

//     // Only process if we're in the correct work section
//     if (!isProcessingCorrectWork) continue;

//     // Extract bill information
//     if (row[0] && row[0].startsWith("Bill No.")) {
//       currentBillData.billNo = row[0].substring(10).trim();
//     }

//     // Handle bill amount
//     if (row[1]) {
//       if (row[1].startsWith("Bill Amount")) {
//         currentBillData.billAmount = row[1].substring(14).trim();
//       } else if (row[1].startsWith(":") && row[1].match(/^\s*:\s*[\d.]+$/)) {
//         currentBillData.billAmount = row[1].substring(1).trim();
//       }
//     }

//     if (row[2] && row[2].startsWith("Bill Date")) {
//       currentBillData.billDate = row[2].substring(12).trim();
//     }

//     if (row[3] && row[3].startsWith("Date of Payment")) {
//       currentBillData.dateOfPayment = row[3].substring(16).trim();
//     }

//     // Extract vendor name
//     if (row[0] && row[0].includes("Vendor name :")) {
//       extractedData.vendorName = row[0].substring(14).trim();
//     }

//     // Extract financial year
//     if (row[1] && row[1].includes("Financial Year :")) {
//       currentFinancialYear = row[1].substring(17).trim();
//       if (!extractedData.financialYear) {
//         extractedData.financialYear = currentFinancialYear;
//       }
//     }

//     // Material detection
//     if (row[0] === "Material" && row.length >= 4) {
//       if (i + 1 < tableData.length) {
//         const nextRow = tableData[i + 1];

//         // Check if next row is material data (not special rows)
//         const isSpecialRow =
//           !nextRow[0] ||
//           nextRow[0].includes("Bill No.") ||
//           nextRow[0].includes("Vendor name") ||
//           nextRow[0].includes("Centre GST") ||
//           nextRow[0].includes("State GST") ||
//           nextRow[0].includes("Total") ||
//           nextRow[0].includes("Material") ||
//           nextRow[0].includes("Work Code") ||
//           nextRow[0].startsWith(":") ||
//           nextRow[0].trim() === "";

//         if (!isSpecialRow && nextRow.length >= 4) {
//           const materialEntry: MaterialData = {
//             billNo: currentBillData.billNo || "",
//             billAmount: currentBillData.billAmount || "",
//             billDate: currentBillData.billDate || "",
//             dateOfPayment: currentBillData.dateOfPayment || "",
//             financialYear: currentFinancialYear || extractedData.financialYear,
//             material: nextRow[0] || "",
//             unitPrice: nextRow[1] || "",
//             quantity: nextRow[2] || "",
//             amount: nextRow[3] || ""
//           };

//           extractedData.materialData.push(materialEntry);
//         }
//       }
//     }
//   }

//   // Only return data if we found materials for this work code
//   if (extractedData.materialData.length === 0) {
//     return null;
//   }

//   return extractedData;
// };

// const fetchAvailableLinksWc = ($: cheerio.CheerioAPI): string[] => {
//   const seen: Set<string> = new Set();
//   const orderedLinks: string[] = [];
//   const baseUrl: string = "https://nregastrep.nic.in/netnrega/";

//   $("a[href]").each((_, a) => {
//     const link: string | undefined = $(a).attr("href");

//     if (link && link.includes("gpwrkbilldtl.aspx")) {
//       const fullUrl: string = new URL(link, baseUrl).href;
//       if (!seen.has(fullUrl)) {
//         seen.add(fullUrl);
//         orderedLinks.push(fullUrl);
//       }
//     }
//   });

//   return orderedLinks;
// };

// const initializeSession = async (mainUrl: string): Promise<SessionResult> => {
//   try {
//     const response: AxiosResponse | null = await retryRequest(mainUrl);
//     if (!response) {
//       logger.error(`Failed to initialize session with main URL: ${mainUrl}`);
//       return { success: false, links: [] };
//     }

//     const $: cheerio.CheerioAPI = cheerio.load(response.data);
//     const links: string[] = fetchAvailableLinksWc($);

//     return { success: true, links };
//   } catch (error: any) {
//     logger.error(`Failed to initialize session: ${error.message}`);
//     return { success: false, links: [] };
//   }
// };

// const processGpwrkbilldtlUrl = async (
//   url: string,
//   financialYear: string,
//   workcode: string,
//   referer?: string
// ): Promise<ExtractedData | null> => {
//   try {
//     const response: AxiosResponse | null = await retryRequest(
//       url,
//       3,
//       1000,
//       referer
//     );
//     if (!response) {
//       return null;
//     }

//     const $: cheerio.CheerioAPI = cheerio.load(response.data);

//     // Extract ONLY the table data for the specific work code
//     const tableData: string[][] = extractTablesForWorkcode($, workcode);

//     if (tableData.length > 0) {
//       return extractDataFromTable(tableData, workcode);
//     }

//     return null;
//   } catch (error: any) {
//     logger.error(`Failed to fetch gpwrkbilldtl page: ${error.message}`);
//     return null;
//   }
// };

// // MAIN FUNCTION - Process financial years sequentially
// const mainGpwrkbilldtl = async (
//   requestData: RequestData
// ): Promise<ExtractedData | null> => {
//   const financialYears = generateFinancialYears(requestData.financialYear);
//   let finalResult: ExtractedData | null = null;

//   // Process each financial year
//   for (let i = 0; i < financialYears.length; i++) {
//     const financialYear = financialYears[i];

//     const mainUrl = generateUrl(requestData, financialYear);

//     // Clear cookies for each financial year
//     cookieStore = "";

//     const { success, links }: SessionResult = await initializeSession(mainUrl);
//     if (!success || !links.length) {
//       continue;
//     }

//     // Process the gpwrkbilldtl link
//     const extractedData = await processGpwrkbilldtlUrl(
//       links[0],
//       financialYear,
//       requestData.workCode,
//       mainUrl
//     );

//     if (extractedData && extractedData.materialData.length > 0) {
//       if (!finalResult) {
//         // First financial year with data
//         finalResult = extractedData;
//       } else {
//         // Merge materials from additional financial years
//         finalResult.materialData.push(...extractedData.materialData);
//       }
//     }
//   }

//   if (finalResult) {
//     return finalResult;
//   }

//   return null;
// };

// // Express route to trigger processing
// testingVendorScrape.post(
//   "/material-mis-v0/:id",
//   async (req: Request, res: Response<ApiResponse | ErrorResponse>) => {
//     try {
//       const totalStartTime: number = Date.now();
//       const { id } = req.params;
//       if (!id) {
//         res.status(400).json({
//           success: false,
//           error: "Work Detail ID is required",
//           code: "MISSING_ID"
//         });
//         return;
//       }
//       // Fetch work details from database
//       const workDetail = await prisma.workDetail.findUnique({
//         where: { id: id },
//         select: {
//           id: true,
//           workCode: true,
//           financialYear: true,
//           workName: true,
//           panchayat: true,
//           block: true,
//           estimatedPersonDays: true
//         }
//       });

//       if (!workDetail) {
//         res.status(404).json({
//           success: false,
//           error: "Work Detail not found",
//           code: "WORK_DETAIL_NOT_FOUND"
//         });
//         return;
//       }
//       const workCodeParts = workDetail.workCode.split("/");
//       const panchayatCode = workCodeParts[0];
//       const panchayatData = findPanchayatByCode(panchayatCode);

//       if (!panchayatData) {
//         res.status(404).json({
//           success: false,
//           error: `Panchayat data not found for code: ${panchayatCode}. Please add this panchayat to your constants file.`
//         });
//         return;
//       }

//       const requestData: RequestData = {
//         workCode: workDetail.workCode,
//         financialYear: workDetail.financialYear || "",
//         blockName: panchayatData.block_name_en,
//         blockCode: panchayatData.block_code,
//         panchayatName: panchayatData.panchayat_name_en || "",
//         panchayatCode: panchayatData.panchayat_code
//       };
//       // Validate required fields
//       if (
//         !requestData.workCode ||
//         !requestData.financialYear ||
//         !requestData.blockName ||
//         !requestData.blockCode ||
//         !requestData.panchayatName ||
//         !requestData.panchayatCode
//       ) {
//         return res.status(400).json({
//           error:
//             "Missing required fields: workCode, financialYear, blockName, blockCode, panchayatName, panchayatCode"
//         });
//       }

//       const extractedData = await mainGpwrkbilldtl(requestData);
//       const totalTime: number = (Date.now() - totalStartTime) / 1000;

//       if (extractedData) {
//         res.status(200).json({
//           message: "gpwrkbilldtl processing completed successfully",
//           totalTime,
//           data: extractedData
//         });
//       } else {
//         res.status(404).json({
//           error: "No data found for the specified work code and financial year"
//         });
//       }
//     } catch (error: any) {
//       logger.error(`Error in processing: ${error.message}`);
//       res.status(500).json({ error: "Internal server error" });
//     }
//   }
// );

// export default testingVendorScrape;
