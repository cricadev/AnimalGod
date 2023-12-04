<template>
  <div class="section-step-layout">
    <FormPreHeaderStep question="Select the adjectives that describes the pet’s personality and add a description"
      :expression="expression">
    </FormPreHeaderStep>

    <div>
      <div>
        <label>Personality:</label>
        <div v-for="adjective in adjectivesOptions" :key="adjective">
          <input type="checkbox" :id="adjective" :value="adjective"
            @change="updatePet('personality', $event.target.value)">
          <label :for="adjective">{{ adjective }}</label>
        </div>
      </div>


      <div class="relative flex gap-8 flex-col">

        <textarea class="input-basic-info h-12" :value="personalityDescription"
          @input="updatePet('personalityDescription', $event.target.value)" id="pet-personality"
          placeholder="Describe the pet's personality (1000 Chars)" name="pet-history" rows="4" cols="50"></textarea>

        <FormBackAndNextButtons @next="emit('next')" @back="emit('back')" :expression="expression">
        </FormBackAndNextButtons>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>

const expression = computed(() => {
  return !pet.value.personality || !pet.value.personalityDescription
})
const pet = ref({})

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  personality: {
    type: Array,
    required: true
  },
  personalityDescription: {
    type: String,
    required: true
  },
  adjectivesOptions: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['update:modelValue', 'next', 'back'])


const updatePet = (key, value) => {
  if (key === 'personality') {
    const personality = [...pet.value.personality ?? []];
    const index = personality.indexOf(value);
    if (index === -1) {
      personality.push(value);
    } else {
      personality.splice(index, 1);
    }
    value = personality;
  }
  emit(`update:${key}`, value);
  pet.value = { ...pet?.value, [key]: value }
}
</script>

<style></style>