-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "personality" TEXT NOT NULL,
    "goodWith" TEXT[],
    "activityLevel" TEXT NOT NULL,
    "meetImage" TEXT NOT NULL,
    "hex" TEXT NOT NULL,
    "carouselImages" TEXT[],

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);
