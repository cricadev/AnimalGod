import { PrismaClient } from "@prisma/client";
import { serverSupabaseUser } from '#supabase/server'

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { limit = 4, offset = 0, shelterId } = getQuery(event)

  // Get the authenticated user
  const user = await serverSupabaseUser(event)

  let shelter;
  if (user) {
    // If the user is authenticated, find the shelter by the user's email
    shelter = await prisma.shelter.findUnique({
      where: { email: user.email },
    });
  } else {
    // If the user is not authenticated, find the shelter by its ID
    shelter = await prisma.shelter.findUnique({
      where: { id: Number(shelterId) },
    });
  }

  if (!shelter) {
    throw new Error('No shelter found with this ID');
  }

  // Get the pets associated with the shelter
  let pets = await prisma.pet.findMany({
    skip: Number(offset),
    take: Number(limit),
    orderBy: { id: 'desc' },
    where: { shelterId: shelter.id },
    include: { shelter: true }
  })

  return {

    shelter, pets
  }

})