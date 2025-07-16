import express, { Request, Response } from "express";
import axios from "axios";
import * as cheerio from "cheerio";
import { prisma } from "@lib/prisma";
import { findPanchayatByCode } from "../utils/findPanchayat"; // You need to implement this

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
    throw new Error("Invalid work code format. Expected format: PANCHAYAT_CODE/WC/WORK_ID");
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

  return `https://nregastrep.nic.in/netnrega/IndexFrame.aspx?lflag=eng` +
    `&District_Code=${panchayatData.district_code}` +
    `&district_name=${encodeURIComponent(panchayatData.district_name_en)}` +
    `&state_name=${encodeURIComponent(stateName)}` +
    `&state_Code=${stateCode}` +
    `&block_name=${encodeURIComponent(panchayatData.block_name_en)}` +
    `&block_code=${panchayatData.block_code}` +
    `&fin_year=${finYear}` +
    `&check=1` +
    `&Panchayat_name=${encodeURIComponent(panchayatData.panchayat_name_en)}` +
    `&Panchayat_Code=${panchayatData.panchayat_code}`;
}

/**
 * Extract Material Procured Report link from HTML or construct it manually
 * @param html - HTML content
 * @param panchayatData - Panchayat information for fallback construction
 * @param finYear - Financial year
 * @returns Material report link
 */
function extractMaterialReportLink(html: string, panchayatData: PanchayatData, finYear: string): string {
  const $ = cheerio.load(html);
  
  let materialLink: string | undefined;
  let digestValue: string | undefined;
  
  // Try to find the Material Procured Report link and extract Digest
  $('a').each((index, element) => {
    const linkText = $(element).text().trim();
    if (linkText.includes('Material Procured Report')) {
      let href = $(element).attr('href');
      
      if (href) {
        console.log('Raw href from HTML:', href);
        
        // ONLY remove spaces, tabs, newlines - don't touch parameter names
        href = href.replace(/\s/g, '');
        
        console.log('After space removal:', href);
        
        // Extract Digest value from any href (even corrupted ones)
        const digestMatch = href.match(/[&?]Digest=([^&]*)/);
        if (digestMatch) {
          digestValue = digestMatch[1];
          console.log('Found Digest:', digestValue);
        }
        
        // Check if href is clean (not corrupted)
        if (href.includes('state_html/gpwrkbilldtl.aspx') && !href.includes('Found material report link')) {
          materialLink = href;
          console.log('Using extracted link:', materialLink);
          return false; // Break the loop
        }
      }
    }
  });
  
  // If we couldn't extract a clean link, construct it manually
  if (!materialLink) {
    console.log('Constructing Material Procured Report link manually due to corrupted HTML');
    materialLink = `state_html/gpwrkbilldtl.aspx?page=P&file=dmd&lflag=eng` +
      `&fin_year=${finYear}` +
      `&state_code=15` +
      `&district_code=${panchayatData.district_code}` +
      `&block_code=${panchayatData.block_code}` +
      `&panchayat_code=${panchayatData.panchayat_code}` +
      `&State_name=${encodeURIComponent('KARNATAKA')}` +
      `&District_name=${encodeURIComponent(panchayatData.district_name_en)}` +
      `&Block_name=${encodeURIComponent(panchayatData.block_name_en)}` +
      `&panchayat_name=${encodeURIComponent(panchayatData.panchayat_name_en)}`;
    
    // Add Digest if we found one
    if (digestValue) {
      materialLink += `&Digest=${digestValue}`;
    }
    
    console.log('Manually constructed link:', materialLink);
  }
  
  // If it's a relative link, make it absolute with correct domain
  if (materialLink && materialLink.startsWith('state_html/')) {
    materialLink = `https://nregastrep.nic.in/netnrega/${materialLink}`;
  }
  
  // Keep the Digest parameter but remove anything after it (if any)
  if (materialLink && materialLink.includes('&Digest=')) {
    const digestIndex = materialLink.indexOf('&Digest=');
    const digestEndIndex = materialLink.indexOf('&', digestIndex + 1);
    if (digestEndIndex !== -1) {
      // There are parameters after Digest, remove only those
      materialLink = materialLink.substring(0, digestEndIndex);
    }
    // If digestEndIndex is -1, Digest is the last parameter, so keep it as is
  }
  
  if (!materialLink) {
    throw new Error('Material Procured Report link not found');
  }
  
  console.log('Final material link:', materialLink);
  return materialLink;
}

