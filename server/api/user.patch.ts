import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const updateData: any = {};

  if (body.email) updateData.email = body.email;
  if (body.name) updateData.name = body.name;
  if (body.address) updateData.address = body.address;
  if (body.website) updateData.website = body.website;
  if (body.image) updateData.image = body.image;
  if (body.phone) updateData.phone = body.phone;


  if (body.isShelter) {
    const shelter = await prisma.shelter.update({
      where: { id: body.id },
      data: updateData,
    });

    return {
      status: 200,
      body: JSON.stringify(shelter),
    };
  } else {
    const client = await prisma.client.update({
      where: { id: body.id },
      data: updateData,
    });

    return {
      status: 200,
      body: JSON.stringify(client),
    };
  }
});