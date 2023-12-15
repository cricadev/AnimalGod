<template>
  <div class="section-step-layout">

    <FormPreHeaderStep
      :question="shelter ? 'Tell a little bit about the pet’s history' : 'Let’s finish this form by telling us why you want to adopt a pet.'"
      :expression="expression">
    </FormPreHeaderStep>

    <div class="relative flex gap-8 flex-col">


      <textarea placeholder="Write the pet's history (1000 chars)" class="input-basic-info h-12" :value="modelValue"
        @input="updateHistory($event.target.value)" id="pet-history" name="pet-history" rows="4" cols="50"></textarea>

      <FormBackAndNextButtons @update-type="emit('update-type', 8)" @next="emit('next')" @back="emit('back')"
        :expression="expression">
      </FormBackAndNextButtons>
    </div>


  </div>
</template>

<script lang="ts" setup>
const expression = computed(() => {
  return props.modelValue.length < 10
})
const props = defineProps({
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

const updateHistory = (history) => {
  emit('update:modelValue', history)
}

</script>

<style></style>