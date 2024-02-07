<script setup>
import { useUserSessionStore } from './stores/UserSessionStore';
import { storeToRefs } from "pinia";

const userSessionStore = useUserSessionStore();
const { session } = storeToRefs(userSessionStore);

const user = useSupabaseUser();

watch(user, () => {
  if (user.value) {
    session.value = user.value
  }
});
</script>
<template>
  <div>
    <nuxt-layout>
      <nuxt-page></nuxt-page>
    </nuxt-layout>
  </div>
</template>
