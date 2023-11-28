import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body.isShelter) {
    const shelter = await prisma.shelter.update({
      where: { id: body.id },
      data: {
        image: {
          set: body.image
        }
      }
    });

    return {
      status: 200,
      body: JSON.stringify(shelter),
    };
  } else {
    const client = await prisma.client.update({
      where: { id: body.id },
      data: {
        image: {
          set: body.image
        }
      }
    });

    return {
      status: 200,
      body: JSON.stringify(client),
    };
  }
});