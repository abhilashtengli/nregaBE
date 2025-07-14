import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import scrapRouter from "./routes/route";
import getVendorsRouter from "./routes/getVendors";
import checklistRouter from "./routes/checklistRoute";
import frontPageRouter from "./routes/frontPageRoute";

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/", scrapRouter);
app.use("/", getVendorsRouter);
app.use("/", checklistRouter);
app.use("/", frontPageRouter);

const PORT = process.env.PORT || 3000;
app
  .listen(PORT, () => {
    console.log(`✅ Server running on port: ${PORT}`);
  })
  .on("error", (err) => {
    console.error("❌ Server failed to start:", err);
  });
