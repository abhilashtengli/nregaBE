-- CreateTable
CREATE TABLE "quotation_call_letter" (
    "id" TEXT NOT NULL,
    "work_detail_id" TEXT NOT NULL,
    "administrativeSanction" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quotation_call_letter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "material_item" (
    "id" TEXT NOT NULL,
    "sl_no" INTEGER NOT NULL,
    "quotation_call_letter_id" TEXT NOT NULL,
    "material_name" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "material_item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "quotation_call_letter_work_detail_id_key" ON "quotation_call_letter"("work_detail_id");

-- CreateIndex
CREATE UNIQUE INDEX "material_item_quotation_call_letter_id_key" ON "material_item"("quotation_call_letter_id");

-- AddForeignKey
ALTER TABLE "quotation_call_letter" ADD CONSTRAINT "quotation_call_letter_work_detail_id_fkey" FOREIGN KEY ("work_detail_id") REFERENCES "WorkDetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material_item" ADD CONSTRAINT "material_item_quotation_call_letter_id_fkey" FOREIGN KEY ("quotation_call_letter_id") REFERENCES "quotation_call_letter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
