<template>
  <div>
    <h3 class="text-Heading3sm text-black font-bold">What’s the pet’s name?</h3>
    <input class="text-black" placeholder="Full name" type="text" :value="modelValue"
      @input="updateName($event.target.value)">


    <button @click="emit('next')" class="text-black">Next</button>
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

const updateName = (name) => {
  emit('update:modelValue', name)
}

</script>

<style></style>