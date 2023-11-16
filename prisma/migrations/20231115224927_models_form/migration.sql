/*
  Warnings:

  - You are about to drop the column `date` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `hexColor` on the `Pet` table. All the data in the column will be lost.
  - Added the required column `isRenting` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `liveIn` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `liveWithDescription` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qAndA` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qAndADescription` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whyMessage` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activity` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `healthConditions` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `history` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personalityDescription` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `breed` on the `Pet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Size" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateEnum
CREATE TYPE "Breed" AS ENUM ('GOLDEN_RETRIEVER', 'LABRADOR_RETRIEVER', 'GERMAN_SHEPHERD', 'BULLDOG', 'BEAGLE', 'POODLE', 'ROTTWEILER', 'YORKSHIRE_TERRIER', 'BOXER', 'DACHSHUND');

-- CreateEnum
CREATE TYPE "GoodWith" AS ENUM ('CHILDREN', 'DOGS', 'CATS');

-- CreateEnum
CREATE TYPE "ActivityLevel" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "personalityAdjectives" AS ENUM ('AFFECTIONATE', 'DOMINANT', 'RELAXED', 'INDEPENDENT', 'DEVOTED', 'CONFIDENT', 'ALOOF', 'COMPILANT', 'TIMID', 'ENTHUSIASTIC');

-- CreateEnum
CREATE TYPE "liveWith" AS ENUM ('PARTNER', 'CHILDREN', 'OTHER_PETS', 'ALONE');

-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "date",
DROP COLUMN "message",
ADD COLUMN     "isRenting" BOOLEAN NOT NULL,
ADD COLUMN     "liveIn" BOOLEAN NOT NULL,
ADD COLUMN     "liveWith" "liveWith"[],
ADD COLUMN     "liveWithDescription" VARCHAR(2000) NOT NULL,
ADD COLUMN     "qAndA" JSONB NOT NULL,
ADD COLUMN     "qAndADescription" VARCHAR(2000) NOT NULL,
ADD COLUMN     "rentAcceptance" BOOLEAN,
ADD COLUMN     "whyMessage" VARCHAR(2000) NOT NULL;

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "age",
DROP COLUMN "description",
DROP COLUMN "hexColor",
ADD COLUMN     "activity" "ActivityLevel" NOT NULL,
ADD COLUMN     "gender" BOOLEAN NOT NULL,
ADD COLUMN     "goodWith" "GoodWith"[],
ADD COLUMN     "healthConditions" JSONB NOT NULL,
ADD COLUMN     "healthDescription" VARCHAR(2000),
ADD COLUMN     "history" VARCHAR(2000) NOT NULL,
ADD COLUMN     "personality" "personalityAdjectives"[],
ADD COLUMN     "personalityDescription" VARCHAR(2000) NOT NULL,
ADD COLUMN     "size" "Size" NOT NULL,
DROP COLUMN "breed",
ADD COLUMN     "breed" "Breed" NOT NULL;

-- AlterTable
ALTER TABLE "Shelter" ADD COLUMN     "address" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "website" TEXT;
