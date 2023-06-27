/*
  Warnings:

  - The `personality` column on the `Pet` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `healthSummary` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `history` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personalitySummary` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "healthStats" TEXT[],
ADD COLUMN     "healthSummary" TEXT NOT NULL,
ADD COLUMN     "history" TEXT NOT NULL,
ADD COLUMN     "personalitySummary" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "personality",
ADD COLUMN     "personality" TEXT[];
