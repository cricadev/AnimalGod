<template>
  <div class="flex items-center gap-8  w-full pl-2">

    <div class="pre-heading-image">
      <nuxt-img v-if="expression"
        src="https://res.cloudinary.com/ddc0cce3m/image/upload/v1700790446/animalGod/god01_hpsj05.png" alt=""
        class="w-24 h-auto" />

      <nuxt-img v-else src="https://res.cloudinary.com/ddc0cce3m/image/upload/v1700849265/animalGod/god02_w0zze1.png"
        class="w-24 h-auto" alt="" />
    </div>
    <h3 class="text-Heading3sm text-black font-bold">{{ question }}</h3>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  question: {
    type: String,
    required: true
  },
  expression: {
    type: Boolean,
    required: true
  }
})
</script>