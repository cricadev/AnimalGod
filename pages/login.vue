<template>
  <SignupFormGroup>
    <SignupHeader :login="true" />
    <form @submit.prevent="login" class="row-start-2 row-end-5 w-full text-center justify-center flex flex-col relative">
      <div v-if="errorMessage !== ''"
        class="bg-Bg z-10 w-full h-16 absolute bottom-12 dark:text-darkBg text-[#A81717] font-bold grid place-items-center">
        {{ errorMessage }}
      </div>
      <SignupFormField type="email" v-model="credentials.email" />
      <SignupFormField type="password" v-model="credentials.password" />
      <UCheckbox label="Remember this password next time" />
      <div class="flex flex-col mt-8">
        <UButton type="submit" size="providers" label="Log in" color="primary" variant="solid" />
        <nuxt-link class="text-right font-bold text-Heading6sm text-contInactive mt-2" to="/forgot-password">Forgot
          password?
        </nuxt-link>
      </div>
    </form>
    <SignupProviderLogin :is-login="true" />
  </SignupFormGroup>
</template>

<script setup>
useHead({
  title: "Log in",
  titleTemplate: '%s | AnimalGod',
  meta: [
    {
      name: "description",
      content:
        "Log in to your account to access your profile, applications and more."
    },
  ],
});
definePageMeta({
  layout: "autho",
  middleware: 'unauthenticated'
});
const supaAuth = useSupabaseClient().auth;

const credentials = reactive({
  email: "",
  password: "",
});

const errorMessage = ref("");

const login = async () => {
  const { error } = await supaAuth.signInWithPassword({ ...credentials, options: { redirectTo: "http://localhost:3000/confirm" } });
  if (error) {
    console.log(error.message);
    errorMessage.value = error.message;
    setTimeout(() => {
      errorMessage.value = "";
    }, 3000);

    credentials.password = "";
  } else {
    return await navigateTo("/profile");
  }
};
const loginWithGoogle = async (e) => {
  const { data, error } = await supaAuth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: "http://localhost:3000/confirm" }
  });
  if (error) {
    console.log(error.message);
    errorMessage.value = error.message;
    setTimeout(() => {
      errorMessage.value = "";
    }, 3000);
  } else {
    return await navigateTo("/profile");
  }
};
const loginWithFB = async (e) => {
  const { data, error } = await supaAuth.signInWithOAuth({
    provider: "facebook",
    options: { redirectTo: "http://localhost:3000/confirm" }
  });
  if (error) {
    console.log(error);
  } else {
    return await navigateTo("/profile");
  }
};
</script>

<style lang="scss" scoped>
.input-container {
  position: relative;
  margin: 10px auto;
  width: 100%;
}

.input-container input[type="email"],
.input-container input[type="password"] {
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
.input-container input[type="password"]:valid~.label {
  top: -20px;
  font-size: 16px;
  @apply text-contInactive ring-0;
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
.input-container input[type="password"]:valid~.underline {
  transform: scaleX(1);
}

.input-container input[type="password"]:valid~.underline {
  @apply text-[##98e958] bg-[#98e958];
}

.input-container input[type="email"]:valid~.underline {
  @apply text-[##98e958] bg-[#98e958];
}
</style>
