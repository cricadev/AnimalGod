<script setup lang="ts">
import { Content } from "@prismicio/client";
import { Carousel, Pagination, Slide } from "vue3-carousel";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.SlideHeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const showIndex = () => {
  console.log("hello");
};
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide
        class="bg-contAccent h-[70vh] w-full relative overflow-hidden"
        v-for="slide in slices.flatMap((s) => s.items)"
        :key="slide.uid"
      >
        <div class="flex flex-col items-center justify-center h-full">
          <nuxt-img
            provider="cloudinary"
            src="/v1685029473/circleHero_ybk8m3.png"
            width="100%"
            height="100%"
            class="absolute top-0 left-0 z-40"
          ></nuxt-img>

          <nuxt-img
            :src="slide.image.url"
            width="100%"
            height="100%"
            class="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-60%] z-20"
          ></nuxt-img>

          <nuxt-img
            provider="cloudinary"
            src="/v1685029473/circleHeroBlue_j0v27w.png"
            width="100%"
            height="100%"
            class="absolute bottom-0 left-0 z-[5]"
          ></nuxt-img>
          <div
            class="absolute z-40 mx-5 text-center bottom-24 text-darkContText-50 dark:text-darkContText-50"
          >
            <h2 class="font-sans font-bold text-Heading2sm">
              {{ slide.title[0].text }}
            </h2>
            <p class="mt-4 font-sans font-regular text-Body1sm">
              {{ slide.content[0].text }}
            </p>
          </div>
          <span
            class="absolute bottom-0 right-0 z-[31] font-extrabold text-right text-[#0955C9] text-[7rem] leading-none"
          >
            {{ slide.kind[0].text }}
          </span>
          <div
            class="absolute h-[50%] w-full bg-gradient-to-t from-contAccent z-30 bottom-0 left-0 to-transparent via-contAccent"
          ></div>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>
