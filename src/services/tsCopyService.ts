import axios from "axios";
import * as cheerio from "cheerio";
import { subtractOneDay } from "../utils/substractOneday";
import { formatDate } from "../utils/formatDate";

export interface TechnicalSanctionData {
  sanctionDate: string;
  sanctionDateFormatted: string;
  technicalSanctionNo: string;
  unskilledLabourCharges: string;
  estimateMaterialCost: string;
}

export interface AdministrativeSanctionData {
  sanctionedAmount: string;
  sanctionedAmountInWords: string;
  administrativeSanctionDate: string;
}

export interface TSCopyResponse {
  success: boolean;
  data?: {
    // Database fields (//1)
    workCode: string;
    financialYear: string;
    workName: string;
    gramPanchayat: string;
    blockPanchayat: string;
    estimatePersonDays: string;

    // External API fields (//3 and //4)
    sanctionDate: string;
    sanctionDateFormatted: string;
    technicalSanctionNo: string;
    unskilledLabourCharges: string;
    estimateMaterialCost: string;
    sanctionedAmount: string;
    sanctionedAmountInWords: string;
  };
  error?: string;
  code?: string;
  message?: string;
}

// Helper function to convert number to words
const numberToWords = (num: number): string => {
  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine"
  ];
  const teens = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen"
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety"
  ];
  const units = ["", "Thousand", "Lakh", "Crore"];

  if (num === 0) return "Zero";

  const convertHundreds = (n: number): string => {
    let result = "";

    if (n >= 100) {
      result += ones[Math.floor(n / 100)] + " Hundred ";
      n %= 100;
    }

    if (n >= 20) {
      result += tens[Math.floor(n / 10)] + " ";
      n %= 10;
    } else if (n >= 10) {
      result += teens[n - 10] + " ";
      return result;
    }

    if (n > 0) {
      result += ones[n] + " ";
    }

    return result;
  };

  let result = "";
  let croreValue = Math.floor(num / 10000000);
  let lakhValue = Math.floor((num % 10000000) / 100000);
  let thousandValue = Math.floor((num % 100000) / 1000);
  let hundredValue = num % 1000;

  if (croreValue > 0) {
    result += convertHundreds(croreValue) + "Crore ";
  }
  if (lakhValue > 0) {
    result += convertHundreds(lakhValue) + "Lakh ";
  }
  if (thousandValue > 0) {
    result += convertHundreds(thousandValue) + "Thousand ";
  }
  if (hundredValue > 0) {
    result += convertHundreds(hundredValue);
  }

  return result.trim() + " Rupees Only";
};

export const scrapeTSTechnicalSanction = async (
  url: string,
  workCode: string
): Promise<TechnicalSanctionData | null> => {
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    const $ = cheerio.load(response.data);

    // Find the table row that matches the work code
    let targetRow: any = null;

    $("table tr").each((index, element) => {
      const row = $(element);
      const cells = row.find("td");

      if (cells.length > 1) {
        const rowWorkCode = cells.eq(1).text().trim();
        if (rowWorkCode === workCode) {
          targetRow = row;
          return false; // Break the loop
        }
      }
    });

    if (!targetRow) {
      throw new Error(
        `Work code ${workCode} not found in technical sanction data`
      );
    }

    const cells = targetRow.find("td");

    if (cells.length < 7) {
      throw new Error("Invalid table structure in technical sanction data");
    }

    const technicalSanctionNo = cells.eq(3).text().trim();
    const sanctionDateRaw = cells.eq(4).text().trim();
    const unskilledLabourCharges = cells.eq(5).text().trim();
    const estimateMaterialCost = cells.eq(6).text().trim();

    const modifiedDate = subtractOneDay(sanctionDateRaw);
    const dateFormatted = formatDate(modifiedDate);

    return {
      sanctionDate: dateFormatted.original,
      sanctionDateFormatted: dateFormatted.formatted,
      technicalSanctionNo,
      unskilledLabourCharges,
      estimateMaterialCost
    };
  } catch (error) {
    return null;
  }
};

// Helper function to scrape administrative sanction data
export const scrapTSeAdministrativeSanction = async (
  url: string,
  workCode: string
): Promise<AdministrativeSanctionData | null> => {
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    const $ = cheerio.load(response.data);

    // Find the table row that matches the work code
    let targetRow: any = null;

    $("table tr").each((index, element) => {
      const row = $(element);
      const cells = row.find("td");

      if (cells.length > 1) {
        const rowWorkCode = cells.eq(1).text().trim();
        if (rowWorkCode === workCode) {
          targetRow = row;
          return false; // Break the loop
        }
      }
    });

    if (!targetRow) {
      throw new Error(
        `Work code ${workCode} not found in administrative sanction data`
      );
    }

    const cells = targetRow.find("td");

    if (cells.length < 6) {
      throw new Error(
        "Invalid table structure in administrative sanction data"
      );
    }

    const sanctionedAmountRaw = cells.eq(5).text().trim();
    const asDate = cells.eq(4).text().trim();
    const administrativeSanctionDate = formatDate(asDate);
    const sanctionedAmount = sanctionedAmountRaw.replace(/[^0-9]/g, "");
    const sanctionedAmountInWords = numberToWords(parseInt(sanctionedAmount));

    return {
      sanctionedAmount,
      sanctionedAmountInWords,
      administrativeSanctionDate: administrativeSanctionDate.formatted
    };
  } catch (error) {
    return null;
  }
};
