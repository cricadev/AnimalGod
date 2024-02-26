import { PrismaClient, Prisma } from "@prisma/client";
import { serverSupabaseUser } from '#supabase/server'

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { limit = 4, offset = 0, clientId } = getQuery(event)

  // Get the authenticated user
  var user = null
  try {
    user = await serverSupabaseUser(event)
  } catch (err) {
    throw createError({
      fatal: true,
      statusCode: 404,
      statusMessage: 'No User Found try going back to home'
    })
  }

  let client;
  try {
    if (user) {
      // If the user is authenticated, find the client by the user's email
      client = await prisma.client.findUnique({
        where: { email: user.email },
      });
    } else {
      // If the user is not authenticated, find the client by its ID
      client = await prisma.client.findUnique({
        where: { id: Number(clientId) },
      });
    }
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      // Throw an error created with createError
      throw createError({
        fatal: true,
        statusCode: 404,
        statusMessage: 'No client found with this ID'
      })
    } else {
      throw error;
    }
  }

  let appointments;
  try {
    // Get the pets associated with the client
    appointments = await prisma.appointment.findMany({
      skip: Number(offset),
      take: Number(limit),
      orderBy: { id: 'desc' },
      where: { clientId: client.id },
      include: { client: true }
    })
  } catch (error) {
    console.error(error)
    throw error
  }

  // Get the pet IDs from the appointments
  let petIds = appointments.map(appointment => appointment.petId);

  let pets;
  try {
    // Find pets with the pet IDs
    pets = await prisma.pet.findMany({
      where: { id: { in: petIds } },
      include: { shelter: true }
    })
  } catch (error) {
    console.error(error)
    throw error
  }

  const tableData = appointments.map(appointment => {
    // Find the pet associated with the appointment
    const pet = pets.find(pet => pet.id === appointment.petId);

    return {
      petId: pet?.id,
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