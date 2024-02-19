<template>
  <div class=" flex flex-col gap-2">
    <h1 class="dark:text-Bg text-darkBg text-Heading1sm font-extrabold">
      {{ login ? "Log in" : "Sign up" }}
    </h1>
    <div class="flex text-Heading6sm font-bold justify-between gap-4">
      <h6 v-if="!login">Create an account</h6>

      <nuxt-link class="text-contAccent text-Heading6sm font-semibold tracking-wide"
        :to="!shelter ? '/signup-shelter' : '/signup'">
        {{ !shelter ? "Sign up as shelter" : "Sign up as client" }}
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  shelter: Boolean,
  login: Boolean
})
</script>

<style></style>