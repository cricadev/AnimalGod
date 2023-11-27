<template>
  <div class="">
    <div class="text-darkContThird" v-if="user">
      <div class="user-image-upload flex justify-center items-center">

        <div class="relative">
          <Icon name="i-mdi-account" class="w-16 h-16 rounded-full" v-if="!file" />
          <nuxt-img
            :src="'https://selsrqgtbifccztqjvag.supabase.co/storage/v1/object/public/avatars/avatars/' + user.user_metadata?.name + '0'"
            class="w-16 h-16 rounded-full" v-else />
          <label for="imageInput"
            class="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white">
            <Icon name="i-mdi-pencil" class="p" />
            <input type="file" id="imageInput" class="hidden"
              @change="(event) => handleFileUpload(event, 'avatars', user.user_metadata?.name)" accept="image/*">
          </label>

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
      {{ id }}
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

const { handleFileUpload } = useformStore();

const getId = async () => {
  if (user.value.user_metadata?.isShelter) {
    const id = await findShelterId(user.value.user_metadata?.email);
    return id;
  } else if (user.value.user_metadata?.isShelter === false) {
    const id = await findClientId(user.value.user_metadata?.email);
    return id;
  }
}
const id = await getId();
console.log(id);



const file = ref(null);
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
