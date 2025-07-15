import express, { Request, Response } from "express";
import axios from "axios";
import * as cheerio from "cheerio";
import { formatDate } from "../utils/formatDate";
import { prisma } from "@lib/prisma";

const blankNmrRouter = express.Router();

// Types/Interfaces
interface WorkerData {
  slNo: number;
  jobCardNo: string;
  familyHeadName: string;
  requestLetterFrom: string;
  accountNo: string;
}

interface MustrollGroup {
  mustrollNo: string;
  workers: WorkerData[];
}

interface NMRData {
  district: string;
  taluka: string;
  gramPanchayat: string;
  financialYear: string;
  workCode: string;
  workName: string;
  fromDate: string;
  toDate: string;
  technicalSanctionNo: string;
  technicalSanctionDate: string;
  financialSanctionNo: string;
  financialSanctionDate: string;
  masterRollNo: string;
  workerData: MustrollGroup[];
}

interface NMRResponse {
  success: boolean;
  data?: NMRData;
  message?: string;
  error?: string;
  code?: string;
}

interface TechnicalSanctionData {
  technicalSanctionNo: string;
  technicalSanctionDate: string;
}

interface AdministrativeSanctionData {
  financialSanctionNo: string;
  financialSanctionDate: string;
}

// Helper function to ensure date is properly formatted
const ensureFormattedDate = (dateValue: string): string => {
  if (!dateValue) return "";

  // If it's already in DD/MM/YYYY format, return as is
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateValue)) {
    return dateValue;
  }

  // If it's an ISO string or needs formatting
  const formatted = formatDate(dateValue);
  return typeof formatted === "string"
    ? formatted
    : (formatted as any)?.formatted || "";
};

// Scraping function for technical sanction
const scrapeTechnicalSanction = async (
  url: string,
  workCode: string
): Promise<TechnicalSanctionData | null> => {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      }
    });

    const $ = cheerio.load(response.data);
    let technicalSanctionData: TechnicalSanctionData | null = null;

    $("table").each((tableIndex, table) => {
      const $table = $(table);
      const headerRow = $table.find("tr").first();
      const headers = headerRow
        .find("th")
        .map((i, el) => $(el).text().trim())
        .get();

      if (
        headers.some((header) => header.includes("Technical Sanction No.")) &&
        headers.some((header) => header.includes("Sanction Date"))
      ) {
        $table
          .find("tr")
          .slice(1)
          .each((rowIndex, row) => {
            const $row = $(row);
            const cells = $row
              .find("td")
              .map((i, el) => $(el).text().trim())
              .get();

            if (cells.length >= 5 && cells[1] === workCode) {
              const technicalSanctionNo = cells[3] || "";
              const sanctionDateRaw = cells[4] || "";

              // Handle formatDate return type properly
              const formattedDate = sanctionDateRaw
                ? formatDate(sanctionDateRaw)
                : "";
              const technicalSanctionDate =
                typeof formattedDate === "string"
                  ? formattedDate
                  : (formattedDate as any)?.formatted || "";

              if (technicalSanctionNo && technicalSanctionDate) {
                technicalSanctionData = {
                  technicalSanctionNo,
                  technicalSanctionDate
                };
              }
            }
          });
      }
    });

    return technicalSanctionData;
  } catch (error) {
    console.error("Error scraping technical sanction:", error);
    return null;
  }
};

// Scraping function for administrative sanction
const scrapeAdministrativeSanction = async (
  url: string,
  workCode: string
): Promise<AdministrativeSanctionData | null> => {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      }
    });

    const $ = cheerio.load(response.data);
    let administrativeSanctionData: AdministrativeSanctionData | null = null;

    $("table").each((tableIndex, table) => {
      const $table = $(table);
      const headerRow = $table.find("tr").first();
      const headers = headerRow
        .find("th")
        .map((i, el) => $(el).text().trim())
        .get();

      if (
        headers.some((header) =>
          header.includes("Financial\\Administrative Sanction No.")
        ) &&
        headers.some((header) =>
          header.includes("Financial\\Administrative Sanction Date")
        )
      ) {
        $table
          .find("tr")
          .slice(1)
          .each((rowIndex, row) => {
            const $row = $(row);
            const cells = $row
              .find("td")
              .map((i, el) => $(el).text().trim())
              .get();

            if (cells.length >= 5 && cells[1] === workCode) {
              const financialSanctionNo = cells[3] || "";
              const sanctionDateRaw = cells[4] || "";

              // Handle formatDate return type properly
              const formattedDate = sanctionDateRaw
                ? formatDate(sanctionDateRaw)
                : "";
              const financialSanctionDate =
                typeof formattedDate === "string"
                  ? formattedDate
                  : (formattedDate as any)?.formatted || "";

              if (financialSanctionNo && financialSanctionDate) {
                administrativeSanctionData = {
                  financialSanctionNo,
                  financialSanctionDate
                };
              }
            }
          });
      }
    });

    return administrativeSanctionData;
  } catch (error) {
    console.error("Error scraping administrative sanction:", error);
    return null;
  }
};

