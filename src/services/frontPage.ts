import axios from "axios";
import * as cheerio from "cheerio";
import dotenv from "dotenv";
dotenv.config();
interface TechnicalSanctionData {
  technicalSanctionNo: string;
  estimateLabourCharge: string;
  estimatedMaterialCharge: string;
  estimatedSkilledCost: string;
  estimatedSemiSkilledCost: string;
  contingencyCost: string;
}

interface AdministrativeSanctionData {
  financialSanctionAmount: string;
}

export async function scrapeTechnicalSanction(
  url: string,
  workCode: string
): Promise<TechnicalSanctionData> {
  try {
    // const response = await axios.get(url, {
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    //   }
    // });
    const response = await axios.get("http://api.scraperapi.com", {
      params: {
        api_key: process.env.SCRAPER_API_KEY,
        url: url,
        keep_headers: "true",
      },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml"
      }
    });

    const $ = cheerio.load(response.data);

    // Find the table row containing our work code
    let foundData: TechnicalSanctionData | null = null;

    // Look through all table rows
    $("table tr").each((rowIndex, row) => {
      const $row = $(row);
      const cells = $row.find("td");

      // Skip header rows and rows with insufficient columns
      if (cells.length < 10) return;

      // Check if this row contains our work code (usually in the second column)
      const rowWorkCode = $(cells[1]).text().trim();

      if (rowWorkCode === workCode) {
        // Extract data based on the HTML structure provided
        // Columns: Sr.No, Work Code, Work Name, Technical Sanction No, Sanction Date,
        // Unskilled (Rs.), Est. Material Cost (Rs.), Est. Skilled Cost (Rs.),
        // Est.Semi-Skilled Cost (Rs.), Contingency (Rs.)

        foundData = {
          technicalSanctionNo: $(cells[3]).text().trim() || "",
          estimateLabourCharge: $(cells[5]).text().trim() || "0",
          estimatedMaterialCharge: $(cells[6]).text().trim() || "0",
          estimatedSkilledCost: $(cells[7]).text().trim() || "0",
          estimatedSemiSkilledCost: $(cells[8]).text().trim() || "0",
          contingencyCost: $(cells[9]).text().trim() || "0"
        };

        return false; // Break the loop
      }
    });

    if (!foundData) {
      console.warn(
        `Work code ${workCode} not found in technical sanction data`
      );
      // Return default values instead of throwing error
      return {
        technicalSanctionNo: "",
        estimateLabourCharge: "0",
        estimatedMaterialCharge: "0",
        estimatedSkilledCost: "0",
        estimatedSemiSkilledCost: "0",
        contingencyCost: "0"
      };
    }

    return foundData;
  } catch (error) {
    console.error("Error scraping technical sanction:", error);
    // Return default values instead of throwing error
    return {
      technicalSanctionNo: "",
      estimateLabourCharge: "0",
      estimatedMaterialCharge: "0",
      estimatedSkilledCost: "0",
      estimatedSemiSkilledCost: "0",
      contingencyCost: "0"
    };
  }
}

// Helper function to scrape administrative sanction data
export async function scrapeAdministrativeSanction(
  url: string,
  workCode: string
): Promise<AdministrativeSanctionData> {
  try {
    // const response = await axios.get(url, {
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    //   }
    // });
    const response = await axios.get("http://api.scraperapi.com", {
      params: {
        api_key: process.env.SCRAPER_API_KEY,
        url: url,
        keep_headers: "true",
      },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml"
      }
    });

    const $ = cheerio.load(response.data);

    // Find the table row containing our work code
    let foundAmount = "0";

    // Look through all table rows
    $("table tr").each((rowIndex, row) => {
      const $row = $(row);
      const cells = $row.find("td");

      // Skip header rows and rows with insufficient columns
      if (cells.length < 6) return;

      // Check if this row contains our work code (usually in the second column)
      const rowWorkCode = $(cells[1]).text().trim();

      if (rowWorkCode === workCode) {
        // Extract data based on the HTML structure provided
        // Columns: Sr.No, Work Code, Work Name, Financial\Administrative Sanction No,
        // Financial\Administrative Sanction Date, Financial Sanction Amt.(in Rs)

        foundAmount = $(cells[5]).text().trim() || "0";
        return false; // Break the loop
      }
    });

    if (foundAmount === "0") {
      console.warn(
        `Work code ${workCode} not found in administrative sanction data`
      );
    }

    return {
      financialSanctionAmount: foundAmount
    };
  } catch (error) {
    console.error("Error scraping administrative sanction:", error);
    // Return default value instead of throwing error
    return {
      financialSanctionAmount: "0"
    };
  }
}
