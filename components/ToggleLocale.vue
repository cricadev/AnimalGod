<script setup>
const { locale, t } = useI18n();
const { path } = useRoute();

console.log(path.value);
watch(
  () => locale.value,
  (newLocale) => {
    newLocale === "en" ? navigateTo(`/`) : navigateTo(`/${newLocale}`);
  }
);
</script>

<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
        <option value="es">es</option>
      </select>
      <p>{{ t("welcome") }}</p>
    </form>
  </div>
</template>
