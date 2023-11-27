import { defineStore, acceptHMRUpdate } from "pinia";
import type { Pet } from "@/types"
import { PrismaClient } from '@prisma/client';


export const useShelterStore = defineStore("ShelterStore", () => {
  const shelters = ref([]);
  const prisma = new PrismaClient();

  const findShelterId = async (email) => {
    const shelter = await prisma.shelter.findFirst({
      where: {
        email: email
      },
      select: {
        id: true
      }
    });

    if (!shelter) {
      throw new Error('No shelter found with this email');
    }

    return shelter.id;
  }

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
    findShelterId
  };
});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useShelterStore, import.meta.hot)
  );
}
