<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useWindowSize } from "@vueuse/core";

const { height, width } = storeToRefs(useWindowSize());
const isMobile = computed(() => width.value < 768);
const isTablet = computed(() => width.value < 1024 && width.value >= 768);

const user = useSupabaseUser();

const cardsHP = [
  {
    id: 0,
    figure1: "/circle-card1_ebrq35.png",
    figure2: "/circleCyanCard_lxm5wo.png",
    pet: "/colo-toby_sn0ja5.png",
    classFigure1: "absolute top-0 right-0 skew-x-12  ",
    classFigure2: "absolute bottom-0 left-0 skew-x-12  ",
    classPet: "w-full h-full object-cover skew-x-12 absolute bottom-0 grayscale hover:filter-none",
    width: "100%",
    height: "100%",
    mobile: true,
    cardStylesHover: "hover:bg-[#02C77A] dark:hover:bg-[#02C77A]",
    classesName: "bg-gradient-to-t from-[#02C77A] to-transparent dark:from-[#02C77A]  dark:to-transparent",
    petName: "Toby",

  },


  {
    id: 1,
    figure1: "/mediumCircleCard_a6ucac.png",
    figure2: "/circle1-card2_uxelhg.png",
    figure3: "/circle2-card2_chfu4e.png",
    pet: "/color-second_kpqn71.png",
    classFigure1: "absolute top-0 right-0 skew-x-12",
    classFigure2: "absolute bottom-0 left-0 skew-x-12",
    classPet: "w-full h-full object-cover skew-x-12 absolute bottom-0 grayscale hover:filter-none",
    width: "100%",
    height: "100%",
    mobile: true,
    cardStylesHover: "hover:bg-[#E8BC5E] dark:hover:bg-[#E8BC5E]",
    classesName: "bg-gradient-to-t from-[#E8BC5E] to-transparent dark:from-[#E8BC5E]  dark:to-transparent",
    petName: "Cooper",

  },
  {
    id: 2,
    figure1: "/circle2-card4_png_wxjcru.png",
    figure2: "/curveCard_saubup.png",
    figure3: "/mediumCircleCard_a6ucac.png",
    pet: "/color-third_u9s7ka.png",
    classFigure1: "absolute top-8 right-8 skew-x-12",
    classFigure2: "absolute top-1/2 translate-y-[-50%] right-0 skew-x-12",
    classFigure3: "absolute bottom-0 left-0 skew-x-12",
    classPet: "w-full h-full object-cover skew-x-12 absolute bottom-0 grayscale hover:filter-none",
    width: "100%",
    height: "100%",
    mobile: false,
    cardStylesHover: "hover:bg-[#C85927] dark:hover:bg-[#C85927]",
    classesName: "bg-gradient-to-t from-[#C85927] to-transparent dark:from-[#C85927]  dark:to-transparent",
    petName: "Luna",
  },
  {
    id: 3,
    figure1: "/circle1-card4_xdwo24.png",
    figure2: "/circle2-card4_png_wxjcru.png",
    figure3: "/circle-card4_stnxqe.png",
    pet: "/color-fourth_nsmv9k.png",
    classFigure1: "absolute top-8 right-8 skew-x-12",
    classFigure2: "absolute right-0 skew-x-12",
    classFigure3: "absolute bottom-0 left-0 skew-x-12",
    classPet: "w-full h-full object-cover skew-x-12 absolute bottom-0 grayscale hover:filter-none",
    width: "100%",
    height: "100%",
    mobile: false,
    cardStylesHover: "hover:bg-[#BCEFF0] dark:hover:bg-[#BCEFF0]",
    classesName: "bg-gradient-to-t from-[#BCEFF0] to-transparent dark:from-[#BCEFF0]  dark:to-transparent",
    petName: "Pixie",
  }
];
const boxes = [
  {
    icon: "material-symbols:award-star-outline",
    title: "01",
    description: "The biggest intermediary!",
    imagePosCard: [
      {
        pos: "absolute bottom-0 right-0",
        image: "/Ellipse_7-3_a94mhf.png",
      },
      {
        pos: "absolute bottom-1/4 right-1/4",
        image: "/Ellipse_6_tnzgbz.png",
      },
      {
        pos: "absolute top-0 left-0",
        image: "/Ellipse_8-3_bqwjua.png",
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
        image: "/Ellipse_6_tnzgbz.png",
      },
      {
        pos: "absolute top-0 right-0",
        image: "/Ellipse_9_zjprly.png",
      },

      {
        pos: "absolute bottom-0 left-0",
        image: "/Ellipse_8_ukoujt.png",
      },
      {
        pos: "absolute bottom-0 right-0",
        image: "/Ellipse_7_oqx4gl.png",
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
        image: "/Ellipse_9-1_i8xk1b.png",
      },
      {
        pos: "absolute top-4 left-0",
        image: "/Ellipse_7-1_d2mvqq.png",
      },
      {
        pos: "absolute bottom-0 right-0",
        image: "/Ellipse_8-1_m6p0ao.png",
      },
      {
        pos: "absolute top-1/2 translate-y-[-50%] right-0",
        image: "/Ellipse_6-1_btsmax.png",
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
        image: "/Ellipse_9-2_pispem.png",
      },
      {
        pos: "absolute bottom-0 right-0",
        image: "/Ellipse_6-2_wbihib.png",
      },
      {
        pos: "absolute top-0 right-0",
        image: "/Ellipse_8-2_fmhe6m.png",
      },
      {
        pos: "absolute bottom-0 left-0",
        image: "/Ellipse_7-2_gvffym.png",
      },
    ],
  },
];
</script>

