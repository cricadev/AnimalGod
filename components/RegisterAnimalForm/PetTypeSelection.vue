<template>
  <div class="section-step-layout">
    <RegisterAnimalFormPreHeaderStep question="Is the pet a dog or a cat?">
    </RegisterAnimalFormPreHeaderStep>



    <div class="flex flex-col gap-4 text-contAccent font-bold mx-20">
      <button class="flex items-center gap-2 bg-[#c8ccd9] px-12 py-4 rounded-md"
        :class="{ 'selected': modelValue === 'dog' }" @click.prevent="updateType('dog')">
        <Icon class="h-8 w-8" name="cil:dog"></Icon>
        Dog
      </button>
      <button class="flex items-center gap-2 bg-[#c8ccd9] px-12 py-4 rounded-md"
        :class="{ 'selected': modelValue === 'cat' }" @click.prevent="updateType('cat')">
        <Icon class="h-8 w-8" name="cil:cat"></Icon>
        Cat
      </button>
    </div>
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
  setTimeout(() => {
    emit('next')
  }, 500);

}
</script>

<style scoped>
.selected {
  @apply bg-contAccent text-white;
}
</style>