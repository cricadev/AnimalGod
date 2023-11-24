<template>
  <div class="section-step-layout">
    <RegisterAnimalFormPreHeaderStep question="What’s the pet’s name?"></RegisterAnimalFormPreHeaderStep>


    <div class="flex gap-8 flex-col w-full items-center justify-center">
      <input class="w-full text-black bg-transparent border-t-0 border-x-0 border-b-2 border-black "
        placeholder="Full name" type="text" :value="modelValue" @input="updateName($event.target.value)">

      <div class="flex w-full justify-between items-center">
        <UButton size="xl" label="Back" color="primary" variant="outline" class="text-black px-12"
          @click="emit('back')" />
        <UButton size="xl" label="Next" class="px-12" color="primary" variant="solid" :disabled="modelValue.length <= 2"
          @click="emit('next')" />
      </div>

    </div>


  </div>
</template>

<script lang="ts" setup>

defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue', 'next', 'back'])

const updateName = (name) => {
  emit('update:modelValue', name)
}

</script>

<style></style>