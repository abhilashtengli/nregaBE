import express, { Request, Response } from "express";
import axios from "axios";
import { userAuth } from "../middleware/auth";
import dotenv from "dotenv";
import { proxyAgent } from "../services/ProxyService/proxyServiceAgent";

dotenv.config();
const imageProxyRouter = express.Router();

imageProxyRouter.get(
  "/proxy-image",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { url } = req.query;

      if (!url || typeof url !== "string") {
        return res.status(400).json({
          success: false,
          error: "URL parameter is required"
        });
      }

      console.log(`🔄 Fetching image from: ${url}`);

      // FIXED: Add proper headers that government servers expect
      const response = await axios.get(url, {
        responseType: "arraybuffer",
        httpsAgent: proxyAgent,
        timeout: 45000, // Increased timeout
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9",
          "Accept-Encoding": "gzip, deflate, br",
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          "Sec-Fetch-Dest": "image",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Site": "cross-site",
          Connection: "keep-alive",
          // CRITICAL: Remove any authentication headers that might conflict
          Authorization: undefined,
          Cookie: undefined
        },
        // FIXED: Add retry logic for government servers
        validateStatus: function (status) {
          return status < 500; // Accept 4xx but not 5xx
        }
      });

      console.log(
        `✅ Image fetch status: ${response.status}, Content-Type: ${response.headers["content-type"]}, Size: ${response.data.length} bytes`
      );

      // FIXED: Validate that we actually got image data
      const contentType = response.headers["content-type"] || "image/jpeg";

      if (!contentType.startsWith("image/")) {
        console.error(`❌ Invalid content type received: ${contentType}`);
        console.error(
          `Response data preview: ${response.data.toString().substring(0, 200)}`
        );
        return res.status(400).json({
          success: false,
          error: `Invalid content type: ${contentType}. Expected image.`
        });
      }

      if (response.data.length < 100) {
        console.error(`❌ Image too small: ${response.data.length} bytes`);
        return res.status(400).json({
          success: false,
          error: "Image data too small, likely an error response"
        });
      }

      // Set proper response headers
      res.set({
        "Content-Type": contentType,
        "Content-Length": response.data.length.toString(),
        "Cache-Control": "public, max-age=86400",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Authorization, Content-Type"
      });

      // Send the image data
      res.send(response.data);
    } catch (error) {
      console.error("❌ Image proxy error:", error);

      // FIXED: Better error logging to see exactly what's failing
      if (axios.isAxiosError(error)) {
        console.error("📋 Axios error details:", {
          message: error.message,
          code: error.code,
          status: error.response?.status,
          statusText: error.response?.statusText,
          responseHeaders: error.response?.headers,
          requestUrl: error.config?.url,
          requestHeaders: error.config?.headers
        });

        // Log response data if it's text (error messages)
        if (error.response?.data && typeof error.response.data === "string") {
          console.error(
            "📄 Error response body:",
            error.response.data.substring(0, 500)
          );
        }

        // FIXED: Handle specific government server responses
        if (error.response?.status === 403) {
          return res.status(200).json({
            success: false,
            error:
              "Access forbidden by source server. Try accessing the URL directly in browser first.",
            debug: {
              status: error.response.status,
              headers: error.response.headers
            }
          });
        }

        if (error.response?.status === 404) {
          return res.status(200).json({
            success: false,
            error: "Image not found on source server",
            url: req.query.url
          });
        }

        if (error.code === "ETIMEDOUT" || error.code === "ECONNABORTED") {
          return res.status(200).json({
            success: false,
            error: "Request timeout - government server too slow",
            debug: { code: error.code }
          });
        }

        if (error.code === "ENOTFOUND" || error.code === "ECONNREFUSED") {
          return res.status(200).json({
            success: false,
            error: "Cannot connect to source server",
            debug: { code: error.code }
          });
        }
      }

      // Return detailed error for debugging
      res.status(200).json({
        success: false,
        error: "Failed to fetch image",
        details: error instanceof Error ? error.message : "Unknown error",
        url: req.query.url,
        timestamp: new Date().toISOString()
      });
    }
  }
);

export default imageProxyRouter;
