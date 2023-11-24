<template>
  <div class="text-black">
    <h2>
      Select the adjectives that describes the pet’s personality and add a description
    </h2>

    <div>
      <div>
        <label>Personality:</label>
        <div v-for="adjective in adjectivesOptions" :key="adjective">
          <input type="checkbox" :id="adjective" v-model="modelValue.personality" :value="adjective">
          <label :for="adjective">{{ adjective }}</label>
        </div>
      </div>



      <textarea :value="modelValue.personality" @input="updateHistory($event.target.value)" id="pet-personality"
        placeholder="Describe the pet's personality (1000 Chars)" name="pet-history" rows="4" cols="50"></textarea>

    </div>

    <button @click="emit('next')">Next</button>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  adjectivesOptions: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['update:modelValue', 'next'])

const updateHistory = (personality) => {
  emit('update:modelValue', personality)
}

</script>

<style></style>