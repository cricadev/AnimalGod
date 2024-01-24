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

      <div class="flex flex-wrap gap-x-6 gap-y-3 mx-10 justify-center items-center pt-8">

        <USelectMenu placeholder="Animal" v-model="selected" :options="people" id="select-menu" ref="selectMenu">

          <UButton v-if="selected.icon" :name="selected.icon" :icon="selected.icon" size="xl" color="primary"
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
  if (selected.value.id === 'dog') {
    return dogBreeds.en
  }
  else {
    return catBreeds.en
  }
})
const SizesOptions = [
  'SMALL',
  'MEDIUM',
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
  type: selected.value.id, // Add the animal type to the advancedFiltering object
  breed: '',
  size: '',
  age: 0,
  gender: '',
  personality: '',
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
