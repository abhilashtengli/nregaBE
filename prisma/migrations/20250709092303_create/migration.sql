-- CreateTable
CREATE TABLE "WorkDetail" (
    "id" TEXT NOT NULL,
    "workCode" TEXT NOT NULL,
    "workName" TEXT,
    "workCategory" TEXT,
    "workType" TEXT,
    "workStatus" TEXT,
    "implementingAgency" TEXT,
    "estimatedCost" DECIMAL(12,2),
    "actualExpenditure" DECIMAL(12,2),
    "sanctionYear" TEXT,
    "workStartDate" TIMESTAMP(3),
    "financialYear" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkDocuments" (
    "id" TEXT NOT NULL,
    "workCode" TEXT NOT NULL,
    "annualActionPlan" TEXT,
    "technicalEstimate" TEXT,
    "technicalSanction" TEXT,
    "administrativeSanction" TEXT,
    "convergenceFunds" TEXT,
    "demandApplicationForm" TEXT,
    "workAllocationForm" TEXT,
    "filledEMusterRolls" TEXT,
    "measurementBook" TEXT,
    "materialProcurement" TEXT,
    "wageListFTO" TEXT,
    "skilledMusterRolls" TEXT,
    "materialVouchers" TEXT,
    "geotaggedPhotographs" TEXT,
    "workCompletionCertificate" TEXT,
    "musterRollMovementSlip" TEXT,
    "socialAuditReport" TEXT,
    "otherStateDocuments" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkDocuments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WorkDetail_workCode_key" ON "WorkDetail"("workCode");

-- CreateIndex
CREATE UNIQUE INDEX "WorkDocuments_workCode_key" ON "WorkDocuments"("workCode");

-- AddForeignKey
ALTER TABLE "WorkDocuments" ADD CONSTRAINT "WorkDocuments_workCode_fkey" FOREIGN KEY ("workCode") REFERENCES "WorkDetail"("workCode") ON DELETE CASCADE ON UPDATE CASCADE;
