<template>
  <div class="max-w-4xl 2xl:max-w-6xl mx-auto">
    <div class="flex flex-col justify-between h-[90dvh]" v-if="user">
      <div class="">
        <div class="user-image-upload flex justify-center items-center">
          <div class="relative" v-if="currentPrismaUser">
            <div class="" v-if="!currentPrismaUser.image">
              <Icon name="i-mdi-account" class="w-32 h-32 rounded-full" />
              <label for="imageInput"
                class="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white">
                <Icon name="i-mdi-pencil" class="" />
                <input type="file" id="imageInput" class="hidden" @change="(event) => handleUpload(event)"
                  accept="image/*">
              </label>
            </div>
            <div class="relative" v-else>
              <nuxt-img :src="currentPrismaUser.image" class="w-32 h-32 rounded-full object-cover" />
              <button
                class="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white"
                @click="handleImageDelete">
                <Icon name="i-mdi-trash-can" class="" />
              </button>
            </div>
          </div>
        </div>
        <h3 class="text-Heading3sm text-center dark:text-white text-black font-semibold">
          {{
            user.user_metadata?.name
          }}
          <Icon :name="convertCountryToIcon(user.user_metadata?.country)" class="" />
        </h3>
        <div v-if="!loading">
          <ProfileInputEditableHeading :modelValue="currentPrismaUser?.phone"
            @update:modelValue="value => handleFieldUpdate('phone', value)" :phone="true" />
          <ProfileInputEditableHeading v-if="user?.user_metadata?.isShelter" :modelValue="currentPrismaUser?.address"
            @update:modelValue="value => handleFieldUpdate('address', value)" :address="true" />
          <ProfileInputEditableHeading v-if="user?.user_metadata?.isShelter" :modelValue="currentPrismaUser?.website"
            :website="true" @update:modelValue="value => handleFieldUpdate('website', value)" />
        </div>
        <div v-else>
          <Loader />
        </div>
      </div>

      <div class="px-5">

        <div class="" v-if="!loadingPets">
          <nuxt-link v-if="user?.user_metadata?.isShelter" :to="itemsPets?.pets.length ? '/my-pets' : ''"
            class="registered-pets-card justify-center flex bg-contSecond dark:bg-darkContSecond py-5 gap-4 items-center">
            <UAvatarGroup size="sm" :max="4" :ui="{
              'ring': 'ring-0',
              'wrapper': 'bg-contSecond dark:bg-darkContSecond',
            }">
              <UAvatar class="override-this-shit" :src="pet.images[0]" :alt="pet?.name" v-for="pet in itemsPets?.pets" />
            </UAvatarGroup>
            <span>
              {{ itemsPets?.pets.length ? 'Your registered pets' : 'No registered pets yet' }}
              <Icon name="i-mdi-chevron-right" class="text-black dark:text-white" />
            </span>
          </nuxt-link>
          <nuxt-link v-else :to="itemsPets?.pets.length ? '/my-applications' : ''"
            class="registered-pets-card justify-center flex py-5 gap-4 items-center" :class="[
              itemsPets?.pets.length ? 'bg-contSecond dark:bg-darkContSecond' : 'bg-contInactive'
            ]">
            <UAvatarGroup size="sm" :max="4" :ui="{
              'ring': 'ring-0',
              'wrapper': 'dark:bg-darkContSecond bg-contSecond',
            }">
              <UAvatar class="override-this-shit" :src="pet.images[0]" :alt="pet?.name" v-for="pet in itemsPets?.pets" />
            </UAvatarGroup>
            <span>
              {{ itemsPets?.pets.length ? 'Your applications' : 'No applications yet' }}
              <Icon name="i-mdi-chevron-right" class=" text-black dark:text-white" />
            </span>
          </nuxt-link>
        </div>
        <div class="" v-else>
          <Loader />
        </div>
        <div class="t&c-buttons gap-1 flex flex-col mt-5">

          <UButton size="xl" label="Permissions" color="secondary" variant="solid" block class=" py-3"
            icon="i-mdi-chevron-right" trailing />
          <UButton size="xl" label="Privacy Policy" color="secondary" variant="solid" block class="py-3"
            icon="i-mdi-chevron-right" trailing />
          <UButton size="xl" label="Contact Us" color="secondary" variant="solid" block class="py-3"
            icon="i-mdi-chevron-right" trailing />

          <UButton size="xl" label="Log out" color="primary" variant="solid" block @click="logout" class="py-5 mt-2" />
        </div>
      </div>
    </div>
    <div class="" v-else>There is no profile please log in</div>



  </div>
</template>
<script setup lang="ts">

import { useformStore } from '~/stores/formStore';
import { useUserSessionStore } from '~/stores/UserSessionStore';
import { useClientStore } from '~/stores/ClientStore';
import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';
import { storeToRefs } from 'pinia';

countries.registerLocale(en);

const UserSessionStore = useUserSessionStore();

const { currentPrismaUser, itemsPets, loadingPets, user } = storeToRefs(UserSessionStore);
const { handleFieldUpdate, getCurrentUser, fetchUserData } = UserSessionStore;
useHead({
  title: "Profile",
  titleTemplate: '%s | AnimalGod',
  meta: [
    {
      name: "description",
      content:
        "This is where you can edit your profile, see your pets and applications.",
    },
  ],
});

onMounted(() => {
  fetchUserData(user.value)
  getCurrentUser();

})
console.log(loadingPets.value)

const clientStore = useClientStore();
const { handleFileUpload, deleteImage } = useformStore();


console.log(itemsPets.value)


const handleImageDelete = async () => {

  await deleteImage(0, 'avatars', user.value.user_metadata?.name, currentPrismaUser.value.image)

  try {
    console.log(currentPrismaUser.value.id, currentPrismaUser.value.image)
    // First, try to create the client
    const data = await $fetch('/api/user', {
      method: 'PATCH',
      body: {
        isShelter: user.value.user_metadata?.isShelter,
        id: currentPrismaUser.value.id,
        image: '',
      }
    });
    if (!data) {
      throw new Error('Error creating client')
    }
    await getCurrentUser()

  }
  catch (error) {
    console.log(error);
  }


}
const NameWithNoSpacesOrSpecialChars = computed(() => {
  return user.value.user_metadata?.name.replace(/[^a-zA-Z0-9]/g, '');

})
const handleUpload = async (event) => {

  const publicUrl = await handleFileUpload(event, 'avatars', NameWithNoSpacesOrSpecialChars.value)
  console.log(publicUrl)

  try {
    // First, try to create the client
    const data = await $fetch('/api/user', {
      method: 'PATCH',
      body: {
        isShelter: user.value.user_metadata?.isShelter,
        id: currentPrismaUser.value.id,
        image: publicUrl,
      }
    });
    if (!data) {
      throw new Error('Error creating client')
    }

    await getCurrentUser()
  }
  catch (error) {
    console.log(error);
  }




}



const supaAuth = useSupabaseClient().auth;

const logout = async () => {
  const { error } = await supaAuth.signOut();
  if (error) {
    console.log(error);
  } else {
    return navigateTo("/");
  }
};




const convertCountryToIcon = (country) => {
  const countryCode = countries.getAlpha2Code(country, 'en');
  if (countryCode) {
    const iconName = `circle-flags:${countryCode.toLowerCase()}`;
    return iconName;
  }

};


</script>
<style scoped></style>