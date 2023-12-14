import {
  PrismaClient,
  Gender,
  Size,
  Breed,
  GoodWith,
  ActivityLevel,
  personalityAdjectives,
  liveWith,
  FormStatus,
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create shelters
  const shelter1 = await prisma.shelter.create({
    data: {
      name: "Happy Paws Shelter",
      email: "happy@paws.com",
      country: "US",
      phone: "1234567890",
      image: "image_url",
      address: "123 Happy Street",
      website: "www.happypaws.com",
    },
  });

  const shelter2 = await prisma.shelter.create({
    data: {
      name: "Furry Friends Home",
      email: "furry@friends.com",
      country: "UK",
      phone: "0987654321",
      image: "image_url",
      address: "456 Furry Avenue",
      website: "www.furryfriends.com",
    },
  });

  // Create pets for shelters
  const pet1 = await prisma.pet.create({
    data: {
      name: "Buddy",
      type: "Dog",
      images: ["/tobyMD_yubbiv.png", "image2_url"],
      gender: Gender.MALE,
      size: Size.MEDIUM,
      age: 3,
      breed: Breed.GOLDEN_RETRIEVER,
      goodWith: GoodWith.DOGS,
      activity: ActivityLevel.HIGH,
      history: "Rescued from a puppy mill",
      personality: [
        personalityAdjectives.AFFECTIONATE,
        personalityAdjectives.ENTHUSIASTIC,
      ],
      personalityDescription:
        "Buddy is a very affectionate and enthusiastic dog.",
      healthConditions: JSON.stringify({ allergies: "None" }),
      isAdopted: false,
      shelterId: shelter1.id,
    },
  });

  const pet2 = await prisma.pet.create({
    data: {
      name: "Whiskers",
      type: "Cat",
      images: ["/cooperMD_gugvdw.png", "image4_url"],
      gender: Gender.FEMALE,
      size: Size.SMALL,
      age: 2,
      breed: Breed.BEAGLE,
      goodWith: GoodWith.CATS,
      activity: ActivityLevel.LOW,
      history: "Found as a stray",
      personality: [
        personalityAdjectives.RELAXED,
        personalityAdjectives.INDEPENDENT,
      ],
      personalityDescription: "Whiskers is a relaxed and independent cat.",
      healthConditions: JSON.stringify({ allergies: "None" }),
      isAdopted: false,
      shelterId: shelter2.id,
    },
  });

  // Create clients
  const client1 = await prisma.client.create({
    data: {
      name: "John Doe",
      email: "john@doe.com",
      country: "US",
      phone: "1234567890",
      image: "image_url",
    },
  });

  const client2 = await prisma.client.create({
    data: {
      name: "Jane Smith",
      email: "jane@smith.com",
      country: "UK",
      phone: "0987654321",
      image: "image_url",
    },
  });

  // Create appointments
  const appointment1 = await prisma.appointment.create({
    data: {
      liveWith: [liveWith.PARTNER, liveWith.CHILDREN],
      liveWithDescription: "Living with partner and two children",
      liveIn: true,
      isRenting: false,
      qAndA: JSON.stringify({ question1: "Answer1", question2: "Answer2" }),
      qAndADescription: "Q&A Description",
      whyMessage: "We love dogs and have a suitable environment for them.",
      clientId: client1.id,
      petId: pet1.id,
      acceptedForm: FormStatus.IN_PROCESS,
    },
  });

  const appointment2 = await prisma.appointment.create({
    data: {
      liveWith: [liveWith.ALONE],
      liveWithDescription: "Living alone",
      liveIn: true,
      isRenting: true,
      rentAcceptance: true,
      qAndA: JSON.stringify({ question1: "Answer1", question2: "Answer2" }),
      qAndADescription: "Q&A Description",
      whyMessage: "I have always wanted to have a cat.",
      clientId: client2.id,
      petId: pet2.id,
      acceptedForm: FormStatus.IN_PROCESS,
    },
  });

  console.log({
    shelter1,
    shelter2,
    pet1,
    pet2,
    client1,
    client2,
    appointment1,
    appointment2,
  });
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
