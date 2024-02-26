import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserSessionStore = defineStore("UserSessionStore", () => {
  const user = useSupabaseUser();
  const session = ref(null);
  const fetchResult = ref(null);
  const itemsPets = ref(null);
  const loadingPets = ref(false);

  const fetchUserData = async (newUser) => {
    try {
      if (newUser) {
        if (newUser.user_metadata.isShelter) {
          loadingPets.value = true

          fetchResult.value = await $fetch(`/api/shelter`);

        } else {
          loadingPets.value = true

          fetchResult.value = await $fetch(`/api/client`);

        }

        if (!fetchResult.value) {
          throw new Error('Error creating client')
        }
        itemsPets.value = fetchResult.value
        loadingPets.value = false

      }
    } catch (error) {
      throw createError({
        fatal: true,
        statusCode: 500,
        statusMessage: 'Error fetching user data'
      });
    }


  };
  const userWatcher = watch(user, fetchUserData, { immediate: true, deep: true });


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
    try {
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

    } catch (error) {
      throw createError({
        fatal: true,
        statusCode: 500,
        statusMessage: 'Error getting current user'
      });
    }

  }

  watch(user, async (newUser) => {
    try {
      if (newUser) {
        await getCurrentUser()
        fetchUserData(user.value);
      }
    } catch (error) {
      throw createError({
        fatal: true,
        statusCode: 500,
        statusMessage: 'Error watching user'
      });
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
      throw createError({
        fatal: true,
        statusCode: 500,
        statusMessage: 'Error updating field'
      });
    }
  }
  onUnmounted(() => {

    userWatcher();


  });
  return { session, currentPrismaUser, handleFieldUpdate, itemsPets, loadingPets, user, getCurrentUser, fetchUserData, }
});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useUserSessionStore, import.meta.hot)
  );
}
