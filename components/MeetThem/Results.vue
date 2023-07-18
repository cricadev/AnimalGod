<template>
  <div class="flex justify-center items-center flex-col h-[65vh] mx-5">
    <div class="my-12 flex flex-col justify-center items-center text-center">
      <span
        class="text-Captionlg font-semibold font-Inter text-contInactive mb-4"
        >20 results</span
      >
      <h4 class="text-Heading4sm font-bold font-Inter mb-1">
        Black cats are less likely to be adopted
      </h4>
      <p class="text-Footer font-regular text-contInactive leading-none mx-8">
        In a study of shelters in Colorado, solid black cats took an average of
        26.55 days to be adopted compared to 20.64 days for their non-black
        counterparts.
      </p>
    </div>
    <Carousel
      ref="myCarousel"
      class=""
      :start-slide="currentSlide"
      @slide-end="onSlideEnd"
      :wrap-around="true"
      snap-align="center"
      :touch-drag="false"
    >
      <Slide
        class="grid relative w-full h-full overflow-hidden rounded-xl shadow-xl grid-cols-2 grid-rows-2 gap-5"
        v-for="(group, index) in animalGroups"
        :key="index"
      >
        <nuxt-link
          class="grid relative w-full h-full overflow-hidden rounded-xl shadow-xl grid-cols-3 grid-rows-3"
          v-for="animal in group"
          :key="animal.name"
          :to="localePath(`/pet/${animal.name?.toLowerCase()}`)"
        >
          <h6s
            class="row-start-3 row-end-4 col-start-1 col-end-4 capitalize z-50 text-Heading6lg font-bold font-Inter tracking-widest relative place-self-center text-contSecond"
          >
            {{ animal.name }}
          </h6s>
          <nuxt-img
            format="webp"
            provider="cloudinary"
            :src="'/q_100' + animal.meetImage"
            class="row-span-full col-span-full object-cover object-center z-0 w-full h-full max-h-full max-w-full"
            width="100%"
            height="100%"
          ></nuxt-img>
          <div
            class="absolute h-[40%] w-full z-10 bottom-0 left-0"
            :style="`background: linear-gradient(0deg, #${animal.hex} 0%, rgba(0, 0, 0, 0) 100%);`"
          ></div>
        </nuxt-link>
      </Slide>

      <template #addons>
        <Pagination class="results-pagination" />
        <Navigation class="results-navigation" />
      </template>
    </Carousel>
  </div>
</template>
<script setup lang="ts">
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";

import animals from "~/db/animals.json";
const localePath = useLocalePath();
const animalGroups = ref(animals.animalGroups);
const currentSlide = ref(0);

const onSlideEnd = () => {
  currentSlide.value += 1;
};
</script>

<style lang="scss" scoped>
.carousel__slide {
  scroll-snap-stop: auto;
  flex-shrink: 0;
  margin: 0;
  position: relative;

  display: grid;
  justify-content: center;
  align-items: center;
}
</style>
