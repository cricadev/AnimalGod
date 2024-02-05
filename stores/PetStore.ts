import { defineStore, acceptHMRUpdate } from "pinia";
import { Pet, Shelter } from "~/types";
import { useShelterStore } from "./ShelterStore";
export const usePetStore = defineStore("PetStore", () => {
  const pet = ref<Pet | null>(null);
  const shelter = ref<Shelter | null>(null);
  const relatedPets = ref<Pet[]>([]);
  const { shelters } = useShelterStore();
  async function fetchPet(slug: string) {
    const data = await $fetch<Pet>(`/api/${slug}`);
    if (!data) {
      const noDataError = new Error('No data returned from server');
      console.error('Error fetching pet:', noDataError);
      throw noDataError;
    }
    pet.value = data;
  }


  async function fetchRelatedPets() {
    const data = await $fetch<Pet[]>(`/api/pets?limit=2&offset=0&id=${pet.value?.id}`);
    if (!data) {
      const noDataError = new Error('No data returned from server');
      console.error('Error fetching pet:', noDataError);
      throw noDataError;
    }
    relatedPets.value = data;
  }

  function setShelter(shelterId) {
    shelter.value = shelters.find(shelter => shelter.id === shelterId);

  }

  function resetPet() {
    pet.value = null;
    shelter.value = null;
    relatedPets.value = [];
  }

  return {
    fetchPet,
    pet,
    setShelter,
    shelter,
    resetPet,
    relatedPets,
    fetchRelatedPets,
  }
});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(usePetStore, import.meta.hot)
  );
}