// Scraping function to get unique mustroll numbers
const getUniqueMustrollNumbers = async (url: string): Promise<string[]> => {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      }
    });

    const $ = cheerio.load(response.data);
    const mustrollNumbers: Set<string> = new Set();

    $("table").each((tableIndex, table) => {
      const $table = $(table);
      const headerRow = $table.find("tr").first();
      const headers = headerRow
        .find("th")
        .map((i, el) => $(el).text().trim())
        .get();

      if (headers.some((header) => header.includes("Mustroll No."))) {
        const mustrollIndex = headers.findIndex((header) =>
          header.includes("Mustroll No.")
        );

        $table
          .find("tr")
          .slice(1)
          .each((rowIndex, row) => {
            const $row = $(row);
            const cells = $row
              .find("td")
              .map((i, el) => $(el).text().trim())
              .get();

            if (cells.length > mustrollIndex && cells[mustrollIndex]) {
              mustrollNumbers.add(cells[mustrollIndex]);
            }
          });
      }
    });

    return Array.from(mustrollNumbers);
  } catch (error) {
    console.error("Error getting unique mustroll numbers:", error);
    return [];
  }
};

// Scraping function to get worker data for a specific mustroll number
const getWorkerDataByMustroll = async (
  url: string,
  mustrollNo: string
): Promise<WorkerData[]> => {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      }
    });

    const $ = cheerio.load(response.data);
    const workers: WorkerData[] = [];

    $("table").each((tableIndex, table) => {
      const $table = $(table);
      const headerRow = $table.find("tr").first();
      const headers = headerRow
        .find("th")
        .map((i, el) => $(el).text().trim())
        .get();

      if (
        headers.some((header) => header.includes("Job Card No.")) &&
        headers.some((header) => header.includes("Applicant Name")) &&
        headers.some((header) => header.includes("Mustroll No.")) &&
        headers.some((header) => header.includes("Bank_Name")) &&
        headers.some((header) => header.includes("WG APB CR ACCOUNT"))
      ) {
        const jobCardIndex = headers.findIndex((header) =>
          header.includes("Job Card No.")
        );
        const applicantNameIndex = headers.findIndex((header) =>
          header.includes("Applicant Name")
        );
        const mustrollIndex = headers.findIndex((header) =>
          header.includes("Mustroll No.")
        );
        const bankNameIndex = headers.findIndex((header) =>
          header.includes("Bank_Name")
        );
        const accountIndex = headers.findIndex((header) =>
          header.includes("WG APB CR ACCOUNT")
        );

        let slNo = 1;
        $table
          .find("tr")
          .slice(1)
          .each((rowIndex, row) => {
            const $row = $(row);
            const cells = $row
              .find("td")
              .map((i, el) => $(el).text().trim())
              .get();

            if (
              cells.length >
                Math.max(
                  jobCardIndex,
                  applicantNameIndex,
                  mustrollIndex,
                  bankNameIndex,
                  accountIndex
                ) &&
              cells[mustrollIndex] === mustrollNo
            ) {
              const jobCardNo = cells[jobCardIndex] || "";
              const familyHeadName = cells[applicantNameIndex] || "";
              const bankName = cells[bankNameIndex] || "";
              const account = cells[accountIndex] || "";
              const accountNo =
                bankName && account ? `${bankName} ${account}` : "";

              if (jobCardNo && familyHeadName && accountNo) {
                workers.push({
                  slNo: slNo++,
                  jobCardNo,
                  familyHeadName,
                  requestLetterFrom: familyHeadName, // Using same as family head name
                  accountNo
                });
              }
            }
          });
      }
    });

    return workers;
  } catch (error) {
    console.error("Error getting worker data by mustroll:", error);
    return [];
  }
};

