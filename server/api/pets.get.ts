import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { limit = 100, offset = 0, id, searchQuery, type, breed, size, age, gender, personality, goodWith, activity } = getQuery(event)
  const personalities = typeof personality === 'string' ? personality.split(',') : undefined;

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
        // Check that personalities is not only defined, but also contains at least one non-empty string
        personalities && personalities.some(p => p) ? { personality: { hasEvery: personalities } } : undefined,
        goodWith ? { goodWith: goodWith } : undefined,
        activity ? { activity: activity } : undefined
      ].filter(Boolean)
    },
  })

  return pets
})