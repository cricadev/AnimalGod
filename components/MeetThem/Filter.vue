<template>
  <div class="flex justify-between mx-5 items-center">
    <USelectMenu placeholder="Animal" v-model="selected" :options="people" id="select-menu" ref="selectMenu">
      <UButton v-if="selected.icon" :name="selected.icon" :icon="selected.icon" size="xl" color="primary" variant="solid">
        {{ selected.label }}
      </UButton>
    </USelectMenu>
    <UButton size="xl" label="Filter by" color="primary" variant="solid" trailingIcon="i-mdi-menu-down" />
  </div>
</template>
<script setup lang="ts">
const selectMenu = ref(null);

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
</script>
