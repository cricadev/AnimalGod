/*
  Warnings:

  - You are about to drop the column `supabaseUserId` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `supabaseUserId` on the `Shelter` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_supabaseUserId_fkey";

-- DropForeignKey
ALTER TABLE "Shelter" DROP CONSTRAINT "Shelter_supabaseUserId_fkey";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "supabaseUserId";

-- AlterTable
ALTER TABLE "Shelter" DROP COLUMN "supabaseUserId";

-- DropTable
DROP TABLE "User";
