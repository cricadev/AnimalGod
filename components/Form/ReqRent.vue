<template>
  <div class="section-step-layout">

    <FormPreHeaderStep question="Do you own or rent your home/apartment?" :expression="expression">
    </FormPreHeaderStep>

    <div class="">
      <div class="flex items-center justify-center gap-2">
        <button class="flex items-center gap-2 bg-[#c8ccd9] px-8 py-4 rounded-md"
          :class="{ 'selected': isRenting === false }" @click="setRenting(false)">
          Own
        </button>
        <button class="flex items-center gap-2 bg-[#c8ccd9] px-8 py-4 rounded-md"
          :class="{ 'selected': isRenting === true }" @click="setRenting(true)">
          Rent
        </button>
      </div>

      <div v-if="form.isRenting">
        <label class="block text-Heading4lg font-bold">Does your rent home/apartment accept animals?</label>
        <div class="flex gap-2 justify-center items-center">

          <button class="flex items-center gap-2 bg-[#c8ccd9] px-8 py-4 rounded-md"
            :class="{ 'selected': rentAcceptance === true }" @click="setRentAcceptance(true)">
            Yes
          </button>
          <button class="flex items-center gap-2 bg-[#c8ccd9] px-8 py-4 rounded-md"
            :class="{ 'selected': rentAcceptance === false }" @click="setRentAcceptance(false)">

            No
          </button>


        </div>
      </div>
    </div>

    <FormBackAndNextButtons @update-type="emit('update-type', 6)" @next="emit('next')" @back="emit('back')"
      :expression="expression">
    </FormBackAndNextButtons>

  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  isRenting: {
    type: Boolean,
    required: true
  },
  rentAcceptance: {
    type: Boolean,
    required: true
  }
})
const form = ref({
  isRenting: null,
  rentAcceptance: null,
});

const expression = computed(() => {
  return 0 !== 0
});

const emit = defineEmits(['update:isRenting', 'update:rentAcceptance', 'next', 'back', 'update-type'])

const setRenting = (value) => {
  form.value.isRenting = value;
  emit('update:isRenting', form.value.isRenting);
}

const setRentAcceptance = (value) => {
  form.value.rentAcceptance = value;
  emit('update:rentAcceptance', form.value.rentAcceptance);
}
</script>
<style scoped>
.selected {
  @apply bg-contAccent text-white;
}
</style>