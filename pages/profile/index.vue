<template>
  <div class="text-darkContThird" v-if="user">
    <h1 class="text-Heading1sm">Profile Page</h1>
    <h3 class="text-Heading3sm">
      Email: {{ user.user_metadata?.email ?? user.email }}
    </h3>
    <h3 class="text-Heading3sm">
      Full Name:
      {{
        user.user_metadata?.full_name ??
        "there is no name available for this provider"
      }}
    </h3>
    <h4 class="text-Heading4sm">
      Country: {{ capitalizeFirstLetter(user.user_metadata?.country) }}
    </h4>

    <h4 class="text-Heading4sm">
      Notifications:
      {{ user.user_metadata?.notifications ? "Enabled" : "Disabled" }}
    </h4>

    <h4 class="text-Heading4sm">
      Phone: {{ user.user_metadata?.phone || "N/A" }}
    </h4>

    <h4 class="text-Heading4sm">
      Terms: {{ user.user_metadata?.terms ? "Accepted" : "Not Accepted" }}
    </h4>

    <nuxt-img
      :src="user.user_metadata?.avatar_url ?? 'https://picsum.photos/100/100'"
      width="100"
      height="100"
      class="rounded-full"
    />

    <pre class="dark:text-Bg text-darkBg">{{ user }}</pre>
  </div>
  <div class="" v-else>There is no profile please log in</div>
</template>
<script setup>
definePageMeta({
  middleware: ["authenticated"],
});

const user = useSupabaseUser();
const capitalizeFirstLetter = (s) =>
  s
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
</script>
