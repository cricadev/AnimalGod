import { defineStore, acceptHMRUpdate } from "pinia";
import type { Pet } from "@/types"


export const useShelterStore = defineStore("ShelterStore", () => {
  const shelters = ref([]);

  const fetchShelter = async (id) => {
    try {
      const data = await $fetch(`/api/shelter?userId=${id}`);
      if (!data) {
        const noDataError = new Error('No data returned from server');
        console.error('Error fetching shelter:', noDataError);
        throw noDataError;
      }

      return data;
    } catch (error) {
      console.error('Error in fetchShelter:', error);
      throw error;
    }
  }




  return {
    shelters,
    fetchShelter,
  };
});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useShelterStore, import.meta.hot)
  );
}
