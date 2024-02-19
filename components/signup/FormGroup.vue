
<script lang="ts" setup>
const emit = defineEmits(['submit']);
const handleFormSubmit = () => {
  emit('submit', credentials);
};
const credentials = reactive({
  name: "",
  email: "",
  password: "",
  country: "",
  phone: "",
  terms: false,
  notifications: false,
  isShelter: false,
});
</script>
<template>
  <form @submit.prevent="handleFormSubmit" class=" w-full text-center justify-center flex flex-col relative">
    <div v-if="errorMessage !== ''"
      class="bg-Bg z-10 w-full h-16 absolute bottom-0 dark:text-darkBg text-[#A81717] font-bold grid place-items-center shadow-sm shadow-Bg dark:shadow-darkBg rounded-md">
      {{ errorMessage }}
    </div>
    <div class="input-container">
      <input type="name" id="name" name="name" v-model="credentials.name" required ref="name" autocomplete="name" />
      <label for="input" class="label text-contInactive">Name</label>
      <div class="underline"></div>
    </div>
    <SignupFormField type="email" v-model="credentials.email" />

    <div class="input-container">
      <input type="password" id="password" name="password" v-model="credentials.password" required
        autocomplete="current-password" />
      <label for="input" class="label">Password</label>
      <div class="underline"></div>
    </div>
    <div class="flex gap-4 justify-center items-center">
      <div class="input-container">
        <select class="w-full" required name="country" id="country" v-model="credentials.country" autocomplete="country">
          <option value=""></option>
          <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
        </select>
        <label for="country" class="label">Country</label>
        <div class="underline"></div>
      </div>

      <div class="input-container">
        <input type="tel" id="phone" name="phone" required pattern="^[+]?[0-9]{9,12}$" maxlength="12" title="te"
          class="w-full" v-model="credentials.phone" autocomplete="tel" />
        <label for="input" class="label">Phone</label>
        <div class="underline"></div>
      </div>
    </div>
    <div class="flex flex-col gap-2 mt-4">
      <UCheckbox v-model="credentials.terms" required label="I agree to the
          AnimalGod Terms of Service and Privacy Policy" :ui="uiCheckbox" />
      <UCheckbox v-model="credentials.notifications" class="leading-none text-left"
        label="I would like to receive communications from the website" :ui="uiCheckbox" />
    </div>
    <div class="flex flex-col mt-8">
      <UButton type="submit" size="providers" label="Sign up" color="primary" variant="solid" />
    </div>
  </form>
</template>


<style></style>