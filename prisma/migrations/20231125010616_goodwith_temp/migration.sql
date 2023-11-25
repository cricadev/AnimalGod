/*
  Warnings:

  - You are about to drop the column `goodWith` on the `Pet` table. All the data in the column will be lost.
  - Added the required column `goodWithTemp` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "goodWith",
ADD COLUMN     "goodWithTemp" "GoodWith" NOT NULL;
