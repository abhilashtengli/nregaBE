import axios from "axios";
import * as cheerio from "cheerio";
import dotenv from "dotenv";
import { proxyAgent } from "./ProxyService/proxyServiceAgent";
dotenv.config();
interface TechnicalEstimateData {
  approvedInAnnualPlan: string;
  includedInPerspectivePlan: string;
}

export interface AdministractionSanctionData {
  administrativeSanctionNo: string;
  administrativeSanctionDate: string;
}
export const scrapeAdministrativeSanctionNumber = async (
  url: string,
  workCode: string
): Promise<AdministractionSanctionData | null> => {
  try {
    // const response = await axios.get(url, {
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    //   }
    // });
    const response = await axios.get(url, {
      httpsAgent: proxyAgent
    });

    const $ = cheerio.load(response.data);

    let targetRowElement: any = null;

    $("table tr").each((index, element) => {
      const row = $(element);
      const cells = row.find("td");

      if (cells.length > 1) {
        const rowWorkCode = cells.eq(1).text().trim();

        if (rowWorkCode === workCode) {
          targetRowElement = element;
          return false;
        }
      }
    });

    if (!targetRowElement) {
      return null;
    }

    const targetRow = $(targetRowElement);
    const cells = targetRow.find("td");

    if (cells.length < 5) {
      return null;
    }

    return {
      administrativeSanctionNo: cells.eq(3).text().trim(),
      administrativeSanctionDate: cells.eq(4).text().trim()
    };
  } catch (error) {
    console.error("Error scraping administrative sanction:", error);
    return null;
  }
};

export async function scrapeGpAbstractTechnicalEstimate(
  technicalEstimateUrl: string,
  workCode: string
): Promise<TechnicalEstimateData | null> {
  try {
    // Fetch the HTML content
    // const response = await axios.get(technicalEstimateUrl, {
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    //   },
    // });
    // const response = await axios.get("http://api.scraperapi.com", {
    //   params: {
    //     api_key: process.env.SCRAPER_API_KEY,
    //     url: technicalEstimateUrl,
    //     keep_headers: "true",
    //   },
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0.0.0 Safari/537.36",
    //     Accept: "text/html,application/xhtml+xml"
    //   }
    // });
    const response = await axios.get(technicalEstimateUrl, {
      httpsAgent: proxyAgent
    });

    if (response.status !== 200) {
      console.error(
        `Failed to fetch technical estimate for work code: ${workCode}. Status: ${response.status}`
      );
      return null;
    }

    // Load the HTML into cheerio
    const $ = cheerio.load(response.data);

    // Extract "Included in Annual Plan" value
    // Looking for span with id "ctl00_ContentPlaceHolder1_lblanual_text"
    const approvedInAnnualPlan =
      $("#ctl00_ContentPlaceHolder1_lblanual_text").text().trim() || "No";

    // Extract "Perspective Plan" value
    // Looking for span with id "ctl00_ContentPlaceHolder1_lblplan_text"
    const includedInPerspectivePlan =
      $("#ctl00_ContentPlaceHolder1_lblplan_text").text().trim() || "No";

    return {
      approvedInAnnualPlan,
      includedInPerspectivePlan
    };
  } catch (error) {
    console.error(
      `Error scraping technical estimate for work code ${workCode}:`,
      error
    );

    if (axios.isAxiosError(error)) {
      if (error.code === "ETIMEDOUT") {
        console.error("Request timed out");
      } else if (error.response) {
        console.error("Server responded with error:", error.response.status);
      } else if (error.request) {
        console.error("No response received from server");
      }
    }

    return null;
  }
}

