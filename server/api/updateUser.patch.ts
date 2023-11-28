import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const updateData = {
    image: body.image !== undefined ? { set: body.image } : undefined,
    website: body.website !== undefined ? { set: body.website } : undefined,
    address: body.address !== undefined ? { set: body.address } : undefined,
    phone: body.phone !== undefined ? { set: body.phone } : undefined,
  };

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