/*
  Warnings:

  - Changed the type of `breed` on the `Pet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "breed",
ADD COLUMN     "breed" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Breed";
