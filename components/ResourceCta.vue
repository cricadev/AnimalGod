<script setup lang="ts">
import { Carousel, Pagination, Slide } from "vue3-carousel";
const user = useSupabaseUser();
const slidesResources = [
  {
    id: 1,
    title:
      " 6.3 million companion animals enter U.S animal shelters nationwide every year",
    content:
      "Aproximately 3.1 million are dgos and 3.2 million are cats. We estimate that the number of dogs and cats entering U.S shelters anually has declined from approximately 7.2 million in 2011. The biggest decline was in dogs (from 3.9million to 3.1 million)",
    cta: "Learn more",
  },
  {
    id: 2,
    title: "Each year 920,000 shelter animals are euthanized",
    content:
      "The number of dogs and cats euthanized in U.S shelters annuallly has declined from approximately 2.6 million in 2011. This decline can be partially explained by an increase in the percentageof animals adopted and the number of stray animals successfully returned to their owners.",
    cta: "Learn more",
  },
  {
    id: 3,
    title: "78 million dogs and 85.5 million cats are owned in the U.S",
    content:
      "Approximately 44% of all households in the United States have a dog, and 35% have a cat.",
    cta: "Learn more",
  },
];
const shelterSlides = [
  {
    id: 1,
    title: "The new animal shelter website has been a great success! ",
    content:
      " We've had over 1,000 unique visitors in the first week, and our adoption rates have increased by 20%. We're very pleased with the results!",
    cta: "Learn more",
  },
  {
    id: 2,
    title:
      "Many of the animals adopted from the shelter are adopted within a few days of being listed on the website",
    content:
      "This is because the site is very user-friendly and the dogs are listed in an easy-to-search format. Furthermore, the site includes a wealth of information about each animal, such as photos, videos, and descriptions of their personality and behavior. This makes it simple for prospective adopters to find the ideal match for their family",
    cta: "Learn more",
  },
  {
    id: 3,
    title:
      "More than 800 animal shelters have been helped through the use of AnimalGod",
    content:
      "There is no definitive success rate, but it is clear that the website has been helpful in connectingshelters with much-needed resources.",
    cta: "Learn more",
  },
];
</script>

<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide
      class="h-[50vh] w-full relative overflow-hidden flex flex-col gap-4"
      :class="{
        'bg-Bg dark:bg-darkBg': user && user?.user_metadata?.isShelter,
        'bg-contSecond dark:bg-darkContSecond':
          user && !user?.user_metadata?.isShelter,
        'dark:bg-darkContSecond bg-contSecond': !user,
      }"
      v-for="slide in user?.user_metadata?.isShelter
        ? shelterSlides
        : slidesResources"
      :key="slide.content"
    >
      <div
        class="z-40 mx-5 text-center bottom-24 text-darkBg dark:text-darkContText flex flex-col gap-4 mb-4"
      >
        <h2 class="font-sans font-bold text-Heading2sm leading-tight">
          {{ slide.title }}
        </h2>
        <p class="mt-4 font-sans font-regular text-Body1sm leading-tight">
          {{ slide.content }}
        </p>
      </div>
      <UButton size="xl" :label="slide.cta" color="primary" variant="solid" />
    </Slide>

    <template #addons> </template>
  </Carousel>
</template>
