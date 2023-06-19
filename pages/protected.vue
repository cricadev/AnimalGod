<template>
  <div>
    <h1>Protected Page</h1>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["authenticated"],
});

const supaAuth = useSupabaseAuthClient().auth;

const logout = async () => {
  const { error } = await supaAuth.signOut();
  if (error) {
    console.log(error);
  } else {
    return await navigateTo("/");
  }
};
</script>

<style lang="scss" scoped></style>
