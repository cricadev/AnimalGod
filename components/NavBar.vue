<script setup>
const isOpen = ref(false);
const colorMode = useColorMode();
</script>

<template>
  <div class="flex items-center justify-between w-full h-16">
    <nuxt-img
      provider="cloudinary"
      src="/v1685029472/animal_god_olvlho.png"
      v-if="colorMode.preference !== 'light'"
      width="100%"
      height="35"
      class="p-5"
    ></nuxt-img>
    <nuxt-img
      provider="cloudinary"
      src="/v1685029473/dark-animal_god_cloaku.png"
      width="100%"
      height="35"
      class="p-5"
      v-else
    ></nuxt-img>

    <div class="flex place-items-center burguer-menu">
      <ToggleTheme></ToggleTheme>

      <UButton
        @click="isOpen = true"
        icon="i-mdi-menu"
        size="xl"
        square
        color="contAccent"
        variant="ghost"
      />

      <USlideover v-model="isOpen">
        <!-- Content -->
      </USlideover>
    </div>
  </div>
</template>

<style></style>
