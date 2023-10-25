
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB
export default defineEventHandler(async (event) => {
  let pets = await prisma.pet.findMany({
    orderBy: { id: 'desc' },
    include: { shelter: true }
  })
  return pets
})