<script setup lang="ts"></script>

<template>
  <div
    class="bg-darkContThird h-[70vh] px-5 py-20 flex flex-col gap-4 items-start justify-center text-Bg dark:text-darkBg"
  >
    <h2 class="text-Heading2sm font-bold font-Inter mb-6">Tip</h2>
    <nuxt-img
      provider="cloudinary"
      src="/v1685032725/tip0_h12eyt.png"
    ></nuxt-img>
    <h4 class="text-Heading4sm font-bold">Tips for How to Housetrain a Dog</h4>
    <p class="text-Body1sm leading-tight">
      By Sue Sterberg, a nationally recognized expert in dog training who boards
      owned dogs and shelters homeless ones at her Rondout Valley Kennels in
      Accord, New York & Jacque Lynn Schultz, C.P.D.T., Companion Animal
      Programs Adviser. National Outreach
    </p>
    <div class="flex justify-center mt-8 place-self-center">
      <UButton size="xl" label="Read More" color="primary" variant="solid" />
    </div>
  </div>
</template>

<style></style>
