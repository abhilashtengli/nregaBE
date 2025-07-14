import axios from "axios";
import express, { Request, Response } from "express";
import {
  createAxiosInstance,
  extractKalaburagiGstLink,
  extractVendorDetails,
  VENDOR_BASE_URL,
  VENDOR_INITIAL_URL,
  VendorApiResponse,
} from "../services/vendorService";
const getVendorsRouter = express.Router();

getVendorsRouter.get(
  "/vendors/kalaburagi",
  async (req: Request, res: Response<VendorApiResponse>) => {
    try {
      const axiosInstance = createAxiosInstance();

      // Step 1: Fetch the initial page to get the KALABURAGI GST link
      const initialResponse = await axiosInstance.get(VENDOR_INITIAL_URL);

      if (initialResponse.status !== 200) {
        throw new Error(
          `Failed to fetch initial page. Status: ${initialResponse.status}`
        );
      }

      // Step 2: Extract the KALABURAGI GST link
      const gstLink = extractKalaburagiGstLink(initialResponse.data);

      if (!gstLink) {
        return res.status(404).json({
          success: false,
          error: "Could not find KALABURAGI GST link in the response",
        });
      }

      // Step 3: Construct the full URL and fetch vendor details
      const fullGstUrl = `${VENDOR_BASE_URL}/${gstLink}`;

      const vendorResponse = await axiosInstance.get(fullGstUrl);

      if (vendorResponse.status !== 200) {
        throw new Error(
          `Failed to fetch vendor details. Status: ${vendorResponse.status}`
        );
      }

      // Step 4: Extract vendor information
      const vendors = extractVendorDetails(vendorResponse.data);

      if (vendors.length === 0) {
        return res.status(404).json({
          success: false,
          error: "No vendors found or unable to parse vendor data",
        });
      }

      // Step 5: Return the sorted vendor list
      res.json({
        success: true,
        data: vendors,
        count: vendors.length,
      });
    } catch (error) {
      console.error("Error in /api/vendors/kalaburagi:", error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          return res.status(408).json({
            success: false,
            error: "Request timeout. The server took too long to respond.",
          });
        } else if (error.response) {
          return res.status(error.response.status).json({
            success: false,
            error: `Server responded with status ${error.response.status}`,
          });
        } else if (error.request) {
          return res.status(503).json({
            success: false,
            error: "Unable to reach the NREGA server. Please try again later.",
          });
        }
      }

      res.status(500).json({
        success: false,
        error: "Internal server error occurred while processing the request",
      });
    }
  }
);

export default getVendorsRouter;
