<template>
  <div v-if="type === 'country'" class="input-container">
    <div class="input-container">
      <select class="w-full" required :name="type" :id="type" v-model="inputValue" :autocomplete="type">
        <option value=""></option>
        <option v-for="country in countries" :key="type" :value="country">{{ country }}</option>
      </select>
      <label :for="type" class="label">{{ type }}</label>
      <div class="underline"></div>
    </div>
  </div>


  <div v-else-if="type === 'phone'" class="input-container">
    <input type="tel" :id="type" :name="type" required pattern="^[+]?[0-9]{9,12}$" maxlength="12" title="tel"
      class="w-full" v-model="inputValue" autocomplete="tel" />
    <label for="input" class="label">Phone</label>
    <div class="underline"></div>
  </div>
  <div v-else class="input-container">
    <input :type="type" :id="type" :name="type" v-model="inputValue" required :ref="type" :autocomplete="type" />
    <label for="input" class="label text-contInactive capitalize">{{ type }}</label>
    <div class="underline"></div>
  </div>
</template>

<script lang="ts" setup>
import countryCodes from 'country-codes-list';

const countries = Object.values(countryCodes.customList('countryNameEn', '{countryNameEn}'));

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: String,
  type: String,
})

const inputValue = ref(props.modelValue);

watch(inputValue, (newVal) => {
  emit('update:modelValue', newVal);
});

watch(() => props.modelValue, (newVal) => {
  inputValue.value = newVal;
});
</script>

<style lang="scss" >
.input-container {
  position: relative;
  margin: 10px auto;
  width: 100%;
}

.input-container input[type="email"],
.input-container input[type="password"],
.input-container input[type="tel"],
.input-container input[type="name"],
.input-container select {
  width: 100%;
  border: none;
  border-bottom: 2px solid #afafaf;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
  @apply text-contInactive text-Body1sm;
}

.input-container .label {
  position: absolute;
  top: 0;
  left: 0;

  transition: all 0.3s ease;
  pointer-events: none;
  @apply text-contInactive;
}

.input-container input[type="email"]:focus~.label,
.input-container input[type="email"]:valid~.label,
.input-container input[type="password"]:focus~.label,
.input-container input[type="password"]:valid~.label,
.input-container input[type="tel"]:focus~.label,
.input-container input[type="tel"]:valid~.label,
.input-container select:focus~.label,
.input-container select:valid~.label,
.input-container input[type="name"]:focus~.label,
.input-container input[type="name"]:valid~.label {
  top: -20px;
  font-size: 16px;
  @apply text-contInactive;
}

.input-container .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;

  transform: scaleX(0);
  transition: all 0.3s ease;
  @apply text-contInactive;
}

.input-container input[type="email"]:focus~.underline,
.input-container input[type="email"]:valid~.underline,
.input-container input[type="password"]:focus~.underline,
.input-container input[type="password"]:valid~.underline,
.input-container input[type="tel"]:focus~.underline,
.input-container input[type="tel"]:valid~.underline,
.input-container input[type="name"]:focus~.underline,
.input-container input[type="name"]:valid~.underline,
.input-container select:focus~.underline,
.input-container select:valid~.underline {
  transform: scaleX(1);
}

.input-container input[type="password"]:valid~.underline {
  @apply bg-[#98e958];
}

.input-container input[type="email"]:valid~.underline {
  @apply bg-[#98e958];
}

.input-container input[type="tel"]:valid~.underline {
  @apply bg-[#98e958];
}

.input-container select:valid~.underline {
  @apply bg-[#98e958];
}

.input-container input[type="name"]:valid~.underline {
  @apply bg-[#98e958];
}
</style>