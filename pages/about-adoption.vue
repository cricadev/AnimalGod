<template>
  <div class="">
    <!-- HERO -->
    <div class="relative h-[30vh] md:h-[20vh] bg-contSecond dark:bg-darkContSecond ">
      <nuxt-img
        src="https://res.cloudinary.com/ddc0cce3m/image/upload/e_grayscale/f_auto,q_auto/v1688160841/animalGod/heroAboutAdoption_ak3i5i.png"
        height="100%" width="100%" class="px-32 absolute flex justify-center w-full"></nuxt-img>
      <nuxt-img provider="cloudinary" src="/groupCircleTopAboutAdoption_nlcpko.png" height="100%" width="100%"
        class="absolute top-0 right-0"></nuxt-img>
      <nuxt-img provider="cloudinary" src="/circleAboutAdoption_mscnaz.png" height="100%" width="100%"
        class="absolute bottom-0 left-0"></nuxt-img>
      <h2 class="text-Heading2sm font-bold text-center absolute bottom-4 z-20 flex justify-center w-full">
        Everything you need to know about adoption
      </h2>
      <div
        class="absolute h-[40%] w-full bg-gradient-to-t from-contSecond dark:from-darkContSecond z-10 bottom-0 left-0 to-transparent">
      </div>
    </div>
    <!-- DO'S AND DON'TS -->
    <div class="pt-12 px-5 flex flex-col gap-12 md:px-32 pb-36">
      <div class="flex gap-4">
        <h1 class="text-Heading1sm font-extrabold">01</h1>
        <div class="flex flex-col gap-2">
          <h3 class="text-Heading3sm font-bold leading-tight">
            Adopting an animal from a shelter is a wonderful way to provide a
            forever home for a needy pet.
          </h3>
          <p class="text-Body1sm font-regular leading-tight">
            Adopting an animal from a shelter is a wonderful way to provide a
            forever home for a needy pet. However, there are some important
            things to keep in mind before making the commitment to adopt. First
            and foremost, it is important to do your research on the animal you
            are interested in adopting. This means learning about the animal's
            behavior and history, as well as what kind of care they will need.
            Once you have done your research, it is important to visit the
            shelter to meet the animal in person. This will help you to gauge
            whether or not the animal is a good fit for your home. Finally, be
            prepared to provide the animal with a forever home. This means
            having the time, patience, and resources to provide the animal with
            everything they need.
          </p>
        </div>
      </div>
      <div class="flex gap-4">
        <h1 class="text-Heading1sm font-extrabold">02</h1>
        <div class="flex flex-col gap-2">
          <h3 class="text-Heading3sm font-bold leading-tight">
            Do's and Dont's if you wish to adopt from an animal shelter
          </h3>
          <div class="" v-show="isMobile">
            <ul class="first-list">
              <li>
                Research the animal you are interested in adopting thoroughly
              </li>
              <li>Visit the shelter to meet the animal in person</li>
              <li>
                Ask the shelter staff questions about the animal's behavior and
                history
              </li>
              <li>Be prepared to provide the animal with a forever home</li>
            </ul>
            <ul class="second-list mt-12">
              <li>Adopt on impulse</li>
              <li>Get a animal without doing research first</li>
              <li>Expect the animal to conform to your lifestyle</li>
              <li>Return the animal to the shelter if it doesn't work out</li>
            </ul>
          </div>
          <div class="flex gap-16 w-full justify-center items-center" v-show="!isMobile">
            <ul class="first-list">
              <li>
                Research the animal you are interested in adopting thoroughly
              </li>
              <li>Visit the shelter to meet the animal in person</li>
              <li>
                Ask the shelter staff questions about the animal's behavior and
                history
              </li>
              <li>Be prepared to provide the animal with a forever home</li>
            </ul>
            <ul class="second-list mt-12 md:mt-0">
              <li>Adopt on impulse</li>
              <li>Get a animal without doing research first</li>
              <li>Expect the animal to conform to your lifestyle</li>
              <li>Return the animal to the shelter if it doesn't work out</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex justify-center my-8">
        <UButton class="md:px-8 md:py-3" size="xl" label="Learn more" color="primary" variant="solid" />
      </div>
    </div>
    <!-- CTA -->

    <!-- FAQS -->
    <FAQs class=""></FAQs>
    <!-- PETS FOR ADOPTION -->
    <div class="flex flex-col gap-12 h-[70vh] w-full justify-center items-center">
      <h3 class="text-Heading3sm font-bold">Pets available for adoption</h3>
      <div class="flex flex-row gap-4">
        <div class="relative">
          <nuxt-img provider="cloudinary" src="/adoptionDog01_pybtrk.png" height="100%" width="100%"></nuxt-img>
          <h6 class="text-Heading6sm font-bold absolute bottom-2 left-1/2 translate-x-[-50%] z-10 text-Bg">
            Shultz
          </h6>
          <div class="absolute h-[40%] w-full bg-gradient-to-t  from-[#535853] bottom-0 left-0 to-transparent"></div>
        </div>
        <div class="relative">
          <nuxt-img provider="cloudinary" src="/adoptionDog02_xbdir8.png" height="100%" width="100%"></nuxt-img>
          <h6 class="text-Heading6sm text-Bg font-bold absolute bottom-2 left-1/2 translate-x-[-50%] z-10">
            Mickey
          </h6>
          <div class="absolute h-[20%] w-full bg-gradient-to-t from-[#EFB206] bottom-0 left-0 to-transparent"></div>
        </div>
      </div>
      <div class="flex justify-center mb-8">
        <UButton size="sm" label="Meet Them" color="primary" variant="solid" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useWindowSize } from "@vueuse/core";

const { height, width } = storeToRefs(useWindowSize());
const isMobile = computed(() => width.value < 768);

</script>

<style lang="scss" scoped>
ul {
  list-style: none;

  li {
    @apply text-Body1sm font-regular my-2 leading-tight;
  }
}

.first-list {
  li::before {
    content: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1685132187/animalGod/checkGreen_r6qaq1.png");
    margin-right: 1rem;
    display: inline-block;
  }
}

.second-list {
  li::before {
    content: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1685132236/animalGod/checkRed_vpapp0.png");
    margin-right: 1rem;
    display: inline-block;
  }
}
</style>
