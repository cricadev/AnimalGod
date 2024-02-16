<template>
  <div class="h-screen w-screen bg-contAccent py-12 px-8 lg:flex lg:items-center">
    <nuxt-img provider="cloudinary" src="/circleHero_ybk8m3.png" width="100%" height="100%"
      class="absolute top-12 left-0 z-[2]  lg:hidden"></nuxt-img>
    <nuxt-img provider="cloudinary" src="/circleHeroBlue_j0v27w.png" width="100%" height="100%"
      class="absolute top-20 left-0 z-1  lg:hidden"></nuxt-img>
    <div
      class="grid grid-rows-6 grid-cols-1 bg-Bg dark:bg-darkBg w-full h-full py-12 px-8 relative z-10 max-w-4xl lg:h-[80%]   mx-auto">
      <div class="titles row-start-1 row-end-2 flex flex-col gap-2">
        <h1 class="dark:text-Bg text-darkBg text-Heading1sm font-extrabold">
          Sign up
        </h1>
        <div class="flex text-Heading6sm font-bold justify-between gap-4">
          <h6>Create an account</h6>

          <nuxt-link class="text-contAccent text-Heading6sm font-semibold tracking-wide" to="/signup-shelter">Sign up as a
            shelter</nuxt-link>
        </div>
      </div>

      <form @submit.prevent="signup"
        class="row-start-2 row-end-5 w-full text-center justify-center flex flex-col relative">
        <div v-if="errorMessage !== ''"
          class="bg-Bg z-10 w-full h-16 absolute bottom-0 dark:text-darkBg text-[#A81717] font-bold grid place-items-center shadow-sm shadow-Bg dark:shadow-darkBg rounded-md">
          {{ errorMessage }}
        </div>
        <div class="input-container">
          <input type="name" id="name" name="name" v-model="credentials.name" required ref="name" autocomplete="name" />
          <label for="input" class="label text-contInactive">Name</label>
          <div class="underline"></div>
        </div>
        <div class="input-container">
          <input type="email" id="email" name="email" v-model="credentials.email" required ref="email"
            autocomplete="email" />
          <label for="input" class="label text-contInactive">Email</label>
          <div class="underline"></div>
        </div>
        <div class="input-container">
          <input type="password" id="password" name="password" v-model="credentials.password" required
            autocomplete="current-password" />
          <label for="input" class="label">Password</label>
          <div class="underline"></div>
        </div>
        <div class="flex gap-4 justify-center items-center">
          <div class="input-container">
            <div class="input-container">
              <select class="w-full" required name="country" id="country" v-model="credentials.country"
                autocomplete="country">
                <option value=""></option>
                <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
              </select>
              <label for="country" class="label">Country</label>
              <div class="underline"></div>
            </div>
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
          AnimalGod Terms of Service and Privacy Policy" :ui="{
            label:
              'leading-tight text-left line-clamp-2 font-regular text-[#5C6D82] text-Footer',
          }" />
          <UCheckbox v-model="credentials.notifications" class="leading-none text-left"
            label="I would like to receive communications from the website" :ui="{
              label:
                'leading-tight text-left line-clamp-2 font-regular text-[#5C6D82] text-Footer',
            }" />
        </div>
        <div class="flex flex-col mt-8">
          <UButton type="submit" size="providers" label="Sign up" color="primary" variant="solid" />
        </div>
        <!-- SEPARATOR OR -->
      </form>
      <div class="row-start-5 row-end-7 w-full text-center justify-center flex flex-col">
        <div class="flex items-center my-4 justify-center">
          <div class="flex-1 h-px bg-[#5C6D82]"></div>
          <div class="mx-4 font-bold text-[#5C6D82] text-Heading6lg">or NOT RECOMMENDED</div>
          <div class="flex-1 h-px bg-[#5C6D82]"></div>
        </div>
        <!-- PROVIDER LOGIN -->
        <div class="flex flex-col gap-2">
          <form @submit.prevent="loginWithGoogle">
            <UButton icon="i-logos-google-icon" size="providers" type="submit" color="secondary" variant="outline"
              label="Continue with Google" :trailing="false" id="google" block />
          </form>
          <form @submit.prevent="loginWithFB">
            <UButton icon="i-logos-facebook" size="providers" color="secondary" variant="outline"
              label="Continue with Facebook" :trailing="false" type="submit" id="facebook" block />
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
import countryCodes from 'country-codes-list';

const countries = Object.values(countryCodes.customList('countryNameEn', '{countryNameEn}'));

definePageMeta({
  layout: "authenticated",
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
  isShelter: false,
});
const signup = async () => {
  try {
    // First, try to create the client
    const data = await $fetch('/api/client', {
      method: 'post',
      body: credentials
    });
    if (!data) {
      throw new Error('Error creating client')
    }
    console.log(data)


    // If client creation is successful, sign up the user with Supabase
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
        },
      },
    });

    if (signUpError) {
      throw signUpError;
    }

    return await navigateTo("/");
  } catch (error) {
    console.log(error);
    errorMessage.value = error.message;
    setTimeout(() => {
      errorMessage.value = "";
    }, 3000);
  }
};
const loginWithGoogle = async (e) => {
  const { data, error } = await supaAuth.signInWithOAuth({
    provider: "google",
  });
  if (error) {
    console.log(error);
    errorMessage.value = error.message;
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