// Alternative implementation with more robust error handling and retry logic
export async function scrapeTechnicalEstimateWithRetry(
  technicalEstimateUrl: string,
  workCode: string,
  maxRetries: number = 3
): Promise<TechnicalEstimateData | null> {
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      attempt++;

      // const response = await axios.get(technicalEstimateUrl, {
      //   headers: {
      //     "User-Agent":
      //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      //     Accept:
      //       "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      //     "Accept-Language": "en-US,en;q=0.5",
      //     "Cache-Control": "no-cache",
      //     Pragma: "no-cache"
      //   },
      //   validateStatus: (status) => status < 500 // Don't throw for 4xx errors
      // });
      // const response = await axios.get("http://api.scraperapi.com", {
      //   params: {
      //     api_key: process.env.SCRAPER_API_KEY,
      //     url: technicalEstimateUrl,
      //     keep_headers: "true"
      //   },
      //   headers: {
      //     "User-Agent":
      //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0.0.0 Safari/537.36",
      //     Accept: "text/html,application/xhtml+xml"
      //   },
      //   validateStatus: (status) => status < 500 // Don't throw for 4xx errors
      // });
      const response = await axios.get(technicalEstimateUrl, {
        httpsAgent: proxyAgent,
        validateStatus: (status) => status < 500 // Don't throw for 4xx errors
      });

      if (response.status !== 200) {
        console.error(
          `Failed to fetch technical estimate for work code: ${workCode}. Status: ${response.status}`
        );
        if (response.status >= 400 && response.status < 500) {
          // Client error, don't retry
          return null;
        }
        throw new Error(`Server error: ${response.status}`);
      }

      const $ = cheerio.load(response.data);

      // Extract values with fallback options
      let approvedInAnnualPlan = $("#ctl00_ContentPlaceHolder1_lblanual_text")
        .text()
        .trim();
      let includedInPerspectivePlan = $(
        "#ctl00_ContentPlaceHolder1_lblplan_text"
      )
        .text()
        .trim();

      // If the IDs don't work, try alternative selectors
      if (!approvedInAnnualPlan) {
        // Try finding by text content
        $("span").each((i, elem) => {
          const text = $(elem).text();
          if (text.includes("Included in Annual Plan")) {
            const nextSpan = $(elem).next("span");
            if (nextSpan.length) {
              approvedInAnnualPlan = nextSpan.text().trim();
            }
          }
        });
      }

      if (!includedInPerspectivePlan) {
        // Try finding by text content
        $("span").each((i, elem) => {
          const text = $(elem).text();
          if (text.includes("Perspective Plan")) {
            const nextSpan = $(elem).next("span");
            if (nextSpan.length) {
              includedInPerspectivePlan = nextSpan.text().trim();
            }
          }
        });
      }

      // Default to 'No' if still empty
      approvedInAnnualPlan = approvedInAnnualPlan || "No";
      includedInPerspectivePlan = includedInPerspectivePlan || "No";

      return {
        approvedInAnnualPlan,
        includedInPerspectivePlan
      };
    } catch (error) {
      console.error(
        `Attempt ${attempt} failed for work code ${workCode}:`,
        error
      );

      if (attempt >= maxRetries) {
        console.error(
          `Max retries (${maxRetries}) reached for work code ${workCode}`
        );
        return null;
      }

      // Wait before retrying (exponential backoff)
      const waitTime = Math.min(1000 * Math.pow(2, attempt - 1), 10000);
      await new Promise((resolve) => setTimeout(resolve, waitTime));
    }
  }

  return null;
}

// --------------------------------------------------------

interface MusterRollData {
  musterRollNumbers: Record<string, number>; // { musterRollNo: totalAmount }
  unskilledPersonDays: number;
  totalPersons: number;
}

interface MusterRollRow {
  srNo: number;
  workCode: string;
  jobCardNo: string;
  applicantNo: string;
  applicantName: string;
  musterRollNo: string;
  dateFrom: string;
  dateTo: string;
  totalAttendance: number;
  totalAmount: number;
  paymentDate: string;
}

