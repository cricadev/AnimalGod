<script setup lang="ts">
const cardsHP = [
  {
    figure1: "/circleCard.png",
    figure2: "/circleCyanCard.png",
    pet: "/catCard.png",
  },
  {
    figure1: "smallCircleCard.png",
    figure2: "curveCard.png",
    figure3: "mediumCircleCard.png",
    pet: "/tobyDogCard.png",
  },
];
</script>

<template>
  <div
    class="container grid grid-cols-2 grid-rows-1 justify-center w-full h-[40vh] mb-8 gap-4 overflow-hidden mx-auto px-10"
  >
    <div
      class="bg-[#EDF1F4] dark:bg-darkContSecond w-full h-full -skew-x-12 relative col-start-1 col-end-2"
    >
      <nuxt-img
        provider="cloudinary"
        src="/tobyDogCard_zhban3.png"
        class="absolute bottom-0 -right-4 skew-x-12"
        width="100%"
        height="100%"
      ></nuxt-img>
      <nuxt-img
        provider="cloudinary"
        src="/circleCyanCard.png"
        width="100%"
        height="100%"
        class="absolute bottom-0 left-0 skew-x-12"
      ></nuxt-img>
      <nuxt-img
        provider="cloudinary"
        src="/circleCard.png"
        width="100%"
        height="100%"
        class="absolute top-0 right-0 skew-x-12"
      ></nuxt-img>
    </div>
    <div
      class="bg-[#EDF1F4] dark:bg-darkContSecond w-full h-full -skew-x-12 relative col-start-2 col-end-3"
    >
      <!-- Add your second card here -->
      <nuxt-img
        provider="cloudinary"
        src="/catCard.png"
        width="100%"
        height="100%"
        class="absolute bottom-0 right-0 skew-x-12"
      ></nuxt-img>
      <nuxt-img
        provider="cloudinary"
        src="/mediumCircleCard.png"
        width="100%"
        height="100%"
        class="absolute bottom-0 left-0 skew-x-12"
      ></nuxt-img>
      <nuxt-img
        provider="cloudinary"
        src="/smallCircleCard.png"
        width="50%"
        height="50%"
        class="absolute top-8 right-8 skew-x-12"
      ></nuxt-img>
      <nuxt-img
        provider="cloudinary"
        src="/curveCard.png"
        width="50%"
        height="50%"
        class="absolute top-1/2 translate-y-[-50%] right-0 skew-x-12"
      ></nuxt-img>
    </div>
  </div>
</template>

<style></style>
