<template>
  <div class="mx-5">
    <TestimoniesHP></TestimoniesHP>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Successful Cases",
  titleTemplate: '%s | AnimalGod',
  meta: [
    {
      name: "description",
      content:
        "This is where you can see the successful cases of adoption.",
    },
  ],
});
definePageMeta({
  middleware: 'is-shelter'
})
</script>

<style lang="scss" scoped></style>
