/*
  Warnings:

  - Added the required column `block` to the `WorkDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `WorkDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `panchayat` to the `WorkDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `WorkDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkDetail" ADD COLUMN     "block" TEXT NOT NULL,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "panchayat" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;
