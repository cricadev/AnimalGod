<script setup lang="ts">
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

const slidesHero = [
  {
    id: 1,
    title: "Adopt. Love. Save lives.",
    content:
      "The animal shelter website is a place where people can go to adopt animals that need homes. They can also find information on how to care for their new pet, and how to make sure that their pet is healthy and happy.",
    kind: "Pug",
    image: "/heroDog.png",
  },
  {
    id: 2,
    title: "A home for every pet",
    content:
      "The animal shelter website is committed to finding a home for every pet, and to helping people make the best decisions for their new furry family member.",
    kind: "American Bobtail",
    image: "/catHero.png",
  },
  {
    id: 3,
    title: "No animal left behind",
    content:
      "We believe that every animal regardless of their age, health, or temperament deserves a chance at a happy and healthy life, and we'll do everything in our power to make that happen.",
    kind: "Autralian Kelpie",
    image: "/shepardHero.png",
  },
];
</script>

<template>
  <div>
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide
        class="bg-contAccent h-[70vh] w-full relative overflow-hidden"
        v-for="slide in slidesHero"
        :key="slide.content"
      >
        <div class="flex flex-col items-center justify-center h-full">
          <nuxt-img
            src="/circle.png"
            width="100%"
            height="100%"
            class="absolute top-0 left-0 z-40"
          ></nuxt-img>
          <nuxt-img
            :src="slide.image"
            width="100%"
            height="100%"
            class="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-60%] z-20"
          ></nuxt-img>
          <nuxt-img
            src="/circleHeroBlue.png"
            width="100%"
            height="100%"
            class="absolute bottom-0 left-0 z-[5]"
          ></nuxt-img>
          <div
            class="absolute z-40 mx-5 text-center bottom-24 text-darkContText-50 dark:text-darkContText-50"
          >
            <h2 class="font-sans font-bold text-Heading2sm">
              {{ slide.title }}
            </h2>
            <p class="mt-4 font-sans font-regular text-Body1sm">
              {{ slide.content }}
            </p>
          </div>
          <span
            class="absolute bottom-0 right-0 z-[31] font-extrabold text-right text-[#0955C9] text-[7rem] leading-none"
          >
            {{ slide.kind }}
          </span>
          <div
            class="absolute h-[50%] w-full bg-gradient-to-t from-contAccent z-30 bottom-0 left-0 to-transparent via-contAccent"
          ></div>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss">
.carousel__pagination {
  transform: translateY(-50%);
  padding-bottom: 100px;
}
.carousel__pagination-button {
  @apply bg-darkContThird;
  border-radius: 50%;
  transform: scaleY(0.8) scaleX(0.5);

  &:hover {
    @apply bg-contComplement;
    transition: 0.2s all ease-in;
  }
}
.carousel__pagination-button:hover::after {
  @apply bg-contComplement;
  transition: 0.2s all ease-in;
}
.carousel__pagination-button::after {
  @apply bg-darkContThird;
  border-radius: 50%;
  &:hover {
    @apply bg-contComplement;
    transition: 0.2s all ease-in;
  }
}
.carousel__pagination-button--active {
  @apply bg-contComplement;
  transform: scaleY(0.8) scaleX(0.5);

  border-radius: 50%;
}
.carousel__pagination-button--active::after {
  @apply bg-contComplement;

  border-radius: 50%;
}
.carousel__pagination-item {
  width: 0.8rem;
}
</style>
