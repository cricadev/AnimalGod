<template>
  <div>

    <div class="flex items-center gap-8 absolute top-8 left-0 w-full pl-2">
      <div class="pre-heading-image">
        <img src="https://res.cloudinary.com/ddc0cce3m/image/upload/v1700790446/animalGod/god01_hpsj05.png" alt=""
          class="w-16 h-auto">
      </div>
      <h3 class="text-Heading3sm text-black font-bold">Is the pet a dog or a cat?</h3>
    </div>
    <div class="flex flex-col gap-4 text-contAccent font-bold">
      <button class="flex items-center gap-2 bg-[#c8ccd9] px-12 py-4 rounded-md"
        :class="{ 'selected': modelValue === 'dog' }" @click.prevent="updateType('dog')">
        <Icon name="cil:dog" class="stroke-"></Icon>
        Dog
      </button>
      <button class="flex items-center gap-2 bg-[#c8ccd9] px-12 py-4 rounded-md"
        :class="{ 'selected': modelValue === 'cat' }" @click.prevent="updateType('cat')">
        <Icon name="cil:cat" class=""></Icon>
        Cat
      </button>
    </div>
    <button @click="emit('next')" class="text-black">Next</button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue', 'next'])

const updateType = (type) => {
  emit('update:modelValue', type)
}
</script>

<style scoped>
.selected {
  background-color: #ccc;
}
</style>