<template>
  <div class="h-screen w-screen bg-contAccent py-12 px-8">
    <div class="bg-white w-full h-full">
      <h1 class="text-darkBg text-Heading1sm font-extrabold">Log in</h1>
      <h6 class="text-contAccent text-Heading6sm font-semibold tracking-wide">
        Log in as a shelter
      </h6>
      <form @submit.prevent="login" class="flex flex-col gap-y-8">
        <input type="email" id="email" v-model="credentials.email" required />
        <input
          type="password"
          id="password"
          v-model="credentials.password"
          required
        />
        <button type="submit">Log in</button>
      </form>
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
</script>

<style lang="scss" scoped></style>
