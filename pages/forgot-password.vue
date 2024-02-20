<template>
  <SignupFormGroup>

    <form v-if="!isFormSubmitted" @submit.prevent="forgotPassword"
      class=" w-full text-center justify-center flex flex-col gap-2">
      <h2 class="font-bold leading-tight">
        You'll receive an email to recover your password.
      </h2>
      <SignupFormField type="email" v-model="credentials.email" />

      <UButton type="submit" size="providers" label="Submit" color="primary" variant="solid" />
    </form>
    <div class="text-center" v-else>
      <h2 class="f ont-bold leading-tight">Email sent</h2>
    </div>
  </SignupFormGroup>
</template>

<script setup>
definePageMeta({
  layout: "autho",

});
const isFormSubmitted = ref(false);
const supaAuth = useSupabaseClient().auth;

const credentials = reactive({
  email: "",
  password: "",
});
const forgotPassword = async () => {
  const { error, data } = await supaAuth.resetPasswordForEmail(
    credentials.email,
    {
      redirectTo: "http://localhost:3000/profile/update",
    }
  );
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent");
    isFormSubmitted.value = true;
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
