<template>
  <div class="">
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
        <h3 class="text-Heading3sm text-center text-white font-semibold">
          {{
            user.user_metadata?.name
          }}
          <Icon :name="convertCountryToIcon(user.user_metadata?.country)" class="" />
        </h3>
        <div class="" v-if="loading"> loading....</div>
        <div class="" v-else>
          <ProfileInputEditableHeading :modelValue="currentPrismaUser.phone"
            @update:modelValue="value => handleFieldUpdate('phone', value)" :phone="true" />
          <ProfileInputEditableHeading :modelValue="currentPrismaUser.address"
            @update:modelValue="value => handleFieldUpdate('address', value)" :address="true" />
          <ProfileInputEditableHeading :modelValue="currentPrismaUser.website" :website="true"
            @update:modelValue="value => handleFieldUpdate('website', value)" />
        </div>
      </div>

      <div class="px-5">

        <nuxt-link v-if="user?.user_metadata?.isShelter" to="/registered-pets"
          class="registered-pets-card justify-center flex bg-darkContSecond py-5 gap-4 items-center">
          <UAvatarGroup size="sm" :max="4" :ui="{
            'ring': 'ring-0',
            'wrapper': 'bg-darkContSecond',
          }">
            <UAvatar class="override-this-shit"
              :src="'https://selsrqgtbifccztqjvag.supabase.co/storage/v1/object/public/animalgod-files/animalgod-files/' + pet?.name + '0'"
              :alt="pet?.name" v-for="pet in itemsPets?.pets" />
          </UAvatarGroup>

          <span>

            Your registered pets

            <Icon name="i-mdi-chevron-right" class="text-white" />
          </span>

        </nuxt-link>
        <nuxt-link v-else to="/my-applications"
          class="registered-pets-card justify-center flex bg-darkContSecond py-5 gap-4 items-center">
          <UAvatarGroup size="sm" :max="4" :ui="{
            'ring': 'ring-0',
            'wrapper': 'bg-darkContSecond',
          }">
            <UAvatar class="override-this-shit"
              :src="'https://selsrqgtbifccztqjvag.supabase.co/storage/v1/object/public/animalgod-files/animalgod-files/' + pet?.name + '0'"
              :alt="pet?.name" v-for="pet in itemsPets?.pets" />
          </UAvatarGroup>

          <span>
            Your applications
            <Icon name="i-mdi-chevron-right" class="text-white" />
          </span>


        </nuxt-link>
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
import { icons } from '@iconify-json/circle-flags';

import { useformStore } from '~/stores/formStore';
import { useShelterStore } from '~/stores/ShelterStore';
import { useClientStore } from '~/stores/ClientStore';
import countryCodes from 'country-codes-list';

import countries from 'i18n-iso-countries';

import en from 'i18n-iso-countries/langs/en.json';
countries.registerLocale(en);
const user = useSupabaseUser();

const itemsPets = ref(null)
const errorPets = ref(null)
const PendingPets = ref(null)
if (user.value?.user_metadata.isShelter) {
  const { data, error, pending } = useLazyFetch(`/api/shelter`)

  if (data) {
    itemsPets.value = data.value
  }

  if (error) {
    errorPets.value = error.value
  }

  if (pending) {
    PendingPets.value = pending.value
  }

} else {
  const { data, error, pending } = useLazyFetch(`/api/client`)

  if (data) {
    itemsPets.value = data.value
  }

  if (error) {
    errorPets.value = error.value
  }

  if (pending) {
    PendingPets.value = pending.value
  }


}
const state = reactive({
  currentPrismaUser: reactive({
    image: "",
    phone: "",
  }),
  loading: true
  // ...
},
);

const { currentPrismaUser, loading } = toRefs(state);


const getCurrentUser = async () => {
  loading.value = true
  if (user.value.user_metadata?.isShelter) {
    const { data } = await useFetch(`/api/id?email=${user.value.email}&isShelter=true`)
    currentPrismaUser.value = data
  } else if (!user.value.user_metadata?.isShelter) {
    const { data } = await useFetch(`/api/id?email=${user.value.email}`)
    currentPrismaUser.value = data
  }

  loading.value = false
}

onBeforeMount(async () => {
  await getCurrentUser()
});




const handleFieldUpdate = async (field, newValue) => {
  try {
    console.log(currentPrismaUser.value.id)
    console.log(field, newValue)
    // First, try to create the client
    const data = await $fetch('/api/user', {
      method: 'PATCH',
      body: {
        isShelter: user.value.user_metadata?.isShelter,
        id: currentPrismaUser.value.id,
        [field]: newValue, // Update the specified field with the new value
      }
    });
    if (!data) {
      throw new Error('Error creating client')
    }
    if (user.value.user_metadata) {
      user.value.user_metadata[field] = newValue;
    }
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




const handleImageDelete = async () => {

  await deleteImage(0, 'avatars', user.value.user_metadata?.name)

  try {
    console.log(currentPrismaUser.value.id)
    // First, try to create the client
    const data = await $fetch('/api/user', {
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
    const data = await $fetch('/api/user', {
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
<style scoped></style>