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
const user = useSupabaseUser();


</script>

<template>
  <div class="">
    <hero-HP></hero-HP>
    <search-HP class="mx-5 relative bottom-36"></search-HP>
    <div v-if="user">
      <cards-HP v-if="user?.user_metadata?.isShelter"></cards-HP>
      <div v-else>
        <cards-HP></cards-HP>
        <cta-cards-HP></cta-cards-HP>
      </div>
    </div>
    <div v-else>
      <cards-HP></cards-HP>
      <cta-cards-HP></cta-cards-HP>
    </div>

    <resource-cta></resource-cta>
    <testimonies-HP class="mx-5 mb-12"></testimonies-HP>
    <div v-if="user?.user_metadata?.isShelter">
      <logos-HP></logos-HP>
      <tip></tip>
      <FAQs></FAQs>
    </div>
    <div v-else>
      <FAQs></FAQs>
      <tip></tip>
    </div>
  </div>
</template>
