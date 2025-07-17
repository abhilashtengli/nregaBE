import express, { Request, Response } from "express";
import { prisma } from "@lib/prisma";
import { findPanchayatByCode } from "../utils/findPanchayat";
import * as cheerio from "cheerio";

const materialMisRouter = express.Router();

// Types/Interfaces
interface Material {
  material: string;
  unitPrice: string;
  quantity: string;
  amount: string;
}

interface PDFData {
  workName: string;
  year: string;
  workCode: string;
  vendorName: string;
  financialYear: string;
  billNo: string;
  billAmount: string;
  billDate: string;
  dateOfPayment: string;
  materials: Material[];
  totalAmount: string;
}

interface MaterialMISResponse {
  success: boolean;
  data?: PDFData;
  message?: string;
  error?: string;
  code?: string;
}

interface PanchayatData {
  district_name_kn: string;
  district_name_en: string;
  district_code: string;
  block_name_kn: string;
  block_name_en: string;
  block_code: string;
  panchayat_name_kn: string;
  panchayat_name_en: string;
  panchayat_code: string;
}

interface ScrapedMaterialData {
  billNo: string;
  billAmount: string;
  billDate: string;
  dateOfPayment: string;
  vendorName: string;
  financialYear: string;
  materials: Material[];
  totalAmount: string;
}

/**
 * Extract panchayat code from work code
 * @param workCode - Format: PANCHAYAT_CODE/WC/WORK_ID
 * @returns panchayat code
 */
function extractPanchayatCode(workCode: string): string {
  const workCodeParts = workCode.split("/");
  if (workCodeParts.length < 3) {
    throw new Error(
      "Invalid work code format. Expected format: PANCHAYAT_CODE/WC/WORK_ID"
    );
  }
  return workCodeParts[0];
}

/**
 * Build the NREGA URL for accessing the main page
 * @param panchayatData - Panchayat information
 * @param finYear - Financial year
 * @returns Complete URL
 */
function buildNregaUrl(panchayatData: PanchayatData, finYear: string): string {
  const stateCode = "15";
  const stateName = "KARNATAKA";

  return (
    `https://nregastrep.nic.in/netnrega/IndexFrame.aspx?lflag=eng` +
    `&District_Code=${panchayatData.district_code}` +
    `&district_name=${encodeURIComponent(panchayatData.district_name_en)}` +
    `&state_name=${encodeURIComponent(stateName)}` +
    `&state_Code=${stateCode}` +
    `&block_name=${encodeURIComponent(panchayatData.block_name_en)}` +
    `&block_code=${panchayatData.block_code}` +
    `&fin_year=${finYear}` +
    `&check=1` +
    `&Panchayat_name=${encodeURIComponent(panchayatData.panchayat_name_en)}` +
    `&Panchayat_Code=${panchayatData.panchayat_code}`
  );
}


/**
 * Scrape material data using Puppeteer (browser automation)
 * @param materialReportLink - Material report URL
 * @param workCode - Work code to search for
 * @returns Scraped material data
 */
