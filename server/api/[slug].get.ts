
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB
export default defineEventHandler(async (event) => {
  const name = event?.context?.params?.slug.toLowerCase();
  return await prisma.pet.findFirstOrThrow({
    where: { name: name },
  })
})