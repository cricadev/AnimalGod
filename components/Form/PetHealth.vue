<template>
  <div class="section-step-layout">
    <FormPreHeaderStep
      :question="shelter ? 'Select the adjectives that describes the pet’s health and add a description' : 'Now, some yes/no questions'"
      :expression="expression">
    </FormPreHeaderStep>


    <div v-for="(condition, index) in healthOptions" :key="condition.value">
      <label> {{ condition.label }} </label>
      <input type="radio" :id="`${condition.value}-yes`" :name="condition.value" :value="healthConditions[index].answer"
        :checked="healthConditions[index].answer == 'Yes'" value="Yes"
        @change="updatePet('healthConditions', 'Yes', index)">
      <label :for="`${condition.value}-yes`">Yes</label>
      <input type="radio" :id="`${condition.value}-no`" :name="condition.value" :value="healthConditions[index].answer"
        :checked="healthConditions[index].answer == 'No'" value="No" @change="updatePet('healthConditions', 'No', index)">
      <label :for="`${condition.value}-no`">No</label> -
    </div>
    <div class="relative flex gap-8 flex-col">

      <textarea id="pet-health" :placeholder="shelter ? `Describe the pet's health condition (1000 Chars)` : `Expand any response (1000 Chars)`
        " :value="healthDescription" @input="updatePet('healthDescription', $event.target.value)" required></textarea>
      <FormBackAndNextButtons @update-type="emit('update-type', 8)" @next="emit('next')" @back="emit('back')"
        :expression="expression">
      </FormBackAndNextButtons>
    </div>
  </div>
</template>

<script lang="ts" setup>

const expression = computed(() => {
  return !pet.value.healthConditions || !pet.value.healthDescription
})

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  healthConditions: {
    type: Object,
    required: true
  },
  healthDescription: {
    type: String,
    required: true
  },

  healthOptions: {
    type: Array,
    required: true
  },
  shelter: {
    type: Boolean,
    default: true
  }
})
console.log(props.modelValue)
const emit = defineEmits(['update:modelValue', 'next', 'back', 'update-type'])


const pet = ref({
  healthConditions: props.healthOptions.map(option => ({ label: option.label, answer: '', responseIfYes: option.responseIfYes, responseIfNo: option.responseIfNo })),
})


const updatePet = (key, value, index) => {
  if (key === 'healthConditions') {
    const healthConditions = [...pet.value.healthConditions];
    healthConditions[index].answer = value;
    value = healthConditions;
  }
  emit(`update:${key}`, value);
  pet.value = { ...pet?.value, [key]: value }
}
</script>

<style></style>