import * as cheerio from "cheerio";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

import {
  ScrapedWorkData,
  WorkDetailData,
  WorkDocumentsData
} from "../types/nrega";

export class MgnregaScraperService {
  private baseUrl = "https://mnregaweb4.nic.in/netnrega";

  /**
   * Scrapes work data from MGNREGA website
   * @param url - The complete URL to scrape
   * @returns Promise with scraped work data
   */
  async scrapeWorkData(url: string): Promise<ScrapedWorkData> {
    try {
      // Fetch the HTML content
      // const response = await axios.get(url, {
      //   headers: {
      //     "User-Agent":
      //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0.0.0 Safari/537.36",
      //     Accept: "text/html,application/xhtml+xml"
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

      // Extract location data first
      const locationData = this.extractLocationData($);

      // Extract work details from Table 1
      const workDetail = this.extractWorkDetails($, locationData);

      // Extract document links from Table 2
      const workDocuments = this.extractDocumentLinks($, workDetail.workCode);

      return {
        workDetail,
        workDocuments
      };
    } catch (error) {
      console.error("Error scraping MGNREGA data:", error);
      throw new Error(`Failed to scrape data: ${error}`);
    }
  }

  /**
   * Extracts location data from the header span
   * @param $ - Cheerio instance
   * @returns Object with state, district, block, and panchayat
   */
  private extractLocationData($: cheerio.CheerioAPI): {
    state: string;
    district: string;
    block: string;
    panchayat: string;
  } {
    const locationData = {
      state: "",
      district: "",
      block: "",
      panchayat: ""
    };

    try {
      // Find the span with location information
      const locationSpan = $("#ctl00_ContentPlaceHolder1_lbl_head");
      const locationText = locationSpan.text();

      console.log("Location text:", locationText);

      // Parse the location text using improved regex patterns
      // These patterns account for multiple spaces and are more flexible
      const stateMatch = locationText.match(
        /State\s*:\s*([A-Z\s]+?)(?=\s+District\s*:|$)/i
      );
      const districtMatch = locationText.match(
        /District\s*:\s*([A-Z\s]+?)(?=\s+Block\s*:|$)/i
      );
      const blockMatch = locationText.match(
        /Block\s*:\s*([A-Z\s]+?)(?=\s*Panchayat\s*:|$)/i
      );
      const panchayatMatch = locationText.match(
        /Panchayat\s*:\s*([A-Z\s]+?)(?=\s*$)/i
      );

      if (stateMatch) {
        locationData.state = stateMatch[1].trim();
      }
      if (districtMatch) {
        locationData.district = districtMatch[1].trim();
      }
      if (blockMatch) {
        locationData.block = blockMatch[1].trim();
      }
      if (panchayatMatch) {
        locationData.panchayat = panchayatMatch[1].trim();
      }

      console.log("Extracted location data:", locationData);
    } catch (error) {
      console.error("Error extracting location data:", error);
    }

    return locationData;
  }

  /**
   * Extracts work details from the first table
   * @param $ - Cheerio instance
   * @param locationData - Location data to merge with work details
   * @returns WorkDetailData object
   */
  private extractWorkDetails(
    $: cheerio.CheerioAPI,
    locationData: {
      state: string;
      district: string;
      block: string;
      panchayat: string;
    }
  ): WorkDetailData {
    const workDetails: WorkDetailData = {
      workCode: "",
      // Add location data
      state: locationData.state,
      district: locationData.district,
      block: locationData.block,
      panchayat: locationData.panchayat
    };

    // Find the main table with work details (identified by class="mytable")
    const mainTable = $("table.mytable").first();

    // Debug: Log the table structure
    console.log("Extracting work details from table...");

    // Extract data from table cells
    mainTable.find("tr").each((index, row) => {
      const cells = $(row).find("td");

      // Process first pair of columns (0 and 1)
      if (cells.length >= 2) {
        const label1 = $(cells[0]).text().trim();
        const value1 = $(cells[1]).text().trim();

        // Debug log
        console.log(`Row ${index} - Label1: "${label1}", Value1: "${value1}"`);

        // Map the labels to our data structure
        this.mapWorkDetailField(label1, value1, workDetails);
      }

      // Process second pair of columns (2 and 3)
      if (cells.length >= 4) {
        const label2 = $(cells[2]).text().trim();
        const value2 = $(cells[3]).text().trim();

        // Debug log
        console.log(`Row ${index} - Label2: "${label2}", Value2: "${value2}"`);

        // Map the second set of labels
        this.mapWorkDetailField(label2, value2, workDetails);
      }
    });

    // Log the extracted details
    console.log("Extracted work details:", workDetails);

    return workDetails;
  }

