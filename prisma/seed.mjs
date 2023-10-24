import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create shelters
  const shelter1 = await prisma.shelter.create({
    data: {
      name: "Happy Paws Shelter",
    },
  });

  const shelter2 = await prisma.shelter.create({
    data: {
      name: "Furry Friends Home",
    },
  });

  // Create pets for shelters
  const pet1 = await prisma.pet.create({
    data: {
      name: "Buddy",
      age: 3,
      type: "Dog",
      breed: "Golden Retriever",
      isAdopted: false,
      shelterId: shelter1.id,
      description: "Friendly and playful",
      images: ["/tobyMD_yubbiv.png", "image2_url"],
      hex: "#00C57D",
    },
  });

  const pet2 = await prisma.pet.create({
    data: {
      name: "Whiskers",
      age: 2,
      type: "Cat",
      breed: "Tabby",
      isAdopted: false,
      shelterId: shelter2.id,
      description: "Calm and affectionate",
      images: ["/cooperMD_gugvdw.png", "image4_url"],
      hex: "#EFAF52",
    },
  });

  // Create clients
  const client1 = await prisma.client.create({
    data: {
      name: "John Doe",
      country: "US",
      phone: "1234567890",
    },
  });

  const client2 = await prisma.client.create({
    data: {
      name: "Jane Smith",
      country: "UK",
      phone: "0987654321",
    },
  });

  console.log({ shelter1, shelter2, pet1, pet2, client1, client2 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
