<template>
  <div class="section-step-layout" style="padding-bottom: 4rem;">

    <FormPreHeaderStep :question="shelter ? 'Is the pet a dog or a cat?' :
      'Where do you live?'
      " :expression="modelValue.length">
    </FormPreHeaderStep>



    <div v-if="shelter" class="flex flex-col gap-4 text-contAccent font-bold mx-20">
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
    <div v-else class="flex flex-col gap-4 text-contAccent font-bold mx-20">
      <button class="flex items-center gap-2 bg-[#c8ccd9] px-8 py-4 rounded-md"
        :class="{ 'selected': modelValue === 'house' }" @click.prevent="updateType('house')">
        <Icon class="h-8 w-8" name="cil:house"></Icon>
        house
      </button>
      <button class="flex items-center gap-2 bg-[#c8ccd9] px-8 py-4 rounded-md"
        :class="{ 'selected': modelValue === 'apartment' }" @click.prevent="updateType('apartment')">
        <Icon class="h-8 w-8" name="cil:building"></Icon>
        building
      </button>


    </div>
    <FormBackAndNextButtons @update-type="emit('update-type', 8)" @next="emit('next')" @back="emit('back')"
      :expression="expression">
    </FormBackAndNextButtons>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  shelter: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue', 'next', 'back', 'update-type'])

const updateType = (value) => {
  emit('update:modelValue', value)





}
</script>

<style scoped>
.selected {
  @apply bg-contAccent text-white;
}
</style>