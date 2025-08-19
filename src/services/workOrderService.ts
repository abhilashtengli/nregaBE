import axios from "axios";
import * as cheerio from "cheerio";
import { proxyAgent } from "./ProxyService/proxyServiceAgent";

interface EMusterRollData {
  dateFrom: string;
  dateTo: string;
  mustrollNo: string;
  workCode: string;
}

export async function scrapeEMusterRollData(
  url: string
): Promise<EMusterRollData | null> {
  try {
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

    const $ = cheerio.load(response.data);

    // Find the first data row (skip header row)
    let foundData: EMusterRollData | null = null;

    // Look for the table with the muster roll data
    $("table tr").each((rowIndex, row) => {
      const $row = $(row);
      const cells = $row.find("td");

      // Skip header rows (they have th elements) and rows with insufficient columns
      if (cells.length < 10 || $row.find("th").length > 0) return;

      // Get the first data row (rowIndex 1 after header)
      if (rowIndex === 1 || (cells.length >= 26 && !foundData)) {
        foundData = {
          workCode: $(cells[1]).text().trim(),
          mustrollNo: $(cells[5]).text().trim(),
          dateFrom: $(cells[6]).text().trim(),
          dateTo: $(cells[7]).text().trim()
        };

        return false; // Break the loop once we found the first row
      }
    });

    if (!foundData) {
      console.warn("No e-Muster roll data found in the first row");
      return null;
    }

    return foundData;
  } catch (error) {
    console.error("Error scraping e-Muster roll data:", error);
    return null;
  }
}