// Main API endpoint
blankNmrRouter.get("/get-blanknmr/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Validate ID parameter
    if (!id) {
      res.status(400).json({
        success: false,
        error: "Work Detail ID is required",
        code: "MISSING_ID"
      } as NMRResponse);
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
        district: true,
        financialYear: true,
        workName: true
      }
    });

    if (!workDetail) {
      res.status(404).json({
        success: false,
        error: "Work Detail not found",
        code: "WORK_DETAIL_NOT_FOUND"
      } as NMRResponse);
      return;
    }

    // Fetch work documents to get required links
    const workDocument = await prisma.workDocuments.findFirst({
      where: { workCode: workDetail.workCode },
      select: {
        id: true,
        workCode: true,
        technicalSanction: true,
        administrativeSanction: true,
        wageListFTO: true
      }
    });

    if (!workDocument) {
      res.status(404).json({
        success: false,
        error: "Work Document not found",
        code: "WORK_DOCUMENT_NOT_FOUND"
      } as NMRResponse);
      return;
    }

    // Initialize default values
    let technicalSanctionData: TechnicalSanctionData = {
      technicalSanctionNo: "",
      technicalSanctionDate: ""
    };

    let administrativeSanctionData: AdministrativeSanctionData = {
      financialSanctionNo: "",
      financialSanctionDate: ""
    };

    let workerData: MustrollGroup[] = [];
    let masterRollNo = "";
    let fromDate = "";
    let toDate = "";

    // Scrape technical sanction data
    if (workDocument.technicalSanction) {
      const scrapedTechnicalData = await scrapeTechnicalSanction(
        workDocument.technicalSanction,
        workDetail.workCode
      );
      if (scrapedTechnicalData) {
        technicalSanctionData = scrapedTechnicalData;
      }
    }

    // Scrape administrative sanction data
    if (workDocument.administrativeSanction) {
      const scrapedAdministrativeData = await scrapeAdministrativeSanction(
        workDocument.administrativeSanction,
        workDetail.workCode
      );
      if (scrapedAdministrativeData) {
        administrativeSanctionData = scrapedAdministrativeData;
      }
    }

    // Scrape wage list FTO data
    if (workDocument.wageListFTO) {
      // Get unique mustroll numbers
      const allMustroll = await getUniqueMustrollNumbers(
        workDocument.wageListFTO
      );

      if (allMustroll.length > 0) {
        masterRollNo = allMustroll[0]; // Use first mustroll as master roll no

        // Get worker data for each mustroll number
        for (const mustrollNo of allMustroll) {
          const workers = await getWorkerDataByMustroll(
            workDocument.wageListFTO,
            mustrollNo
          );

          if (workers.length > 0) {
            workerData.push({
              mustrollNo,
              workers
            });

            // Set date range from first worker's data if available
            if (!fromDate && !toDate) {
              // Format current date immediately to DD/MM/YYYY
              const today = new Date();
              const day = today.getDate().toString().padStart(2, "0");
              const month = (today.getMonth() + 1).toString().padStart(2, "0");
              const year = today.getFullYear();

              const formattedCurrentDate = `${day}/${month}/${year}`;
              fromDate = formattedCurrentDate;
              toDate = formattedCurrentDate;
            }
          }
        }
      }
    }

    // If no worker data found
    if (workerData.length === 0) {
      res.status(404).json({
        success: false,
        error: "No worker data found in the scraped content",
        code: "NO_WORKER_DATA_FOUND"
      } as NMRResponse);
      return;
    }

    // Prepare the response data with properly formatted dates
    const nmrData: NMRData = {
      district: workDetail.district,
      taluka: workDetail.block,
      gramPanchayat: workDetail.panchayat,
      financialYear: workDetail.financialYear || "",
      workCode: workDetail.workCode,
      workName: workDetail.workName || "",
      fromDate: fromDate, // Already formatted above
      toDate: toDate, // Already formatted above
      technicalSanctionNo: technicalSanctionData.technicalSanctionNo,
      technicalSanctionDate: technicalSanctionData.technicalSanctionDate,
      financialSanctionNo: administrativeSanctionData.financialSanctionNo,
      financialSanctionDate: administrativeSanctionData.financialSanctionDate,
      masterRollNo: masterRollNo,
      workerData: workerData
    };

    res.status(200).json({
      success: true,
      data: nmrData,
      message: "NMR data retrieved successfully"
    } as NMRResponse);
  } catch (error: any) {
    console.error("Error in get-nmr endpoint:", error);

    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        res.status(408).json({
          success: false,
          error: "Request timeout while fetching data",
          code: "REQUEST_TIMEOUT"
        } as NMRResponse);
        return;
      }
      if (error.response?.status === 404) {
        res.status(404).json({
          success: false,
          error: "External URL not accessible",
          code: "EXTERNAL_URL_NOT_FOUND"
        } as NMRResponse);
        return;
      }
    }

    res.status(500).json({
      success: false,
      error: error.message || "Internal server error",
      code: "FETCH_NMR_ERROR"
    } as NMRResponse);
  }
});

export default blankNmrRouter;
