<template>
  <div class="flex flex-col">
    <!-- HERO -->
    <meet-them-hero></meet-them-hero>
    <!-- SEARCH -->
    <meet-them-search v-model="searchQuery"></meet-them-search>

    <!-- banner try this test -->
    <meet-them-banner></meet-them-banner>

    <!-- BBUTTONS FILTER -->
    <meet-them-filter v-model="advancedFiltering.type" @update-type="updateFilters"></meet-them-filter>

    <!-- RESULTS -->
    <MeetThemResults :query="searchQuery" :filters="advancedFiltering"></MeetThemResults>
  </div>
</template>
<script setup>
useHead({
  title: "Meet Them",
  titleTemplate: '%s | AnimalGod',
  meta: [
    {
      name: "description",
      content:
        "This is where you ",
    },
  ],
});
definePageMeta({
  middleware: 'is-shelter'
})
const searchQuery = ref('');
const advancedFiltering = reactive({
  type: '',
  breed: '',
  size: '',
  age: '',
  gender: '',
  personality: '',
  goodWith: '',
  activity: '',
})

const updateFilters = (newFilters) => {

  Object.assign(advancedFiltering, newFilters);
}
</script>