export async function scrapeMusterRolls(
  filledEMusterRollsUrl: string,
  workCode: string
): Promise<MusterRollData | null> {
  try {
    // Fetch the HTML content
    // const response = await axios.get(filledEMusterRollsUrl, {
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    //   }
    // });
    // const response = await axios.get("http://api.scraperapi.com", {
    //   params: {
    //     api_key: process.env.SCRAPER_API_KEY,
    //     url: filledEMusterRollsUrl,
    //     keep_headers: "true"
    //   },
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0.0.0 Safari/537.36",
    //     Accept: "text/html,application/xhtml+xml"
    //   }
    // });
    const response = await axios.get(filledEMusterRollsUrl, {
      httpsAgent: proxyAgent
    });

    if (response.status !== 200) {
      console.error(
        `Failed to fetch muster rolls for work code: ${workCode}. Status: ${response.status}`
      );
      return null;
    }

    const $ = cheerio.load(response.data);

    // Find the table with muster roll data
    const table = $("#ctl00_ContentPlaceHolder1_gvwdisplay");

    if (!table.length) {
      console.error(`Muster rolls table not found for work code: ${workCode}`);
      return null;
    }

    const rows: MusterRollRow[] = [];
    const musterRollNumbers: Record<string, number> = {};
    let unskilledPersonDays = 0;
    let totalPersons = 0;

    // Process each row (skip header row)
    table.find("tr").each((index, element) => {
      if (index === 0) return; // Skip header row

      const $row = $(element);
      const cells = $row.find("td");

      if (cells.length > 0) {
        const srNo = parseInt($(cells[0]).text().trim()) || 0;
        const musterRollNo = $(cells[5]).text().trim();
        const totalAttendance = parseInt($(cells[24]).text().trim()) || 0;
        const totalAmount = parseInt($(cells[25]).text().trim()) || 0;

        // Create row object
        const row: MusterRollRow = {
          srNo: srNo,
          workCode: $(cells[1]).text().trim(),
          jobCardNo: $(cells[2]).text().trim(),
          applicantNo: $(cells[3]).text().trim(),
          applicantName: $(cells[4]).text().trim(),
          musterRollNo: musterRollNo,
          dateFrom: $(cells[6]).text().trim(),
          dateTo: $(cells[7]).text().trim(),
          totalAttendance: totalAttendance,
          totalAmount: totalAmount,
          paymentDate: $(cells[26]).text().trim()
        };

        rows.push(row);

        // Initialize muster roll number if not exists
        if (musterRollNo && !musterRollNumbers.hasOwnProperty(musterRollNo)) {
          musterRollNumbers[musterRollNo] = 0;
        }

        // Sum up total attendance for unskilled person days
        unskilledPersonDays += totalAttendance;

        // Update total persons (using Sr. No.)
        if (srNo > totalPersons) {
          totalPersons = srNo;
        }
      }
    });

    // Now we need to process each unique muster roll number
    for (const musterRollNo of Object.keys(musterRollNumbers)) {
      // Sum up total amounts for this muster roll number
      const totalAmountForMusterRoll = rows
        .filter((row) => row.musterRollNo === musterRollNo)
        .reduce((sum, row) => sum + row.totalAmount, 0);

      musterRollNumbers[musterRollNo] = totalAmountForMusterRoll;
    }

    return {
      musterRollNumbers: musterRollNumbers,
      unskilledPersonDays: unskilledPersonDays,
      totalPersons: totalPersons
    };
  } catch (error) {
    console.error(
      `Error scraping muster rolls for work code ${workCode}:`,
      error
    );
    return null;
  }
}

