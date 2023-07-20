<script setup lang="ts">
import { Carousel, Pagination, Slide } from "vue3-carousel";
import { components } from "~/slices";

const { client } = usePrismic();

const slidesHero = [
  {
    id: 1,
    title: "Adopt. Love. Save lives.",
    content:
      "The animal shelter website is a place where people can go to adopt animals that need homes. They can also find information on how to care for their new pet, and how to make sure that their pet is healthy and happy.",
    kind: "Pug",
    image: "/v1685029473/heroDog_xdelwc.png",
  },
  {
    id: 2,
    title: "A home for every pet",
    content:
      "The animal shelter website is committed to finding a home for every pet, and to helping people make the best decisions for their new furry family member.",
    kind: "American Bobtail",
    image: "/v1685029472/catHero_aaok1q.png",
  },
  {
    id: 3,
    title: "No animal left behind",
    content:
      "We believe that every animal regardless of their age, health, or temperament deserves a chance at a happy and healthy life, and we'll do everything in our power to make that happen.",
    kind: "Autralian Kelpie",
    image: "/v1685029473/shepardHero_rcg3ik.png",
  },
];

const route = useRoute();
const { locale, t } = useI18n();

const { data: homepage } = await useAsyncData("homepage", async () => {
  const document = await client.getSingle("homepage", {
    lang: `${locale.value}-${
      locale.value.toUpperCase() === "EN" ? "US" : locale.value.toUpperCase()
    }`,
  });

  if (document) {
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
</script>

<template>
  <div>
    <slice-zone
      wrapper="main"
      :components="components"
      :slices="homepage.data.slices"
    />
  </div>
</template>
