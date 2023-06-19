<template>
  <div>
    <h1>this is the sigunp page</h1>
    <form @submit.prevent="signup">
      <input type="email" id="email" v-model="credentials.email" required />

      <input
        type="password"
        id="password"
        v-model="credentials.password"
        required
      />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["unauthenticated"],
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
</script>

<style lang="scss" scoped></style>
