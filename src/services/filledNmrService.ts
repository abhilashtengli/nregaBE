import axios from "axios";
import * as cheerio from "cheerio";
import { formatDate } from "../utils/formatDate";

export interface FilledNmrWorkerData {
  slNo: number;
  name: string;
  jobCardNo: string;
  totalAttendance: number;
  oneDayWage: number;
  pendingAmountByAttendance: number;
  totalCashPayment: number;
  bankName: string;
  wagelistNo: string;
  creditedDate: string;
  signature: string;
  attendanceBy: string;
}

export interface MusterRollData {
  musterRollNo: string;
  fromDate: string;
  toDate: string;
  data: FilledNmrWorkerData[];
}

export interface FilledNmrScrapedData {
  workersData: MusterRollData[];
  totalAttendanceCount: number;
  wage: number;
  totalWage: number;
}

// Helper function to add delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper function to retry requests
const retryRequest = async <T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delayMs: number = 2000
): Promise<T | null> => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      console.error(`Attempt ${i + 1} failed:`, error);
      if (i < retries - 1) {
        console.log(`Waiting ${delayMs}ms before retry...`);
        await delay(delayMs);
      }
    }
  }
  return null;
};

// Get unique mustroll numbers from filledEMusterRolls
export const getUniqueMusterRollNumbers = async (
  url: string
): Promise<string[]> => {
  const fetchData = async () => {
    const response = await axios.get(url, {
      timeout: 30000, // Increased timeout to 30 seconds
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Cache-Control": "no-cache",
        Pragma: "no-cache"
      }
    });
    return response;
  };

  try {
    const response = await retryRequest(fetchData);
    if (!response) {
      console.error("Failed to fetch muster roll numbers after retries");
      return [];
    }

    const $ = cheerio.load(response.data);
    const musterRollNumbers: Set<string> = new Set();

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
              musterRollNumbers.add(cells[mustrollIndex]);
            }
          });
      }
    });

    console.log(`Found ${musterRollNumbers.size} unique muster roll numbers`);
    return Array.from(musterRollNumbers);
  } catch (error) {
    console.error("Error getting unique muster roll numbers:", error);
    return [];
  }
};

// Scrape worker data from filledEMusterRolls for a specific mustroll number
export const scrapeFilledEMusterRollsData = async (
  url: string,
  musterRollNo: string
): Promise<{
  workers: Array<{
    jobCardNo: string;
    name: string;
    totalAttendance: number;
    totalAmount: number;
    creditedDate: string;
  }>;
  fromDate: string;
  toDate: string;
}> => {
  const fetchData = async () => {
    const response = await axios.get(url, {
      timeout: 30000, // Increased timeout
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Cache-Control": "no-cache",
        Pragma: "no-cache"
      }
    });
    return response;
  };

  try {
    const response = await retryRequest(fetchData);
    if (!response) {
      console.error(
        `Failed to fetch data for muster roll ${musterRollNo} after retries`
      );
      return { workers: [], fromDate: "", toDate: "" };
    }

    const $ = cheerio.load(response.data);
    const workers: Array<{
      jobCardNo: string;
      name: string;
      totalAttendance: number;
      totalAmount: number;
      creditedDate: string;
    }> = [];
    let fromDate = "";
    let toDate = "";

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
        headers.some((header) => header.includes("Total Attendance")) &&
        headers.some((header) => header.includes("Total Amount")) &&
        headers.some((header) => header.includes("Payment Date"))
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
        const dateFromIndex = headers.findIndex((header) =>
          header.includes("Date From")
        );
        const dateToIndex = headers.findIndex((header) =>
          header.includes("Date To")
        );
        const totalAttendanceIndex = headers.findIndex((header) =>
          header.includes("Total Attendance")
        );
        const totalAmountIndex = headers.findIndex((header) =>
          header.includes("Total Amount")
        );
        const paymentDateIndex = headers.findIndex((header) =>
          header.includes("Payment Date")
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

            if (
              cells.length >
                Math.max(
                  jobCardIndex,
                  applicantNameIndex,
                  mustrollIndex,
                  dateFromIndex,
                  dateToIndex,
                  totalAttendanceIndex,
                  totalAmountIndex,
                  paymentDateIndex
                ) &&
              cells[mustrollIndex] === musterRollNo
            ) {
              const jobCardNo = cells[jobCardIndex] || "";
              const name = cells[applicantNameIndex] || "";
              const totalAttendance =
                parseInt(cells[totalAttendanceIndex]) || 0;
              const totalAmount = parseInt(cells[totalAmountIndex]) || 0;
              const paymentDate = cells[paymentDateIndex] || "";

              // Handle date formatting
              const formattedDate = paymentDate ? formatDate(paymentDate) : "";
              const creditedDate =
                typeof formattedDate === "string"
                  ? formattedDate
                  : (formattedDate as any)?.formatted || "";

              // Get fromDate and toDate from the first matching row
              if (!fromDate && cells[dateFromIndex]) {
                const formattedFromDate = formatDate(cells[dateFromIndex]);
                fromDate =
                  typeof formattedFromDate === "string"
                    ? formattedFromDate
                    : (formattedFromDate as any)?.formatted || "";
              }
              if (!toDate && cells[dateToIndex]) {
                const formattedToDate = formatDate(cells[dateToIndex]);
                toDate =
                  typeof formattedToDate === "string"
                    ? formattedToDate
                    : (formattedToDate as any)?.formatted || "";
              }

              if (jobCardNo && name) {
                workers.push({
                  jobCardNo,
                  name,
                  totalAttendance,
                  totalAmount,
                  creditedDate
                });
              }
            }
          });
      }
    });

    console.log(
      `Found ${workers.length} workers for muster roll ${musterRollNo}`
    );
    return { workers, fromDate, toDate };
  } catch (error) {
    console.error("Error scraping filled e-muster rolls data:", error);
    return { workers: [], fromDate: "", toDate: "" };
  }
};

