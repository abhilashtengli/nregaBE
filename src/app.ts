import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import scrapRouter from "./routes/route";
import getVendorsRouter from "./routes/getVendors";
import checklistRouter from "./routes/checklistRoute";
import frontPageRouter from "./routes/frontPageRoute";
import tsCopyRouter from "./routes/tsCopyRoute";
import form6Router from "./routes/form6Route";
import blankNmrRouter from "./routes/blankNmrRoute";
import ftoRouter from "./routes/wlFtoRoute";
import stageWisePhotosRouter from "./routes/stageWiseTaggingRoute";
import vendorRouter from "./routes/vendorDetailsRoute";
// import quotationCallRouter from "./routes/quotationCallLetterVersion2";
import testingVendorScrape from "./routes/testing";
import materialMisRouter from "./routes/materialMisRoute";
import workingtestingVendorScrape from "./routes/workingMaterialMIs";
import comparativeStatementRouter from "./routes/comparativeStatementRoute";
import form32Router from "./routes/form32Route";
import paperNotificationRouter from "./routes/paperNotificationRoute";
import workCompletionRouter from "./routes/workCompletion";
import workOrderRouter from "./routes/workOrderRoute";
import gpAbstractRouter from "./routes/gpAbstractRoute";
import movementSlipRouter from "./routes/movementSlipRoute";
import filledNmrRouter from "./routes/filledNmrRoute";
import imageProxyRouter from "./routes/imageProxy";
import materialSupplyRegisterRouter from "./routes/materialSupplyRegister";
import authRouter from "./routes/auth/userAuth";

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
app.use("/", authRouter);
app.use("/", scrapRouter);
app.use("/", getVendorsRouter);
app.use("/", checklistRouter);
app.use("/", frontPageRouter);
app.use("/", tsCopyRouter);
app.use("/", form6Router);
app.use("/", blankNmrRouter);
app.use("/", ftoRouter);
app.use("/", materialMisRouter);
// app.use("/", quotationCallRouter);
app.use("/", testingVendorScrape);
app.use("/", workingtestingVendorScrape);
app.use("/", vendorRouter);
app.use("/", stageWisePhotosRouter);
app.use("/", stageWisePhotosRouter);
app.use("/", comparativeStatementRouter);
app.use("/", form32Router);
app.use("/", paperNotificationRouter);
app.use("/", workCompletionRouter);
app.use("/", workOrderRouter);
app.use("/", gpAbstractRouter);
app.use("/", movementSlipRouter);
app.use("/", filledNmrRouter);
app.use("/", imageProxyRouter);
app.use("/", materialSupplyRegisterRouter);

const PORT = process.env.PORT || 3000;
app
  .listen(PORT, () => {
    console.log(`✅ Server running on port: ${PORT}`);
  })
  .on("error", (err) => {
    console.error("❌ Server failed to start:", err);
  });
