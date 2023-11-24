<template>
  <div class="flex w-full justify-between items-center">
    <UButton size="xl" label="Back" color="primary" variant="outline" class="text-black px-12" @click="emit('back')" />
    <UButton size="xl" label="Next" class="px-12" color="primary" variant="solid" :disabled="expression"
      @click="emit('next')" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  expression: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['next', 'back'])

</script>

<style></style>