async function scrapeWithPuppeteer(
  materialReportLink: string,
  workCode: string
): Promise<ScrapedMaterialData> {
  const puppeteer = require("puppeteer");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  try {
    const page = await browser.newPage();

    // Set realistic browser settings
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    );
    await page.setViewport({ width: 1366, height: 768 });

    console.log(`Navigating to: ${materialReportLink}`);
    await page.goto(materialReportLink, {
      waitUntil: "networkidle2",
      timeout: 30000
    });

    // Wait for page to load (using setTimeout wrapped in Promise)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Get page content
    const html = await page.content();
    console.log(`Page loaded, HTML length: ${html.length}`);

    // Check if we got the actual data
    if (html.includes(workCode)) {
      console.log("✅ Work code found in page content");

      // Parse the HTML using cheerio
      const $ = cheerio.load(html);
      const result: ScrapedMaterialData = {
        billNo: "",
        billAmount: "",
        billDate: "",
        dateOfPayment: "",
        vendorName: "",
        financialYear: "",
        materials: [],
        totalAmount: ""
      };

      // Find the specific work code section
      let workCodeFound = false;
      let workCodeSection: any = null;

      $("b").each((index, element) => {
        const elementText = $(element).text();
        if (elementText.includes(workCode)) {
          console.log(
            `✅ Found work code in <b> tag: ${elementText.substring(0, 100)}`
          );
          workCodeFound = true;
          workCodeSection = $(element).closest("tr");
          return false;
        }
      });

      if (!workCodeFound) {
        throw new Error(`Work code ${workCode} not found in material report`);
      }

      // Extract material data from the found section
      const materials: Material[] = [];
      let currentWorkSection = workCodeSection;

      let nextRow = currentWorkSection.next("tr");
      let currentBillData = {
        billNo: "",
        billAmount: "",
        billDate: "",
        dateOfPayment: "",
        vendorName: "",
        financialYear: ""
      };

      while (nextRow.length > 0) {
        const rowText = nextRow.text();

        // Check if we've reached another work code
        if (rowText.includes("(1515001014/") && !rowText.includes(workCode)) {
          console.log("Reached another work code, stopping");
          break;
        }

        // Extract bill information
        if (rowText.includes("Bill No.")) {
          const billMatch = rowText.match(/Bill No\.\s*:\s*(\d+)/);
          if (billMatch) {
            currentBillData.billNo = billMatch[1];
            console.log(`Found Bill No: ${currentBillData.billNo}`);
          }

          const amountMatch = rowText.match(/:\s*(\d+(?:\.\d+)?)/g);
          if (amountMatch && amountMatch.length > 1) {
            currentBillData.billAmount = amountMatch[1].replace(":", "").trim();
            console.log(`Found Bill Amount: ${currentBillData.billAmount}`);
          }

          const dateMatch = rowText.match(
            /Bill Date\s*:\s*(\d{2}\/\d{2}\/\d{4})/
          );
          if (dateMatch) {
            currentBillData.billDate = dateMatch[1];
            console.log(`Found Bill Date: ${currentBillData.billDate}`);
          }

          const paymentMatch = rowText.match(
            /Date of Payment\s*:\s*(\d{2}\/\d{2}\/\d{4})?/
          );
          if (paymentMatch && paymentMatch[1]) {
            currentBillData.dateOfPayment = paymentMatch[1];
            console.log(`Found Payment Date: ${currentBillData.dateOfPayment}`);
          }
        }

        // Extract vendor and financial year
        if (rowText.includes("Vendor name")) {
          const vendorMatch = rowText.match(
            /Vendor name\s*:\s*([^:]+?)(?:\s*Financial Year|$)/
          );
          if (vendorMatch) {
            currentBillData.vendorName = vendorMatch[1].trim();
            console.log(`Found Vendor: ${currentBillData.vendorName}`);
          }

          const finYearMatch = rowText.match(
            /Financial Year\s*:\s*(\d{4}-\d{4})/
          );
          if (finYearMatch) {
            currentBillData.financialYear = finYearMatch[1];
            console.log(
              `Found Financial Year: ${currentBillData.financialYear}`
            );
          }
        }

        // Extract material data rows
        const cells = nextRow.find("td");
        if (cells.length === 4) {
          const material = $(cells[0]).text().trim();
          const unitPrice = $(cells[1]).text().trim();
          const quantity = $(cells[2]).text().trim();
          const amount = $(cells[3]).text().trim();

          if (
            material &&
            !material.includes("Material") &&
            !material.includes("Rupees") &&
            !material.includes("Quantity") &&
            !material.includes("Bill No.") &&
            !material.includes("Vendor name") &&
            material.length > 0 &&
            !isNaN(parseFloat(amount))
          ) {
            materials.push({
              material,
              unitPrice,
              quantity,
              amount
            });

            console.log(
              `Added material: ${material} - ${unitPrice} - ${quantity} - ${amount}`
            );
          }
        }

        nextRow = nextRow.next("tr");
      }

      // Set extracted data
      result.billNo = currentBillData.billNo || "";
      result.billAmount = currentBillData.billAmount || "";
      result.billDate = currentBillData.billDate || "";
      result.dateOfPayment = currentBillData.dateOfPayment || "";
      result.vendorName = currentBillData.vendorName || "";
      result.financialYear = currentBillData.financialYear || "";
      result.materials = materials;

      // Calculate total amount
      const total = materials.reduce((sum, material) => {
        const amount = parseFloat(material.amount) || 0;
        return sum + amount;
      }, 0);

      result.totalAmount = total.toString();

      console.log(
        `✅ Extracted ${materials.length} materials, total: ${result.totalAmount}`
      );

      return result;
    } else {
      console.log("❌ Work code not found in page content");
      throw new Error(`Work code ${workCode} not found in material report`);
    }
  } finally {
    await browser.close();
  }
}

