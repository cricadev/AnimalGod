import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.pets.create({
    data: {
      pets: [
        {
          name: "Bella",
          type: "cat",
          breed: "Maine Coon",
          size: "large",
          age: 7,
          gender: "female",
          personality: ["affectionate", "intelligent", "gentle"],
          goodWith: ["dogs", "children"],
          activityLevel: "medium",
          meetImage: "/bellaMD_qoczyo.png",
          hex: "FF7F00",
          carouselImages: [
            "/BellaGallery00_ywzzlh.png",
            "/BellaGallery01_t6nxdt.png",
            "/BellaGallery02_muznrm.png",
            "/BellaGallery03_klvear.png",
          ],
          history:
            "Bella was found abandoned in a park. Despite her tough start, she's a very affectionate and gentle cat. She loves to curl up on laps and is always purring. Bella would love to be part of a family where she can get plenty of cuddles and playtime.",
          personalitySummary:
            "Bella is a gentle and intelligent cat. She's very easy to handle and is generally quite cooperative. She's an indoor cat and would do well in a quiet and calm home.",
          healthSummary:
            "Bella is healthy and has been vaccinated, spayed, and microchipped. She has regular vet checkups and eats a balanced diet. She's a healthy, beautiful, and affectionate cat.",
          healthStats: {
            vaccinations: ["rabies", "feline distemper", "feline herpesvirus"],
            characteristics: ["spayed", "vaccinated", "microchipped"],
          },
        },
        {
          name: "Max",
          type: "dog",
          breed: "Golden Retriever",
          size: "large",
          age: 2,
          gender: "male",
          personality: ["friendly", "active", "outgoing"],
          goodWith: ["dogs", "cats", "children"],
          activityLevel: "high",
          meetImage: "/maxMD_jnczyd.png",
          hex: "F2CC80",
          carouselImages: [
            "/MaxGallery00_tnmlrp.png",
            "/MaxGallery01_o4mzdt.png",
            "/MaxGallery02_rnpfrm.png",
            "/MaxGallery03_gdveer.png",
          ],
          history:
            "Max was rescued from an overcrowded shelter. He is a young, active, and friendly dog who loves to play fetch and go on long walks. He has a lot of energy and would do best in a home that can provide him with plenty of exercise.",
          personalitySummary:
            "Max is a friendly and active dog. He gets along well with other dogs and loves to play. He would do well in a home with a yard where he can run and play.",
          healthSummary:
            "Max is healthy and up-to-date on all his vaccinations. He has been neutered and microchipped. He is a strong and healthy young dog with lots of energy.",
          healthStats: {
            vaccinations: ["rabies", "parvovirus", "distemper"],
            characteristics: ["neutered", "vaccinated", "microchipped"],
          },
        },
        {
          name: "Molly",
          type: "dog",
          breed: "Beagle",
          size: "medium",
          age: 6,
          gender: "female",
          personality: ["friendly", "curious", "mellow"],
          goodWith: ["dogs", "cats", "children"],
          activityLevel: "medium",
          meetImage: "/mollyMD_ncyzm.png",
          hex: "D3A2C8",
          carouselImages: [
            "/MollyGallery00_ynzxph.png",
            "/MollyGallery01_t6nhft.png",
            "/MollyGallery02_mzzgrm.png",
            "/MollyGallery03_klvhor.png",
          ],
          history:
            "Molly was found as a stray and brought to the shelter. Despite her past, she is a very friendly and mellow dog. She gets along well with other dogs and loves to sniff and explore. She would make a great addition to any family.",
          personalitySummary:
            "Molly is a friendly and curious dog. She loves to explore and sniff around. She's also quite mellow and would do well in a relaxed home environment.",
          healthSummary:
            "Molly is healthy and up-to-date on all her vaccinations. She has been spayed and microchipped. Molly is a happy, healthy, and curious dog who is ready for her forever home.",
          healthStats: {
            vaccinations: ["rabies", "parvovirus", "distemper"],
            characteristics: ["spayed", "vaccinated", "microchipped"],
          },
        },
        {
          name: "Oliver",
          type: "cat",
          breed: "Bengal",
          size: "medium",
          age: 5,
          gender: "male",
          personality: ["playful", "active", "independent"],
          goodWith: ["cats", "children"],
          activityLevel: "high",
          meetImage: "/oliverMD_qnczyt.png",
          hex: "FB9300",
          carouselImages: [
            "/OliverGallery00_yzzlph.png",
            "/OliverGallery01_t6nhtd.png",
            "/OliverGallery02_muzgrn.png",
            "/OliverGallery03_klvehr.png",
          ],
          history:
            "Oliver was found on the streets, but despite his independent streak, he's a very affectionate and playful cat. He loves to chase after toys and would do well in a home with plenty of stimulating activities.",
          personalitySummary:
            "Oliver is an active and playful cat. He loves to play with toys and explore. Despite his independent nature, he can be quite affectionate when he's comfortable.",
          healthSummary:
            "Oliver is healthy and up-to-date on all his vaccinations. He has been neutered and microchipped. He is an active and healthy cat who is ready for his forever home.",
          healthStats: {
            vaccinations: ["rabies", "feline distemper", "feline herpesvirus"],
            characteristics: ["neutered", "vaccinated", "microchipped"],
          },
        },
      ],
    },
  });
}
try {
  await seed();
  await prisma.$disconnect();
} catch (error) {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
}
