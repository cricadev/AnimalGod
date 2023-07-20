<script setup>
const { locale } = useI18n();
const { path } = useRoute();
watch(
  () => locale.value,
  (newLocale) => {
    newLocale === "en" ? navigateTo(`/`) : navigateTo(`/${newLocale}`);
  }
);
</script>

<template>
  <select
    v-model="locale"
    class="bg-transparent border-0 p-0 ml-2 mr-0 pr-0 flex justify-center items-center h-6 w-6"
    style="padding-right: 0px"
  >
    <option value="en" class="m-0 p-0 w-0 h-0">🇬🇧</option>
    <option value="fr" class="m-0 p-0 w-0 h-0">🇫🇷</option>
    <option value="es" class="m-0 p-0 w-0 h-0">🇪🇸</option>
  </select>
</template>
