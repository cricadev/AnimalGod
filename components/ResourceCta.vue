<script setup lang="ts">
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

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
</script>

<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide
      class="dark:bg-darkContSecond bg-contSecond h-[50vh] w-full relative overflow-hidden flex flex-col gap-4"
      v-for="slide in slidesResources"
      :key="slide.content"
    >
      <div
        class="z-40 mx-5 text-center bottom-24 text-darkBg dark:text-darkContText"
      >
        <h2 class="font-sans font-bold text-Heading2sm">
          {{ slide.title }}
        </h2>
        <p class="mt-4 font-sans font-regular text-Body1sm">
          {{ slide.content }}
        </p> 
      </div>
      <UButton
        size="xl"
        :label="slide.cta"
        color="contAccent"
        variant="solid"
        :ui="{
          color: {
            contAccent: {
              solid:
                'shadow-sm  text-darkContText dark:text-white bg-contAccent hover:bg-contAccent-700 disabled:bg-white dark:bg-contAccent dark:hover:bg-contAccent/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
            },
          },
          variant: {
            solid:
              'shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
            outline:
              'ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 dark:hover:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
            soft: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 dark:bg-{color}-950 dark:hover:bg-{color}-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
            link: 'text-{color}-500 hover:text-{color}-600 dark:text-{color}-400 dark:hover:text-{color}-500 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
          },
          icon: {
            base: 'flex-shrink-0',
            size: {
              '2xs': 'h-3.5 w-3.5',
              xs: 'h-4 w-4',
              sm: 'h-4 w-4',
              md: 'h-5 w-5',
              lg: 'h-5 w-5',
              xl: 'h-6 w-6',
            },
          },
        }"
      />
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<style></style>
