import { defineStore, acceptHMRUpdate } from "pinia";
import { Pet, Shelter } from "~/types";
import { useShelterStore } from "./ShelterStore";
export const usePetStore = defineStore("PetStore", () => {
  const pet = ref<Pet | null>(null);
  const shelter = ref<Shelter | null>(null);
  const relatedPets = ref<Pet[]>([]);
  const { shelters } = useShelterStore();
  async function fetchero(slug: string) {
    const data = await $fetch<Pet>(`/api/${slug}`);
    if (!data) {
      const noDataError = new Error('No data returned from server');
      console.error('Error fetching pet:', noDataError);
      throw noDataError;
    }
    pet.value = data;
  }

  function setShelter(shelterId) {
    if (pet.value) {
      shelter.value = shelters.find(shelter => shelter.id === shelterId);
    }
  }

  return {
    fetchero,
    pet,
    setShelter,
    shelter
  }
});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(usePetStore, import.meta.hot)
  );
}
