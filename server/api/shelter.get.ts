
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { userId } = getQuery(event);



  let shelter = await prisma.shelter.findFirst({
    where: { id: Number(userId) },
  });

  if (!shelter) {
    throw new Error('Shelter not found');
  }

  return shelter;
});