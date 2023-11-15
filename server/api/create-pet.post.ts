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
      name: body.name,
      age: body.age,
      type: body.type,
      breed: body.breed,
      description: body.description,
      images: body.images,
      isAdopted: body.isAdopted,
      hexColor: body.hexColor,
      shelter: {
        connect: { id: shelter.id }
      }
    }
  });

  return {
    status: 200,
    body: JSON.stringify(res),
  };
})