<template>
  <div class="mx-4 md:mx-32 overflow-visible">
    <div class="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-12 md:mb-32" v-if="user?.user_metadata?.isShelter">
      <div
        class="dark:bg-darkContSecond bg-contSecond  mx-24 h-40 rounded-xl flex flex-col justify-center items-center text-center mb-8 gap-2 px-8 relative shadow-2xl dark:shadow-darkBg shadow-Bg md:w-full md:mx-0 md:h-full md:py-12"
        v-for="box in boxes">
        <Icon :name="box.icon" size="30" class="relative z-10"></Icon>
        <h2 class="text-Heading2sm font-bold relative z-10">{{ box.title }}</h2>
        <p class="text-Captionlg font-semibold leading-tight relative z-10">
          {{ box.description }}
        </p>
        <nuxt-img v-if="box.imagePosCard[0]?.image" provider="cloudinary" :src="box.imagePosCard[0]?.image"
          :class="box.imagePosCard[0]?.pos" width="100%" height="100%"></nuxt-img>
        <nuxt-img v-if="box.imagePosCard[1]?.image" provider="cloudinary" :src="box.imagePosCard[1]?.image"
          :class="box.imagePosCard[1]?.pos" width="100%" height="100%"></nuxt-img>
        <nuxt-img v-if="box.imagePosCard[2]?.image" provider="cloudinary" :src="box.imagePosCard[2]?.image"
          :class="box.imagePosCard[2]?.pos" width="100%" height="100%"></nuxt-img>
        <nuxt-img v-if="box.imagePosCard[3]?.image" provider="cloudinary" :src="box.imagePosCard[3]?.image"
          :class="box.imagePosCard[3]?.pos" width="100%" height="100%"></nuxt-img>
      </div>
    </div>
    <div v-else class="lg:flex lg:items-center 2xl:px-48">
      <div
        class="container grid grid-cols-2 grid-rows-1 justify-center w-full h-[60vh] mb-8 gap-4  mx-auto lg:px-10  md:grid-cols-3  lg:grid-cols-4 "
        v-show="!isMobile && !isTablet">
        <div v-for="animalCard in cardsHP" :key="animalCard.id"
          class="bg-[#EDF1F4] dark:bg-darkContSecond w-full h-full -skew-x-12 relative col-span-1 max-w-sm transition-all duration-500 ease-in-out card"
          :class="animalCard.cardStylesHover">
          <span :class="[
            animalCard.classesName,
            'absolute bottom-0 left-1/2 w-full flex justify-center items-center text-white font-bold text-Heading2sm translate-x-[-50%] transition-all duration-500 ease-in-out] z-30 card__name h-1/5'
          ]">

            {{ animalCard.petName }}
          </span>
          <nuxt-img provider="cloudinary" :src="animalCard.pet" :class="animalCard.classPet"></nuxt-img>
          <nuxt-img provider="cloudinary" :src="animalCard.figure2"
            :class="[animalCard.classFigure2, 'card__figure']"></nuxt-img>
          <nuxt-img provider="cloudinary" :src="animalCard.figure1" :class="[animalCard.classFigure1, 'card__figure']"
            sizes=" "></nuxt-img>
          <nuxt-img v-if="animalCard.figure3" provider="cloudinary" :src="animalCard.figure3"
            :class="[animalCard.classFigure3, 'card__figure']"></nuxt-img>
        </div>
      </div>
      <div
        class="container grid grid-cols-2 grid-rows-1 justify-center w-full h-[40vh] mb-8 gap-4  mx-auto px-10 md:grid-cols-3  "
        v-show="!isMobile && isTablet">
        <div v-for="animalCard in cardsHP.slice(0, 3)" :key="animalCard.figure1"
          class="bg-[#EDF1F4] dark:bg-darkContSecond w-full h-full -skew-x-12 relative col-span-1 max-w-sm transition-all duration-500 ease-in-out card "
          :class="animalCard.cardStylesHover">
          <span :class="[
            animalCard.classesName,
            'absolute bottom-0 left-1/2 w-full flex justify-center items-center text-white font-bold text-Heading2sm translate-x-[-50%] transition-all duration-500 ease-in-out] z-30 card__name h-1/5'
          ]">

            {{ animalCard.petName }}
          </span>
          <nuxt-img provider="cloudinary" :src="animalCard.pet" :class="animalCard.classPet" :width="animalCard.width"
            :height="animalCard.height"></nuxt-img>
          <nuxt-img provider="cloudinary" :src="animalCard.figure2" :width="animalCard.width" :height="animalCard.height"
            :class="[animalCard.classFigure2, 'card__figure']"></nuxt-img>
          <nuxt-img provider="cloudinary" :src="animalCard.figure1" :width="animalCard.width" :height="animalCard.height"
            :class="[animalCard.classFigure1, 'card__figure']"></nuxt-img>
          <nuxt-img v-if="animalCard.figure3" provider="cloudinary" :src="animalCard.figure3" :width="animalCard.width"
            :height="animalCard.height" :class="[animalCard.classFigure3, 'card__figure']"></nuxt-img>
        </div>
      </div>
      <div
        class="container grid grid-cols-2 grid-rows-1 justify-center w-full h-[40vh] mb-8 gap-4  mx-auto px-10 md:grid-cols-3"
        v-show="isMobile && !isTablet">
        <div v-for="animalCard in cardsHP.slice(0, 2)" :key="animalCard.figure1"
          class="bg-[#EDF1F4] dark:bg-darkContSecond w-full h-full -skew-x-12 relative col-span-1">
          <div class="">
            <nuxt-img provider="cloudinary" :src="animalCard.pet" :class="animalCard.classPet" :width="animalCard.width"
              :height="animalCard.height"></nuxt-img>
            <nuxt-img provider="cloudinary" :src="animalCard.figure2" :width="animalCard.width"
              :height="animalCard.height" :class="animalCard.classFigure2"></nuxt-img>
            <nuxt-img provider="cloudinary" :src="animalCard.figure1" :width="animalCard.width"
              :height="animalCard.height" :class="animalCard.classFigure1"></nuxt-img>
            <nuxt-img v-if="animalCard.figure3" provider="cloudinary" :src="animalCard.figure3" :width="animalCard.width"
              :height="animalCard.height" :class="animalCard.classFigure3"></nuxt-img>
          </div>
        </div>
      </div>
      <!-- CTA -->
      <div class="flex justify-center mb-8">
        <nuxt-link to="/meet-them">
          <UButton size="xl" label="Meet Them" color="primary" variant="solid" class="whitespace-nowrap" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style>
.card:hover>.card__name {
  opacity: 100;
  transition: opacity 0.3s ease-in-out;
}

.card {
  overflow: hidden;
}

.card__figure {
  transition: opacity 0.3s ease-in-out;
  width: 50%;
}

.card:hover>.card__figure {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}


.card__name {

  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
</style>