/**
 * Parse material data from HTML
 * @param html - HTML content
 * @param workCode - Work code to search for
 * @returns Parsed material data
 */
function parseMaterialData(html: string, workCode: string): ScrapedMaterialData {
  const $ = cheerio.load(html);
  const result: ScrapedMaterialData = {
    billNo: '',
    billAmount: '',
    billDate: '',
    dateOfPayment: '',
    vendorName: '',
    financialYear: '',
    materials: [],
    totalAmount: ''
  };
  
  console.log(`Looking for work code: ${workCode}`);
  
  // Debug: Let's see what work codes are actually in the HTML
  const allText = $.text();
  console.log('First 2000 characters of HTML text:', allText.substring(0, 2000));
  
  // Look for any work code patterns in the HTML
  const workCodeMatches = allText.match(/\d{10}\/[A-Z]{2,3}\/\d+/g);
  if (workCodeMatches) {
    console.log('Found work code patterns in HTML:', workCodeMatches);
  } else {
    console.log('No work code patterns found in HTML');
  }
  
  // Also check for the specific work code we're looking for
  if (allText.includes(workCode)) {
    console.log(`✓ Work code ${workCode} found in HTML text`);
  } else {
    console.log(`✗ Work code ${workCode} NOT found in HTML text`);
    
    // Try to find partial matches
    const workCodeParts = workCode.split('/');
    const panchayatCode = workCodeParts[0];
    const workType = workCodeParts[1];
    const workId = workCodeParts[2];
    
    console.log(`Checking for parts - Panchayat: ${panchayatCode}, Type: ${workType}, ID: ${workId}`);
    console.log(`Panchayat code found: ${allText.includes(panchayatCode)}`);
    console.log(`Work type found: ${allText.includes(workType)}`);
    console.log(`Work ID found: ${allText.includes(workId)}`);
  }
  
  // Find the work code in the HTML
  let workFound = false;
  let currentTableRows: any[] = [];
  
  $('table tr').each((index, row) => {
    const rowText = $(row).text();
    
    // Check if this row contains our work code
    if (rowText.includes(workCode)) {
      console.log(`✓ Found work code in row ${index}: ${rowText.substring(0, 200)}`);
      workFound = true;
      currentTableRows = [];
      return true; // Continue to next row
    }
    
    if (workFound) {
      // Extract panchayat code from current work code to detect other work codes
      const currentWorkCodePanchayat = workCode.split('/')[0];
      
      // Check if we've reached another work code from the same panchayat (end of current work data)
      // Look for pattern: PANCHAYAT_CODE/SOMETHING/... but not our current work code
      const otherWorkCodePattern = new RegExp(`${currentWorkCodePanchayat}/[^/]+/`, 'g');
      const matches = rowText.match(otherWorkCodePattern);
      
      if (matches && matches.length > 0) {
        // Check if any of the matches is different from our work code
        let foundDifferentWork = false;
        for (const match of matches) {
          if (!workCode.includes(match.slice(0, -1))) { // Remove trailing slash
            foundDifferentWork = true;
            console.log(`Found different work code, stopping: ${match}`);
            break;
          }
        }
        
        if (foundDifferentWork) {
          workFound = false;
          return false; // Stop processing
        }
      }
      
      currentTableRows.push(row);
    }
  });
  
  if (!workFound) {
    // Let's also try a more flexible search
    console.log('Trying flexible search for work code...');
    
    $('table tr, div, p, span').each((index, element) => {
      const elementText = $(element).text();
      if (elementText.includes(workCode)) {
        console.log(`✓ Found work code in element ${element.tagName} at index ${index}: ${elementText.substring(0, 200)}`);
        return false; // Found it, stop searching
      }
    });
    
    throw new Error(`Work code ${workCode} not found in material report`);
  }
  
  console.log(`Processing ${currentTableRows.length} rows for work code data`);
  
  // Parse the collected rows
  const materials: Material[] = [];
  let isHeaderRow = false;
  
  currentTableRows.forEach((row, rowIndex) => {
    const $row = $(row);
    const cells = $row.find('td');
    const rowText = $row.text().trim();
    
    console.log(`Row ${rowIndex}: ${cells.length} cells - ${rowText.substring(0, 100)}`);
    
    if (cells.length === 0) return;
    
    // Extract bill information
    if (rowText.includes('Bill No.')) {
      console.log(`Processing bill info row: ${rowText}`);
      
      const billMatch = rowText.match(/Bill No\.\s*:\s*(\d+)/);
      if (billMatch) {
        result.billNo = billMatch[1];
        console.log(`Found Bill No: ${result.billNo}`);
      }
      
      // Extract bill amount (number after Bill No.)
      const amountMatch = rowText.match(/:\s*(\d+(?:\.\d+)?)/g);
      if (amountMatch && amountMatch.length > 1) {
        result.billAmount = amountMatch[1].replace(':', '').trim();
        console.log(`Found Bill Amount: ${result.billAmount}`);
      }
      
      const dateMatch = rowText.match(/Bill Date\s*:\s*(\d{2}\/\d{2}\/\d{4})/);
      if (dateMatch) {
        result.billDate = dateMatch[1];
        console.log(`Found Bill Date: ${result.billDate}`);
      }
      
      const paymentMatch = rowText.match(/Date of Payment\s*:\s*(\d{2}\/\d{2}\/\d{4})?/);
      if (paymentMatch && paymentMatch[1]) {
        result.dateOfPayment = paymentMatch[1];
        console.log(`Found Payment Date: ${result.dateOfPayment}`);
      }
    }
    
    // Extract vendor and financial year
    if (rowText.includes('Vendor name')) {
      console.log(`Processing vendor info row: ${rowText}`);
      
      const vendorMatch = rowText.match(/Vendor name\s*:\s*([^:]+?)(?:\s*Financial Year|$)/);
      if (vendorMatch) {
        result.vendorName = vendorMatch[1].trim();
        console.log(`Found Vendor: ${result.vendorName}`);
      }
      
      const finYearMatch = rowText.match(/Financial Year\s*:\s*(\d{4}-\d{4})/);
      if (finYearMatch) {
        result.financialYear = finYearMatch[1];
        console.log(`Found Financial Year: ${result.financialYear}`);
      }
    }
    
    // Check for material header row
    if (rowText.includes('Material') && (rowText.includes('Rupees') || rowText.includes('Quantity'))) {
      isHeaderRow = true;
      console.log('Found material header row');
      return;
    }
    
    // Extract material data rows
    if (isHeaderRow && cells.length >= 4) {
      const material = $(cells[0]).text().trim();
      const unitPrice = $(cells[1]).text().trim();
      const quantity = $(cells[2]).text().trim();
      const amount = $(cells[3]).text().trim();
      
      // Skip if it's still a header or empty
      if (material && !material.includes('Material') && !material.includes('Rupees')) {
        materials.push({
          material,
          unitPrice,
          quantity,
          amount
        });
        console.log(`Added material: ${material} - ${unitPrice} - ${quantity} - ${amount}`);
      }
    }
  });
  
  result.materials = materials;
  
  // Calculate total amount
  const total = materials.reduce((sum, material) => {
    const amount = parseFloat(material.amount) || 0;
    return sum + amount;
  }, 0);
  
  result.totalAmount = total.toString();
  
  console.log(`Final result: ${materials.length} materials, total: ${result.totalAmount}`);
  
  return result;
}

