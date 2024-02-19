
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB
export default defineEventHandler(async (event) => {
  const id = event?.context?.params?.slug
  const res = await prisma.pet.findFirst({
    where: {
      id: Number(id)
    }
  })
  return res
})