/*
  Warnings:

  - Added the required column `ResetOtp` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "ResetOtp" TEXT NOT NULL,
ADD COLUMN     "ResetOtpExpiresAt" INTEGER NOT NULL DEFAULT 0;
