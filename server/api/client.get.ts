import { PrismaClient } from "@prisma/client";
import { serverSupabaseUser } from '#supabase/server'

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { limit = 4, offset = 0, clientId } = getQuery(event)

  console.log('clientId', clientId)
  // Get the authenticated user
  var user = null
  try {
    user = await serverSupabaseUser(event)
  } catch (err) {
    console.error(err)

  }
  let client;
  if (user) {
    // If the user is authenticated, find the client by the user's email
    client = await prisma.client.findUniqueOrThrow({
      where: { email: user.email },
    });
  } else {
    // If the user is not authenticated, find the client by its ID
    client = await prisma.client.findUniqueOrThrow({
      where: { id: Number(clientId) },
    });
  }

  if (!client) {
    throw new Error('No client found with this ID');
  }
  // Get the pets associated with the client
  let appointments = await prisma.appointment.findMany({
    skip: Number(offset),
    take: Number(limit),
    orderBy: { id: 'desc' },
    where: { clientId: client.id },
    include: { client: true }
  })

  // Get the pet IDs from the appointments
  let petIds = appointments.map(appointment => appointment.petId);

  // Find pets with the pet IDs
  let pets = await prisma.pet.findMany({
    where: { id: { in: petIds } },
    include: { shelter: true }
  })

  return {
    client, appointments, pets
  }

})