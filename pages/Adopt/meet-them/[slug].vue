<template>
  <div class="">
    <!--Carousel Section -->
    <div class="h-[50vh]">
      <h2 class="text-Heading1sm font-bold capitalize text-center">
        {{ $route.params.slug }}
      </h2>
      <Carousel
        class="bg-contSecond dark:bg-darkContSecond pt-16 pb-8"
        :start-slide="currentSlide"
        @slide-end="onSlideEnd"
        :wrap-around="true"
        snap-align="center"
        :items-to-show="1"
      >
        <Slide
          class="rounded-xl shadow-xl w-full h-full overflow-hidden"
          v-for="(animal, index) in carouselImages"
          :key="index"
        >
          <div class="h-full">
            <nuxt-img
              loading="lazy"
              provider="cloudinary"
              :src="'/q_80' + animal[currentSlide]"
              class="object-center z-0 w-full h-full max-h-full max-w-full"
              width="100%"
              height="100%"
              preload
              format="webp"
              :alt="animal.name"
            ></nuxt-img>
          </div>
        </Slide>

        <template #addons>
          <Navigation class="slug-navigation" />
        </template>
      </Carousel> 
    </div>
  </div>
</template>
<script setup>
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";
import animals from "~/db/animals.json";
const animalDataByName = ref(animals.animalDataByName);
// get carouselImages value from animalDataByName
const carouselImages = computed(() => {
  return animalDataByName.value.map((animal) => {
    return animal.carouselImages;
  });
});
console.log(carouselImages);
const currentSlide = ref(0);

const onSlideEnd = () => {
  currentSlide.value += 1;
  if (currentSlide.value > 3) {
    currentSlide.value = 0;
  }
};
</script>
