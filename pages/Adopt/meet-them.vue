<template>
  <div class="flex flex-col">
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
    <!-- SEARCH -->
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

    <!-- banner try this test -->
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

    <!-- BBUTTONS FILTER -->
    <div class="flex justify-between mx-5 items-center">
      <USelectMenu
        placeholder="Animal"
        v-model="selected"
        :options="people"
        id="select-menu"
        ref="selectMenu"
        :ui="{
          wrapper: 'relative inline-flex',
          container: 'z-20',
          width: 'w-full',
          height: 'max-h-60',
          base: 'relative focus:outline-none overflow-y-auto scroll-py-1 bg-contAccent',
          background: 'bg-contAccent',
          shadow: 'shadow-lg',
          rounded: 'rounded-md',
          padding: 'p-1',
          ring: 'ring-1 ring-contAccent-200 dark:ring-contAccent-700',
          input:
            'block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-darkBg dark:text-gray-200 bg-contAccent border-0 border-b border-gray-200 dark:border-gray-700 focus:border-inherit sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-Bg ',
          color: {
            white:
              'shadow-sm bg-contAccent text-Bg dark:text-darkBg ring-1 ring-inset ring-contAccent focus:ring-2 focus:ring-primary-500 dark:focus:ring-contAccent',
            gray: {
              outline:
                'shadow-sm bg-contAccent text-Bg dark:text-darkBg ring-1 ring-inset ring-contAccent focus:ring-2 focus:ring-primary-500 dark:focus:ring-contAccent',
            },
          },
          variant: {
            outline:
              'shadow-sm bg-contAccent text-contAccent ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
            none: 'bg-contAccent focus:ring-0 focus:shadow-none',
          },
          option: {
            base: 'cursor-default select-none relative flex items-center justify-between gap-1 ',
            rounded: 'rounded-md',
            padding: 'px-2 py-1.5',
            size: 'text-sm',
            color: 'dark:text-Bg text-darkBg',
            container: 'flex items-center gap-2 min-w-0',
            active: 'dark:text-Bg text-darkBg',
            inactive: '',
            selected: 'pr-7',
            disabled: 'cursor-not-allowed opacity-50',
            empty: 'text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5',
            icon: {
              base: 'flex-shrink-0 h-4 w-4',
              active: 'text-Bg',
              inactive: 'text-gray-400 dark:text-gray-500',
            },
            selectedIcon: {
              wrapper: 'absolute inset-y-0 right-0 flex items-center',
              padding: 'pr-2',
              base: 'h-4 w-4 text-gray-900 dark:text-white flex-shrink-0',
            },
            avatar: {
              base: 'flex-shrink-0',
              size: '3xs',
            },
            chip: {
              base: 'flex-shrink-0 w-2 h-2 mx-1 rounded-full',
            },
          },
          transition: {
            leaveActiveClass: 'transition ease-in duration-100',
            leaveFromClass: 'opacity-100',
            leaveToClass: 'opacity-0',
          },
          popper: {
            placement: 'bottom-end',
          },
          default: {
            selectedIcon: 'i-heroicons-check-20-solid',
          },
        }"
        :uiSelect="{
          wrapper: 'relative',
          base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 bg-Bg',
          rounded: 'rounded-md',
          placeholder: 'placeholder-contAccent dark:placeholder-contAccent',
          custom: 'bg-Bg',
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
          color: {
            white:
              'shadow-sm bg-contAccent text-Bg dark:text-darkBg ring-1 ring-inset ring-contAccent focus:ring-2 focus:ring-primary-500 dark:focus:ring-contAccent',
          },
          variant: {
            outline:
              'shadow-sm bg-contAccent text-contAccent ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
          },
          icon: {
            base: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
            color: 'text-{color}-500 dark:text-{color}-400',
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
                'absolute inset-y-0 left-0 flex items-center pointer-events-none',
              padding: {
                '2xs': 'pl-2',
                xs: 'pl-2.5',
                sm: 'pl-3',
                md: 'pl-3',
                lg: 'pl-4',
                xl: 'pl-4',
              },
            },
            trailing: {
              wrapper:
                'absolute inset-y-0 right-0 flex items-center pointer-events-none',
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
          default: {
            size: 'sm',
            color: 'white',
            variant: 'outline',
            loadingIcon: 'i-heroicons-arrow-path-20-solid',
          },
        }"
      >
        <UButton
          v-if="selected.icon"
          :name="selected.icon"
          :icon="selected.icon"
          size="xl"
          color="contAccent"
          variant="solid"
          :ui="{
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
        >
          {{ selected.label }}
        </UButton>
      </USelectMenu>
      <UButton
        size="xl"
        label="Filter by"
        color="contAccent"
        variant="solid"
        trailingIcon="i-mdi-menu-down"
        :ui="{
          color: {
            contAccent: {
              solid:
                'shadow-sm text-contSecond dark:text-darkContSecond   bg-darkContThird hover:bg-darkContThird-700 disabled:bg-white dark:bg-darkContThird dark:hover:bg-darkContThird/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
            },
          },
          variant: {
            solid:
              'shadow-sm text-contSecond dark:text-darkContSecond bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
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

    <!-- RESULTS -->
    <div class="flex justify-center items-center flex-col h-screen">
      <div class="my-12 flex flex-col justify-center items-center text-center">
        <span
          class="text-Captionlg font-semibold font-Inter text-contInactive mb-4"
          >20 results</span
        >
        <h4 class="text-Heading4sm font-bold font-Inter mb-1">
          Black cats are less likely to be adopted
        </h4>
        <p class="text-Footer font-regular text-contInactive leading-none mx-8">
          In a study of shelters in Colorado, solid black cats took an average
          of 26.55 days to be adopted compared to 20.64 days for their non-black
          counterparts.
        </p>
      </div>
      <Carousel
        ref="myCarousel"
        class="h-screen"
        :start-slide="currentSlide"
        @slide-end="onSlideEnd"
        :wrap-around="true"
      >
        <Slide
          class="grid relative w-full h-full overflow-hidden rounded-xl shadow-xl grid-cols-2 grid-rows-2 gap-5"
          v-for="(group, index) in animalGroups"
          :key="index"
        >
          <div
            class="grid relative w-full h-full overflow-hidden rounded-xl shadow-xl grid-cols-3 grid-rows-3"
            v-for="animal in group"
            :key="animal.name"
          >
            <h6
              class="row-start-3 row-end-4 capitalize bottom-2 z-50 text-Heading6lg font-bold font-Inter tracking-widest"
            >
              {{ animal.name }}
            </h6>
            <nuxt-img
              provider="cloudinary"
              :src="animal.meetImage"
              class="row-span-full col-span-full object-cover object-center z-0"
              width="150"
              height="150"
            ></nuxt-img>
            <div
              class="absolute h-[40%] w-full z-10 bottom-0 left-0"
              :style="`background: linear-gradient(0deg, #${animal.hex} 0%, rgba(0, 0, 0, 0) 100%);`"
            ></div>
          </div>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

import animals from "~/db/animals.json";

const animalGroups = ref(animals.animalGroups);
const currentSlide = ref(0);

const onSlideEnd = () => {
  currentSlide.value += 1;
};
const selectMenu = ref(null);

const people = [
  {
    id: "dog",
    label: "dog",
    icon: "i-mdi-dog",
  },
  {
    id: "cat",
    label: "cat",
    icon: "i-mdi-cat",
  },
];

const selected = ref(people[0]);
</script>

<style lang="scss" scoped>
button:has(+ .label-selected) {
  background-color: blue !important;
}
.carousel__slide {
  scroll-snap-stop: auto;
  flex-shrink: 0;
  margin: 0;
  position: relative;

  display: grid;
  justify-content: center;
  align-items: center;
}
</style>
