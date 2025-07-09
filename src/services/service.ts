import * as cheerio from "cheerio";
import axios from "axios";
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
      const response = await axios.get(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });

      const $ = cheerio.load(response.data);

      // Extract work details from Table 1
      const workDetail = this.extractWorkDetails($);

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
   * Extracts work details from the first table
   * @param $ - Cheerio instance
   * @returns WorkDetailData object
   */
  private extractWorkDetails($: cheerio.CheerioAPI): WorkDetailData {
    const workDetails: WorkDetailData = {
      workCode: ""
    };

    // Find the main table with work details (identified by class="mytable")
    const mainTable = $("table.mytable").first();

    // Debug: Log the table structure
    // console.log("Extracting work details from table...");

    // Extract data from table cells
    mainTable.find("tr").each((index, row) => {
      const cells = $(row).find("td");

      // Process first pair of columns (0 and 1)
      if (cells.length >= 2) {
        const label1 = $(cells[0]).text().trim();
        const value1 = $(cells[1]).text().trim();

        // Debug log
        // console.log(`Row ${index} - Label1: "${label1}", Value1: "${value1}"`);

        // Map the labels to our data structure
        switch (label1) {
          case "Work Code:":
            workDetails.workCode = value1;
            break;
          case "Work Name:":
            workDetails.workName = value1;
            break;
          case "Work Category:":
            workDetails.workCategory = value1;
            break;
          case "Work Status:":
            workDetails.workStatus = value1;
            break;
          case "Implementing Agency:":
            workDetails.implementingAgency = value1;
            break;
          case "Estimated Cost(In Rs.):":
            workDetails.estimatedCost = this.parseNumber(value1);
            break;
          case "Actual Expenditure(In Rs.):":
            workDetails.actualExpenditure = this.parseNumber(value1);
            break;
          case "Sanction Year:":
            workDetails.sanctionYear = value1;
            break;
          case "Work Start Date(DD/MM/YYYY):":
            workDetails.workStartDate = this.parseDate(value1);
            break;
          case "Finacial Year(Work Created):":
            workDetails.financialYear = value1;
            break;
        }
      }

      // Process second pair of columns (2 and 3)
      if (cells.length >= 4) {
        const label2 = $(cells[2]).text().trim();
        const value2 = $(cells[3]).text().trim();

        // Debug log
        // console.log(`Row ${index} - Label2: "${label2}", Value2: "${value2}"`);

        // Map the second set of labels
        switch (label2) {
          case "Work Name:":
            workDetails.workName = value2;
            break;
          case "Work Type/Proposed Status:":
            workDetails.workType = value2;
            break;
          case "Implementing Agency:":
            workDetails.implementingAgency = value2;
            break;
          case "Actual Expenditure(In Rs.):":
            workDetails.actualExpenditure = this.parseNumber(value2);
            break;
          case "Finacial Year(Work Created):":
            workDetails.financialYear = value2;
            break;
          case "Work Start Date(DD/MM/YYYY):":
            workDetails.workStartDate = this.parseDate(value2);
            break;
          case "Estimated Time of Completion(DD/MM/YYYY):":
            // You can add this field if needed
            break;
          case "Work Completion Date(DD/MM/YYYY):":
            // You can add this field if needed
            break;
        }
      }
    });

    // Log the extracted details
    // console.log("Extracted work details:", workDetails);

    return workDetails;
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
    const num = parseFloat(value.replace(/,/g, ""));
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
