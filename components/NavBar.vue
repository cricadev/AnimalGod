<script setup>
import { storeToRefs } from "pinia";
import { useWindowSize } from "@vueuse/core";

const { height, width } = storeToRefs(useWindowSize());
const isMobile = computed(() => width.value < 1024);

const isOpen = ref(false);
const colorMode = useColorMode();
const route = useRoute();

const user = useSupabaseUser();
const fetchResult = ref(null);
const itemsPets = ref(null);
const errorPets = ref(null);
const PendingPets = ref(null);

watch(user, async (newUser) => {
  if (newUser) {
    if (newUser.user_metadata.isShelter) {
      fetchResult.value = await useFetch(`/api/shelter`);
    } else {
      fetchResult.value = await useFetch(`/api/client`);
    }

    if (fetchResult.value) {
      itemsPets.value = fetchResult.value.data;
      errorPets.value = fetchResult.value.error;
      PendingPets.value = fetchResult.value.pending;
    }
  }
}, { immediate: true, deep: true });
// after every route enter toggle the isOpen boolean to false
watch(
  () => route.path,
  () => {
    isOpen.value = false;
  }
);

const supaAuth = useSupabaseClient().auth;

const logout = async () => {
  const { error } = await supaAuth.signOut();
  if (error) {
    console.log(error);
  } else {
    return navigateTo("/");
  }
};

</script>

