<template>
  <div class="section-step-layout">
    <FormPreHeaderStep question="What’s the pet’s name?" :expression="expression">
    </FormPreHeaderStep>


    <div class="flex gap-8 flex-col w-full items-center justify-center">
      <input class="w-full text-black bg-transparent border-t-0 border-x-0 border-b-2 border-black "
        placeholder="Full name" type="text" :value="modelValue" @input="updateName($event.target.value)">

      <FormBackAndNextButtons @update-type="emit('update-type', 8)" @next="emit('next')" @back="emit('back')"
        :expression="expression">
      </FormBackAndNextButtons>

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

const emit = defineEmits(['update:modelValue', 'next', 'back', 'update-type'])

const updateName = (name) => {
  emit('update:modelValue', name)
}

</script>

<style></style>