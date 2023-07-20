<script setup lang="ts">
import { Carousel, Pagination, Slide } from "vue3-carousel";
import { components } from "~/slices";

const { client } = usePrismic();

const route = useRoute();
const { locale, t } = useI18n();

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
</script>

<template>
  <div>
    <slice-zone
      wrapper="main"
      :components="components"
      :slices="homepage.data.slices"
    />
  </div>
</template>
