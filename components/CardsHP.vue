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
    imagePosCard: [
      {
        pos: "absolute bottom-0 right-0",
        image: "/v1688140110/Ellipse_7-3_a94mhf.png",
      },
      {
        pos: "absolute bottom-1/4 right-1/4",
        image: "/v1688140109/Ellipse_6_tnzgbz.png",
      },
      {
        pos: "absolute top-0 left-0",
        image: "/v1688140110/Ellipse_8-3_bqwjua.png",
      },
    ],
  },
  {
    icon: "solar:global-bold",
    title: "02",
    description: "Worldwide scope",
    imagePosCard: [
      {
        pos: "absolute top-6 right-6",
        image: "/v1688140109/Ellipse_6_tnzgbz.png",
      },
      {
        pos: "absolute top-0 right-0",
        image: "/v1688140110/Ellipse_9_zjprly.png",
      },

      {
        pos: "absolute bottom-0 left-0",
        image: "/v1688140110/Ellipse_8_ukoujt.png",
      },
      {
        pos: "absolute bottom-0 right-0",
        image: "/v1688140110/Ellipse_7_oqx4gl.png",
      },
    ],
  },
  {
    icon: "material-symbols:sound-detection-dog-barking",
    title: "03",
    description: "+15,000 adopted animals",
    imagePosCard: [
      {
        pos: "absolute top-0 left-0",
        image: "/v1688140110/Ellipse_9-1_i8xk1b.png",
      },
      {
        pos: "absolute top-4 left-0",
        image: "/v1688140109/Ellipse_7-1_d2mvqq.png",
      },
      {
        pos: "absolute bottom-0 right-0",
        image: "/v1688140110/Ellipse_8-1_m6p0ao.png",
      },
      {
        pos: "absolute top-1/2 translate-y-[-50%] right-0",
        image: "/v1688140109/Ellipse_6-1_btsmax.png",
      },
    ],
  },
  {
    icon: "material-symbols:home",
    title: "04",
    description: "+800 registered animal shelters",
    imagePosCard: [
      {
        pos: "absolute bottom-0 left-0",
        image: "/v1688140110/Ellipse_9-2_pispem.png",
      },
      {
        pos: "absolute bottom-0 right-0",
        image: "/v1688140109/Ellipse_6-2_wbihib.png",
      },
      {
        pos: "absolute top-0 right-0",
        image: "/v1688140110/Ellipse_8-2_fmhe6m.png",
      },
      {
        pos: "absolute bottom-0 left-0",
        image: "/v1688140109/Ellipse_7-2_gvffym.png",
      },
    ],
  },
];
</script>

<template>
  <div class="" v-if="user?.user_metadata?.isShelter">
    <div
      class="dark:bg-darkContSecond bg-contSecond overflow-hidden mx-24 h-40 rounded-xl flex flex-col justify-center items-center text-center mb-8 gap-2 px-8 relative shadow-2xl dark:shadow-darkBg shadow-Bg"
      v-for="box in boxes"
    >
      <Icon :name="box.icon" size="30" class="relative z-10"></Icon>
      <h2 class="text-Heading2sm font-bold relative z-10">{{ box.title }}</h2>
      <p class="text-Captionlg font-semibold leading-tight relative z-10">
        {{ box.description }}
      </p>
      <nuxt-img
        v-if="box.imagePosCard[0]?.image"
        provider="cloudinary"
        :src="box.imagePosCard[0]?.image"
        :class="box.imagePosCard[0]?.pos"
        width="100%"
        height="100%"
      ></nuxt-img>
      <nuxt-img
        v-if="box.imagePosCard[1]?.image"
        provider="cloudinary"
        :src="box.imagePosCard[1]?.image"
        :class="box.imagePosCard[1]?.pos"
        width="100%"
        height="100%"
      ></nuxt-img>
      <nuxt-img
        v-if="box.imagePosCard[2]?.image"
        provider="cloudinary"
        :src="box.imagePosCard[2]?.image"
        :class="box.imagePosCard[2]?.pos"
        width="100%"
        height="100%"
      ></nuxt-img>
      <nuxt-img
        v-if="box.imagePosCard[3]?.image"
        provider="cloudinary"
        :src="box.imagePosCard[3]?.image"
        :class="box.imagePosCard[3]?.pos"
        width="100%"
        height="100%"
      ></nuxt-img>
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
