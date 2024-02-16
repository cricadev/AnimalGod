<template>
  <div class="h-[20vh] w-full bg-contAccent grid place-items-center relative overflow-hidden ">
    <h2
      class="leading-none text-center px-12 text-Heading2sm lg:text-Display2 md:text-Heading2lg font-bold text-darkContText relative z-30">
      {{ $props.title }}
    </h2>
    <nuxt-img provider="cloudinary" src="/circleHero_ybk8m3.png" width="100%" height="100%"
      class="absolute top-0 left-0 z-20"></nuxt-img>
    <nuxt-img provider="cloudinary" src="/circleHeroMeet_c0gwem.png" width="100%" height="100%"
      class="absolute bottom-0 left-0 z-10"></nuxt-img>
    <div class="absolute z-10 flex justify-between w-4xl 2xl:max-w-6xl mx-auto w-full bottom-0">

      <nuxt-img provider="cloudinary" :src="$props.leftImage" width="100%" height="100%" class="" sizes=""></nuxt-img>
      <nuxt-img provider="cloudinary" :src="$props.rightImage" class="" width="100%" height="100%" sizes=""> </nuxt-img>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: "Find your new best friend.",
  },
  leftImage: {
    type: String,
    default: "/doggyBanner_vgk6zx.png",
  },
  rightImage: {
    type: String,
    default: "/catBanner_mmb2ia.png",
  },
});
</script>
