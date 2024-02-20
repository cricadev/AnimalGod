<template>
  <div class="input-container" v-if="type === 'password'">
    <input :type="type" :id="type" :name="type" v-model="inputValue" required :ref="type" :autocomplete="type" />
    <label for="input" class="label text-contInactive capitalize">{{ type }}</label>
    <div class="underline"></div>
    <Transition>
      <svg @click="toggle" v-if="!isVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute top-1 right-1">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
      <svg v-else @click="toggle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" class="w-6 h-6 absolute top-1 right-1">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    </Transition>

  </div>
  <div v-else-if="type === 'country'" class="input-container">
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
const isVisible = ref(false);
const countries = Object.values(countryCodes.customList('countryNameEn', '{countryNameEn}'));
const toggle = () => {
  isVisible.value = !isVisible.value;
  const el = document.querySelector('#password');
  if (el) {
    el.type = el.type === 'password' ? 'text' : 'password';
  }

};
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
.input-container input[type="text"],

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
.input-container input[type="text"]:focus~.label,
.input-container input[type="text"]:valid~.label,
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
.input-container input[type="text"]:valid~.underline,
.input-container input[type="text"]:focus~.underline,

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