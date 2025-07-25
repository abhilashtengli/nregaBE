/*
  Warnings:

  - Added the required column `unit` to the `material_item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "material_item" ADD COLUMN     "unit" TEXT NOT NULL;
