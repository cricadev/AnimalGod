<template>
  <div class="text-black">

    <h2>Now, add some basic info about the pet</h2>
    <label>Gender</label>
    <button :class="{ 'selected': modelValue.gender === 'male' }" @click.prevent="updatePet('gender', 'male')">
      <img src="path/to/Male/icon" alt="Male Icon"> Male
    </button>
    <button :class="{ 'selected': modelValue.gender === 'female' }" @click.prevent="updatePet('gender', 'female')">
      <img src="path/to/female/icon" alt="female Icon"> female
    </button>

    <div>
      <label>Size:</label>
      <button v-for="size in sizeOptions" :key="size" :class="{ 'selected': modelValue.size == size }"
        @click.prevent="updatePet('size', size)">
        <img :src="size.image" :alt="size + ' Icon'"> {{ size }}
      </button>
    </div>

    <div>
      <label>Age:</label>
      <input type="number" v-model.number="modelValue.age" min="0">
    </div>

    <label>
      Breed:
      <select v-model="modelValue.breed">
        <option v-for="breed in breedOptions" :key="breed" :value="breed">{{ breed }}</option>
      </select>
    </label>

    <label>
      Good With:
      <select v-model="modelValue.goodWith">
        <option v-for="option in goodWithOptions" :key="option" :value="option">{{ option }}</option>
      </select>
    </label>

    <label>
      Activity Level:
      <select v-model="modelValue.activity">
        <option v-for="level in activityLevelOptions" :key="level" :value="level">{{ level }}</option>
      </select>
    </label>
    <button @click="emit('next')">Next</button>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  modelValue: {
    type: Object,
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
console.log(props.modelValue)
const emit = defineEmits(['update:modelValue', 'next', 'back'])

const updatePet = (key, value) => {
  emit('update:modelValue', { ...props.modelValue, [key]: value });
}

</script>

<style></style>