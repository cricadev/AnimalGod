

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB
export default defineEventHandler(async (event) => {
  const { limit = 4, offset = 0 } = getQuery(event)

  let pets = await prisma.pet.findMany({
    skip: Number(offset),
    take: Number(limit),
    orderBy: { id: 'desc' },
    include: { shelter: true }
  })
  return pets
})