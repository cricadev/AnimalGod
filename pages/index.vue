<script setup lang="ts">
const { client } = usePrismic();

const route = useRoute();
const { locale, t } = useI18n();
const user = useSupabaseUser();

const { data: homepage } = await useAsyncData("homepage", async () => {
  const document = await client.getSingle("homepage", {
    lang: `${locale.value}-${
      locale.value.toUpperCase() === "EN" ? "US" : locale.value.toUpperCase()
    }`,
  });

  if (document) {
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});

useHead({
  title: homepage.value.data.meta_title,
  meta: [
    {
      name: "description",
      content: homepage.value.data.meta_description,
    },
    {
      property: "og:image",
      content: homepage.value.data.meta_image.url,
    },
  ],
});
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
