<template>
  <div class="flex items-center gap-8  w-full pl-2">

    <div class="pre-heading-image">
      <img src="https://res.cloudinary.com/ddc0cce3m/image/upload/v1700790446/animalGod/god01_hpsj05.png" alt=""
        class="w-16 h-auto">
    </div>
    <h3 class="text-Heading3sm text-black font-bold">{{ question }}</h3>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  question: {
    type: String,
    required: true
  }
})
</script>