<script setup>
const { data } = await useFetch("/api/register-animal", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: [
    {
      id: "0",
      title: "My Item number 0",
      description: "Lorem ipsum",
      image_url: "https://if-test-custom-api.herokuapp.com/asset/0",
      last_update: 1591670070,
      blob: {
        lorem: "ipsum",
        dolor: "sit",
      },
    },
    {
      id: "1",
      title: "My Item number 1",
      description: "Lorem ipsum",
      image_url: "https://if-test-custom-api.herokuapp.com/asset/1",
      last_update: 1591670070,
      blob: {
        lorem: "ipsum",
        dolor: "sit",
      },
    },
  ],
});
</script>

<template>
  <pre>{{ data }}</pre>
</template>
