import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const credentials = await readBody(event);

    // Check if a shelter with the provided email already exists
    const existingShelter = await prisma.shelter.findUnique({
      where: {
        email: credentials.email,
      },
    });

    // check if a  client with the provided email already exists

    const existingClient = await prisma.client.findUnique({
      where: {
        email: credentials.email,
      },
    });

    if (existingShelter || existingClient) {
      // If a client with the provided email already exists, return an error message
      return {
        status: 400,
        body: {
          error: 'Email is already in use',
        },
      };
    }

    // If no client with the provided email exists, create a new one
    const shelter = await prisma.shelter.create({
      data: {
        name: credentials.name,
        email: credentials.email,
        country: credentials.country,
        phone: credentials.phone,
      },
    });

    return shelter;
  } catch (error) {
    console.error("Error creating shelter:", error);
    throw error;
  }
});