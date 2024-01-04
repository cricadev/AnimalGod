<template>
  <div class="flex flex-col">
    <!-- HERO -->
    <meet-them-hero></meet-them-hero>
    <!-- SEARCH -->
    <meet-them-search v-model="searchQuery"></meet-them-search>

    <!-- banner try this test -->
    <meet-them-banner></meet-them-banner>

    <!-- BBUTTONS FILTER -->
    <meet-them-filter></meet-them-filter>

    <!-- RESULTS -->
    <MeetThemResults :query="searchQuery"></MeetThemResults>
  </div>
</template>
<script setup>
const searchQuery = ref('');


</script>