  /**
   * Maps a label-value pair to the appropriate field in workDetails
   * @param label - The field label from the table
   * @param value - The field value from the table
   * @param workDetails - The work details object to update
   */
  private mapWorkDetailField(
    label: string,
    value: string,
    workDetails: WorkDetailData
  ): void {
    // Normalize label by removing extra spaces and converting to lowercase for comparison
    const normalizedLabel = label.toLowerCase().replace(/\s+/g, " ").trim();

    switch (normalizedLabel) {
      case "work code:":
        workDetails.workCode = value;
        break;
      case "work name:":
        workDetails.workName = value;
        break;
      case "work category:":
        workDetails.workCategory = value;
        break;
      case "work status:":
        workDetails.workStatus = value;
        break;
      case "work type/proposed status:":
        workDetails.workType = value;
        break;
      case "implementing agency:":
        workDetails.implementingAgency = value;
        break;
      case "estimated cost(in rs.):":
        workDetails.estimatedCost = this.parseNumber(value);
        break;
      case "estimated persondays:":
        workDetails.estimatedPersonDays = this.parseNumber(value);
        break;
      case "actual expenditure(in rs.):":
        workDetails.actualExpenditure = this.parseNumber(value);
        break;
      case "actual persondays:":
        workDetails.actualPersonDays = this.parseNumber(value);
        break;
      case "sanction year:":
        workDetails.sanctionYear = value;
        break;
      case "work start date(dd/mm/yyyy):":
        workDetails.workStartDate = this.parseDate(value);
        break;
      case "finacial year(work created):":
      case "financial year(work created):": // Handle both spellings
        workDetails.financialYear = value;
        break;
      case "estimated time of completion(dd/mm/yyyy):":
        // You can add this field if needed
        break;
      case "work completion date(dd/mm/yyyy):":
        // You can add this field if needed
        break;
      default:
        // Log unhandled labels for debugging
        console.log(`Unhandled label: "${label}" with value: "${value}"`);
        break;
    }
  }

  /**
   * Extracts document links from the second table
   * @param $ - Cheerio instance
   * @param workCode - Work code for reference
   * @returns WorkDocumentsData object
   */
  private extractDocumentLinks(
    $: cheerio.CheerioAPI,
    workCode: string
  ): WorkDocumentsData {
    const documents: WorkDocumentsData = {
      workCode
    };

    // Document name to property mapping
    const documentMapping: { [key: string]: keyof WorkDocumentsData } = {
      "Copy of the Annual Action Plan/ Shelf of Projects": "annualActionPlan",
      "Copy of Technical Estimate and Design": "technicalEstimate",
      "Technical Sanction": "technicalSanction",
      "Administrative/ Financial Sanction": "administrativeSanction",
      "Convergence Funds/Inputs, if any": "convergenceFunds",
      "Demand Application Form": "demandApplicationForm",
      "Work Allocation Form": "workAllocationForm",
      "Copy of filled e-Muster Rolls": "filledEMusterRolls",
      "Copy of Measurement Book": "measurementBook",
      "Material Procurement Document and Usage": "materialProcurement",
      "Copy of Wage List & FTO Details": "wageListFTO",
      "Copy of Skilled & Semi-skilled Muster Rolls": "skilledMusterRolls",
      "Material Voucher/Bills, Material list, FTOs and Royalty Paid":
        "materialVouchers",
      "Geotagged Photograph of the Project/Work at three stages-before,during and after":
        "geotaggedPhotographs",
      "Work Completion Certificate": "workCompletionCertificate",
      "Muster Roll Movement Slip": "musterRollMovementSlip",
      "Copy of Social Audit Report of the work": "socialAuditReport",
      "Other State Specific Documents": "otherStateDocuments"
    };

    // Find the documents table
    const documentsTable = $("#ctl00_ContentPlaceHolder1_gvw_data");

    documentsTable.find("tr").each((index, row) => {
      // Skip header row
      if (index === 0) return;

      const cells = $(row).find("td");
      if (cells.length >= 3) {
        const documentName = $(cells[1]).text().trim();
        const linkCell = $(cells[2]);
        const link = linkCell.find("a");

        // Check if link is available
        if (link.length > 0 && !link.attr("disabled")) {
          const href = link.attr("href");
          if (href) {
            // Construct full URL if it's a relative path
            const fullUrl = href.startsWith("http")
              ? href
              : `${this.baseUrl}/${href}`;

            // Map to the correct property
            const propName = documentMapping[documentName];
            if (propName && propName !== "workCode") {
              (documents as any)[propName] = fullUrl;
            }
          }
        }
        // If "Not Available" or disabled, leave as undefined (null in database)
      }
    });

    return documents;
  }

  /**
   * Parses a number string to number
   * @param value - String value to parse
   * @returns Parsed number or undefined
   */
  private parseNumber(value: string): number | undefined {
    if (!value || value.trim() === "") return undefined;

    // Remove commas and any other non-numeric characters except decimal point
    const cleanValue = value.replace(/[^0-9.-]/g, "");
    const num = parseFloat(cleanValue);

    return isNaN(num) ? undefined : num;
  }

  /**
   * Parses a date string in DD/MM/YYYY format
   * @param value - Date string to parse
   * @returns Date object or undefined
   */
  private parseDate(value: string): Date | undefined {
    if (!value || value.trim() === "") return undefined;

    const parts = value.split("/");
    if (parts.length === 3) {
      const date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
      return isNaN(date.getTime()) ? undefined : date;
    }
    return undefined;
  }
}
