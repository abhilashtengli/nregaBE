/*
  Warnings:

  - You are about to drop the column `is_verified` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "is_verified",
ADD COLUMN     "is_verified_email" BOOLEAN NOT NULL DEFAULT false;
