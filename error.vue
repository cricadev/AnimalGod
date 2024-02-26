<template>
  <nuxt-layout>
    <div class="flex flex-col items-center justify-center min-h-screen text-center">

      <nuxt-img src="/404dog.webp" class="w-1/2 mx-auto lg:w-[30%]"></nuxt-img>
      <h1 class="text-6xl font-bold text-contAccent ">
        {{ error.statusCode }}
      </h1>

      <p class="mt-3 text-lg text-darkContText-900 dark:text-white"> {{ error.statusMessage }}</p>
      <p class="mt-3 text-lg text-contAccent" v-if="error.value">{{ error.value }}</p>
      <nuxt-link to="/" class="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" @click="clearError({
        redirect: '/'
      })">Go
        to
        Home</nuxt-link>
    </div>
  </nuxt-layout>
</template>

<script setup>

const error = useError();


</script>

<style scoped></style>