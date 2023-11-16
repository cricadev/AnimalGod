<template>
  <div class="flex mx-5 relative bottom-8 z-50">
    <UInput color="white" variant="outline" size="xl" placeholder="Search" />
    <div class="border-l dark:border-contSecond border-darkContSecond"></div>
    <UInput icon="i-heroicons-magnifying-glass-20-solid" color="white" variant="outline" size="xl" trailing
      placeholder="City" :ui="{
        icon: {
          trailing: {
            wrapper:
              'absolute inset-y-0 right-0 flex items-center pointer-events-none bg-contAccent dark:bg-contAccent p-4 rounded-r-md rounded-l-none',

          },
        },
      }" />
  </div>
</template>
