
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { userId } = getQuery(event);



  let client = await prisma.client.findFirst({
    where: { id: Number(userId) },
  });

  if (!client) {
    throw new Error('client not found');
  }

  return client;
});