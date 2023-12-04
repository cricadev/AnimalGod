<template>
  <div class="section-step-layout">
    <FormPreHeaderStep question="Now, add some basic info about the pet" :expression="expression">
    </FormPreHeaderStep>

    <div class="flex gap-2 w-full justify-start items-center">
      <label class="mr-8">Gender</label>
      <UButton icon="i-material-symbols-male" color="primary" :class="{ 'selected': pet?.gender == 'male' }"
        variant="outline" @click.prevent="updatePet('gender', 'male')" />

      <UButton icon="i-material-symbols-female" color="primary" :class="{ 'selected': pet?.gender == 'female' }"
        variant="outline" @click.prevent="updatePet('gender', 'female')" />

    </div>

    <div class="flex gap-2 w-full justify-start items-center">
      <label class="mr-8">Size:</label>
      <UButton v-for="size in sizeOptions" :class="[{
        'selected': pet.size == size
      },
      {
        'p-1': size == 'Small'
      },
      {
        'p-2': size == 'Medium'
      },
      {
        'p-3': size == 'Large'
      }]" icon="i-mdi-dog-side" @click.prevent="updatePet('size', size)" color="primary" variant="outline" />

    </div>


    <div class="relative">
      <label class="label-basic-info" v-if="!pet.breed">
        Breed
      </label>

      <select placeholder="Breed" class="input-basic-info" :value="breed"
        @change="updatePet('breed', $event.target.value)">
        <option v-for="breed in breedOptions" :key="breed" :value="breed">{{ breed }}</option>
      </select>
    </div>

    <div class="relative">

      <input placeholder="Age" class="input-basic-info placeholder-contInactive" type="number" :value="age"
        @input="updatePet('age', $event.target.value)" min="0">
    </div>

    <div class="relative">
      <label class="label-basic-info" v-if="!pet.goodWith">
        Good with
      </label>

      <select class="input-basic-info" :value="goodWith" @change="updatePet('goodWith', $event.target.value)">
        <option v-for="option in goodWithOptions" :key="option" :value="option">{{ option }}</option>
      </select>

    </div>
    <div class="relative">

      <label class="label-basic-info" v-if="!pet.activity">
        Activity Level
      </label>

      <select class="input-basic-info" :value="activity" @change="updatePet('activity', $event.target.value)">
        <option v-for="level in activityLevelOptions" :key="level" :value="level">{{ level }}</option>
      </select>
    </div>



    <FormBackAndNextButtons @next="emit('next')" @back="emit('back')" :expression="expression">
    </FormBackAndNextButtons>
  </div>
</template>

<script lang="ts" setup>
const expression = computed(() => {
  return !pet.value.gender || !pet.value.size || !pet.value.age || !pet.value.breed || !pet.value.goodWith || !pet.value.activity
})
const pet = ref({

})

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  goodWith: {
    type: String,
    required: true
  },
  activity: {
    type: String,
    required: true
  },
  sizeOptions: {
    type: Array,
    required: true
  },
  breedOptions: {
    type: Array,
    required: true
  },
  goodWithOptions: {
    type: Array,
    required: true
  },
  activityLevelOptions: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['update:modelValue', 'next', 'back'])

const updatePet = (key, value) => {
  emit(`update:${key}`, value);
  pet.value = { ...pet?.value, [key]: value }
}

</script>

<style scoped>
.selected {
  @apply bg-contAccent text-white hover:bg-contAccent-700 transition-all;
}

.input-basic-info {
  @apply w-full text-black bg-transparent border-t-0 border-x-0 border-b-2 border-black;
}

.label-basic-info {
  @apply absolute bottom-2 left-2 text-contInactive font-bold pointer-events-none;
}
</style>