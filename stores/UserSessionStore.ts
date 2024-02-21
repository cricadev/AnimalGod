import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserSessionStore = defineStore("UserSessionStore", () => {
  const user = useSupabaseUser();
  const session = ref(null);
  const fetchResult = ref(null);
  const itemsPets = ref(null);
  const errorPets = ref(null);
  const PendingPets = ref(null);

  const fetchUserData = async (newUser) => {
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
  };
  const userWatcher = watch(user, fetchUserData, { immediate: true, deep: true });

  onMounted(() => {
    // Call fetchUserData directly when the store is defined
    fetchUserData(user.value);
  })

  const state = reactive({
    currentPrismaUser: reactive({
      id: "",
      name: "",
      email: "",
      address: "",
      website: "",
      image: "",
      phone: "",
    }),
    loading: true
    // ...
  },
  );

  const { currentPrismaUser, loading } = toRefs(state);


  const getCurrentUser = async () => {
    if (user.value.user_metadata?.isShelter) {
      const data = await $fetch(`/api/id?email=${user.value.email}&isShelter=true`)
      if (!data) {
        throw new Error('Error getting user')
      }

      console.log(data)
      currentPrismaUser.value = data
      loading.value = false



    } else if (!user.value.user_metadata?.isShelter) {
      const data = await $fetch(`/api/id?email=${user.value.email}`)
      if (!data) {
        throw new Error('Error getting user')
      }

      console.log(data)
      currentPrismaUser.value = data
      loading.value = false

    }

  }

  watch(user, async (newUser) => {
    if (newUser) {
      await getCurrentUser()
    }
  })


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
  onUnmounted(() => {

    userWatcher();


  });
  return { session, currentPrismaUser, handleFieldUpdate, itemsPets, user, getCurrentUser }
});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useUserSessionStore, import.meta.hot)
  );
}
