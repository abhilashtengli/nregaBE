// form6Service.ts
import axios from "axios";
import * as cheerio from "cheerio";
import { formatDate } from "../utils/formatDate";

export interface ApplicantData {
  slNo: number;
  applicantName: string;
  jobCardNo: string;
  childCareRequired: string;
  signature: string;
  workFrom: string; // Date when work starts
  workTo: string; // Date when work ends
}

export interface Form6Data {
  workCode: string;
  workName: string;
  gramPanchayat: string;
  taluka: string;
  district: string;
  applicationNumber: string;
  applicantsData: ApplicantData[];
  date: string;
}

export interface Form6Response {
  success: boolean;
  data?: Form6Data;
  message?: string;
  error?: string;
  code?: string;
}

// Scraping function for demand application form
export const scrapeDemandApplicationForm = async (
  url: string
): Promise<ApplicantData[]> => {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      }
    });

    const $ = cheerio.load(response.data);
    const applicantsData: ApplicantData[] = [];

    // Find the table with the labor data
    $("table").each((tableIndex, table) => {
      const $table = $(table);

      // Check if this table contains the expected headers
      const headerRow = $table.find("tr").first();
      const headers = headerRow
        .find("th")
        .map((i, el) => $(el).text().trim())
        .get();

      // Check if this is the correct table by looking for expected headers
      if (
        headers.some((header) => header.includes("Sr. No.")) &&
        headers.some((header) => header.includes("Applicant Name")) &&
        headers.some((header) => header.includes("Job Card No."))
      ) {
        // Process data rows (skip header row)
        $table
          .find("tr")
          .slice(1)
          .each((rowIndex, row) => {
            const $row = $(row);
            const cells = $row
              .find("td")
              .map((i, el) => $(el).text().trim())
              .get();

            // Make sure we have enough cells for the expected data
            if (cells.length >= 7) {
              const slNo = parseInt(cells[0]) || rowIndex + 1;
              const applicantName = cells[4] || "";
              const jobCardNo = cells[2] || "";
              const workDemandFrom = cells[5] || "";
              const workDemandTo = cells[6] || "";

              // Format work dates separately - ensure string output
              const workFromFormatted = workDemandFrom
                ? formatDate(workDemandFrom)
                : "";
              const workToFormatted = workDemandTo
                ? formatDate(workDemandTo)
                : "";

              const workFrom =
                typeof workFromFormatted === "string"
                  ? workFromFormatted
                  : workFromFormatted.formatted;
              const workTo =
                typeof workToFormatted === "string"
                  ? workToFormatted
                  : workToFormatted.formatted;

              // Only add if we have essential data
              if (applicantName && jobCardNo) {
                applicantsData.push({
                  slNo,
                  applicantName,
                  jobCardNo,
                  workFrom,
                  workTo,
                  childCareRequired: "ಇಲ್", // Default value
                  signature: "ಇಲ್" // Default value
                });
              }
            }
          });
      }
    });

    return applicantsData;
  } catch (error) {
    console.error("Error scraping demand application form:", error);
    return [];
  }
};
