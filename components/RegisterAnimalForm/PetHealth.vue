<template>
  <div class="text-black">


    <h2>
      Select the adjectives that describes the pet’s personality and add a description
    </h2>

    <div v-for="(condition, index) in healthOptions" :key="condition.value">
      {{ condition }}
      <label> {{ condition.label }} </label>
      <input type="radio" :id="`${condition.value}-yes`" v-model="modelValue.healthConditions[index].answer" value="Yes">
      <label :for="`${condition.value}-yes`">Yes</label>
      <input type="radio" :id="`${condition.value}-no`" v-model="modelValue.healthConditions[index].answer" value="No">
      <label :for="`${condition.value}-no`">No</label> -
    </div>

    <label>
      Health Description:
      <textarea v-model="modelValue.healthDescription" required></textarea>
    </label>

    <button @click="emit('next')">Next</button>

  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  healthOptions: {
    type: Array,
    required: true
  }
})
console.log(props.modelValue)
const emit = defineEmits(['update:modelValue', 'next'])

const updateHistory = (health) => {
  emit('update:modelValue', health)
}

</script>

<style></style>