<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <div
    class=" h-screen bg-Bg dark:bg-darkContSecond w-full grid grid-cols-3 grid-rows-6 px-5 md:px-16 place-items-center md:grid-rows-2 md:h-full md:pt-64 md:pb-8 md:gap-y-64 md:gap-x-16 lg:grid-cols-5 lg:grid-rows-1 md:h-full">
    <div
      class="flex flex-col items-center justify-center gap-9 col-start-1 col-end-4 row-start-1 row-end-3 md:col-end-2 md:row-end-2">
      <nuxt-img v-if="colorMode.preference !== 'light'" provider="cloudinary" src="/animal_god_olvlho.png" height="50"
        width="160"></nuxt-img>
      <nuxt-img provider="cloudinary" src="/dark-animal_god_cloaku.png" height="50" width="160" v-else></nuxt-img>

      <p class="text-Captionsm leading-tight text-center md:text-start md:text-Captionlg">
        Our goal is to give animals a second chance by connecting
        <br />
        shelters with users who want to adopt. <br />
        The biggest intermediary!
      </p>
    </div>
    <div
      class="flex flex-row justify-between md:justify-around w-full col-start-1 col-end-4 row-start-2 row-end-6 md:row-start-1 md:col-start-2 md:row-end-2">
      <div class="">
        <p class="nav-title">Product</p>
        <ul>
          <li><a href="#" class="nav--item">Overview</a></li>
          <li><a href="#" class="nav--item">Features</a></li>
          <li><a href="#" class="nav--item">Screens</a></li>
          <li><a href="#" class="nav--item">Tutorials</a></li>
        </ul>
      </div>
      <div class="">
        <p class="nav-title">Company</p>
        <ul>
          <li><a href="#" class="nav--item">About us</a></li>
          <li><a href="#" class="nav--item">Team</a></li>
          <li><a href="#" class="nav--item">Goals</a></li>
          <li><a href="#" class="nav--item">News</a></li>
        </ul>
      </div>
      <div>
        <p class="nav-title">Reach Us</p>
        <ul>
          <li><a href="#" class="nav--item">Facebook</a></li>
          <li><a href="#" class="nav--item">Instagram</a></li>
          <li><a href="#" class="nav--item">Twitter</a></li>
          <li><a href="#" class="nav--item">Location</a></li>
        </ul>
      </div>
    </div>
    <div
      class="col-start-1 col-end-4 row-start-4 row-end-7 mt-10 md:row-start-1 md:row-end-3 lg:col-start-4 lg:col-end-6 lg:self-start ">
      <p class="text-Body1sm font-semibold mb-3 md:text-bod">Stay in the loop</p>
      <p class="font-semibold text-Body1sm text-contInactive mb-10">
        We’ll send you a nice letter once per week. No spam.
      </p>
      <div class="flex flex-row justify-center md:justify-stretch md:items-stretch items-center w-full">
        <UInput color="white" variant="outline" size="sm" placeholder="Email" />
        <UButton size="sm" label="Subscribe" color="primary" class="rounded-r-md rounded-l-none py-2" variant="solid" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-title {
  @apply text-Body1sm font-semibold mb-6;
}

.nav--item {
  @apply text-Captionsm font-regular text-contInactive md:text-Captionlg;
}
</style>
