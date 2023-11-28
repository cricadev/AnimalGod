<template>
  <div class="">
    <div class="text-darkContThird" v-if="user">
      <div class="user-image-upload flex justify-center items-center">

        <div class="relative">
          <div class="" v-if="!isFile">
            <Icon name="i-mdi-account" class="w-16 h-16 rounded-full" />
            <label for="imageInput"
              class="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white">
              <Icon name="i-mdi-pencil" class="" />
              <input type="file" id="imageInput" class="hidden" @change="(event) => handleUpload(event)" accept="image/*">
            </label>
          </div>

          <div class="" v-else>
            <nuxt-img :src="currentPrismaUser.image" class="w-16 h-16 rounded-full object-cover" />

            <button
              class="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white"
              @click="handleImageDelete">
              <Icon name="i-mdi-trash-can" class="" />
            </button>


          </div>

        </div>

      </div>
      <h3 class="text-Heading3sm">
        Email: {{ user.user_metadata?.email ?? user.email }}
      </h3>
      <h3 class="text-Heading3sm">
        Name:
        {{
          user.user_metadata?.name ??
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
      <h4 class="text-Heading4sm">
        Is Shelter: {{ user.user_metadata?.isShelter ? "Yes" : "No" }}
      </h4>

      <UButton size="xl" label="Log out" color="primary" variant="solid" block @click="logout" class="py-5" />
    </div>
    <div class="" v-else>There is no profile please log in</div>

    <div class="">
      {{ currentPrismaUser }}
    </div>

  </div>
</template>
<script setup>
import { useformStore } from '~/stores/formStore';
import { useShelterStore } from '~/stores/ShelterStore';
import { useClientStore } from '~/stores/ClientStore';


const user = useSupabaseUser();
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
    return data
  } else if (user.value.user_metadata?.isShelter === false) {
    const { data } = await useFetch(`/api/getId?email=${user.value.email}`)
    return data
  }
}



const currentPrismaUser = await getCurrentUser();

const isFile = computed(() => {
  return currentPrismaUser.value.image !== '' && currentPrismaUser.value.image !== null && currentPrismaUser.value.image !== undefined
})

console.log(isFile.value)

watch(() => currentPrismaUser.value.image, (newVal) => {
  if (newVal === '' || newVal === null || newVal === undefined) {
    isFile.value = false;
    console.log('isFile is false');
  } else {
    isFile.value = true;
    console.log('isFile is true');
  }
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


  }
  catch (error) {
    console.log(error);
  }
  currentPrismaUser.value = await getCurrentUser();


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


  }
  catch (error) {
    console.log(error);
  }
  currentPrismaUser.value = await getCurrentUser();




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



const capitalizeFirstLetter = (s) =>
  s
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
</script>
