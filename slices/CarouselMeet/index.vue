<script setup lang="ts">
import { Content } from "@prismicio/client";
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CarouselMeetSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

// get carouselImages value from animalDataByName
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="h-[50vh]">
      <PrismicRichText
        :field="slice.primary.name"
        as="h2"
        class="text-Heading1sm font-bold capitalize text-center"
      />

      <Carousel
        v-if="slice.items.length > 1"
        class="bg-contSecond dark:bg-darkContSecond pt-16 pb-8"
        :wrap-around="true"
        snap-align="center"
        :items-to-show="1"
      >
        <Slide
          class="rounded-xl shadow-xl w-full h-full overflow-hidden"
          v-for="(item, index) in slice.items"
          :key="index"
        >
          <div class="h-full">
            <PrismicImage :field="item.petimage" />
          </div>
        </Slide>

        <template #addons>
          <Navigation class="slug-navigation" />
        </template>
      </Carousel>
      <div
        class="bg-contSecond dark:bg-darkContSecond grid place-items-center h-full w-full"
        v-else
      >
        <PrismicImage :field="slice.items[0].petimage" />
      </div>
    </div>
  </section>
</template>
