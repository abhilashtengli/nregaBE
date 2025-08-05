import express, { Request, Response } from "express";
import axios from "axios";
import { userAuth } from "../middleware/auth";
import dotenv from "dotenv";
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
      // const response = await axios.get(url, {
      //   headers: {
      //     "User-Agent":
      //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      //     Accept: "image/webp,image/apng,image/*,*/*;q=0.8",
      //     "Accept-Language": "en-US,en;q=0.9",
      //     "Cache-Control": "no-cache",
      //     Pragma: "no-cache"
      //   },
      //   responseType: "stream",
      //   timeout: 30000
      // });
      const response = await axios.get("http://api.scraperapi.com", {
        params: {
          api_key: process.env.SCRAPER_API_KEY,
          url: url,
          keep_headers: "true",
        },
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml"
        }
      });

      // Set appropriate headers
      res.set({
        "Content-Type": response.headers["content-type"] || "image/jpeg",
        "Cache-Control": "public, max-age=86400", // Cache for 24 hours
        "Access-Control-Allow-Origin": "*"
      });

      // Pipe the image data
      response.data.pipe(res);
    } catch (error) {
      console.error("Image proxy error:", error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ETIMEDOUT") {
          return res.status(408).json({
            success: false,
            error: "Request timeout"
          });
        }
        if (error.response?.status === 404) {
          return res.status(404).json({
            success: false,
            error: "Image not found"
          });
        }
      }

      res.status(500).json({
        success: false,
        error: "Failed to fetch image"
      });
    }
  }
);

export default imageProxyRouter;
