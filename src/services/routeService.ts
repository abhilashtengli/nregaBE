import axios from "axios";
import {
  createAxiosInstance,
  extractKalaburagiGstLink,
  extractVendorDetails,
  VENDOR_BASE_URL,
  VENDOR_INITIAL_URL,
  VendorApiResponse
} from "../services/vendorService";
import { HttpsProxyAgent } from "https-proxy-agent";
import { proxyAgent } from "./ProxyService/proxyServiceAgent";

/**
 * Fetches and returns vendor details for Kalaburagi
 */
export async function getKalaburagiVendors(): Promise<VendorApiResponse> {
  try {
    // const axiosInstance = createAxiosInstance();

    // const initialResponse = await axiosInstance.get(VENDOR_INITIAL_URL);

    const initialResponse = await axios.get(VENDOR_INITIAL_URL, {
      httpsAgent: proxyAgent
    });
    if (initialResponse.status !== 200) {
      throw new Error(
        `Failed to fetch initial page. Status: ${initialResponse.status}`
      );
    }

    // Step 2: Extract the KALABURAGI GST link
    const gstLink = extractKalaburagiGstLink(initialResponse.data);
    if (!gstLink) {
      return {
        success: false,
        error: "Could not find KALABURAGI GST link in the response"
      };
    }

    // Step 3: Construct the full GST URL and fetch vendor data
    const fullGstUrl = `${VENDOR_BASE_URL}/${gstLink}`;
    // const vendorResponse = await axiosInstance.get(fullGstUrl);
    const vendorResponse = await axios.get(fullGstUrl, {
      httpsAgent: proxyAgent
    });

    if (vendorResponse.status !== 200) {
      throw new Error(
        `Failed to fetch vendor details. Status: ${vendorResponse.status}`
      );
    }

    // Step 4: Parse vendor information
    const vendors = extractVendorDetails(vendorResponse.data);
    if (vendors.length === 0) {
      return {
        success: false,
        error: "No vendors found or unable to parse vendor data"
      };
    }

    // Step 5: Return sorted vendor list
    return {
      success: true,
      data: vendors,
      count: vendors.length
    };
  } catch (error) {
    console.error("Error in getKalaburagiVendors:", error);

    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        return {
          success: false,
          error: "Request timeout. The server took too long to respond."
        };
      } else if (error.response) {
        return {
          success: false,
          error: `Server responded with status ${error.response.status}`
        };
      } else if (error.request) {
        return {
          success: false,
          error: "Unable to reach the NREGA server. Please try again later."
        };
      }
    }

    return {
      success: false,
      error: "Internal server error occurred while processing the request"
    };
  }
}
