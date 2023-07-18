<script setup>
const { data } = await useFetch("/api/register-animal", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: [
    {
      id: "my_item_id",
      title: "Item Title",
      description: "Description of the item.",
      image_url: "http://...",
      last_update: 1509364426938,
      blob: {
        sku: "827",
        title: "First Item",
        description: "Description of first item...",
        image_url: "https://...",
      },
    },
  ],
});
</script>

<template>
  <pre>{{ data }}</pre>
</template>
