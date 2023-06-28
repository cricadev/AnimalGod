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
      class="flex flex-col gap-4 grid-cols-1 bg-Bg dark:bg-darkBg w-full h-full py-8 px-8 relative z-10"
    >
      <div class="titles row-start-1 row-end-2 flex flex-col gap-2">
        <h1 class="dark:text-Bg text-darkBg text-Heading1sm font-extrabold">
          Sign up
        </h1>
        <div class="flex text-Heading6sm font-bold justify-between gap-4">
          <h6>Create an account</h6>
          <h6
            class="text-contAccent text-Heading6sm font-semibold tracking-wide"
          >
            Sign up as a shelter
          </h6>
        </div>
      </div>
      <form
        @submit.prevent="signup"
        class="row-start-2 row-end-5 w-full text-center justify-center flex flex-col"
      >
        <div class="input-container">
          <input
            type="email"
            id="email"
            name="email"
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
            name="password"
            v-model="credentials.password"
            required
          />
          <label for="input" class="label">Password</label>
          <div class="underline"></div>
        </div>
        <div class="flex gap-4 justify-center items-center">
          <div class="input-container">
            <select class="w-full" required name="country" id="country">
              <option value=""></option>
              <option value="usa">USA</option>
              <option value="colombia">Colombia</option>
              <option value="peru">Peru</option>
              >
            </select>
            <label for="country" class="label">Country</label>
            <div class="underline"></div>
          </div>

          <div class="input-container">
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              class="w-full"
            />
            <label for="input" class="label">Phone</label>
            <div class="underline"></div>
          </div>
        </div>
        <div class="flex flex-col gap-2 mt-4">
          <UCheckbox
            label="I agree to the
          AnimalGod Terms of Service and Privacy Policy"
            :ui="{
              label:
                'leading-tight text-left line-clamp-2 font-regular text-[#5C6D82] text-Footer',
            }"
          />
          <UCheckbox
            class="leading-none text-left"
            label="I would like to receive communications from the website"
            :ui="{
              label:
                'leading-tight text-left line-clamp-2 font-regular text-[#5C6D82] text-Footer',
            }"
          />
        </div>
        <div class="flex flex-col mt-8">
          <UButton
            type="submit"
            size="providers"
            label="Sign up"
            color="primary"
            variant="solid"
          />
        </div>
        <!-- SEPARATOR OR -->
      </form>
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
        <nuxt-link to="/login" class="text-contInactive mt-4 text-Heading6sm">
          Already a member?
          <strong class="text-contAccent">Log in</strong>
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

const signup = async () => {
  const { error } = await supaAuth.signUp(credentials);
  if (error) {
    console.log(error);
  } else {
    return await navigateTo("/");
  }
};
const loginWithGoogle = async (e) => {
  const { data, error } = await supaAuth.signInWithOAuth({
    provider: "google",
  });
  if (error) {
    console.log(error);
  } else {
    return await navigateTo("/profile");
  }
};
const loginWithFB = async (e) => {
  const { data, error } = await supaAuth.signInWithOAuth({
    provider: "facebook",
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
.input-container input[type="password"],
.input-container input[type="tel"],
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

.input-container input[type="email"]:focus ~ .label,
.input-container input[type="email"]:valid ~ .label,
.input-container input[type="password"]:focus ~ .label,
.input-container input[type="password"]:valid ~ .label,
.input-container input[type="tel"]:focus ~ .label,
.input-container input[type="tel"]:valid ~ .label,
.input-container select:focus ~ .label,
.input-container select:valid ~ .label {
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
.input-container input[type="password"]:valid ~ .underline,
.input-container input[type="tel"]:focus ~ .underline,
.input-container input[type="tel"]:valid ~ .underline,
.input-container select:focus ~ .underline,
.input-container select:valid ~ .underline {
  transform: scaleX(1);
}

.input-container input[type="password"]:valid ~ .underline {
  @apply text-[##98e958] bg-[#98e958];
}
.input-container input[type="email"]:valid ~ .underline {
  @apply text-[##98e958] bg-[#98e958];
}
.input-container input[type="tel"]:valid ~ .underline {
  @apply text-[##98e958] bg-[#98e958];
}
.input-container select:valid ~ .underline {
  @apply text-[##98e958] bg-[#98e958];
}
</style>
