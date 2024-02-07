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
        <h3 class="text-Heading3sm text-center dark:text-white text-black font-semibold">
          {{
            user.user_metadata?.name
          }}
          <Icon :name="convertCountryToIcon(user.user_metadata?.country)" class="" />
        </h3>
        <div v-if="!loading">
          <ProfileInputEditableHeading :modelValue="currentPrismaUser?.phone"
            @update:modelValue="value => handleFieldUpdate('phone', value)" :phone="true" />
          <ProfileInputEditableHeading :modelValue="currentPrismaUser?.address"
            @update:modelValue="value => handleFieldUpdate('address', value)" :address="true" />
          <ProfileInputEditableHeading :modelValue="currentPrismaUser?.website" :website="true"
            @update:modelValue="value => handleFieldUpdate('website', value)" />
        </div>
        <div v-else>Loading...</div>
      </div>

      <div class="px-5">

        <nuxt-link v-if="user?.user_metadata?.isShelter" :to="itemsPets?.pets.length ? '/my-pets' : ''"
          class="registered-pets-card justify-center flex bg-contSecond dark:bg-darkContSecond py-5 gap-4 items-center">
          <UAvatarGroup size="sm" :max="4" :ui="{
            'ring': 'ring-0',
            'wrapper': 'bg-darkContSecond',
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
            'wrapper': 'bg-darkContSecond',
          }">
            <UAvatar class="override-this-shit" :src="pet.images[0]" :alt="pet?.name" v-for="pet in itemsPets?.pets" />
          </UAvatarGroup>

          <span>
            {{ itemsPets?.pets.length ? 'Your applications' : 'No applications yet' }}
            <Icon name="i-mdi-chevron-right" class=" text-black dark:text-white" />
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
  console.log(user.value?.user_metadata, 'IS shelter log', currentPrismaUser.value)
  if (user.value.user_metadata?.isShelter) {
    const { data, error } = await useFetch(`/api/id?email=${user.value.email}&isShelter=true`)
    if (error.value) {
      console.error(error.value?.message)
    }
    console.log(data.value)
    if (data.value) {
      currentPrismaUser.value = data.value
      loading.value = false
    }


  } else if (!user.value.user_metadata?.isShelter) {
    const { data, error } = await useFetch(`/api/id?email=${user.value.email}`)
    if (error.value) {
      console.error(error.value?.message)
    }
    if (data.value) {
      currentPrismaUser.value = data.value
      loading.value = false
    }
  }

}

if (user.value?.user_metadata) {
  await getCurrentUser()
}






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



const publicUrl = currentPrismaUser.value?.image ? ref(currentPrismaUser.value?.image) : ref(null)
const handleImageDelete = async () => {

  await deleteImage(0, 'avatars', user.value.user_metadata?.name, publicUrl.value)

  try {
    console.log(currentPrismaUser.value.id, publicUrl.value)
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


const handleUpload = async (event) => {

  publicUrl.value = await handleFileUpload(event, 'avatars', user.value.user_metadata?.name)
  console.log(publicUrl.value)

  try {
    // First, try to create the client
    const data = await $fetch('/api/user', {
      method: 'PATCH',
      body: {
        isShelter: user.value.user_metadata?.isShelter,
        id: currentPrismaUser.value.id,
        image: publicUrl.value,
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