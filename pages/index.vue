<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { storeToRefs } from 'pinia';

useHead({
  title: "AnimalGod",
  meta: [
    {
      name: "description",
      content:
        "AnimalGod is a platform for animal lovers to share their stories, pets and experiences.",
    },
  ],
});
const user = useSupabaseUser();


const { height, width } = storeToRefs(useWindowSize());
const isMobile = computed(() => width.value < 768);
</script>

<template>
  <div class="">
    <hero-HP></hero-HP>
    <search-HP class="mx-5 relative bottom-36"></search-HP>
    <div v-if="user">
      <cards-HP v-if="user?.user_metadata?.isShelter"></cards-HP>
      <div v-else>
        <cards-HP></cards-HP>
      </div>
    </div>
    <div v-else>
      <cards-HP></cards-HP>
    </div>

    <resource-cta></resource-cta>
    <testimonies-HP></testimonies-HP>
    <div v-if="user?.user_metadata?.isShelter">
      <logos-HP></logos-HP>
      <FAQs></FAQs>
    </div>
    <div v-else>
      <div class="" v-show="isMobile">
        <FAQs></FAQs>
        <tip></tip>
      </div>
      <div
        class="overflow-hidden flex items-center h-full w-full bg-gradient-to-r from-darkContThird via-darkContThird to-darkBg"
        v-show="!isMobile">
        <tip class="h-full w-full -skew-x-6"></tip>
        <FAQs :skew="true" class="h-full w-full -skew-x-6"></FAQs>

      </div>
    </div>
  </div>
</template>
