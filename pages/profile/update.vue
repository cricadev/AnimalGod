<template>
  <SignupFormGroup>
    <div class="titles row-start-1 row-end-2">
      <h1 class="dark:text-Bg text-darkBg text-Heading1sm font-extrabold leading-none mb-8">
        Update Your Password
      </h1>
    </div>
    <form v-if="!isFormSubmitted" @submit.prevent="updatePassword"
      class="row-start-2 row-end-5 w-full text-center justify-center flex flex-col gap-2">
      <SignupFormField type="email" v-model="credentials.email" />
      <SignupFormField type="password" v-model="credentials.password" />
      <UButton type="submit" size="providers" label="Update" color="primary" variant="solid" />
    </form>
    <div class="text-center" v-else>
      <h2 class="font-bold leading-tight">
        Password updated now redirecting
      </h2>
    </div>
  </SignupFormGroup>
</template>

<script setup>
useHead({
  title: "Update Password",
  titleTemplate: '%s | AnimalGod',
  meta: [
    {
      name: "description",
      content:
        "Update your password to access your profile, applications and more.",
    },
  ],
});
definePageMeta({
  layout: "autho",
});

const supaAuth = useSupabaseClient().auth;
const isFormSubmitted = ref(false);
const credentials = reactive({
  email: "",
  password: "",
});

const updatePassword = async () => {
  const { error } = await supaAuth.updateUser({
    email: credentials.email,
    password: credentials.password,
  });
  if (error) {
    console.log(error);
  } else {
    console.log("Password updated");
    isFormSubmitted.value = true;
    return navigateTo("/profile")
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