// Scrape wage list data from wageListFTO
export const scrapeWageListData = async (
  url: string,
  musterRollNo: string,
  jobCardNo: string
): Promise<{ wagelistNo: string; bankName: string }> => {
  const fetchData = async () => {
    const response = await axios.get(url, {
      timeout: 30000, // Increased timeout
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Cache-Control": "no-cache",
        Pragma: "no-cache"
      }
    });
    return response;
  };

  try {
    const response = await retryRequest(fetchData, 2, 1000); // Less retries for individual worker data
    if (!response) {
      console.error(`Failed to fetch wage list data for job card ${jobCardNo}`);
      return { wagelistNo: "", bankName: "" };
    }

    const $ = cheerio.load(response.data);
    let wagelistNo = "";
    let bankName = "";

    $("table").each((tableIndex, table) => {
      const $table = $(table);
      const headerRow = $table.find("tr").first();
      const headers = headerRow
        .find("th")
        .map((i, el) => $(el).text().trim())
        .get();

      if (
        headers.some((header) => header.includes("Job Card No.")) &&
        headers.some((header) => header.includes("Mustroll No.")) &&
        headers.some((header) => header.includes("Wage List No.")) &&
        headers.some((header) => header.includes("Bank_Name"))
      ) {
        const jobCardIndex = headers.findIndex((header) =>
          header.includes("Job Card No.")
        );
        const mustrollIndex = headers.findIndex((header) =>
          header.includes("Mustroll No.")
        );
        const wageListIndex = headers.findIndex((header) =>
          header.includes("Wage List No.")
        );
        const bankNameIndex = headers.findIndex((header) =>
          header.includes("Bank_Name")
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

            if (
              cells.length >
                Math.max(
                  jobCardIndex,
                  mustrollIndex,
                  wageListIndex,
                  bankNameIndex
                ) &&
              cells[mustrollIndex] === musterRollNo &&
              cells[jobCardIndex] === jobCardNo
            ) {
              wagelistNo = cells[wageListIndex] || "";
              bankName = cells[bankNameIndex] || "";
              return false; // Break the loop once found
            }
          });

        if (wagelistNo && bankName) {
          return false; // Break the table loop once found
        }
      }
    });

    return { wagelistNo, bankName };
  } catch (error) {
    console.error("Error scraping wage list data:", error);
    return { wagelistNo: "", bankName: "" };
  }
};

