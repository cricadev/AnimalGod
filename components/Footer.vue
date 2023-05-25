<script setup lang="ts"></script>

<template>
  <div
    class="h-screen bg-Bg dark:bg-darkBg w-full grid grid-cols-3 grid-rows-6 px-5 place-items-center"
  >
    <div
      class="flex flex-col items-center justify-center gap-9 col-start-1 col-end-4 row-start-1 row-end-3"
    >
      <nuxt-img
        provider="cloudinary"
        src="/v1685029472/animal_god_olvlho.png"
        height="50"
        width="160"
      ></nuxt-img>

      <p class="text-Captionsm leading-none text-center">
        Our goal is to give animals a second chance by connecting
        <br />
        shelters with users who want to adopt. <br />
        The biggest intermediary!
      </p>
    </div>
    <div
      class="flex flex-row justify-between w-full col-start-1 col-end-4 row-start-2 row-end-6"
    >
      <div class="">
        <p class="nav-title">Product</p>
        <ul>
          <li><a href="#" class="nav--item">Overview</a></li>
          <li><a href="#" class="nav--item">Features</a></li>
          <li><a href="#" class="nav--item">Screens</a></li>
          <li><a href="#" class="nav--item">Tutorials</a></li>
        </ul>
      </div>
      <div class="">
        <p class="nav-title">Company</p>
        <ul>
          <li><a href="#" class="nav--item">About us</a></li>
          <li><a href="#" class="nav--item">Team</a></li>
          <li><a href="#" class="nav--item">Goals</a></li>
          <li><a href="#" class="nav--item">News</a></li>
        </ul>
      </div>
      <div>
        <p class="nav-title">Reach Us</p>
        <ul>
          <li><a href="#" class="nav--item">Facebook</a></li>
          <li><a href="#" class="nav--item">Instagram</a></li>
          <li><a href="#" class="nav--item">Twitter</a></li>
          <li><a href="#" class="nav--item">Location</a></li>
        </ul>
      </div>
    </div>
    <div class="col-start-1 col-end-4 row-start-4 row-end-7 mt-10">
      <p class="text-Body1sm font-semibold mb-3">Stay in the loop</p>
      <p class="font-semibold text-Body1sm text-contInactive mb-10">
        We’ll send you a nice letter once per week. No spam.
      </p>
      <div class="flex flex-row justify-center items-center w-full">
        <UInput
          appearance="gray"
          size="sm"
          placeholder="Email"
          class=""
          :ui="{
            base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none',
            custom: '',
            size: {
              '2xs': 'text-xs',
              xs: 'text-xs',
              sm: 'text-sm',
              md: 'text-sm',
              lg: 'text-base',
              xl: 'text-base',
            },
            gap: {
              '2xs': 'gap-x-1',
              xs: 'gap-x-1.5',
              sm: 'gap-x-2',
              md: 'gap-x-2',
              lg: 'gap-x-2',
              xl: 'gap-x-2',
            },
            padding: {
              '2xs': 'px-2 py-1',
              xs: 'px-2.5 py-1.5',
              sm: 'px-3 py-1.5',
              md: 'px-3 py-2',
              lg: 'px-4 py-2',
              xl: 'px-4 py-3',
            },
            leading: {
              padding: {
                '2xs': 'pl-[26px]',
                xs: 'pl-8',
                sm: 'pl-9',
                md: 'pl-10',
                lg: 'pl-11',
                xl: 'pl-12',
              },
            },
            trailing: {
              padding: {
                '2xs': 'pr-[26px]',
                xs: 'pr-8',
                sm: 'pr-9',
                md: 'pr-10',
                lg: 'pr-11',
                xl: 'pr-12',
              },
            },
            appearance: {
              gray: 'border-0 bg-[#f8f8f8] dark:bg-darkContSecond text-darkBg dark:text-contInactive rounded-l-md rounded-r-none shadow-sm  focus:ring-2 focus:ring-primary-500 dark:focus:ring-contAccent-400 placeholder:text-contInactive dark:placeholder:text-contInactive',
            },
            icon: {
              base: 'text-darkContText dark:text-darkContText',
              size: {
                '2xs': 'h-3.5 w-3.5',
                xs: 'h-4 w-4',
                sm: 'h-4 w-4',
                md: 'h-5 w-5',
                lg: 'h-5 w-5',
                xl: 'h-6 w-6',
              },
              leading: {
                wrapper:
                  'absolute inset-y-0 left-0 flex items-center pointer-events-none ',
              },
              trailing: {
                wrapper:
                  'absolute inset-y-0 right-0 flex items-center pointer-events-none bg-contAccent dark:bg-contAccent p-4 rounded-r-md',
                padding: {
                  '2xs': 'pr-2',
                  xs: 'pr-2.5',
                  sm: 'pr-3',
                  md: 'pr-3',
                  lg: 'pr-4',
                  xl: 'pr-4',
                },
              },
            },
          }"
        />
        <UButton
          size="sm"
          label="Subscribe"
          color="contAccent"
          class="rounded-r-md rounded-l-none"
          variant="solid"
          :ui="{
            size: {
              sm: 'text-Captionsm',
            },
            padding: {
              sm: 'px-3 py-3',
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
  </div>
</template>

<style scoped lang="scss">
.nav-title {
  @apply text-Body1sm font-semibold mb-6;
}
.nav--item {
  @apply text-Captionsm font-regular text-contInactive;
}
</style>
