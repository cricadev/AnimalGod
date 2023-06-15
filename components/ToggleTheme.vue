<template>
  <div>
    <UToggle
      on-icon="i-mdi-weather-night"
      off-icon="i-mdi-white-balance-sunny"
      :model-value="active"
      @update:model-value="toggle"
      class="mr-3"
      :ui="{
        base: 'relative inline-flex items-center flex-shrink-0 h-10 w-6  border-transparent rounded-full cursor-pointer disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-contAccent-500 dark:focus-visible:ring-contAccent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
        active: 'bg-transparent',
        inactive: 'bg-transparent',
        container: {
          base: 'pointer-events-none relative inline-block h-8 w-8 rounded-full bg-transparent  transform ring-0 transition ease-in-out duration-200',
          active: 'translate-x-0',
          inactive: 'translate-x-0',
        },
        icon: {
          on: 'h-8 w-8  bg-Bg i-mdi-weather-night ',
          off: 'h-8 w-8  bg-darkBg i-mdi-white-balance-sunny',
        },
      }"
    />
  </div>
</template>

<script setup>
const colorMode = useColorMode();

onMounted(() => {
  if (colorMode.preference === "system") {
    if (colorMode.value === "dark") {
      active.value = true;
    } else {
      active.value = false;
    }
  }
});
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
