import axios from "axios";
import * as cheerio from "cheerio";
import dotenv from "dotenv";
dotenv.config();

export interface MaterialVoucherData {
  vendorName: string;
  billDate: string;
  financialYear: string;
}

// Helper function to calculate financial year from bill date
const calculateFinancialYear = (billDate: string): string => {
  // Parse date in dd/mm/yyyy format
  const [day, month, year] = billDate.split("/").map(Number);

  // March (month 3) is the last month of financial year
  // If month <= 3, then financial year is (year-1)-(year)
  // If month > 3, then financial year is (year)-(year+1)

  if (month <= 3) {
    return `${year - 1}-${year}`;
  } else {
    return `${year}-${year + 1}`;
  }
};

// export const scrapeMaterialVoucherData = async (
//   url: string
// ): Promise<MaterialVoucherData | null> => {
//   try {
//     const response = await axios.get(url, {
//       headers: {
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
//       }
//     });

//     const $ = cheerio.load(response.data);

//     // Find the first data row (skip header row)
//     let firstDataRow: any = null;

//     $("table tr").each((index, element) => {
//       const row = $(element);
//       const cells = row.find("td");

//       // Skip header rows and empty rows
//       // Look for the first row with actual data (should have td elements)
//       if (cells.length > 0) {
//         // Check if this is a data row (not header)
//         const firstCell = cells.eq(0).text().trim();
//         if (firstCell && !isNaN(Number(firstCell))) {
//           // This appears to be a data row (starts with serial number)
//           firstDataRow = row;
//           return false; // Break the loop
//         }
//       }
//     });

//     if (!firstDataRow) {
//       throw new Error("No data rows found in material voucher table");
//     }

//     const cells = firstDataRow.find("td");

//     if (cells.length < 7) {
//       throw new Error("Invalid table structure - insufficient columns");
//     }

//     // Based on the HTML structure provided:
//     // Column 5 (index 5) = Bill Date
//     // Column 6 (index 6) = Vender Name and TIN-material wise
//     const billDate = cells.eq(5).text().trim();
//     const vendorName = cells.eq(6).text().trim();

//     if (!billDate || !vendorName) {
//       throw new Error("Required data (bill date or vendor name) not found");
//     }

//     // Calculate financial year from bill date
//     const financialYear = calculateFinancialYear(billDate);

//     return {
//       vendorName,
//       billDate,
//       financialYear
//     };
//   } catch (error: any) {
//     console.error(`Error scraping material voucher data: ${error.message}`);
//     return null;
//   }
// };

// Alternative scraper if you need to get data from a specific work code row

