<template>
  <div class="section-step-layout">
    <RegisterAnimalFormPreHeaderStep question="What’s the pet’s name?" :expression="expression">
    </RegisterAnimalFormPreHeaderStep>


    <div class="flex gap-8 flex-col w-full items-center justify-center">
      <input class="w-full text-black bg-transparent border-t-0 border-x-0 border-b-2 border-black "
        placeholder="Full name" type="text" :value="modelValue" @input="updateName($event.target.value)">

      <RegisterAnimalFormBackAndNextButtons @next="emit('next')" @back="emit('back')" :expression="expression">
      </RegisterAnimalFormBackAndNextButtons>

    </div>


  </div>
</template>

<script lang="ts" setup>
const expression = computed(() => {
  return props.modelValue.length < 3
})
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue', 'next', 'back'])

const updateName = (name) => {
  emit('update:modelValue', name)
}

</script>

<style></style>