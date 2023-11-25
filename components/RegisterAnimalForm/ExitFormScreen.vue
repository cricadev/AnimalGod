<template>
  <div class="flex flex-col items-center justify-center gap-16 h-full">

    <img src="https://res.cloudinary.com/ddc0cce3m/image/upload/v1700790450/animalGod/god00_rasbnr.png" alt=""
      class="w-48 h-auto">

    <h2 class="text-darkContSecond text-Heading2sm font-bold">You
      <span class="text-contAccent">successfully</span>,
      <br>
      register a new pet
    </h2>


    <UButton label="Go back" class="py-4 px-8" color="primary" variant="solid" @click.prevent="emit('exitForm')">
    </UButton>

  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["exitForm"])

</script>

<style></style>