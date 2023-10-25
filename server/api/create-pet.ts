import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const res = await prisma.pet.create({
    data: {
      id: body.id,
      name: body.name,
      type: body.type,
      breed: body.breed,
      age: body.age,
    }
  });
})