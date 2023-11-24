<template>
  <div class="text-black">
    <h2>
      Tell a little bit about the pet’s history
    </h2>

    <div>
      <label for="pet-history">Pet History</label>
      <textarea :value="modelValue.history" @input="updateHistory($event.target.value)" id="pet-history"
        name="pet-history" rows="4" cols="50"></textarea>

    </div>

    <button @click="emit('next')">Next</button>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['update:modelValue', 'next'])

const updateHistory = (history) => {
  emit('update:modelValue', history)
}

</script>

<style></style>