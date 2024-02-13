<template>
  <div class="input-field--heading-group">
    <h4 v-if="!editable"
      class="text-Heading4sm text-center font-bold text-contInactive flex items-center justify-center gap-2">
      <span v-if="phone">
        <Icon name="i-mdi-phone" class="" />
        + {{ convertCountryToTel(user.user_metadata?.country) }} {{ modelValue }}
      </span>
      <span v-else-if="address">
        <Icon name="material-symbols:location-on" class="" />
        {{ modelValue ?? 'Enter an address' }}
      </span>
      <span v-else-if="website">
        <Icon name="i-mdi-web" class="" />
        {{ modelValue ?? 'Enter a website' }}
      </span>



      <Icon name="i-mdi-pencil" @click="handleClick()" class="" />
    </h4>

    <form v-else @submit.prevent="updateField" class=" justify-center">
      <input type="text" class="mx-auto bg-transparent border-none flex justify-center " v-model="inputValue"
        ref="inputEdit">
    </form>
  </div>
</template>

<script lang="ts" setup>
import countryCodes from 'country-codes-list';
import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';
countries.registerLocale(en);
const user = useSupabaseUser();
const inputEdit = ref(null)
const editable = ref(false)

watch(editable, async (value) => {
  if (value) {
    await nextTick()
    if (inputEdit.value) {
      inputEdit.value.focus()
    }
  }
})

const emit = defineEmits(['update:modelValue'])
const handleClick = () => {
  editable.value = true
}
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  phone: {
    type: Boolean,
    default: false
  },
  address: {
    type: Boolean,
    default: false
  },
  website: {
    type: Boolean,
    default: false
  },
})
const inputValue = ref(props.modelValue) // Initialize inputValue with modelValue

const convertCountryToTel = (country) => {
  const countryCode = countries.getAlpha2Code(country, 'en');
  const countryCodesObject = countryCodes.customList('countryCode', '{countryCallingCode}');
  return countryCodesObject[countryCode];
};

const updateField = () => {
  emit('update:modelValue', inputValue.value)
  editable.value = false
  console.log('updateField')

}
</script>

<style></style>