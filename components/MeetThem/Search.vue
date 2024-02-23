<template>
  <div class="flex relative bottom-8 z-50 w-full justify-center">

    <div class="relative max-w-lg w-full">
      <input type="text" :value="modelValue" @input="updateSearchQuery($event.target.value)" placeholder="Search"
        class="bg-contSecond dark:bg-darkContSecond border-blue-500 border-2 w-full">
      <span class="bg-contAccent w-12 flex items-center justify-center absolute top-0 right-0 h-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </span>

    </div>

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
