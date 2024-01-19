<script setup lang="ts">
import { Carousel, Pagination, Slide } from "vue3-carousel";
import { useWindowSize } from "@vueuse/core";
import { storeToRefs } from "pinia";

const { height, width } = useWindowSize();
const isMobile = computed(() => width.value < 768)
const slidesHero = [
  {
    id: 1,
    title: "Adopt. Love. Save lives.",
    content:
      "The animal shelter website is a place where people can go to adopt animals that need homes. They can also find information on how to care for their new pet, and how to make sure that their pet is healthy and happy.",
    kind: "Pug",
    image: "/heroDog_xdelwc.png",
    cta: true,
  },
  {
    id: 2,
    title: "A home for every pet",
    content:
      "The animal shelter website is committed to finding a home for every pet, and to helping people make the best decisions for their new furry family member.",
    kind: "American Bobtail",
    image: "/catHero_aaok1q.png",
    cta: true,
  },
  {
    id: 3,
    title: "No animal left behind",
    content:
      "We believe that every animal regardless of their age, health, or temperament deserves a chance at a happy and healthy life, and we'll do everything in our power to make that happen.",
    kind: "Autralian Kelpie",
    image: "/shepardHero_rcg3ik.png",
    cta: true,
  },
];
</script>

<template>
  <div v-show="isMobile">
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide class="bg-[#1713C1] h-[70vh] w-full relative overflow-hidden" v-for="slide in slidesHero"
        :key="slide.content">
        <div class="flex flex-col items-center justify-center h-full">
          <nuxt-img provider="cloudinary" src="/circleHero_ybk8m3.png" width="100%" height="100%"
            class="absolute top-0 left-0 z-40"></nuxt-img>
          <nuxt-img provider="cloudinary" :src="slide.image" width="100%" height="100%"
            class="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-60%] z-20"></nuxt-img>
          <nuxt-img provider="cloudinary" src="/circleHeroBlue_j0v27w.png" width="100%" height="100%"
            class="absolute bottom-0 left-0 z-[5]"></nuxt-img>
          <div class="absolute z-40 mx-5 text-center bottom-24 text-darkContText-50 dark:text-darkContText-50">
            <h2 class="font-sans font-bold text-Heading2sm  md:text-Heading1lg ">
              {{ slide.title }}
            </h2>
            <p class="mt-4 font-sans font-regular text-Body1sm md:text-Body1lg ">
              {{ slide.content }}
            </p>
          </div>
          <span
            class="absolute bottom-0 right-0 z-[31] font-extrabold text-right text-[#0300A2] text-[7rem] leading-none">
            {{ slide.kind }}
          </span>
          <div
            class="absolute h-[50%] w-full bg-gradient-to-t from-[#1713C1] z-30 bottom-0 left-0 to-transparent via-[#1713C1]">
          </div>
        </div>

      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
  <div class="" v-show="!isMobile">
    <Carousel :wrap-around="true">
      <Slide class="bg-[#1713C1] md:h-[40vh] lg:h-[70vh] w-full relative overflow-hidden" v-for="slide in slidesHero"
        :key="slide.content">
        <div class="w-full h-full relative grid">
          <nuxt-img provider="cloudinary" src="/circleHero_ybk8m3.png" width="100%" height="100%"
            class="z-40 absolute top-0"></nuxt-img>
          <nuxt-img provider="cloudinary" :src="slide.image" width="100%" height="100%"
            class="place-self-end row-span-2 z-[41]"></nuxt-img>
          <nuxt-img provider="cloudinary" src="/circleHP_a2qj83.png"
            class="absolute bottom-0 left-0 z-[5] w-1/2 "></nuxt-img>

          <span
            class="absolute bottom-0 right-0 z-1 font-extrabold text-right text-[#0300A2] text-[10rem] lg:text-[20rem] leading-none ">
            {{ slide.kind }}
          </span>
          <div
            class="z-40 md:col-start-2 md:row-start-1 md:row-end-3 mx-5 text-center  text-darkContText-50 md:place-self-center dark:text-darkContText-50 md:mr-32">
            <h2 class="font-sans font-bold text-Heading1lg lg:text-Display text-start leading-tight lg:leading-none">
              {{ slide.title }}
            </h2>
            <p class="mt-4 font-sans font-regular text-Body1lg lg:text-xl text-start">
              {{ slide.content }}
            </p>
            <div class="" v-if="slide.cta">
              <div class="flex justify-start mt-8">
                <UButton size="xl" label="Learn more" color="primary" variant="solid" class="md:py-4 md:px-8" />
              </div>
            </div>
          </div>

        </div>


      </Slide>

      <template #addons>
        <Pagination class="opacity-0 " />
      </template>
    </Carousel>
  </div>
</template>
<style scoped>
.grid-hero-mobile {
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 1fr;

  height: 30vh;
  width: 100%;
}
</style>