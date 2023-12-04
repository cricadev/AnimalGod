<template>
  <div class="section-step-layout">

    <FormPreHeaderStep question="Tell a little bit about the pet’s history" :expression="expression">
    </FormPreHeaderStep>

    <div class="relative flex gap-8 flex-col">


      <textarea placeholder="Write the pet's history (1000 chars)" class="input-basic-info h-12" :value="modelValue"
        @input="updateHistory($event.target.value)" id="pet-history" name="pet-history" rows="4" cols="50"></textarea>

      <FormBackAndNextButtons @next="emit('next')" @back="emit('back')" :expression="expression">
      </FormBackAndNextButtons>
    </div>


  </div>
</template>

<script lang="ts" setup>
const expression = computed(() => {
  return props.modelValue.length < 100
})
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['update:modelValue', 'next', 'back'])

const updateHistory = (history) => {
  emit('update:modelValue', history)
}

</script>

<style></style>