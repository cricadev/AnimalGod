/*
  Warnings:

  - The values [COMPILANT] on the enum `personalityAdjectives` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `personality` on the `Pet` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "personalityAdjectives_new" AS ENUM ('AFFECTIONATE', 'DOMINANT', 'RELAXED', 'INDEPENDENT', 'DEVOTED', 'CONFIDENT', 'ALOOF', 'COMPLIANT', 'TIMID', 'ENTHUSIASTIC');
ALTER TYPE "personalityAdjectives" RENAME TO "personalityAdjectives_old";
ALTER TYPE "personalityAdjectives_new" RENAME TO "personalityAdjectives";
DROP TYPE "personalityAdjectives_old";
COMMIT;

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "personality",
ADD COLUMN     "personalityTemp" TEXT[];
