<template>
  <SignupFormGroup>
    <SignupHeader :shelter="true" />
    <form @submit.prevent="signup" class=" w-full text-center justify-center flex flex-col relative">
      <div v-if="errorMessage !== ''"
        class="bg-Bg z-10 w-full h-16 absolute bottom-0 dark:text-darkBg text-[#A81717] font-bold grid place-items-center shadow-sm shadow-Bg dark:shadow-darkBg rounded-md">
        {{ errorMessage }}
      </div>
      <SignupFormField type="name" v-model="credentials.name" />
      <SignupFormField type="email" v-model="credentials.email" />
      <SignupFormField type="password" v-model="credentials.password" />
      <div class="flex gap-4 justify-center items-center">
        <SignupFormField type="country" v-model="credentials.country" />
        <SignupFormField type="phone" v-model="credentials.phone" />
      </div>
      <SignupCheckbox :req="true" v-model="credentials.terms" label="I agree to the
            AnimalGod Terms of Service and Privacy Policy" />
      <SignupCheckbox v-model="credentials.notifications"
        label="I would like to receive communications from the website" />
      <UButton class="mt-8" type="submit" size="providers" label="Sign up" color="primary" variant="solid" />
    </form>
    <SignupProviderLogin />
  </SignupFormGroup>
</template>
<script setup>
useHead({
  title: "Sign up as Shelter",
  titleTemplate: '%s | AnimalGod',
  meta: [
    {
      name: "description",
      content:
        "Sign up to create an account and access your profile, register animals and more",
    },
  ],
});
definePageMeta({
  layout: "autho",
  middleware: 'unauthenticated'
});
const supaAuth = useSupabaseClient().auth;
const errorMessage = ref("");
const credentials = reactive({
  name: "",
  email: "",
  password: "",
  country: "",
  phone: "",
  terms: false,
  notifications: false,
  isShelter: true,
});

const signup = async () => {
  try {


    // First, try to create the shelter

    const data = await $fetch('/api/shelter', {
      method: 'post',
      body: credentials
    });
    if (!data) {
      throw new Error('Error creating client')
    }
    console.log(data)

    const { error: signUpError } = await supaAuth.signUp({
      email: credentials.email,
      password: credentials.password,
      options: {
        data: {
          name: credentials.name,
          country: credentials.country,
          phone: credentials.phone,
          terms: credentials.terms,
          notifications: credentials.notifications,
          isShelter: credentials.isShelter,
          image: '',
        },
      },
    });

    if (signUpError) {
      throw signUpError;
    }

    return await navigateTo("/");
  } catch (error) {
    console.error(error);
    errorMessage.value = error.message;
    setTimeout(() => {
      errorMessage.value = "";
    }, 3000);
  }
};

</script>

