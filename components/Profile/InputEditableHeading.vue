<template>
  <div class="input-field--heading-group">

    <h4 v-if="phone && !editable"
      class="text-Heading4sm text-center font-bold text-contInactive flex items-center justify-center gap-2">
      <Icon name="i-mdi-phone" class="" />
      + {{ convertCountryToTel(user.user_metadata?.country) }} {{ user.user_metadata?.phone }}

      <Icon name="i-mdi-pencil" @click="editable = true" class="" />
    </h4>

    <form v-else @submit.prevent="emit('updateProfile')">
      <input type="text" class="mx-16 bg-transparent border-none flex justify-center" v-model="form.phone">
    </form>
  </div>
</template>

<script lang="ts" setup>
import countryCodes from 'country-codes-list';
import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';
countries.registerLocale(en);
const user = useSupabaseUser();

defineProps({
  phone: {
    type: String,
    required: true
  },
})
const editable = ref(false)


const convertCountryToTel = (country) => {
  const countryCode = countries.getAlpha2Code(country, 'en');
  const countryCodesObject = countryCodes.customList('countryCode', '{countryCallingCode}');
  return countryCodesObject[countryCode];
};
</script>

<style></style>