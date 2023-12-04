<template>
  <div class="flex flex-col items-center justify-center gap-16 h-full">

    <img src="https://res.cloudinary.com/ddc0cce3m/image/upload/v1700790450/animalGod/god00_rasbnr.png" alt=""
      class="w-48 h-auto">

    <h2 class="text-darkContSecond text-Heading2sm font-bold">
      <div class="">
        Hey! I'm
        <span class="text-primary">God</span>, your
        <br>
        virtual assistant.
      </div>
    </h2>


  </div>
</template>

<script lang="ts" setup>

const emit = defineEmits(["close"])

const close = () => {
  emit("close", false)
}

setTimeout(() => {
  close()
}, 3000)
</script>

<style></style>