<script setup lang="ts">
const user = useSupabaseUser();
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
const boxes = [
  {
    icon: "material-symbols:award-star-outline",
    title: "01",
    description: "The biggest intermediary!",
  },
  {
    icon: "solar:global-bold",
    title: "02",
    description: "Worldwide scope",
  },
  {
    icon: "material-symbols:sound-detection-dog-barking",
    title: "03",
    description: "+15,000 adopted animals",
  },
  {
    icon: "material-symbols:home",
    title: "04",
    description: "+800 registered animal shelters",
  },
];
</script>

<template>
  <div class="" v-if="user?.user_metadata?.isShelter">
    <div
      class="h-64 w-32 mx-auto rounded-md bg-darkContSecond flex flex-col justify-center items-center text-center my-16"
      v-for="box in boxes"
    >
      <Icon :name="box.icon"></Icon>
      <h1>{{ box.title }}</h1>
      <p>{{ box.description }}</p>
    </div>
  </div>
  <div
    v-else
    class="container grid grid-cols-2 grid-rows-1 justify-center w-full h-[40vh] mb-8 gap-4 overflow-hidden mx-auto px-10"
  >
    <div
      class="bg-[#EDF1F4] dark:bg-darkContSecond w-full h-full -skew-x-12 relative col-start-1 col-end-2"
    >
      <nuxt-img
        provider="cloudinary"
        src="/v1685029473/tobyDogCard_zhban3.png"
        class="absolute bottom-0 -right-4 skew-x-12"
        width="100%"
        height="100%"
      ></nuxt-img>
      <nuxt-img
        provider="cloudinary"
        src="/v1685029472/circleCyanCard_lxm5wo.png"
        width="100%"
        height="100%"
        class="absolute bottom-0 left-0 skew-x-12"
      ></nuxt-img>
      <nuxt-img
        provider="cloudinary"
        src="/v1685029472/circleCard_pchnrb.png"
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
        src="/v1685029472/catCard_rcrjqb.png"
        width="100%"
        height="100%"
        class="absolute bottom-0 right-0 skew-x-12"
      ></nuxt-img>
      <nuxt-img
        provider="cloudinary"
        src="/v1685029473/mediumCircleCard_a6ucac.png"
        width="100%"
        height="100%"
        class="absolute bottom-0 left-0 skew-x-12"
      ></nuxt-img>
      <nuxt-img
        provider="cloudinary"
        src="/v1685029473/smallCircleCard_eh8sva.png"
        width="50%"
        height="50%"
        class="absolute top-8 right-8 skew-x-12"
      ></nuxt-img>
      <nuxt-img
        provider="cloudinary"
        src="/v1685029473/curveCard_saubup.png"
        width="50%"
        height="50%"
        class="absolute top-1/2 translate-y-[-50%] right-0 skew-x-12"
      ></nuxt-img>
    </div>
  </div>
</template>

<style></style>
