/*
  Warnings:

  - Added the required column `country` to the `Shelter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Shelter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shelter" ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
