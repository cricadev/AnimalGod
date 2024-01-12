<script setup lang="ts">
const router = useRouter()
const searchQuery = ref('')
const stopWatcher = watch(searchQuery, (newVal) => {
  if (newVal.length > 2) {
    router.push({ path: '/meet-them' })
  }
})
onUnmounted(() => {
  stopWatcher()
})
</script>

<template>
  <div class="mx-4 md:mx-32 lg:mx-96">
    <UInput v-model="searchQuery" icon="i-heroicons-magnifying-glass-20-solid" color="white" variant="outline" size="xl"
      trailing placeholder="Search" :ui="{
        icon: {
          trailing: {
            wrapper:
              'absolute inset-y-0 right-0 flex items-center pointer-events-none bg-contAccent dark:bg-contAccent p-4 rounded-r-md rounded-l-none ',
          }
        },
      }" />
  </div>
</template>

<style></style>
