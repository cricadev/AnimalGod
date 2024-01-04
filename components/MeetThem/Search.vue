<template>
  <div class="flex relative bottom-8 z-50 w-full justify-center">

    <input type="text" :value="modelValue" @input="updateSearchQuery($event.target.value)"
      class="bg-darkContSecond border-blue-500 border-2 outline-">
  </div>
</template>
<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue', 'update-type'])

const updateSearchQuery = (value) => {
  emit('update:modelValue', value)
}


</script>