/**
 * Main API endpoint to get material MIS data by work detail ID
 */
materialMisRouter.get(
  "/material-mis/:id",
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const finYear = (req.query.finYear as string) || "2025-2026";

      // Validate ID parameter
      if (!id) {
        res.status(400).json({
          success: false,
          error: "Work Detail ID is required",
          code: "MISSING_ID"
        } as MaterialMISResponse);
        return;
      }

      console.log(`Processing material MIS for work detail ID: ${id}`);

      // Step 1: Get work details from database using ID
      const workDetail = await prisma.workDetail.findUnique({
        where: { id: id },
        select: {
          id: true,
          workCode: true,
          workName: true,
          panchayat: true,
          block: true,
          district: true,
          financialYear: true
        }
      });

      if (!workDetail) {
        res.status(404).json({
          success: false,
          error: "Work Detail not found",
          code: "WORK_DETAIL_NOT_FOUND"
        } as MaterialMISResponse);
        return;
      }

      const { workCode, workName } = workDetail;
      console.log(`Found work detail - Code: ${workCode}, Name: ${workName}`);

      // Step 2: Extract panchayat code from work code
      const panchayatCode = extractPanchayatCode(workCode);
      console.log(`Extracted panchayat code: ${panchayatCode}`);

      // Step 3: Get panchayat data
      const panchayatData = findPanchayatByCode(panchayatCode);
      if (!panchayatData) {
        res.status(404).json({
          success: false,
          error: `Panchayat data not found for code: ${panchayatCode}`,
          code: "PANCHAYAT_NOT_FOUND"
        } as MaterialMISResponse);
        return;
      }

      // Step 4: Build material report URL directly
      const materialReportLink =
        `https://nregastrep.nic.in/netnrega/state_html/gpwrkbilldtl.aspx?page=P&file=dmd&lflag=eng` +
        `&fin_year=${finYear}` +
        `&state_code=15` +
        `&district_code=${panchayatData.district_code}` +
        `&block_code=${panchayatData.block_code}` +
        `&panchayat_code=${panchayatData.panchayat_code}` +
        `&State_name=${encodeURIComponent("KARNATAKA")}` +
        `&District_name=${encodeURIComponent(panchayatData.district_name_en)}` +
        `&Block_name=${encodeURIComponent(panchayatData.block_name_en)}` +
        `&panchayat_name=${encodeURIComponent(panchayatData.panchayat_name_en)}` +
        `&Digest=cScjR8YpVd+YkiG3RNVfMA`; // Using the working Digest from your test

      console.log(`Built material report URL: ${materialReportLink}`);

      // Step 5: Scrape material data using Puppeteer
      const materialData = await scrapeWithPuppeteer(
        materialReportLink,
        workCode
      );

      // Step 6: Combine with work details and return
      const pdfData: PDFData = {
        workName: workDetail.workName || "",
        year: materialData.financialYear,
        workCode: workDetail.workCode,
        vendorName: materialData.vendorName,
        financialYear: materialData.financialYear,
        billNo: materialData.billNo,
        billAmount: materialData.billAmount,
        billDate: materialData.billDate,
        dateOfPayment: materialData.dateOfPayment,
        materials: materialData.materials,
        totalAmount: materialData.totalAmount
      };

      res.status(200).json({
        success: true,
        data: pdfData,
        message:
          "Material MIS data retrieved successfully using browser automation"
      } as MaterialMISResponse);
    } catch (error: any) {
      console.error("Error in material-mis endpoint:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Internal server error",
        code: "FETCH_MATERIAL_MIS_ERROR"
      } as MaterialMISResponse);
    }
  }
);

export default materialMisRouter;