/**
 * Main API endpoint to get material MIS data by work detail ID
 */
materialMisRouter.get("/material-mis/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const finYear = (req.query.finYear as string) || '2025-2026';

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

    // Step 4: Build NREGA URL
    const nregaUrl = buildNregaUrl(panchayatData, finYear);
    console.log(`Built NREGA URL: ${nregaUrl}`);

    // Step 5: Fetch the main page
    const mainPageResponse = await axios.get(nregaUrl, {
      timeout: 30000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    // Step 6: Extract Material Procured Report link
    const materialReportLink = extractMaterialReportLink(mainPageResponse.data, panchayatData, finYear);
    console.log(`Found material report link: ${materialReportLink}`);

    // Step 7: Simplified session management approach
    let materialPageResponse;
    
    try {
      console.log('=== SIMPLIFIED SESSION MANAGEMENT ===');
      
      // Since the URL works in browser but not from server, let's try a different approach
      // The issue might be that this specific work code doesn't have material procurement data
      
      console.log('Trying direct access to material report...');
      
      try {
        // Try the exact URL that works in browser
        materialPageResponse = await axios.get(materialReportLink, {
          timeout: 60000,
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Referer': nregaUrl,
            'Upgrade-Insecure-Requests': '1',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });
        
        console.log(`Direct access response: ${materialPageResponse.status}`);
        console.log(`Response length: ${materialPageResponse.data.length}`);
        console.log(`Response preview: ${materialPageResponse.data.substring(0, 300)}`);
        
      } catch (directError : any) {
        console.log(`Direct access failed: ${directError.message}`);
        
        // Fallback: Try without Digest parameter
        console.log('Trying without Digest parameter...');
        const urlWithoutDigest = materialReportLink.split('&Digest=')[0];
        
        materialPageResponse = await axios.get(urlWithoutDigest, {
          timeout: 60000,
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Connection': 'keep-alive'
          }
        });
        
        console.log(`Without Digest response: ${materialPageResponse.status}`);
        console.log(`Response length: ${materialPageResponse.data.length}`);
        console.log(`Response preview: ${materialPageResponse.data.substring(0, 300)}`);
      }
      
      const responseText = materialPageResponse.data;
      
      // Analyze the response
      if (responseText.includes('Session Expired') || responseText.includes('Please Re-Login')) {
        console.log('❌ Session expired - this indicates server-side restrictions');
        
        throw new Error(
          `The government website requires browser-based session management that cannot be replicated from a server. ` +
          `This is a common limitation with government websites. ` +
          `For work code ${workCode}, you may need to:\n\n` +
          `1. Manually download the material report from the browser\n` +
          `2. Use browser automation tools (Puppeteer/Playwright)\n` +
          `3. Check if this work code actually has material procurement data\n\n` +
          `The URL works in your browser but cannot be accessed programmatically due to session restrictions.`
        );
        
      } else if (responseText.includes('File is under process')) {
        console.log('⏳ File is being processed');
        
        throw new Error(
          `The material report for work code ${workCode} is currently being generated. ` +
          `This usually takes a few minutes. Please try again later.\n\n` +
          `If this persists, it might indicate that this work code doesn't have material procurement data.`
        );
        
      } else if (responseText.length < 500) {
        console.log('❌ Response too short, likely an error page');
        console.log('Full response:', responseText);
        
        throw new Error(
          `Received an empty or error response for work code ${workCode}. ` +
          `This suggests:\n\n` +
          `1. This work code may not have any material procurement records\n` +
          `2. The work might be from a different financial year\n` +
          `3. The government database may not have this information\n\n` +
          `Please verify that material procurement has occurred for this work code in the specified financial year (${finYear}).`
        );
        
      } else if (!responseText.includes('<table') && !responseText.includes('Bill No') && !responseText.includes('Material')) {
        console.log('❌ Response does not contain expected material data structure');
        
        // Check if it's a valid HTML page but without material data
        if (responseText.includes('<html') || responseText.includes('<!DOCTYPE')) {
          console.log('✅ Valid HTML page received, but no material data found');
          
          throw new Error(
            `The material report page loaded successfully, but no material procurement data was found for work code ${workCode}. ` +
            `This indicates:\n\n` +
            `1. This work code has no material procurement records\n` +
            `2. All procurement for this work was labor-based (no materials used)\n` +
            `3. The data might be in a different financial year\n\n` +
            `This is not an error - some NREGA works are purely labor-based and don't involve material procurement.`
          );
        } else {
          console.log('❌ Invalid response format');
          console.log('Response content:', responseText.substring(0, 1000));
          
          throw new Error(
            `Received an invalid response format for work code ${workCode}. ` +
            `The government server may be experiencing issues or the URL format may have changed.`
          );
        }
      }
      
      // If we reach here, we have a valid response with potential material data
      console.log('✅ Received valid response, checking for work code data...');
      
      // Check if our specific work code is in the response
      if (!responseText.includes(workCode)) {
        console.log(`❌ Work code ${workCode} not found in the material report`);
        
        // Look for any work codes in the response
        const workCodePattern = /\d{10}\/[A-Z]{2,4}\/\d+/g;
        const foundWorkCodes = responseText.match(workCodePattern);
        
        if (foundWorkCodes && foundWorkCodes.length > 0) {
          console.log(`Found other work codes: ${foundWorkCodes.join(', ')}`);
          
          throw new Error(
            `The material report contains data for other work codes but not for ${workCode}. ` +
            `Found work codes: ${foundWorkCodes.join(', ')}\n\n` +
            `This indicates that work code ${workCode} either:\n` +
            `1. Has no material procurement records\n` +
            `2. Belongs to a different panchayat or financial year\n` +
            `3. Is purely labor-based with no material procurement\n\n` +
            `Please verify the work code and financial year.`
          );
        } else {
          throw new Error(
            `No work codes found in the material report for this panchayat. ` +
            `This could mean:\n\n` +
            `1. No material procurement has occurred in this panchayat for ${finYear}\n` +
            `2. All works in this panchayat are labor-based\n` +
            `3. Wrong financial year or panchayat information\n\n` +
            `Please verify the work details and try a different financial year if needed.`
          );
        }
      }
      
      console.log(`✅ Work code ${workCode} found in material report!`);
      console.log('✅ Successfully obtained material report data');
      
    } catch (error: any) {
      console.log('❌ Material report access failed:', error.message);
      throw error;
    }

    // Step 8: Parse material data
    if (!materialPageResponse) {
      throw new Error('Failed to fetch material report after multiple attempts');
    }
    
    const materialData = parseMaterialData(materialPageResponse.data, workCode);

    // Step 9: Combine with work details and return
    const pdfData: PDFData = {
      workName: workDetail.workName || '',
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
      message: "Material MIS data retrieved successfully"
    } as MaterialMISResponse);

  } catch (error: any) {
    console.error('Error in material-mis endpoint:', error);

    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        res.status(408).json({
          success: false,
          error: "Request timeout while fetching data",
          code: "REQUEST_TIMEOUT"
        } as MaterialMISResponse);
        return;
      }
      if (error.response?.status === 404) {
        res.status(404).json({
          success: false,
          error: "External URL not accessible",
          code: "EXTERNAL_URL_NOT_FOUND"
        } as MaterialMISResponse);
        return;
      }
    }

    res.status(500).json({
      success: false,
      error: error.message || "Internal server error",
      code: "FETCH_MATERIAL_MIS_ERROR"
    } as MaterialMISResponse);
  }
});