export const scrapeMaterialVoucherData = async (
  url: string
): Promise<MaterialVoucherData | null> => {
  // Helper function to modify financial year in URL
  const modifyFinancialYear = (
    url: string,
    forward: boolean = true
  ): string => {
    const urlObj = new URL(url);
    const currentFinYear = urlObj.searchParams.get("Fin_Year");

    if (!currentFinYear) {
      throw new Error("Financial year not found in URL");
    }

    // Parse the financial year (e.g., "2024-2025")
    const [startYear, endYear] = currentFinYear.split("-").map(Number);

    let newStartYear, newEndYear;
    if (forward) {
      // Move forward by one year
      newStartYear = startYear + 1;
      newEndYear = endYear + 1;
    } else {
      // Move backward by one year (if needed in future)
      newStartYear = startYear - 1;
      newEndYear = endYear - 1;
    }

    const newFinYear = `${newStartYear}-${newEndYear}`;
    urlObj.searchParams.set("Fin_Year", newFinYear);

    // Remove the Digest parameter when changing financial year
    urlObj.searchParams.delete("Digest");

    return urlObj.toString();
  };

  // Helper function to attempt scraping
  const attemptScraping = async (
    scrapeUrl: string
  ): Promise<MaterialVoucherData | null> => {
    try {
      // const response = await axios.get(scrapeUrl, {
      //   headers: {
      //     "User-Agent":
      //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      //   }
      // });
      const response = await axios.get("http://api.scraperapi.com", {
        params: {
          api_key: process.env.SCRAPER_API_KEY,
          url: scrapeUrl,
          keep_headers: "true"
        },
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml"
        }
      });

      console.log("Form 32 Response : ", response);

      const $ = cheerio.load(response.data);

      // Find the first data row (skip header row)
      let firstDataRow: any = null;

      $("table tr").each((index, element) => {
        const row = $(element);
        const cells = row.find("td");

        // Skip header rows and empty rows
        // Look for the first row with actual data (should have td elements)
        if (cells.length > 0) {
          // Check if this is a data row (not header)
          const firstCell = cells.eq(0).text().trim();
          if (firstCell && !isNaN(Number(firstCell))) {
            // This appears to be a data row (starts with serial number)
            firstDataRow = row;
            return false; // Break the loop
          }
        }
      });

      if (!firstDataRow) {
        return null; // No data found, will try next year
      }

      const cells = firstDataRow.find("td");

      if (cells.length < 7) {
        throw new Error("Invalid table structure - insufficient columns");
      }

      // Based on the HTML structure provided:
      // Column 5 (index 5) = Bill Date
      // Column 6 (index 6) = Vender Name and TIN-material wise
      const billDate = cells.eq(5).text().trim();
      const vendorName = cells.eq(6).text().trim();

      if (!billDate || !vendorName) {
        throw new Error("Required data (bill date or vendor name) not found");
      }

      // Calculate financial year from bill date
      const financialYear = calculateFinancialYear(billDate);

      return {
        vendorName,
        billDate,
        financialYear
      };
    } catch (error: any) {
      console.error(`Error during scraping attempt: ${error.message}`);
      return null;
    }
  };

  try {
    // First attempt with the original URL
    console.log(`Attempting to scrape data from original URL: ${url}`);
    let result = await attemptScraping(url);

    if (result) {
      console.log("Data found with original financial year");
      return result;
    }

    // If no data found, try with next financial year
    console.log(
      "No data found with original financial year, trying next year..."
    );
    const modifiedUrl = modifyFinancialYear(url, true);
    console.log(`Attempting to scrape data from modified URL: ${modifiedUrl}`);

    result = await attemptScraping(modifiedUrl);

    if (result) {
      console.log("Data found with next financial year");
      return result;
    }

    // If still no data found, throw error
    throw new Error(
      "No data found in material voucher table for current or next financial year"
    );
  } catch (error: any) {
    console.error(`Error scraping material voucher data: ${error.message}`);
    return null;
  }
};

export const scrapeMaterialVoucherDataByWorkCode = async (
  url: string,
  workCode: string
): Promise<MaterialVoucherData | null> => {
  try {
    // const response = await axios.get(url, {
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    //   }
    // });
    const response = await axios.get("http://api.scraperapi.com", {
      params: {
        api_key: process.env.SCRAPER_API_KEY,
        url: url,
        keep_headers: "true"
      },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml"
      }
    });

    const $ = cheerio.load(response.data);

    // Find the table row that contains the specific work code
    let targetRow: any = null;

    $("table tr").each((index, element) => {
      const row = $(element);
      const cells = row.find("td");

      if (cells.length > 1) {
        // Check if work code is in the second column (Work Name column)
        const workNameCell = cells.eq(1).text().trim();
        if (workNameCell.includes(workCode)) {
          targetRow = row;
          return false; // Break the loop
        }
      }
    });

    if (!targetRow) {
      throw new Error(
        `Work code ${workCode} not found in material voucher data`
      );
    }

    const cells = targetRow.find("td");

    if (cells.length < 7) {
      throw new Error("Invalid table structure - insufficient columns");
    }

    const billDate = cells.eq(5).text().trim();
    const vendorName = cells.eq(6).text().trim();

    if (!billDate || !vendorName) {
      throw new Error("Required data (bill date or vendor name) not found");
    }

    const financialYear = calculateFinancialYear(billDate);

    return {
      vendorName,
      billDate,
      financialYear
    };
  } catch (error: any) {
    console.error(`Error scraping material voucher data: ${error.message}`);
    return null;
  }
};