// Enhanced version with pagination support (if the table has multiple pages)
export async function scrapeMusterRollsWithPagination(
  baseUrl: string,
  workCode: string,
  maxPages: number = 10
): Promise<MusterRollData | null> {
  try {
    const allRows: MusterRollRow[] = [];
    const musterRollNumbers: Record<string, number> = {};
    let unskilledPersonDays = 0;
    let totalPersons = 0;
    let currentPage = 1;
    let hasMorePages = true;

    while (hasMorePages && currentPage <= maxPages) {
      // Construct URL with page parameter (adjust based on actual pagination structure)
      const url = `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}page=${currentPage}`;

      // const response = await axios.get(url, {
      //   headers: {
      //     "User-Agent":
      //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      //   }
      // });
      // const response = await axios.get("http://api.scraperapi.com", {
      //   params: {
      //     api_key: process.env.SCRAPER_API_KEY,
      //     url: url,
      //     keep_headers: "true"
      //   },
      //   headers: {
      //     "User-Agent":
      //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0.0.0 Safari/537.36",
      //     Accept: "text/html,application/xhtml+xml"
      //   }
      // });
      const response = await axios.get(url, {
        httpsAgent: proxyAgent
      });

      if (response.status !== 200) {
        console.error(
          `Failed to fetch page ${currentPage} for work code: ${workCode}`
        );
        break;
      }

      const $ = cheerio.load(response.data);
      const table = $("#ctl00_ContentPlaceHolder1_gvwdisplay");

      if (!table.length) {
        break;
      }

      let rowsOnPage = 0;

      // Process each row on current page
      table.find("tr").each((index, element) => {
        if (index === 0) return; // Skip header

        const $row = $(element);
        const cells = $row.find("td");

        if (cells.length > 0) {
          rowsOnPage++;

          const srNo = parseInt($(cells[0]).text().trim()) || 0;
          const musterRollNo = $(cells[5]).text().trim();
          const totalAttendance = parseInt($(cells[24]).text().trim()) || 0;
          const totalAmount = parseInt($(cells[25]).text().trim()) || 0;

          const row: MusterRollRow = {
            srNo: srNo,
            workCode: $(cells[1]).text().trim(),
            jobCardNo: $(cells[2]).text().trim(),
            applicantNo: $(cells[3]).text().trim(),
            applicantName: $(cells[4]).text().trim(),
            musterRollNo: musterRollNo,
            dateFrom: $(cells[6]).text().trim(),
            dateTo: $(cells[7]).text().trim(),
            totalAttendance: totalAttendance,
            totalAmount: totalAmount,
            paymentDate: $(cells[26]).text().trim()
          };

          allRows.push(row);

          // Initialize muster roll number if not exists
          if (musterRollNo && !musterRollNumbers.hasOwnProperty(musterRollNo)) {
            musterRollNumbers[musterRollNo] = 0;
          }

          // Sum up total attendance
          unskilledPersonDays += totalAttendance;

          // Update total persons
          if (srNo > totalPersons) {
            totalPersons = srNo;
          }
        }
      });

      // Check if there are more pages (look for pagination controls)
      const nextPageLink =
        $('a:contains("Next")').length > 0 ||
        $(`a[href*="page=${currentPage + 1}"]`).length > 0;

      hasMorePages = rowsOnPage > 0 && nextPageLink;
      currentPage++;
    }

    // Calculate total amounts for each muster roll
    for (const musterRollNo of Object.keys(musterRollNumbers)) {
      const totalAmountForMusterRoll = allRows
        .filter((row) => row.musterRollNo === musterRollNo)
        .reduce((sum, row) => sum + row.totalAmount, 0);

      musterRollNumbers[musterRollNo] = totalAmountForMusterRoll;
    }

    return {
      musterRollNumbers: musterRollNumbers,
      unskilledPersonDays: unskilledPersonDays,
      totalPersons: totalPersons
    };
  } catch (error) {
    console.error(
      `Error scraping muster rolls with pagination for work code ${workCode}:`,
      error
    );
    return null;
  }
}

// Helper function to format the muster roll data for response
export function formatMusterRollData(musterRollData: MusterRollData | null): {
  musterRollsUsed: string;
  unskilledPersonDays: string;
  totalUnskilledPersons: string;
  musterRollDetails: Record<string, number>;
} {
  if (!musterRollData) {
    return {
      musterRollsUsed: "0",
      unskilledPersonDays: "0",
      totalUnskilledPersons: "0",
      musterRollDetails: {}
    };
  }

  return {
    musterRollsUsed: Object.keys(
      musterRollData.musterRollNumbers
    ).length.toString(),
    unskilledPersonDays: musterRollData.unskilledPersonDays.toString(),
    totalUnskilledPersons: musterRollData.totalPersons.toString(),
    musterRollDetails: musterRollData.musterRollNumbers
  };
}

// --------------------------------------------------------

interface GeotaggedPhotographsData {
  beforeLink: string;
  duringLink: string;
  afterLink: string;
}

