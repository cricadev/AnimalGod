<script setup lang="ts"></script>

<template>
  <div class="bg-contAccent h-[80vh] w-full relative">
    <div class="flex flex-col items-center justify-center h-full">
      <nuxt-img
        src="/circle.png"
        width="100%"
        height="100%"
        class="absolute top-0 left-0 z-40"
      ></nuxt-img>
      <nuxt-img
        src="/heroDog.png"
        width="100%"
        height="100%"
        class="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-60%] z-20"
      ></nuxt-img>
      <nuxt-img
        src="/circleHeroBlue.png"
        width="100%"
        height="100%"
        class="absolute bottom-0 left-0 z-[5]"
      ></nuxt-img>
      <div class="absolute z-40 mx-5 text-center bottom-24">
        <h2 class="font-sans font-bold text-Heading2sm">
          Adopt. Love. Save lives.
        </h2>
        <p class="mt-8 font-sans font-regular text-Body1sm">
          The animal shelter website is a place where people can go to adopt
          animals that need homes. They can also find information on how to care
          for their new pet, and how to make sure that their pet is healthy and
          happy.
        </p>
      </div>
      <div
        class="absolute h-[50%] w-full bg-gradient-to-t from-contAccent z-30 bottom-0 left-0"
      ></div>
    </div>
  </div>
</template>

<style></style>
