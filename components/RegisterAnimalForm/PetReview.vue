<template>
  <div class="section-step-layout">
    <RegisterAnimalFormPreHeaderStep question="Let's review the info, confirm and apply!" :expression="expression">
    </RegisterAnimalFormPreHeaderStep>
    <h2></h2>
    <div class="pet-info">
      <div v-for="(value, key) in pet" :key="key">
        <button @click="emit('editType', stepIndex(key))">
          <label :for="`pet-${key}`">{{ formatLabel(key) }}</label>
          <div v-if="isObject(value)">
            <div v-for="(subValue, subKey) in value" :key="subKey">
              <input class="bg-transparent border-none font-bold" :value="subValue" :id="`pet-${key}-${subKey}`"
                :name="`pet-${key}-${subKey}`" type="text" disabled>
            </div>
          </div>
          <input v-else class="bg-transparent border-none font-bold" :value="value" :id="`pet-${key}`"
            :name="`pet-${key}`" type="text" disabled>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        </button>
      </div>
    </div>
    <div class="submit-button">
      <button @click="emit('submit', pet)">Confirm and Apply</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const expression = computed(() => {
  return true
})
const isObject = (value) => {
  return value && typeof value === 'object' && value.constructor === Object;
}
defineProps({
  pet: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['submit', 'editType'])

const stepIndex = (key) => {
  const steps = ['type', 'name', 'images', 'gender', 'size', 'age', 'breed', 'goodWith', 'activity', 'history', 'personality', 'personalityDescription', 'healthConditions', 'healthDescription'];
  return steps.indexOf(key) + 1;
}

const formatLabel = (key) => {
  return key.split(/(?=[A-Z])/).join(' ').toUpperCase();
}
</script>