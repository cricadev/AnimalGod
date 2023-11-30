

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB
export default defineEventHandler(async (event) => {


  let shelters = await prisma.shelter.findMany({
    orderBy: { id: 'desc' },
    include: { pets: true }
  })
  return shelters
})