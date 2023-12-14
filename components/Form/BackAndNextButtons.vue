<template>
  <div class="">
    <div v-if="!isEditing" class="flex w-full justify-between items-center">
      <UButton size="xl" label="Back" color="primary" variant="outline" class="text-black px-12" @click="emit('back')" />
      <UButton size="xl" label="Next" class="px-12" color="primary" variant="solid" :disabled="expression"
        @click="emit('next')" />
    </div>
    <div class="flex w-full justify-center items-center" v-else>
      <UButton @click="emit('update-type', 8)" size="xl" color="primary" label="Go Back To Form" trailing
        icon="i-mdi-arrow-right-thin" class="">

      </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  expression: {
    type: Boolean,
    required: true
  }
})
const isEditing = inject('isEditing')
const emit = defineEmits(['next', 'back', 'update-type'])

</script>

<style></style>