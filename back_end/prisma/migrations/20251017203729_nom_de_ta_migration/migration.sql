/*
  Warnings:

  - The `ResetOtpExpiresAt` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "ResetOtp" DROP NOT NULL,
DROP COLUMN "ResetOtpExpiresAt",
ADD COLUMN     "ResetOtpExpiresAt" TIMESTAMP(3);