/**
 * Helper endpoint to test URL building by work detail ID
 */
materialMisRouter.get("/test-material-url/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const finYear = (req.query.finYear as string) || '2025-2026';

    if (!id) {
      res.status(400).json({
        success: false,
        error: "Work Detail ID is required",
        code: "MISSING_ID"
      });
      return;
    }

    // Get work details from database using ID
    const workDetail = await prisma.workDetail.findUnique({
      where: { id: id },
      select: {
        id: true,
        workCode: true,
        workName: true
      }
    });

    if (!workDetail) {
      res.status(404).json({
        success: false,
        error: "Work Detail not found",
        code: "WORK_DETAIL_NOT_FOUND"
      });
      return;
    }

    const { workCode } = workDetail;
    const panchayatCode = extractPanchayatCode(workCode);
    const panchayatData = findPanchayatByCode(panchayatCode);

    if (!panchayatData) {
      res.status(404).json({
        success: false,
        error: `Panchayat data not found for code: ${panchayatCode}`,
        code: "PANCHAYAT_NOT_FOUND"
      });
      return;
    }

    const url = buildNregaUrl(panchayatData, finYear);

    res.status(200).json({
      success: true,
      data: {
        workDetail,
        url,
        panchayatData
      },
      message: "URL generated successfully"
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || "Internal server error",
      code: "URL_GENERATION_ERROR"
    });
  }
});

export default materialMisRouter;