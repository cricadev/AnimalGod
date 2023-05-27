<template>
  <!-- HERO -->
  <div class="flex flex-col">
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
    <div class="flex mx-5 relative bottom-8 z-50">
      <UInput
        appearance="gray"
        size="xl"
        placeholder="Search"
        :ui="{
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
            gray: 'border-0 bg-contSecond dark:bg-darkContSecond text-darkBg dark:text-contInactive rounded-l-md shadow-sm  focus:ring-2 focus:ring-primary-500 dark:focus:ring-contAccent-400 placeholder:text-contInactive dark:placeholder:text-contInactive',
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
          },
        }"
      />
      <div class="border-l dark:border-contSecond border-darkContSecond"></div>
      <UInput
        icon="i-heroicons-magnifying-glass-20-solid"
        appearance="gray"
        size="xl"
        trailing
        placeholder="City"
        :ui="{
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
            gray: 'border-0 bg-contSecond dark:bg-darkContSecond text-darkBg dark:text-contInactive rounded-r-md shadow-sm  focus:ring-2 focus:ring-primary-500 dark:focus:ring-contAccent-400 placeholder:text-contInactive dark:placeholder:text-contInactive',
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
    </div>
    <div
      class="relative h-[15vh] overflow-hidden mx-5 rounded-md bg-contSecond dark:bg-darkContSecond"
    >
      <nuxt-img
        provider="cloudinary"
        src="/e_grayscale/v1685128552/heroAboutAdoption_ak3i5i.png"
        height="100%"
        width="100%"
        class="absolute bottom-2 left-0"
      ></nuxt-img>
      <nuxt-img
        provider="cloudinary"
        src="/v1685129859/groupCircleTopAboutAdoption_nlcpko.png"
        height="100%"
        width="100%"
        class="absolute top-0 right-0"
      ></nuxt-img>
      <nuxt-img
        provider="cloudinary"
        src="/v1685129859/circleAboutAdoption_mscnaz.png"
        height="100%"
        width="100%"
        class="absolute bottom-0 left-0"
      ></nuxt-img>
      <h2
        class="line-clamp-1 w-full text-Heading6sm font-bold text-center absolute bottom-8 z-50"
      >
        Do you wanna know what’s your perfect breed?
      </h2>
      <div
        class="flex flex-col items-center justify-center absolute bottom-0 z-20 left-1/2 translate-x-[-50%] gap-2 mb-2"
      >
        <UButton
          size="xl"
          label="Try this test"
          color="contAccent"
          variant="solid"
          :ui="{
            size: {
              xl: 'text-[.55rem]',
            },
            padding: {
              xl: 'px-3 py-1 text-center justify-center',
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
      <div
        class="absolute h-[40%] w-full bg-gradient-to-t from-contSecond dark:from-darkContSecond z-10 bottom-0 left-0 to-transparent"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