<template>
  <div class="">
    <div class="flex items-center justify-between w-full h-16 " v-show="isMobile">
      <nuxt-link to="/">
        <nuxt-img provider="cloudinary" src="/animal_god_olvlho.png" v-show="colorMode.value !== 'light'" width="100%"
          height="35" class="p-5"></nuxt-img>
        <nuxt-img provider="cloudinary" src="/dark-animal_god_cloaku.png" width="100%" height="35" class="p-5"
          v-show="colorMode.value !== 'dark'"></nuxt-img>
      </nuxt-link>
      <nuxt-link to="/pet" class="bg-darkContThird px-3 lg:px-0 lg:py-0 py-2 rounded-lg"
        v-if="user?.user_metadata?.isShelter">
        Register animal</nuxt-link>
      <div class="flex place-items-center burguer-menu">
        <ToggleTheme></ToggleTheme>
        <UButton @click="isOpen = true" icon="i-mdi-menu" size="xl" color="primary" square variant="ghost" />
        <USlideover v-model="isOpen" :ui="{
          overlay: {
            background: 'bg-Bg/70 dark:bg-darkBg/70',
          },
          background: 'bg-contSecond dark:bg-darkContSecond',
          width: 'w-screen max-w-md',
        }">
          <!-- Content -->
          <div class="">
            <div v-if="!user" class=" w-full h-full flex flex-col  bg-contSecond dark:bg-darkContSecond gap-16">
              <div class="flex justify-center items-center mt-4">
                <nuxt-img provider="cloudinary" src="/animal_god_olvlho.png" v-show="colorMode.value !== 'light'"
                  width="120" height="35"></nuxt-img>
                <nuxt-img provider="cloudinary" src="/dark-animal_god_cloaku.png" width="120" height="35"
                  v-show="colorMode.value !== 'dark'"></nuxt-img>
              </div>
              <div class="flex flex-col justify-center items-center gap-12">
                <div class="text-center flex flex-col justify-center items-center">
                  <ul class="flex justify-center items-center flex-col gap-6">
                    <li>
                      <nuxt-link to="/about-adoption" class="nav-title"> Adopt</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/meet-them" class="nav-title">Meet them</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/successful-cases" class="nav-title">Succesful cases</nuxt-link>
                    </li>
                    <li class="nav-title">
                      <nuxt-link to="/tips">Tips</nuxt-link>
                    </li>
                    <!-- <li class="nav-title">
                      <nuxt-link to="/about-us">About us</nuxt-link>
                    </li> -->
                  </ul>
                </div>
              </div>
              <div class="flex flex-col gap-3 w-full absolute bottom-4 px-3">
                <nuxt-link to="/login" class="">
                  <UButton size="xl" label="Log in" color="primary" variant="solid" block />
                </nuxt-link>
                <nuxt-link to="/signup" class="">
                  <UButton size="xl" label="Sign up" color="secondary" variant="solid" block />
                </nuxt-link>
                <nuxt-link to="/forgot-password" class="text-center">Forgot password?</nuxt-link>
              </div>
            </div>
            <div v-else-if="user?.user_metadata?.isShelter"
              class=" w-full h-full flex flex-col gap-16 bg-contSecond dark:bg-darkContSecond">
              <div class="flex justify-center items-center mt-4">
                <nuxt-img provider="cloudinary" src="/animal_god_olvlho.png" v-show="colorMode.value !== 'light'"
                  width="120" height="35"></nuxt-img>
                <nuxt-img provider="cloudinary" src="/dark-animal_god_cloaku.png" width="120" height="35"
                  v-show="colorMode.value !== 'dark'"></nuxt-img>
              </div>
              <div class="flex flex-col justify-center items-center ">
                <ul class="flex justify-center items-center flex-col gap-6">
                  <li class="nav-title">
                    <nuxt-link to="/requests">Requests</nuxt-link>
                  </li>
                  <li class="nav-title">
                    <nuxt-link to="/my-pets">My Registered animals</nuxt-link>
                  </li>
                  <li class="nav-title">
                    <nuxt-link to="/aboutus">About us</nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col justify-center items-center gap-6 w-full absolute bottom-4 px-3">
                <nuxt-link to="/profile" class="w-full flex items-center justify-between">
                  <div v-if="user?.user_metadata?.isShelter && itemsPets" class="flex items-center gap-3">
                    <nuxt-img v-if="itemsPets?.shelter?.image" :src="itemsPets?.shelter?.image" width="50" height="50"
                      class="rounded-sm" />
                    <Icon name="i-mdi-account" class="w-16 h-16 rounded-full" v-else />
                    <div class="">
                      <h3 class=" leading-none text-Body1sm font-semibold text-black dark:text-darkContText">{{
                        user?.user_metadata?.name
                      }}
                      </h3>
                      <span class="text-Captionlg font-light text-black dark:text-darkContText leading-none">
                        {{ itemsPets?.pets?.length ?? 0 }} pets
                        has been
                        registered!</span>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </nuxt-link>
                <UButton size="xl" label="Log out" color="primary" variant="solid" block @click="logout" class="py-5" />
              </div>
            </div>
            <div v-else class=" w-full h-full flex flex-col gap-8 bg-contSecond dark:bg-darkContSecond">
              <div class="flex justify-center items-center mt-4">
                <nuxt-img provider="cloudinary" src="/animal_god_olvlho.png" v-show="colorMode.value !== 'light'"
                  width="120" height="35"></nuxt-img>
                <nuxt-img provider="cloudinary" src="/dark-animal_god_cloaku.png" width="120" height="35"
                  v-show="colorMode.value !== 'dark'"></nuxt-img>
              </div>
              <div class="flex flex-col justify-center items-center gap-12">
                <ul class="flex justify-center items-center flex-col gap-6">
                  <li>
                    <nuxt-link to="/about-adoption" class="nav-title">Adopt</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/meet-them" class="nav-title">Meet them</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/successful-cases" class="nav-title">Successful cases</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/tips" class="nav-title">Tips</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/about-us" class="nav-title">About us</nuxt-link>
                  </li>
                </ul>
              </div>

              <div class="flex flex-col justify-center items-center gap-6 w-full absolute bottom-4 px-3">

                <nuxt-link to="/profile" class="w-full flex items-center justify-between">
                  <div v-if="!user?.user_metadata?.isShelter && itemsPets" class="flex items-center gap-3">
                    <nuxt-img v-if="itemsPets?.client?.image" :src="itemsPets?.client?.image" width="50" height="50"
                      class="rounded-sm" />
                    <Icon name="i-mdi-account" class="w-16 h-16 rounded-full" v-else />
                    <div class="">
                      <h3 class=" text-Body1sm font-semibold text-black dark:text-darkContText">{{
                        user?.user_metadata?.name }}
                      </h3>
                      <span
                        class="text-Captionlg font-light text-black dark:text-darkContText  flex gap-2 items-center">{{
                          itemsPets?.appointments.length ?? 0 }}
                        adoption requests
                        <div class="bg-red-500 rounded-full w-2 h-2"></div>
                        In process
                      </span>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </nuxt-link>
                <UButton size="xl" label="Log out" color="primary" variant="solid" block @click="logout" class="py-4" />
              </div>
            </div>
          </div>
        </USlideover>
      </div>
    </div>
    <div class="flex items-center justify-between w-full  h-16" v-show="!isMobile">
      <div class="flex">
        <nuxt-link to="/">
          <nuxt-img provider="cloudinary" src="/animal_god_olvlho.png" v-show="colorMode.value !== 'light'" width="100%"
            height="35" class="p-5"></nuxt-img>
          <nuxt-img provider="cloudinary" src="/dark-animal_god_cloaku.png" width="100%" height="35" class="p-5"
            v-show="colorMode.value !== 'dark'"></nuxt-img>
        </nuxt-link>
        <ToggleTheme></ToggleTheme>
      </div>
      <div v-if="!user" class="flex flex-col justify-center items-center gap-12 mr-16">
        <ul class="flex justify-center items-center  gap-12">
          <li>
            <nuxt-link to="/about-adoption" class="nav-title">About adoption</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/meet-them" class="nav-title">Meet them</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/successful-cases" class="nav-title">Successful cases</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/tips" class="nav-title">Tips</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about-us" class="nav-title">About us</nuxt-link>
          </li>
          <div class="flex gap-4">
            <nuxt-link to="/signup" class="">
              <UButton size="xl" label="Sign up" color="secondary" variant="solid" block />
            </nuxt-link>
            <nuxt-link to="/login" class="">
              <UButton size="xl" label="Log in" color="primary" variant="solid" block />
            </nuxt-link>
          </div>
        </ul>
      </div>
      <div class="" v-else-if="user?.user_metadata?.isShelter">
        <ul class="flex justify-center items-center gap-12 mr-16">
          <li>
            <nuxt-link to="/about-adoption" class="nav-title">Requests</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/meet-them" class="nav-title">Calendar</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/successful-cases" class="nav-title">About us</nuxt-link>
          </li>
          <div class="flex gap-4">
            <UButton size="xl" label="Log out" color="darkContThird" variant="solid" class="py-3" inline>
              <nuxt-link to="/pet">
                Register animal</nuxt-link>
            </UButton>
            <div class="flex flex-col justify-center items-center gap-6 mr-6">
              <nuxt-link to="/profile" class="w-full flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <nuxt-img v-if="itemsPets?.shelter?.image" :src="itemsPets?.shelter?.image" width="50" height="50"
                    class="rounded-sm" />
                  <Icon name="i-mdi-account" class="w-16 h-16 rounded-full" v-else />
                </div>
              </nuxt-link>
            </div>
          </div>
        </ul>
      </div>
      <div class="" v-else>
        <ul class="flex justify-center items-center gap-12 mr-16">
          <li>
            <nuxt-link to="/about-adoption" class="nav-title">About adoption</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/meet-them" class="nav-title">Meet them</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/successful-cases" class="nav-title">Successful cases</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/tips" class="nav-title">Tips</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about-us" class="nav-title">About us</nuxt-link>
          </li>
          <div class="flex flex-col justify-center items-center gap-6 mr-6">
            <nuxt-link to="/profile" class="w-full flex items-center justify-between">
              <div class="flex items-center gap-3">
                <nuxt-img v-if="itemsPets?.client?.image" :src="itemsPets?.client?.image" width="50" height="50"
                  class="rounded-sm" />
                <Icon name="i-mdi-account" class="w-16 h-16 rounded-full" v-else />
              </div>
            </nuxt-link>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.nav-title {
  @apply text-base font-medium list-none;
}

.nav--item {
  @apply text-Captionlg font-regular text-contInactive;
}

.router-link-active {
  @apply border-b border-contAccent pb-1;
}
</style>
