<template>
  <slice-zone
    wrapper="main"
    :components="components"
    :slices="pet.data.slices"
  />
</template>

<script setup>
import { components } from "~/slices";
const { locale, t } = useI18n();

const { client } = usePrismic();
const route = useRoute();
console.log(route);
console.log(locale.value);
const { data: pet } = await useAsyncData("pet", async () => {
  const document = await client.getByUID("pet", route.params.slug, {
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
console.log(pet.value);

useHead({
  title: pet.value.data.meta_title,

  meta: [
    {
      hid: "description",
      name: "description",
      content: pet.value.data.meta_description,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: pet.value.data.meta_image.url,
    },
  ],
});
</script>
