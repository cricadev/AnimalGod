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
      <USelectMenu searchable searchable-placeholder="Search a breed..." placeholder="Select a breed"
        :options="BreedOptions" v-model="advancedFiltering.breed" />

      <USelectMenu searchable searchable-placeholder="Search a size..." placeholder="Select a size" :options="sizes"
        v-model="advancedFiltering.size" />

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
const sizes = ['SMALL', 'MEDIUM', 'LARGE']
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
