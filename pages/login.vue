<template>
  <div class="h-screen w-screen bg-contAccent py-12 px-8 lg:flex lg:items-center">
    <nuxt-img provider="cloudinary" src="/circleHero_ybk8m3.png" width="100%" height="100%"
      class="absolute top-12 left-0 z-[2] lg:hidden"></nuxt-img>
    <nuxt-img provider="cloudinary" src="/circleHeroBlue_j0v27w.png" width="100%" height="100%"
      class="absolute top-20 left-0 z-1  lg:hidden"></nuxt-img>
    <div
      class="grid grid-rows-6 grid-cols-1 bg-Bg dark:bg-darkBg w-full h-full py-12 px-8 relative z-10 max-w-4xl lg:h-[80%] overflow-y-auto   mx-auto">
      <div class="titles row-start-1 row-end-2">
        <h1 class="dark:text-Bg text-darkBg text-Heading1sm font-extrabold">
          Log in
        </h1>

      </div>

      <form @submit.prevent="login"
        class="row-start-2 row-end-5 w-full text-center justify-center flex flex-col relative">
        <div v-if="errorMessage !== ''"
          class="bg-Bg z-10 w-full h-16 absolute bottom-12 dark:text-darkBg text-[#A81717] font-bold grid place-items-center">
          {{ errorMessage }}
        </div>
        <div class="input-container">
          <input type="email" id="email" v-model="credentials.email" required autocomplete="email" />
          <label for="input" class="label text-contInactive">Email</label>
          <div class="underline"></div>
        </div>

        <div class="input-container">
          <input type="password" id="password" v-model="credentials.password" required autocomplete="current-password" />
          <label for="input" class="label">Password</label>
          <div class="underline"></div>
        </div>

        <UCheckbox label="Remember this password next time" />
        <div class="bg-transparent rounded-md shadow-sm w-full h-8 absolute -top-4 text-Bg"></div>

        <div class="flex flex-col mt-8">
          <UButton type="submit" size="providers" label="Log in" color="primary" variant="solid" />
          <nuxt-link class="text-right font-bold text-Heading6sm text-contInactive mt-2" to="/forgot-password">Forgot
            password?
          </nuxt-link>
        </div>
      </form>

      <SignupProviderLogin :is-login="true" />


    </div>
  </div>
</template>

<script setup>
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
