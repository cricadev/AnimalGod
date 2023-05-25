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
      <UButton
        size="xl"
        label="Read More"
        color="contAccent"
        variant="solid"
        :ui="{
          size: {
            xl: 'text-Captionsm',
          },
          padding: {
            xl: 'px-8 py-3',
          },
          color: {
            contAccent: {
              solid:
                'shadow-sm  text-darkContText dark:text-white bg-contAccent hover:bg-contAccent-700 disabled:bg-white dark:bg-contAccent dark:hover:bg-contAccent/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
            },
          },
          variant: {
            solid:
              'shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
            outline:
              'ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 dark:hover:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
            soft: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 dark:bg-{color}-950 dark:hover:bg-{color}-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
            link: 'text-{color}-500 hover:text-{color}-600 dark:text-{color}-400 dark:hover:text-{color}-500 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
          },
          icon: {
            base: 'flex-shrink-0',
            size: {
              '2xs': 'h-3.5 w-3.5',
              xs: 'h-4 w-4',
              sm: 'h-4 w-4',
              md: 'h-5 w-5',
              lg: 'h-5 w-5',
              xl: 'h-6 w-6',
            },
          },
        }"
      />
    </div>
  </div>
</template>

<style></style>
