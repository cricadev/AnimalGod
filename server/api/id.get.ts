
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { email, isShelter = false } = getQuery(event) as { email: string, isShelter: boolean };

  if (Boolean(isShelter)) {
    let shelter = await prisma.shelter.findFirst({
      where: { email: email },
    });

    if (!shelter) {
      throw new Error('Shelter not found');
    }

    return shelter;
  }

  let client = await prisma.client.findFirst({
    where: { email: email },
  });

  if (!client) {
    throw new Error('client not found');
  }

  return client;
});