<template>
  <div class="">
    <div class="mobile flex justify-between mx-5 items-center relative" v-if="isMobile">
      <USelectMenu placeholder="Animal" v-model="selected" :options="people" id="select-menu" ref="selectMenu">
        <UButton v-if="selected.icon" :name="selected.icon" :icon="selected.icon" size="xl" color="primary"
          variant="solid">
          {{ selected.label }}
        </UButton>
      </USelectMenu>
      <UButton size="xl" label="Filter by" color="secondary" variant="solid" trailingIcon="i-mdi-menu-down"
        @click="appear = true" />
      <div class="appear-menu w-full absolute top-0 text-center" v-show="appear">
        <UButton size="xl" label="Filter by" color="secondary" variant="solid" trailingIcon="i-mdi-menu-down"
          @click="sendFilters" block />
        <USelectMenu searchable searchable-placeholder="Search a breed..." placeholder="Breed" :options="BreedOptions"
          trailing v-model="advancedFiltering.breed" class="justify-center" />
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
    <div class="desktop" v-else-if="!isMobile">

      <div class="flex flex-wrap gap-x-2.5  gap-y-3 mx-auto  pt-8  max-w-4xl 2xl:max-w-6xl">

        <USelectMenu placeholder="Animal" v-model="selected" :options="people" id="select-menu" ref="selectMenu">

          <UButton v-if="selected.icon" :name="selected.icon" :icon="selected.icon" size="md" color="primary"
            variant="solid">
            {{ selected.label }}

          </UButton>
        </USelectMenu>
        <USelectMenu searchable searchable-placeholder="Search a breed..." placeholder="Breed" :options="BreedOptions"
          trailing v-model="advancedFiltering.breed" class="justify-center" :ui="{
            'color': {
              'white': {
                'outline': 'shadow-xl shadow-xl bg-white dark:bg-darkContSecond text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
              },
            },
            'padding': {
              'lg': 'py-2 px-5'
            },
          }
            " size="lg" color="white" variant="outline">
          <template #trailing>
            <UIcon name="i-heroicons-chevron-down" />
          </template>
        </USelectMenu>
        <USelectMenu :ui="{
          'color': {
            'white': {
              'outline': ' shadow-xl bg-white dark:bg-darkContSecond text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
            },
          }, 'padding': {
            'lg': 'py-2 px-6'
          }
        }
          " size="lg" color="white" variant="outline" searchable searchable-placeholder="Search a size...  "
          placeholder="Size" :options="SizesOptions" v-model="advancedFiltering.size">

          <template #trailing>
            <UIcon name="i-heroicons-chevron-down" />
          </template>
        </USelectMenu>
        <USelectMenu :ui="{
          'color': {
            'white': {
              'outline': ' shadow-xl bg-white dark:bg-darkContSecond text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
            },
          }, 'padding': {
            'lg': 'py-2 px-5'
          }
        }
          " size="lg" color="white" variant="outline" searchable searchable-placeholder="Search a age..."
          placeholder="Age" :options="AgesOptions" v-model="advancedFiltering.age">

          <template #trailing>
            <UIcon name="i-heroicons-chevron-down" />
          </template>
        </USelectMenu>
        <USelectMenu :ui="{
          'color': {
            'white': {
              'outline': ' shadow-xl bg-white dark:bg-darkContSecond text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
            },
          }, 'padding': {
            'lg': 'py-2 px-5'
          }
        }
          " size="lg" color="white" variant="outline" searchable searchable-placeholder="Search a gender..."
          placeholder="Gender" :options="GenderOptions" v-model="advancedFiltering.gender">

          <template #trailing>
            <UIcon name="i-heroicons-chevron-down" />
          </template>
        </USelectMenu>
        <USelectMenu :ui="{
          'color': {
            'white': {
              'outline': ' shadow-xl bg-white dark:bg-darkContSecond text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
            },
          }, 'padding': {
            'lg': 'py-2 px-5'
          }
        }
          " size="lg" color="white" variant="outline" placeholder="Personality" :multiple="true"
          :options="PersonalityOptions" v-model="advancedFiltering.personality">

          <template #trailing>
            <UIcon name="i-heroicons-chevron-down" />
          </template>
        </USelectMenu>
        <USelectMenu :ui="{
          'color': {
            'white': {
              'outline': ' shadow-xl bg-white dark:bg-darkContSecond text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
            },
          }, 'padding': {
            'lg': 'py-2 px-5'
          }
        }
          " size="lg" color="white" variant="outline" searchable searchable-placeholder="Search a good with..."
          placeholder="Good with" :options="GoodWithOptions" v-model="advancedFiltering.goodWith">

          <template #trailing>
            <UIcon name="i-heroicons-chevron-down" />
          </template>
        </USelectMenu>
        <USelectMenu :ui="{
          'color': {
            'white': {
              'outline': ' shadow-xl bg-white dark:bg-darkContSecond text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
            },
          }, 'padding': {
            'lg': 'py-2 px-5'
          }
        }
          " size="lg" color="white" variant="outline" searchable searchable-placeholder="Search a activity level..."
          placeholder="Activity level" :options="ActivityLevelOptions" v-model="advancedFiltering.activity">

          <template #trailing>
            <UIcon name="i-heroicons-chevron-down" />
          </template>
        </USelectMenu>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { dogBreeds, catBreeds } from 'pet-breed-names';

import { useformStore } from "~/stores/formStore";
import { storeToRefs } from "pinia";
import type { Pet } from "~/types";
import { useWindowSize } from "@vueuse/core";

const { height, width } = storeToRefs(useWindowSize());

const isMobile = computed(() => width.value < 768);
const isTablet = computed(() => width.value < 1024 && width.value >= 768);
const isDesktop = computed(() => width.value >= 1024);

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
  let breeds;
  if (selected.value.id === 'dog') {
    breeds = dogBreeds.en;
  } else {
    breeds = catBreeds.en;
  }

  const transformedBreeds = breeds.map(breed => breed.toUpperCase().replaceAll(" ", "_"));

  if (transformedBreeds.length > 0) {
    transformedBreeds.splice(0, 1, 'MIXED');
  }

  return transformedBreeds;
});
const SizesOptions = [
  'SMALL',
  'MEDIUM',
  'LARGE'
];
const AgesOptions = [
  'BABY', 'YOUNG', 'ADULT', 'SENIOR'
];
const GenderOptions = [
  'MALE', 'FEMALE'
]
const PersonalityOptions = [
  'AFFECTIONATE',
  'DOMINANT',
  'RELAXED',
  'INDEPENDENT',
  'DEVOTED',
  'CONFIDENT',
  'ALOOF',
  'COMPLIANT',
  'TIMID',
  'ENTHUSIASTIC',
]

const GoodWithOptions = [
  'CHILDREN', 'DOGS', 'CATS',
]
const ActivityLevelOptions = [
  'LOW',
  'MEDIUM',
  'HIGH',
]
const advancedFiltering = reactive({
  type: 'All', // Add the animal type to the advancedFiltering object
  breed: '',
  size: '',
  age: 0,
  gender: '',
  personality: [],
  goodWith: '',
  activity: '',
})

const emit = defineEmits(["update:modelValue", "update-type"]);



watch([selected, advancedFiltering], ([newSelected, newFilters]) => {
  newFilters.type = newSelected.id; // Update the animal type in the advancedFiltering object
  for (const filter in newFilters) {
    if (newFilters[filter] === '') {
      delete newFilters[filter];
    }
  }
  emit("update:modelValue", newSelected.id);
  emit("update-type", newFilters);
}, { deep: true });
</script>
