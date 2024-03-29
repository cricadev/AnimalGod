import { PrismaClient, liveWith } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id } = getQuery(event);
  const client = await prisma.client.findUnique({
    where: {
      email: body.email,
    }
  });
  const res = await prisma.appointment.create({
    data: {
      liveWith: body.liveWith.map((p: string) => liveWith[p.toUpperCase()]),
      liveWithDescription: body.liveWithDescription,
      liveIn: body.liveIn === 'house' ? true : false,
      isRenting: body.isRenting,
      rentAcceptance: body.rentAcceptance,
      qAndA: body.qAndA,
      qAndADescription: body.qAndADescription,
      whyMessage: body.whyMessage,
      clientId: client?.id,
      petId: Number(id),
      createdAt: body.createdAt,
      updatedAt: body.updatedAt,
    },
  });

  return {
    status: 200,
    body: JSON.stringify(res),
  };
})