<script setup>
const isOpen = ref(false);
const colorMode = useColorMode();
const route = useRoute();
const user = useSupabaseUser();
// after every route enter toggle the isOpen boolean to false
watch(
  () => route.path,
  () => {
    isOpen.value = false;
  }
);

const supaAuth = useSupabaseAuthClient().auth;

const logout = async () => {
  const { error } = await supaAuth.signOut();
  if (error) {
    console.log(error);
  } else {
    return navigateTo("/");
  }
};
const items = [
  {
    label: user.value?.user_metadata?.name || "",
    description: user.value?.email || "",
    icon: "i-heroicons-information-circle",
    defaultOpen: false,
    slot: "getting-started",
  },
];
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
    <UButton
      v-if="user?.user_metadata?.isShelter"
      size="xl"
      label="Register animal"
      color="secondary"
    />
    <div class="flex place-items-center burguer-menu">
      <ToggleTheme></ToggleTheme>

      <UButton
        @click="isOpen = true"
        icon="i-mdi-menu"
        size="xl"
        color="contAccent"
        square
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
          v-if="!user"
          class="pt-12 w-full h-full flex flex-col gap-2 bg-contSecond dark:bg-darkContSecond"
        >
          <div class="flex flex-col gap-3 mx-5">
            <nuxt-link to="/login" class="">
              <UButton
                size="xl"
                label="Log in"
                color="primary"
                variant="solid"
                block
              />
            </nuxt-link>
            <nuxt-link to="/signup" class="">
              <UButton
                size="xl"
                label="Sign up"
                color="secondary"
                variant="solid"
                block
              />
            </nuxt-link>

            <nuxt-link to="/forgot-password" class="text-center"
              >Forgot password?</nuxt-link
            >
            <hr class="mb-8 border border-darkBg/50 dark:border-Bg/50" />
          </div>

          <div class="flex flex-col justify-center items-center gap-12">
            <div class="text-center flex flex-col justify-center items-center">
              <li class="nav-title">
                <nuxt-link to="/adopt">Adopt</nuxt-link>
              </li>
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
            <li class="nav-title">
              <nuxt-link to="/tips">Tips</nuxt-link>
            </li>
            <li class="nav-title">
              <nuxt-link to="/about-us">About us</nuxt-link>
            </li>
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
        <div
          v-else-if="user?.user_metadata?.isShelter"
          class="pt-12 w-full h-full flex flex-col gap-2 bg-contSecond dark:bg-darkContSecond"
        >
          <div class="flex flex-col gap-2 mx-5">
            <UAccordion
              :items="items"
              :ui="{
                wrapper: 'w-full flex flex-col gap-y-2',
                item: {
                  base: '',
                  size: 'text-sm',
                  color: 'text-gray-500 dark:text-gray-400',
                  padding: 'py-2',
                },
                transition: {
                  enterActiveClass:
                    'overflow-hidden transition-[height] duration-200 ease-out',
                  leaveActiveClass:
                    'overflow-hidden transition-[height] duration-200 ease-out',
                },
                default: {
                  openIcon: 'i-heroicons-chevron-down-20-solid',
                  closeIcon: '',
                  variant: 'soft',
                },
              }"
            >
              <template #default="{ item, index, open }">
                <UButton
                  color="gray"
                  variant="ghost"
                  class="border-b border-gray-200 dark:border-gray-700"
                  :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
                >
                  <template #leading>
                    <div class="flex w-full h-16 justify-start items-center">
                      <div
                        class="w-14 h-14 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1"
                      >
                        <nuxt-img
                          :src="
                            user.user_metadata?.avatar_url ??
                            'https://picsum.photos/100/100'
                          "
                          width="100"
                          height="100"
                          class="rounded-xl"
                        />
                      </div>
                      <div class="flex flex-col text-start">
                        <h3>{{ item.label }}</h3>
                        <span> in process</span>
                      </div>
                    </div>
                  </template>

                  <template #trailing>
                    <UIcon
                      name="i-heroicons-chevron-right-20-solid"
                      class="w-5 h-5 ms-auto transform transition-transform duration-200"
                      :class="[open && 'rotate-90']"
                    />
                  </template>
                </UButton>
              </template>
              <template #item="{ item }">
                <p class="italic text-gray-900 dark:text-white text-center">
                  {{ item.description }}
                </p>
              </template>

              <template #getting-started>
                <div class="flex flex-col justify-center items-center gap-1">
                  <ul
                    class="flex flex-col justify-center items-center gap-1 text-center text-contInactive"
                  >
                    <li>
                      <nuxt-link to="/profile"> Profile </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/forgot-password">
                        Forgot password?
                      </nuxt-link>
                    </li>
                    <li>
                      <UButton
                        @click="logout"
                        size="xl"
                        label="Log out"
                        color="third"
                        variant="link"
                        block
                      />
                    </li>
                  </ul>
                </div>
              </template>

              <template #installation="{ description }">
                <div
                  class="flex flex-col justify-center items-center gap-1 mb-4"
                >
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    Installation
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Install <code>@nuxthq/ui</code> dependency to your project:
                  </p>
                  <p>
                    {{ description }}
                  </p>
                </div>

                <div class="flex flex-col items-center">
                  <code>$ npm install @nuxtlabs/ui</code>
                  <code>$ nnpm install -D @nuxthq/ui</code>
                  <code>$ pnpm i -D @nuxthq/ui</code>
                </div>
              </template>
            </UAccordion>
            <!-- Profile login, avatar, notification status, name of the adoption-->
            <h2>Toby has been registered</h2>
            <UButton
              @click="logout"
              size="xl"
              label="Log out"
              color="primary"
              variant="solid"
              block
            />

            <hr class="mb-8 border border-darkBg/50 dark:border-Bg/50" />
          </div>

          <div class="flex flex-col justify-center items-center gap-12">
            <li class="nav-title">
              <nuxt-link to="/requests">Requests</nuxt-link>
            </li>
            <div class="text-center flex flex-col justify-center items-center">
              <li class="nav-title">
                <nuxt-link to="/tips">Calendar</nuxt-link>
              </li>
              <ul class="flex justify-center items-center flex-col gap-2">
                <li>
                  <nuxt-link to="/adopt/about-adoption" class="nav--item"
                    >Meet and Great</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/adopt/about-adoption" class="nav--item"
                    >Adoption day</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/adopt/about-adoption" class="nav--item"
                    >Answer questions</nuxt-link
                  >
                </li>
              </ul>
            </div>
            <li class="nav-title">
              <nuxt-link to="/aboutus">About us</nuxt-link>
            </li>
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
        <div
          v-else
          class="pt-12 w-full h-full flex flex-col gap-2 bg-contSecond dark:bg-darkContSecond"
        >
          <div class="flex flex-col gap-2 mx-5">
            <UAccordion
              :items="items"
              :ui="{
                wrapper: 'w-full flex flex-col gap-y-2',
                item: {
                  base: '',
                  size: 'text-sm',
                  color: 'text-gray-500 dark:text-gray-400',
                  padding: 'py-2',
                },
                transition: {
                  enterActiveClass:
                    'overflow-hidden transition-[height] duration-200 ease-out',
                  leaveActiveClass:
                    'overflow-hidden transition-[height] duration-200 ease-out',
                },
                default: {
                  openIcon: 'i-heroicons-chevron-down-20-solid',
                  closeIcon: '',
                  variant: 'soft',
                },
              }"
            >
              <template #default="{ item, index, open }">
                <UButton
                  color="gray"
                  variant="ghost"
                  class="border-b border-gray-200 dark:border-gray-700"
                  :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
                >
                  <template #leading>
                    <div class="flex w-full h-16 justify-start items-center">
                      <div
                        class="w-14 h-14 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1"
                      >
                        <nuxt-img
                          :src="
                            user.user_metadata?.avatar_url ??
                            'https://picsum.photos/100/100'
                          "
                          width="100"
                          height="100"
                          class="rounded-xl"
                        />
                      </div>
                      <div class="flex flex-col text-start">
                        <h3>{{ item.label }}</h3>
                        <span> in process</span>
                      </div>
                    </div>
                  </template>

                  <template #trailing>
                    <UIcon
                      name="i-heroicons-chevron-right-20-solid"
                      class="w-5 h-5 ms-auto transform transition-transform duration-200"
                      :class="[open && 'rotate-90']"
                    />
                  </template>
                </UButton>
              </template>
              <template #item="{ item }">
                <p class="italic text-gray-900 dark:text-white text-center">
                  {{ item.description }}
                </p>
              </template>

              <template #getting-started>
                <div class="flex flex-col justify-center items-center gap-1">
                  <NuxtLink
                    to="/getting-started"
                    class="flex items-end gap-1.5 font-bold text-xl text-gray-900 dark:text-white"
                  >
                    <Logo
                      class="w-8 h-8 text-primary-500 dark:text-primary-400"
                    />

                    <span class="hidden sm:block">NuxtLabs</span
                    ><span class="sm:text-primary-500 dark:sm:text-primary-400"
                      >UI</span
                    >
                  </NuxtLink>

                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Fully styled and customizable components for Nuxt.
                  </p>
                </div>
              </template>

              <template #installation="{ description }">
                <div
                  class="flex flex-col justify-center items-center gap-1 mb-4"
                >
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    Installation
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Install <code>@nuxthq/ui</code> dependency to your project:
                  </p>
                  <p>
                    {{ description }}
                  </p>
                </div>

                <div class="flex flex-col items-center">
                  <code>$ npm install @nuxtlabs/ui</code>
                  <code>$ nnpm install -D @nuxthq/ui</code>
                  <code>$ pnpm i -D @nuxthq/ui</code>
                </div>
              </template>
            </UAccordion>
            <!-- Profile login, avatar, notification status, name of the adoption-->
            <h2>Pet adoption in progress</h2>
            <UButton
              @click="logout"
              size="xl"
              label="Log out"
              color="primary"
              variant="solid"
              block
            />

            <hr class="mb-8 border border-darkBg/50 dark:border-Bg/50" />
          </div>
          <div class="flex flex-col justify-center items-center gap-12">
            <div class="text-center flex flex-col justify-center items-center">
              <li class="nav-title">
                <nuxt-link to="/adopt">Adopt</nuxt-link>
              </li>
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
            <li class="nav-title">
              <nuxt-link to="/tips">Tips</nuxt-link>
            </li>
            <li class="nav-title">
              <nuxt-link to="/about-us">About us</nuxt-link>
            </li>
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
  @apply text-base font-medium mb-2 list-none;
}

.nav--item {
  @apply text-Captionlg font-regular text-contInactive;
}
.router-link-active {
  @apply border-b border-contAccent pb-1;
}
</style>
