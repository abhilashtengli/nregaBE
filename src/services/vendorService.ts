import axios from "axios";
import * as Cheerio from "cheerio";

export interface Vendor {
  vendorName: string;
  gstNo: string;
}

export interface VendorApiResponse {
  success: boolean;
  data?: Vendor[];
  error?: string;
  count?: number;
}

export const VENDOR_BASE_URL = "https://nregastrep.nic.in/netnrega/state_html";
export const VENDOR_INITIAL_URL = `${VENDOR_BASE_URL}/freez_vendor_rpt.aspx?lflag=eng&state_code=15&state_name=KARNATAKAeng&fin_year=2024-2025&page=s&typ=R&Digest=qIpIZ2htWNsX87pDDYwL6Q`;

// Utility function to create axios instance with proper headers
export const createAxiosInstance = () => {
  return axios.create({
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.5",
      "Accept-Encoding": "gzip, deflate",
      Connection: "keep-alive",
      "Upgrade-Insecure-Requests": "1",
    },
  });
};

// Function to extract KALABURAGI GST link
export const extractKalaburagiGstLink = (html: string): string | null => {
  try {
    const $ = Cheerio.load(html);
    let gstLink: string | null = null;

    // Find the KALABURAGI row and extract the GST link
    $("tr").each((index: any, element: any) => {
      const $row = $(element);
      const districtCell = $row.find("td").eq(1);

      if (districtCell.text().trim() === "KALABURAGI") {
        // The GST link is in the 5th column (index 4)
        const gstCell = $row.find("td").eq(4);
        const link = gstCell.find("a").attr("href");
        if (link) {
          gstLink = link;
        }
      }
    });

    return gstLink;
  } catch (error) {
    console.error("Error extracting KALABURAGI GST link:", error);
    return null;
  }
};

export const extractVendorDetails = (html: string): Vendor[] => {
  try {
    const $ = Cheerio.load(html);
    const vendors: Vendor[] = [];

    // Find the table with vendor data
    $("table tr").each((index, element) => {
      const $row = $(element);
      const cells = $row.find("td");

      // Skip header rows and empty rows
      if (cells.length >= 8) {
        const vendorNameCell = cells.eq(2);
        const gstNoCell = cells.eq(7);

        const vendorName = vendorNameCell.text().trim();
        const gstNo = gstNoCell.text().trim();

        // Only add if both vendor name and GST number are present
        if (vendorName && gstNo && vendorName !== "Vendor Name") {
          vendors.push({
            vendorName: vendorName.toUpperCase(),
            gstNo: gstNo.toUpperCase(),
          });
        }
      }
    });

    // Sort vendors alphabetically by vendor name
    return vendors.sort((a, b) => a.vendorName.localeCompare(b.vendorName));
  } catch (error) {
    console.error("Error extracting vendor details:", error);
    return [];
  }
};
