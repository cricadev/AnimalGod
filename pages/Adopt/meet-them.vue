<template>
  <!-- HERO -->
  <div
    class="h-[20vh] w-full bg-contAccent grid place-items-center relative overflow-hidden"
  >
    <h2
      class="leading-none text-center px-12 text-Heading2sm font-bold text-darkContText relative z-30"
    >
      Find your new best friend
    </h2>
    <nuxt-img
      provider="cloudinary"
      src="/c_scale,w_158/v1685029473/circleHero_ybk8m3.png"
      width="100%"
      height="100%"
      class="absolute top-0 left-0 z-20"
    ></nuxt-img>
    <nuxt-img
      provider="cloudinary"
      src="/v1685139343/circleHeroMeet_c0gwem.png"
      width="100%"
      height="100%"
      class="absolute bottom-0 left-0 z-10"
    ></nuxt-img>
    <nuxt-img
      provider="cloudinary"
      src="/v1685138286/dog2HeroMeet_xmxide.png"
      class="absolute bottom-0 -right-4"
      width="100%"
      height="100%"
    ></nuxt-img>
    <nuxt-img
      provider="cloudinary"
      src="/v1685138286/dogHeroMeet_yoa1lt.png"
      width="100%"
      height="100%"
      class="absolute bottom-0 left-0 z-20"
    ></nuxt-img>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
