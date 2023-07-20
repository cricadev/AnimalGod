// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  carousel_meet: defineAsyncComponent(() => import("./CarouselMeet/index.vue")),
  hero_meet: defineAsyncComponent(() => import("./HeroMeet/index.vue")),
  new_slice: defineAsyncComponent(() => import("./NewSlice/index.vue")),
  slides_hero_one: defineAsyncComponent(
    () => import("./SlidesHeroOne/index.vue")
  ),
  text_block: defineAsyncComponent(() => import("./TextBlock/index.vue")),
});
