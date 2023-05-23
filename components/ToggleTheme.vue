<template>
  <div>
    <UToggle
      icon-on="i-mdi-weather-night"
      icon-off="i-mdi-white-balance-sunny"
      :model-value="active"
      @update:model-value="toggle"
      class="mr-3"
      :ui="{
        base: 'relative inline-flex items-center flex-shrink-0 h-10 w-6  border-transparent rounded-full cursor-pointer disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-contAccent-500 dark:focus-visible:ring-contAccent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
        active: 'bg-transparent',
        inactive: 'bg-transparent',
        container: {
          base: 'pointer-events-none relative inline-block h-8 w-8 rounded-full bg-white  transform ring-0 transition ease-in-out duration-200',
          active: 'translate-x-0',
          inactive: 'translate-x-0',
        },
        icon: {
          on: 'h-8 w-8 text-darkContText-500 dark:text-darkContText-500',
          off: 'h-8 w-8 text-darkBg-500',
        },
      }"
    />
  </div>
</template>

<script setup>
const colorMode = useColorMode();

const active = ref(true);

const toggle = () => {
  active.value = !active.value;
  colorMode.preference = active.value ? "dark" : "light";
};

console.log(colorMode.preference);
</script>

<style>
body {
  background-color: #f8f8f8;
  color: rgba(0, 0, 0, 0.8);
}
.dark body {
  background-color: #151517;
  color: #ebf4f1;
}
.sepia body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
