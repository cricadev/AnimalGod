import { defineStore, acceptHMRUpdate } from "pinia";
import type { Pet } from "@/types"

export const useClientStore = defineStore("ClientStore", () => {
  const clients = ref([])




  const fetchClient = async (id) => {
    try {
      const data = await $fetch(`/api/client?userId=${id}`);
      if (!data) {
        const noDataError = new Error('No data returned from server');
        console.error('Error fetching client:', noDataError);
        throw noDataError;
      }

      return data;
    } catch (error) {
      console.error('Error in fetchclient:', error);
      throw error;
    }
  }


  return {
    clients,
    fetchClient,

  };
});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useClientStore, import.meta.hot)
  );
}
