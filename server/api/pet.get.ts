import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event)

  let pet = await prisma.pet.findUnique({
    where: { id: Number(id) },
    include: { shelter: true },
  })

  if (!pet) {

    return {
      status: 404,
      body: JSON.stringify({ message: 'Pet not found' }),
    }
  }

  return pet
})