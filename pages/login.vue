<template>
  <div>
    <h1>this is the login page</h1>
    <form @submit.prevent="login">
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

const login = async () => {
  const { error } = await supaAuth.signInWithPassword(credentials);
  if (error) {
    console.log(error);
  } else {
    return await navigateTo("/protected");
  }
};
</script>

<style lang="scss" scoped></style>
