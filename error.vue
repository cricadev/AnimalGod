<script setup>
const error = useError();
</script>

<template>
  <nuxt-layout>
    <div class="prose">
      <h1>Dang</h1>
      <p>
        <strong>{{ error.message }}</strong>
      </p>
      <p>It looks like something broke.</p>
      <p>Sorry about that.</p>
    </div>
  </nuxt-layout>
</template>