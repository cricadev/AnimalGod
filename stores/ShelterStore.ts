import { defineStore, acceptHMRUpdate } from "pinia";
import type { Pet } from "@/types"


export const useShelterStore = defineStore("ShelterStore", () => {


  const shelters = ref<Shelter[]>([])

  const fetchShelters = async () => {

    try {
      const data = await $fetch(`/api/shelters`);
      if (!data) {
        const noDataError = new Error('No data returned from server');
        console.error('Error fetching shelter:', noDataError);
        throw noDataError;
      }

      shelters.value = data;
    } catch (error) {
      console.error('Error in fetchShelter:', error);
      throw error;
    }





  }
  fetchShelters()

  const findShelterById = (id: number) => {
    return shelters.value.find(shelter => shelter.id === id)
  }






  return {
    shelters,
    findShelterById
  };
});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useShelterStore, import.meta.hot)
  );
}
