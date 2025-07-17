-- CreateTable
CREATE TABLE "vendor_detail" (
    "id" TEXT NOT NULL,
    "vendorNameOne" TEXT,
    "vendorNameTwo" TEXT,
    "vendorNameThree" TEXT,
    "vendorGstOne" TEXT,
    "vendorGstTwo" TEXT,
    "vendorGstThree" TEXT,
    "fromDate" TIMESTAMP(3),
    "toDate" TIMESTAMP(3),
    "work_detail_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vendor_detail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "vendor_detail_work_detail_id_key" ON "vendor_detail"("work_detail_id");

-- AddForeignKey
ALTER TABLE "vendor_detail" ADD CONSTRAINT "vendor_detail_work_detail_id_fkey" FOREIGN KEY ("work_detail_id") REFERENCES "WorkDetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
