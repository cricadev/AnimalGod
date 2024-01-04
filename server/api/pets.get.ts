import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { limit = 100, offset = 0, id, searchQuery, type, breed, size, age, gender, personality, goodWith, activityLevel } = getQuery(event)

  let pets = await prisma.pet.findMany({
    skip: Number(offset),
    take: Number(limit),
    orderBy: { id: 'desc' },
    include: { shelter: true },
    where: {
      AND: [
        id ? { id: { not: Number(id) } } : undefined,
        searchQuery ? { name: { contains: searchQuery, mode: 'insensitive' } } : undefined,
        type ? { type: type } : undefined,
        breed ? { breed: breed } : undefined,
        size ? { size: size } : undefined,
        age ? { age: age } : undefined,
        gender ? { gender: gender } : undefined,
        personality ? { personality: personality } : undefined,
        goodWith ? { goodWith: goodWith } : undefined,
        activityLevel ? { activityLevel: activityLevel } : undefined
      ].filter(Boolean)
    },
  })

  return pets
})