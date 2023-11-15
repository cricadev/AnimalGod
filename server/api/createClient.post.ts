import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const credentials = await readBody(event);

    // Check if a client with the provided email already exists
    const existingClient = await prisma.client.findUnique({
      where: {
        email: credentials.email,
      },
    });

    if (existingClient) {
      // If a client with the provided email already exists, return an error message
      return {
        status: 400,
        body: {
          error: 'Email is already in use',
        },
      };
    }

    // If no client with the provided email exists, create a new one
    const client = await prisma.client.create({
      data: {
        name: credentials.name,
        email: credentials.email,
        country: credentials.country,
        phone: credentials.phone,
      },
    });

    return client;
  } catch (error) {
    console.error("Error creating client:", error);
    throw error;
  }
});