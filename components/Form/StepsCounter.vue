<template>
  <div class="steps-counter">
    <div v-for="step in totalSteps" :key="step"
      :class="['step', { 'current': step === currentStep, 'passed': step < currentStep }]">
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentStep: {
    type: Number,
    required: true
  },
  totalSteps: {
    type: Number,
    required: true
  }
})
</script>

<style scoped>
.steps-counter {

  @apply flex justify-center items-center gap-2 w-full h-16 absolute top-0 left-0 z-[9999] p-4;
}

.step {
  width: 20px;
  height: 5px;
  @apply bg-darkContThird;
}

.step.current {
  @apply bg-contAccent;
}

.step.passed {
  @apply bg-contInactive;
}
</style>