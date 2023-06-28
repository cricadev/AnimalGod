<script setup lang="ts">
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
</script>

<template>
  <div class="">
    <hero-HP></hero-HP>
    <search-HP class="mx-5 relative bottom-36"></search-HP>
    <cards-HP></cards-HP>
    <cta-cards-HP></cta-cards-HP>
    <resource-cta></resource-cta>
    <testimonies-HP class="mx-5 mb-12"></testimonies-HP>
    <FAQs></FAQs>
    <tip></tip>
  </div>
</template>
