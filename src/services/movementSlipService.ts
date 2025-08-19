import axios from "axios";
import * as cheerio from "cheerio";
import dotenv from "dotenv";
import { proxyAgent } from "./ProxyService/proxyServiceAgent";
dotenv.config();

type MustrollData = {
  mustrollNo: string;
  fromDate: string;
  toDate: string;
  paymentDate: string;
};

export async function scrapeMovementSlipData(
  filledEMusterRollsUrl: string
): Promise<MustrollData[] | null> {
  try {
    // Fetch the HTML content
    // const response = await axios.get(filledEMusterRollsUrl, {
    //   headers: {
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    //   },
    // });
    // const response = await axios.get("http://api.scraperapi.com", {
    // params: {
    //   api_key: process.env.SCRAPER_API_KEY,
    //   url: filledEMusterRollsUrl,
    //   keep_headers: "true",
    // },
    // headers: {
    //   "User-Agent":
    //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0.0.0 Safari/537.36",
    //   Accept: "text/html,application/xhtml+xml"
    // }
    // });
    const response = await axios.get(filledEMusterRollsUrl, {
      httpsAgent: proxyAgent
    });

    if (response.status !== 200) {
      console.error(`Failed to fetch muster rolls. Status: ${response.status}`);
      return null;
    }

    const $ = cheerio.load(response.data);

    // Find the table with muster roll data
    const table = $("#ctl00_ContentPlaceHolder1_gvwdisplay");

    if (!table.length) {
      console.error(`Muster rolls table not found`);
      return null;
    }

    // Map to store unique muster roll numbers with their dates
    const musterRollMap = new Map<
      string,
      {
        fromDate: string;
        toDate: string;
        paymentDate: string;
      }
    >();

    // Process each row (skip header row)
    table.find("tr").each((index, element) => {
      if (index === 0) return; // Skip header row

      const $row = $(element);
      const cells = $row.find("td");

      if (cells.length > 0) {
        const musterRollNo = $(cells[5]).text().trim();
        const dateFrom = $(cells[6]).text().trim();
        const dateTo = $(cells[7]).text().trim();
        const paymentDate = $(cells[26]).text().trim(); // Payment Date is at index 26

        // Only add if muster roll number is not empty and not already in map
        if (musterRollNo && !musterRollMap.has(musterRollNo)) {
          musterRollMap.set(musterRollNo, {
            fromDate: dateFrom,
            toDate: dateTo,
            paymentDate: paymentDate
          });
        }
      }
    });

    // Convert map to array format required by the response type
    const mustrollData: MustrollData[] = Array.from(
      musterRollMap.entries()
    ).map(([mustrollNo, dates]) => ({
      mustrollNo: mustrollNo,
      fromDate: dates.fromDate,
      toDate: dates.toDate,
      paymentDate: dates.paymentDate
    }));

    return mustrollData;
  } catch (error) {
    console.error(`Error scraping movement slip data:`, error);
    return null;
  }
}
