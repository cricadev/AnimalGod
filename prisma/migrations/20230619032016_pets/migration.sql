-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "petsId" INTEGER;

-- CreateTable
CREATE TABLE "Pets" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Pets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_petsId_fkey" FOREIGN KEY ("petsId") REFERENCES "Pets"("id") ON DELETE SET NULL ON UPDATE CASCADE;
