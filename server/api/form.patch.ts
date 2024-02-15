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

  const updateData: any = {};

  if (body.liveWith) updateData.liveWith = body.liveWith.map((p: string) => liveWith[p.toUpperCase()]);
  if (body.liveWithDescription) updateData.liveWithDescription = body.liveWithDescription;
  if (body.liveIn) updateData.liveIn = body.liveIn === 'house';
  if (body.isRenting) updateData.isRenting = body.isRenting;
  if (body.rentAcceptance) updateData.rentAcceptance = body.rentAcceptance;
  if (body.qAndA) updateData.qAndA = body.qAndA;
  if (body.qAndADescription) updateData.qAndADescription = body.qAndADescription;
  if (body.whyMessage) updateData.whyMessage = body.whyMessage;
  if (client?.id) updateData.clientId = client.id;
  if (body.createdAt) updateData.createdAt = body.createdAt;
  if (body.updatedAt) updateData.updatedAt = body.updatedAt;
  if (body.acceptedForm) updateData.acceptedForm = body.acceptedForm;

  const res = await prisma.appointment.update({
    where: {
      id: Number(id),
    },
    data: updateData,
  });

  return {
    status: 200,
    body: JSON.stringify(res),
  };
})