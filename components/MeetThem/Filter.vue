<template>
  <div class="flex justify-between mx-5 items-center relative">
    <USelectMenu @change="updateSelected" placeholder="Animal" v-model="selected" :options="people" id="select-menu"
      ref="selectMenu">
      <UButton v-if="selected.icon" :name="selected.icon" :icon="selected.icon" size="xl" color="primary" variant="solid">
        {{ selected.label }}
      </UButton>
    </USelectMenu>
    <UButton size="xl" label="Filter by" color="primary" variant="solid" trailingIcon="i-mdi-menu-down"
      @click="appear = true" />
    <div class="appear-menu w-full absolute top-0" v-show="appear">

      <UButton size="xl" label="Filter by" color="primary" variant="solid" trailingIcon="i-mdi-menu-down"
        @click="sendFilters" block />

      <USelectMenu searchable searchable-placeholder="Search a breed..." placeholder="Breed" :options="BreedOptions"
        v-model="advancedFiltering.breed" />

      <USelectMenu searchable searchable-placeholder="Search a size...  " placeholder="Size" :options="SizesOptions"
        v-model="advancedFiltering.size" />

      <USelectMenu searchable searchable-placeholder="Search a age..." placeholder="Age" :options="AgesOptions"
        v-model="advancedFiltering.age" />

      <USelectMenu searchable searchable-placeholder="Search a gender..." placeholder="Gender" :options="GenderOptions"
        v-model="advancedFiltering.gender" />

      <USelectMenu placeholder="Personality" :multiple="true" :options="PersonalityOptions"
        v-model="advancedFiltering.personality" />

      <USelectMenu searchable searchable-placeholder="Search a good with..." placeholder="Good with"
        :options="GoodWithOptions" v-model="advancedFiltering.goodWith" />

      <USelectMenu searchable searchable-placeholder="Search a activity level..." placeholder="Activity level"
        :options="ActivityLevelOptions" v-model="advancedFiltering.activity" />

    </div>
  </div>
</template>
<script setup lang="ts">
import { dogBreeds, catBreeds } from 'pet-breed-names';

const appear = ref(false);
const selectMenu = ref(null);

const sendFilters = () => {
  appear.value = false;
  console.log(advancedFiltering)
}

const people = [
  {
    id: "dog",
    label: "dog",
    icon: "i-mdi-dog",
  },
  {
    id: "cat",
    label: "cat",
    icon: "i-mdi-cat",
  },
];

const selected = ref(people[0]);

const BreedOptions = computed(() => {
  if (selected.value.id === 'dog') {
    return dogBreeds.en
  }
  else {
    return catBreeds.en
  }
})
const SizesOptions = [
  'Small',
  'Medium',
  'Large',
  'Extra Large',
];
const AgesOptions = [
  'Baby', 'Young', 'Adult', 'Senior'
];
const GenderOptions = [
  'Male', 'Female'
]
const PersonalityOptions = [
  'Affectionate',
  'Dominant',
  'Relaxed',
  'Independent',
  'Devoted',
  'Confident',
  'Aloof',
  'Compliant',
  'Timid',
  'Enthusiastic',
]

const GoodWithOptions = [
  'Kids', 'Dogs', 'Cats', 'Other'
]
const ActivityLevelOptions = [
  'Low',
  'Moderate',
  'High',
]
const advancedFiltering = reactive({
  type: '',
  breed: '',
  size: '',
  age: 0,
  gender: '',
  personality: '',
  goodWith: '',
  activity: '',
})

const emit = defineEmits(["update:modelValue", "update-type"]);

const updateSelected = (selected) => {
  emit("update:modelValue", selected.id);
};

watch(advancedFiltering, (newFilters) => {
  emit("update-type", newFilters);
}, { deep: true });

</script>
