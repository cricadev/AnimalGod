<template>
  <div class="">
    <div class="text-darkContThird" v-if="user">
      <div class="user-image-upload flex justify-center items-center">

        <div class="relative" v-if="currentPrismaUser">
          <div class="" v-if="!currentPrismaUser.image">
            <Icon name="i-mdi-account" class="w-32 h-32 rounded-full" />
            <label for="imageInput"
              class="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white">
              <Icon name="i-mdi-pencil" class="" />
              <input type="file" id="imageInput" class="hidden" @change="(event) => handleUpload(event)" accept="image/*">
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

      <h3 class="text-Heading3sm text-center text-white font-semibold">

        {{
          user.user_metadata?.name
        }}
        <Icon :name="convertCountryToIcon(user.user_metadata?.country)" class="" />

      </h3>

      <ProfileInputEditableHeading :phone="user.user_metadata?.phone" @updateProfile="handleFieldUpdate"
        v-model="form.phone" />

      <!-- <div class="input-field--heading-group">

        <h4 v-if="currentPrismaUser.phone && !editable"
          class="text-Heading4sm text-center font-bold text-contInactive flex items-center justify-center gap-2">
          <Icon name="i-mdi-phone" class="" />
          + {{ convertCountryToTel(user.user_metadata?.country) }} {{ user.user_metadata?.phone }}

          <Icon name="i-mdi-pencil" @click="editable = true" class="" />
        </h4>

        <form v-else @submit.prevent="handleFieldUpdate">
          <input type="text" class="mx-16 bg-transparent border-none flex justify-center" v-model="form.phone">
        </form>
      </div> -->
      <div class="input-field--heading-group">

        <h4 v-if="currentPrismaUser.address && !editable"
          class="text-Heading4sm text-center font-bold text-contInactive flex items-center justify-center gap-2">
          <Icon name="material-symbols:location-on" class="" />
          {{
            currentPrismaUser.address ?? 'Enter an address' }}

          <Icon name="i-mdi-pencil" @click="editable = true" class="" />

        </h4>

        <form v-else @submit.prevent="handleFieldUpdate">
          <input type="text" class="mx-16 bg-transparent border-none flex justify-center" v-model="form.address">
        </form>
      </div>


      <div class="input-field--heading-group">
        <h4 class="text-Heading4sm text-center font-bold text-contInactive flex items-center justify-center">
          <Icon name="i-mdi-web" class="" />
          {{
            currentPrismaUser.website ?? 'Enter a website'
          }}
        </h4>
      </div>

      <UButton size="xl" label="Log out" color="primary" variant="solid" block @click="logout" class="py-5" />
    </div>
    <div class="" v-else>There is no profile please log in</div>

    <div class="">
      {{ currentPrismaUser }}
    </div>

  </div>
</template>
<script setup lang="ts">
import { icons } from '@iconify-json/circle-flags';

import { useformStore } from '~/stores/formStore';
import { useShelterStore } from '~/stores/ShelterStore';
import { useClientStore } from '~/stores/ClientStore';
import countryCodes from 'country-codes-list';

import countries from 'i18n-iso-countries';

import en from 'i18n-iso-countries/langs/en.json';
countries.registerLocale(en);
const user = useSupabaseUser();

const form = reactive({
  phone: user.user_metadata?.phone,
  address: '',
  website: '',
})
const editable = ref(false)
const state = reactive({
  currentPrismaUser: reactive({
    image: ""
  })
  // ...
},
);

const { currentPrismaUser } = toRefs(state);
const handleFieldUpdate = async () => {

  try {
    console.log(currentPrismaUser.value.id)
    // First, try to create the client
    const data = await $fetch('/api/updateUser', {
      method: 'PATCH',
      body: {
        isShelter: user.value.user_metadata?.isShelter,
        id: currentPrismaUser.value.id,
        address: form.address,
      }
    });
    if (!data) {
      throw new Error('Error creating client')
    }
    editable.value = false
    await getCurrentUser()
  }
  catch (error) {
    console.log(error);
  }


}
const clientStore = useClientStore();
const shelterStore = useShelterStore();
const { handleFileUpload, deleteImage } = useformStore();

// onMounted(async () => {
//   if (user.value.user_metadata?.isShelter) {
//     currentPrismaUser.value = await getCurrentUser();
//     shelterStore.setShelter(currentPrismaUser.value)
//   } else if (user.value.user_metadata?.isShelter === false) {
//     currentPrismaUser.value = await getCurrentUser();
//     clientStore.setClient(currentPrismaUser.value)
//   }
// })
const getCurrentUser = async () => {
  if (user.value.user_metadata?.isShelter) {
    const { data } = await useFetch(`/api/getId?email=${user.value.email}&isShelter=true`)
    currentPrismaUser.value = data
  } else if (user.value.user_metadata?.isShelter === false) {
    const { data } = await useFetch(`/api/getId?email=${user.value.email}`)
    currentPrismaUser.value = data
  }

}

onBeforeMount(async () => {
  await getCurrentUser()
});




const handleImageDelete = async () => {

  await deleteImage(0, 'avatars', user.value.user_metadata?.name)

  try {
    console.log(currentPrismaUser.value.id)
    // First, try to create the client
    const data = await $fetch('/api/updateUser', {
      method: 'PATCH',
      body: {
        isShelter: user.value.user_metadata?.isShelter,
        id: currentPrismaUser.value.id,
        image: ''
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


const handleUpload = async (event) => {

  await handleFileUpload(event, 'avatars', user.value.user_metadata?.name)

  try {
    // First, try to create the client
    const data = await $fetch('/api/updateUser', {
      method: 'PATCH',
      body: {
        isShelter: user.value.user_metadata?.isShelter,
        id: currentPrismaUser.value.id,
        image: 'https://selsrqgtbifccztqjvag.supabase.co/storage/v1/object/public/avatars/avatars/' + user.value.user_metadata?.name + '0'
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
