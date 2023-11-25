import { PrismaClient } from "@prisma/client";
import { serverSupabaseUser } from '#supabase/server'

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { limit = 4, offset = 0 } = getQuery(event)


  // Get the current user's email
  const user = await serverSupabaseUser(event);
  console.log(user)
  const userEmail = user?.email;

  if (!userEmail) {
    throw new Error('User is not authenticated');
  }

  // Find the shelter associated with the user's email
  const shelter = await prisma.shelter.findUnique({
    where: { email: userEmail },
  });

  if (!shelter) {
    throw new Error('No shelter associated with this user');
  }

  // Get the pets associated with the shelter
  let pets = await prisma.pet.findMany({
    skip: Number(offset),
    take: Number(limit),
    orderBy: { id: 'desc' },
    where: { shelterId: shelter.id },
    include: { shelter: true }
  })

  return pets
})