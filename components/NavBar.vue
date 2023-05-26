<script setup>
const isOpen = ref(false);
const colorMode = useColorMode();
const route = useRoute();

// after every route enter toggle the isOpen boolean to false
watch(
  () => route.path,
  () => {
    isOpen.value = false;
  }
);
</script>

<template>
  <div class="flex items-center justify-between w-full h-16">
    <nuxt-link to="/">
      <nuxt-img
        provider="cloudinary"
        src="/v1685029472/animal_god_olvlho.png"
        v-if="colorMode.preference !== 'light'"
        width="100%"
        height="35"
        class="p-5"
      ></nuxt-img>
      <nuxt-img
        provider="cloudinary"
        src="/v1685029473/dark-animal_god_cloaku.png"
        width="100%"
        height="35"
        class="p-5"
        v-else
      ></nuxt-img
    ></nuxt-link>

    <div class="flex place-items-center burguer-menu">
      <ToggleTheme></ToggleTheme>

      <UButton
        @click="isOpen = true"
        icon="i-mdi-menu"
        size="xl"
        square
        color="contAccent"
        variant="ghost"
      />

      <USlideover
        v-model="isOpen"
        :ui="{
          overlay: {
            background: 'bg-Bg/70 dark:bg-darkBg/70',
            transition: {
              enter: 'ease-in-out duration-500',
              enterFrom: 'opacity-0',
              enterTo: 'opacity-100',
              leave: 'ease-in-out duration-500',
              leaveFrom: 'opacity-100',
              leaveTo: 'opacity-0',
            },
          },
          base: 'relative flex-1 flex flex-col w-full focus:outline-none',
          background: 'bg-Bg dark:bg-darkBg',
          ring: '',
          rounded: '',
          padding: '',
          shadow: 'shadow-xl',
          width: 'w-screen max-w-md',
          transition: {
            enter: 'transform transition ease-in-out duration-300',
            leave: 'transform transition ease-in-out duration-200',
          },
        }"
      >
        <!-- Content -->
        <div
          class="pt-12 w-full h-full flex flex-col gap-2 bg-contSecond dark:bg-darkContSecond"
        >
          <UButton
            size="xl"
            label="Log in"
            color="contAccent"
            variant="solid"
            :ui="{
              size: {
                xl: 'text-body1lg font-medium font-Inter  justify-center',
              },
              padding: {
                xl: 'px-8 py-3  mx-4',
              },
              color: {
                contAccent: {
                  solid:
                    'shadow-sm  text-darkContText  bg-contAccent hover:bg-contAccent-700 disabled:bg-white dark:bg-contAccent dark:hover:bg-contAccent/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
                },
              },
              variant: {
                solid:
                  'shadow-sm  bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
              },
              icon: {
                base: 'flex-shrink-0',
                size: {
                  '2xs': 'h-3.5 w-3.5',
                  xs: 'h-4 w-4',
                  sm: 'h-4 w-4',
                  md: 'h-5 w-5',
                  lg: 'h-5 w-5',
                  xl: 'h-6 w-6',
                },
              },
            }"
          />
          <UButton
            size="xl"
            label="Sign up"
            color="contAccent"
            variant="solid"
            :ui="{
              size: {
                xl: 'text-body1lg font-medium font-Inter  justify-center',
              },
              padding: {
                xl: 'px-8 py-3  mx-4',
              },
              color: {
                contAccent: {
                  solid:
                    'shadow-sm  text-Bg dark:text-darkBg bg-darkContThird hover:bg-contAccent-700 disabled:bg-white dark:bg-darkContThird dark:hover:bg-contAccent/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
                },
              },
              variant: {
                solid:
                  'shadow-sm  bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
              },
              icon: {
                base: 'flex-shrink-0',
                size: {
                  '2xs': 'h-3.5 w-3.5',
                  xs: 'h-4 w-4',
                  sm: 'h-4 w-4',
                  md: 'h-5 w-5',
                  lg: 'h-5 w-5',
                  xl: 'h-6 w-6',
                },
              },
            }"
          />
          <UButton
            size="xl"
            label="Forgot password?"
            color="none"
            variant="none"
            :ui="{
              size: {
                xl: 'text-body1lg font-medium font-Inter  justify-center',
              },
              padding: {
                xl: 'px-8 py-3  mx-4',
              },
              color: {
                contAccent: {
                  none: 'shadow-sm  text-Bg bg-transparent  bg-darkContThird hover:bg-contAccent-700 disabled:bg-white dark:bg-darkContThird dark:hover:bg-contAccent/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
                },
              },
              variant: {
                none: 'shadow-sm  bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
              },
              icon: {
                base: 'flex-shrink-0',
                size: {
                  '2xs': 'h-3.5 w-3.5',
                  xs: 'h-4 w-4',
                  sm: 'h-4 w-4',
                  md: 'h-5 w-5',
                  lg: 'h-5 w-5',
                  xl: 'h-6 w-6',
                },
              },
            }"
          />
          <hr class="mb-8 border border-darkBg/50 dark:border-Bg/50" />

          <div class="flex flex-col justify-center items-center gap-12">
            <div class="flex flex-col justify-center items-center">
              <p class="nav-title">Adopt</p>
              <ul class="flex justify-center items-center flex-col gap-2">
                <li>
                  <nuxt-link to="/adopt/about-adoption" class="nav--item"
                    >About adoption</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/adopt/meet-them" class="nav--item"
                    >Meet them</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/adopt/succesful-cases" class="nav--item"
                    >Succesful cases</nuxt-link
                  >
                </li>
              </ul>
            </div>
            <p class="nav-title">Tips</p>
            <p class="nav-title">About us</p>
          </div>
          <div
            class="flex justify-center items-center absolute bottom-8 left-1/2 translate-x-[-50%]"
          >
            <nuxt-img
              provider="cloudinary"
              src="/v1685029472/animal_god_olvlho.png"
              v-if="colorMode.preference !== 'light'"
              width="120"
              height="35"
            ></nuxt-img>
            <nuxt-img
              provider="cloudinary"
              src="/v1685029473/dark-animal_god_cloaku.png"
              width="120"
              height="35"
              v-else
            ></nuxt-img>
          </div>
        </div>
      </USlideover>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.nav-title {
  @apply text-base font-medium mb-2;
}

.nav--item {
  @apply text-Captionlg font-regular text-contInactive;
}
.router-link-active {
  @apply border-b border-contAccent pb-1;
}
</style>