// Main function to scrape all filled NMR data
export const scrapeFilledNmrData = async (
  filledEMusterRollsUrl: string,
  wageListFTOUrl: string
): Promise<FilledNmrScrapedData> => {
  try {
    console.log("Starting filled NMR data scraping...");
    console.log("FilledEMusterRolls URL:", filledEMusterRollsUrl);
    console.log("WageListFTO URL:", wageListFTOUrl);

    // Step 1: Get all unique muster roll numbers
    const musterRollNumbers = await getUniqueMusterRollNumbers(
      filledEMusterRollsUrl
    );

    if (musterRollNumbers.length === 0) {
      console.log("No muster roll numbers found");
      return {
        workersData: [],
        totalAttendanceCount: 0,
        wage: 0,
        totalWage: 0
      };
    }

    console.log(
      `Processing ${musterRollNumbers.length} muster roll numbers:`,
      musterRollNumbers
    );

    const workersData: MusterRollData[] = [];
    let totalAttendanceCount = 0;
    let wage = 0;

    // Step 2: For each muster roll number, get data from both sources
    for (let i = 0; i < musterRollNumbers.length; i++) {
      const musterRollNo = musterRollNumbers[i];
      console.log(
        `\nProcessing muster roll ${i + 1}/${musterRollNumbers.length}: ${musterRollNo}`
      );

      // Add delay between muster roll processing to avoid rate limiting
      if (i > 0) {
        console.log("Waiting 2 seconds before next request...");
        await delay(2000);
      }

      // Get data from filledEMusterRolls
      const { workers, fromDate, toDate } = await scrapeFilledEMusterRollsData(
        filledEMusterRollsUrl,
        musterRollNo
      );

      if (workers.length === 0) {
        console.log(`No workers found for muster roll ${musterRollNo}`);
        continue;
      }

      const musterRollData: MusterRollData = {
        musterRollNo,
        fromDate,
        toDate,
        data: []
      };

      let slNo = 1;
      for (const worker of workers) {
        // Add small delay between worker requests
        if (slNo > 1) {
          await delay(500);
        }

        // Get wage list data for each worker
        const { wagelistNo, bankName } = await scrapeWageListData(
          wageListFTOUrl,
          musterRollNo,
          worker.jobCardNo
        );

        // Calculate wage per day
        const oneDayWage =
          worker.totalAttendance > 0
            ? Math.round(worker.totalAmount / worker.totalAttendance)
            : 0;

        // Set wage from the first valid calculation
        if (wage === 0 && oneDayWage > 0) {
          wage = oneDayWage;
          console.log(`Calculated wage per day: ${wage}`);
        }

        // Calculate pending and cash payment (both are same as per your requirement)
        const pendingAmountByAttendance = worker.totalAttendance * oneDayWage;
        const totalCashPayment = pendingAmountByAttendance;

        musterRollData.data.push({
          slNo: slNo++,
          name: worker.name,
          jobCardNo: worker.jobCardNo,
          totalAttendance: worker.totalAttendance,
          oneDayWage,
          pendingAmountByAttendance,
          totalCashPayment,
          bankName,
          wagelistNo,
          creditedDate: worker.creditedDate,
          signature: "",
          attendanceBy: ""
        });

        totalAttendanceCount += worker.totalAttendance;
      }

      if (musterRollData.data.length > 0) {
        workersData.push(musterRollData);
        console.log(
          `Added ${musterRollData.data.length} workers from muster roll ${musterRollNo}`
        );
      }
    }

    // Calculate total wage
    const totalWage = totalAttendanceCount * wage;

    console.log("\nScraping completed!");
    console.log(
      `Total workers: ${workersData.reduce((sum, mr) => sum + mr.data.length, 0)}`
    );
    console.log(`Total attendance: ${totalAttendanceCount}`);
    console.log(`Wage per day: ${wage}`);
    console.log(`Total wage: ${totalWage}`);

    return {
      workersData,
      totalAttendanceCount,
      wage,
      totalWage
    };
  } catch (error) {
    console.error("Error scraping filled NMR data:", error);
    return {
      workersData: [],
      totalAttendanceCount: 0,
      wage: 0,
      totalWage: 0
    };
  }
};
