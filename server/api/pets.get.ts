import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { limit = 4, offset = 0, id } = getQuery(event)

  let pets = await prisma.pet.findMany({
    skip: Number(offset),
    take: Number(limit),
    orderBy: { id: 'desc' },
    include: { shelter: true },
    where: id ? { id: { not: Number(id) } } : undefined,
  })

  return pets
})