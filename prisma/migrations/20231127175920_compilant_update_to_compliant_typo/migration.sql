/*
  Warnings:

  - The values [COMPILANT] on the enum `personalityAdjectives` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "personalityAdjectives_new" AS ENUM ('AFFECTIONATE', 'DOMINANT', 'RELAXED', 'INDEPENDENT', 'DEVOTED', 'CONFIDENT', 'ALOOF', 'COMPLIANT', 'TIMID', 'ENTHUSIASTIC');
ALTER TABLE "Pet" ALTER COLUMN "personality" TYPE "personalityAdjectives_new"[] USING ("personality"::text::"personalityAdjectives_new"[]);
ALTER TYPE "personalityAdjectives" RENAME TO "personalityAdjectives_old";
ALTER TYPE "personalityAdjectives_new" RENAME TO "personalityAdjectives";
DROP TYPE "personalityAdjectives_old";
COMMIT;
