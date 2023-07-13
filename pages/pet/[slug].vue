<template>
  <slice-zone
    wrapper="main"
    :components="components"
    :slices="pet.data.slices"
  />
</template>

<script setup>
import { components } from "~/slices";

const { client } = usePrismic();
const route = useRoute();

const { data: pet } = await useAsyncData("pet", async () => {
  const document = await client.getByUID("pet", route.params.slug);

  if (document) {
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
onMounted(() => {
  useHead({
    title: pet.data.meta_title,

    meta: [
      {
        hid: "description",
        name: "description",
        content: pet.data.meta_description,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: pet.data.meta_image,
      },
    ],
  });
});
console.log(pet);
</script>
