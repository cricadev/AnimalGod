/*
  Warnings:

  - You are about to drop the column `goodWithTemp` on the `Pet` table. All the data in the column will be lost.
  - Added the required column `goodWith` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "goodWithTemp",
ADD COLUMN     "goodWith" "GoodWith" NOT NULL;