/**
 * Modifies the before link URL according to the specified pattern:
 * - Adds '/object' after 'gov.in'
 * - Changes 'nrega_fdcs2' to 'nrega_fdc'
 */
function modifyBeforeLink(url: string): string {
  if (!url || url === "NA") return "NA";

  // Add /object after gov.in
  let modifiedUrl = url.replace("gov.in/", "gov.in/object/");

  // Change nrega_fdcs2 to nrega_fdc
  modifiedUrl = modifiedUrl.replace("nrega_fdcs2", "nrega_fdc");

  return modifiedUrl;
}

/**
 * Scrapes geotagged photographs from the provided URL
 * @param geotaggedPhotographsUrl - The URL to scrape
 * @param workCode - The work code for logging purposes
 * @returns GeotaggedPhotographsData object with before, during, and after links
 */
export async function scrapeGeotaggedPhotographs(
  geotaggedPhotographsUrl: string,
  workCode: string
): Promise<GeotaggedPhotographsData | null> {
  try {
    // Fetch the HTML content
    // const response = await axios.get(geotaggedPhotographsUrl, {
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    //   }
    // });
    // const response = await axios.get("http://api.scraperapi.com", {
    //   params: {
    //     api_key: process.env.SCRAPER_API_KEY,
    //     url: geotaggedPhotographsUrl,
    //     keep_headers: "true"
    //   },
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0.0.0 Safari/537.36",
    //     Accept: "text/html,application/xhtml+xml"
    //   }
    // });
    const response = await axios.get(geotaggedPhotographsUrl, {
      httpsAgent: proxyAgent
    });

    if (response.status !== 200) {
      console.error(
        `Failed to fetch geotagged photographs for work code: ${workCode}. Status: ${response.status}`
      );
      return null;
    }

    const $ = cheerio.load(response.data);

    // Find the table with geotagged photographs data
    const table = $("#ctl00_ContentPlaceHolder1_gvwdisplay");

    if (!table.length) {
      console.error(
        `Geotagged photographs table not found for work code: ${workCode}`
      );
      return null;
    }

    let beforeLink = "NA";
    let duringLink = "NA";
    let afterLink = "NA";

    // Find the first data row (skip header)
    const dataRow = table.find("tr").eq(1);

    if (dataRow.length) {
      const cells = dataRow.find("td");

      if (cells.length >= 7) {
        // Extract Before link (5th column, index 4)
        const beforeCell = $(cells[4]);
        const beforeAnchor = beforeCell.find("a");
        if (beforeAnchor.length && beforeAnchor.attr("href")) {
          const href = beforeAnchor.attr("href");
          if (href && !href.includes("NA")) {
            beforeLink = href;
          }
        }

        // Extract During link (6th column, index 5)
        const duringCell = $(cells[5]);
        const duringAnchor = duringCell.find("a");
        if (duringAnchor.length && duringAnchor.attr("href")) {
          const href = duringAnchor.attr("href");
          if (href && !href.includes("NA")) {
            duringLink = href;
          }
        }

        // Extract After link (7th column, index 6)
        const afterCell = $(cells[6]);
        const afterAnchor = afterCell.find("a");
        if (afterAnchor.length && afterAnchor.attr("href")) {
          const href = afterAnchor.attr("href");
          if (href && !href.includes("NA")) {
            afterLink = href;
          }
        }
      }
    }

    // Modify the before link according to the specified pattern
    if (beforeLink !== "NA") {
      beforeLink = modifyBeforeLink(beforeLink);
    }

    return {
      beforeLink,
      duringLink,
      afterLink
    };
  } catch (error) {
    console.error(
      `Error scraping geotagged photographs for work code ${workCode}:`,
      error
    );
    return null;
  }
}

/**
 * Helper function to validate image URLs
 * @param url - The URL to validate
 * @returns boolean indicating if the URL is valid
 */
export function isValidImageUrl(url: string): boolean {
  if (!url || url === "NA") return false;

  try {
    const urlObj = new URL(url);
    return urlObj.protocol === "http:" || urlObj.protocol === "https:";
  } catch {
    return false;
  }
}
