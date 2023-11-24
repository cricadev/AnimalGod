<template>
  <div class="text-black">
    <h2>Add some photos and one video of the pet</h2>
    <input type="file" id="imageInput" @change="handleFileUpload" multiple accept="image/*">
    <button @click="emit('next')">Next</button>
  </div>
</template>

<script setup>

defineProps({
  modelValue: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update:modelValue', 'next', 'back'])

const handleFileUpload = (event) => {
  const files = Array.from(event.target.files);
  emit('update:modelValue', files);
}
</script>

<style scoped>
/* Add your styles here */
</style>