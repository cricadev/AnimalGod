<template>
  <div class="h-screen w-screen bg-contAccent py-12 px-8">
    <nuxt-img
      provider="cloudinary"
      src="/v1685029473/circleHero_ybk8m3.png"
      width="100%"
      height="100%"
      class="absolute top-12 left-0 z-[2]"
    ></nuxt-img>
    <nuxt-img
      provider="cloudinary"
      src="/v1685029473/circleHeroBlue_j0v27w.png"
      width="100%"
      height="100%"
      class="absolute top-20 left-0 z-1"
    ></nuxt-img>
    <div
      class="grid grid-rows-6 grid-cols-1 bg-Bg dark:bg-darkBg w-full h-full py-12 px-8 relative z-10"
    >
      <div class="titles row-start-1 row-end-2">
        <h1 class="dark:text-Bg text-darkBg text-Heading1sm font-extrabold">
          Log in
        </h1>
        <h6 class="text-contAccent text-Heading6sm font-semibold tracking-wide">
          Log in as a shelter
        </h6>
      </div>
      <form
        @submit.prevent="login"
        class="row-start-2 row-end-5 w-full text-center justify-center flex flex-col"
      >
        <div class="input-container">
          <input
            type="email"
            id="email"
            v-model="credentials.email"
            required
            ref="email"
          />
          <label for="input" class="label text-contInactive">Email</label>
          <div class="underline"></div>
        </div>
        <div class="input-container">
          <input
            type="password"
            id="password"
            v-model="credentials.password"
            required
          />
          <label for="input" class="label">Password</label>
          <div class="underline"></div>
        </div>
        <UCheckbox label="Remember this password next time" />

        <div class="flex flex-col mt-8">
          <UButton
            type="submit"
            size="providers"
            label="Log in"
            color="primary"
            variant="solid"
          />
          <UButton
            icon="i-material-symbols-arrow-forward-ios"
            size="xl"
            label="Forgot password?"
            color="third"
            variant="link"
            class="self-end text-contInactive"
            trailing
            @click="forgotPassword"
          />
        </div>
      </form>

      <!-- SEPARATOR OR -->
      <div
        class="row-start-5 row-end-7 w-full text-center justify-center flex flex-col"
      >
        <div class="flex items-center my-4 justify-center">
          <div class="flex-1 h-px bg-[#5C6D82]"></div>
          <div class="mx-4 font-bold text-[#5C6D82] text-Heading6lg">or</div>
          <div class="flex-1 h-px bg-[#5C6D82]"></div>
        </div>
        <!-- PROVIDER LOGIN -->
        <div class="flex flex-col gap-2">
          <form @submit.prevent="loginWithGoogle">
            <UButton
              icon="i-logos-google-icon"
              size="providers"
              type="submit"
              color="secondary"
              variant="outline"
              label="Continue with Google"
              :trailing="false"
              id="google"
              block
            />
          </form>
          <form @submit.prevent="loginWithFB">
            <UButton
              icon="i-logos-facebook"
              size="providers"
              color="secondary"
              variant="outline"
              label="Continue with Facebook"
              :trailing="false"
              type="submit"
              id="facebook"
              block
            />
          </form>
        </div>
        <nuxt-link to="/signup" class="text-contInactive mt-4 text-Heading6sm">
          Not a member?
          <strong class="text-contAccent">Sign up</strong>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["unauthenticated"],
  layout: "auth",
});

const supaAuth = useSupabaseAuthClient().auth;

const credentials = reactive({
  email: "",
  password: "",
});

const login = async () => {
  const { error } = await supaAuth.signInWithPassword(credentials);
  if (error) {
    console.log(error);
  } else {
    return await navigateTo("/protected");
  }
};
const loginWithGoogle = async (e) => {
  const { data, error } = await supaAuth.signInWithOAuth({
    provider: "google",
  });
  if (error) {
    console.log(error);
  } else {
    return await navigateTo("/protected");
  }
};
const loginWithFB = async (e) => {
  const { data, error } = await supaAuth.signInWithOAuth({
    provider: "facebook",
  });
  if (error) {
    console.log(error);
  } else {
    return await navigateTo("/protected");
  }
};

const forgotPassword = async () => {
  const { error } = await supaAuth.resetPasswordForEmail(credentials.email, {
    redirectTo: "http://localhost:3000/forgot-password",
  });
  if (error) {
    console.log(error);
  } else {
    navigateTo("/forgot-password");
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

.input-container input[type="email"]:focus ~ .label,
.input-container input[type="email"]:valid ~ .label,
.input-container input[type="password"]:focus ~ .label,
.input-container input[type="password"]:valid ~ .label {
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

.input-container input[type="email"]:focus ~ .underline,
.input-container input[type="email"]:valid ~ .underline,
.input-container input[type="password"]:focus ~ .underline,
.input-container input[type="password"]:valid ~ .underline {
  transform: scaleX(1);
}

.input-container input[type="password"]:valid ~ .underline {
  @apply text-[##98e958] bg-[#98e958];
}
.input-container input[type="email"]:valid ~ .underline {
  @apply text-[##98e958] bg-[#98e958];
}
</style>
