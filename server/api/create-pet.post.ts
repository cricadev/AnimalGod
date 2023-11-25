import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const shelter = await prisma.shelter.findUnique({
    where: {
      email: body.email,
    }
  });
  const res = await prisma.pet.create({
    data: {
      type: body.type,
      name: body.name,
      images: body.images,
      gender: body.gender.toUpperCase(),
      size: body.size.toUpperCase(),
      age: Number(body.age),
      breed: body.breed.toUpperCase().replace(/\s/g, '_'),
      goodWith: body.goodWith.toUpperCase(),
      activity: body.activity.toUpperCase(),
      history: body.history,
      personality: body.personality.map((personality) => personality.toUpperCase()),
      personalityDescription: body.personalityDescription,
      healthConditions: body.healthConditions,
      healthDescription: body.healthDescription,
      isAdopted: body.isAdopted,
      shelterId: shelter?.id,
      createdAt: body.createdAt,
      updatedAt: body.updatedAt,
    },
  });

  return {
    status: 200,
    body: JSON.stringify(res),
  };
})