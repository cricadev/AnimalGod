import { PrismaClient } from "@prisma/client";
import { serverSupabaseUser } from '#supabase/server'

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { limit = 4, offset = 0, clientId } = getQuery(event)

  8
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
  const tableData = appointments.map(appointment => {
    // Find the pet associated with the appointment
    const pet = pets.find(pet => pet.id === appointment.petId);

    return {
      petImages: pet?.images,
      petName: pet?.name,
      isAdopted: pet?.isAdopted,
      appointmentState: appointment.acceptedForm,
      appointmentCreatedAt: appointment.createdAt,
      shelterImage: pet?.shelter?.image,
      shelterName: pet?.shelter?.name,
      shelterContact: {
        email: pet?.shelter?.email,
        phone: pet?.shelter?.phone,
      },
    };
  });

  return {
    client, appointments, pets, tableData
  }

})