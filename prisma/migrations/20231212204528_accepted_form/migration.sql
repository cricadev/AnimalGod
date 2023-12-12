/*
  Warnings:

  - The `acceptedForm` column on the `Appointment` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "FormStatus" AS ENUM ('IN_PROCESS', 'ACCEPTED', 'DENIED');

-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "acceptedForm",
ADD COLUMN     "acceptedForm" "FormStatus" NOT NULL DEFAULT 'IN_PROCESS';
