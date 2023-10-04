/*
  Warnings:

  - You are about to drop the column `activityLevel` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `carouselImages` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `goodWith` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `healthStats` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `healthSummary` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `hex` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `history` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `meetImage` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `personality` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `personalitySummary` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `petsId` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the `Pets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_petsId_fkey";

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "activityLevel",
DROP COLUMN "carouselImages",
DROP COLUMN "createdAt",
DROP COLUMN "gender",
DROP COLUMN "goodWith",
DROP COLUMN "healthStats",
DROP COLUMN "healthSummary",
DROP COLUMN "hex",
DROP COLUMN "history",
DROP COLUMN "meetImage",
DROP COLUMN "personality",
DROP COLUMN "personalitySummary",
DROP COLUMN "petsId",
DROP COLUMN "size",
DROP COLUMN "updatedAt",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "isAdopted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "shelterId" INTEGER;

-- DropTable
DROP TABLE "Pets";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shelter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "supabaseUserId" TEXT NOT NULL,

    CONSTRAINT "Shelter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "supabaseUserId" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "clientId" INTEGER NOT NULL,
    "petId" INTEGER NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Shelter" ADD CONSTRAINT "Shelter_supabaseUserId_fkey" FOREIGN KEY ("supabaseUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_supabaseUserId_fkey" FOREIGN KEY ("supabaseUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_shelterId_fkey" FOREIGN KEY ("shelterId") REFERENCES "Shelter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
