import axios from "axios";
import * as cheerio from "cheerio";
import { formatDate } from "../utils/formatDate";

export interface WorkerData {
  slNo: number;
  jobCardNo: string;
  familyHeadName: string;
  requestLetterFrom: string;
  accountNo: string;
  fromDate: string; // Added fromDate
  toDate: string;
}

export interface MustrollGroup {
  mustrollNo: string;
  workers: WorkerData[];
}

export interface NMRData {
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

export interface NMRResponse {
  success: boolean;
  data?: NMRData;
  message?: string;
  error?: string;
  code?: string;
}

export interface TechnicalSanctionData {
  technicalSanctionNo: string;
  technicalSanctionDate: string;
}

export interface AdministrativeSanctionData {
  financialSanctionNo: string;
  financialSanctionDate: string;
}
export const scrapeBlankNmrTechnicalSanction = async (
  url: string,
  workCode: string
): Promise<TechnicalSanctionData | null> => {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
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
                  technicalSanctionDate,
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
export const scrapeBlankNmrAdministrativeSanction = async (
  url: string,
  workCode: string
): Promise<AdministrativeSanctionData | null> => {
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
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
                  financialSanctionDate,
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
export const getUniqueMustrollNumbers = async (
  url: string
): Promise<string[]> => {
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
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
export const getWorkerDataByMustroll = async (
  url: string,
  mustrollNo: string
): Promise<WorkerData[]> => {
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
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
        headers.some((header) => header.includes("From Date")) &&
        headers.some((header) => header.includes("To Date")) &&
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
        const fromDateIndex = headers.findIndex((header) =>
          header.includes("From Date")
        );
        const toDateIndex = headers.findIndex((header) =>
          header.includes("To Date")
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
                  fromDateIndex,
                  toDateIndex,
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
              const fromDateRaw = cells[fromDateIndex] || "";
              const toDateRaw = cells[toDateIndex] || "";
              const formattedFromDate = fromDateRaw
                ? formatDate(fromDateRaw)
                : "";
              const formattedToDate = toDateRaw ? formatDate(toDateRaw) : "";
              const fromDate =
                typeof formattedFromDate === "string"
                  ? formattedFromDate
                  : (formattedFromDate as any)?.formatted || "";
              const toDate =
                typeof formattedToDate === "string"
                  ? formattedToDate
                  : (formattedToDate as any)?.formatted || "";

              if (jobCardNo && familyHeadName && accountNo) {
                workers.push({
                  slNo: slNo++,
                  jobCardNo,
                  familyHeadName,
                  requestLetterFrom: familyHeadName, // Using same as family head name
                  accountNo,
                  fromDate, // Added fromDate
                  toDate,
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
