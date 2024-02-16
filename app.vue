<script setup>
import { useUserSessionStore } from './stores/UserSessionStore';
import { storeToRefs } from "pinia";

const userSessionStore = useUserSessionStore();
const { session } = storeToRefs(userSessionStore);

const user = useSupabaseUser();
onMounted(() => {
  if (user.value) {
    session.value = user.value;
    console.log(session.value)
  }
})
useHead({

  link: [{ rel: "icon", type: "image/png", sizes: "16x16", href: "/icons-16.png" },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/icons-32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/icons-96.png",
  },
  ],
});
</script>
<template>
  <div>
    <nuxt-layout>
      <nuxt-page></nuxt-page>
    </nuxt-layout>
  </div>
</template>
