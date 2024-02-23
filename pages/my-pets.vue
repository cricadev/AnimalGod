<template>
  <div v-if="pending">

    <Loader />

  </div>
  <div v-else-if="error">
    {{ error }}
  </div>


  <div class="" v-else>
    <div class="">
      <h2 class="header-table">Your registered pets</h2>
    </div>
    <div class="overflow-x-auto  px-2 max-w-4xl 2xl:max-w-6xl mx-auto">
      <table class="table">
        <thead class="table-head">
          <tr class="table-row">
            <th>Pet</th>
            <th scope="col" class="table-header">State</th>
            <th scope="col">Date</th>
            <th scope="col" v-if="hasAppointments">Applicants</th>
            <th scope="col">Info</th>
          </tr>


        </thead>
        <tbody class="table-body">
          <tr v-for="pet in  data?.pets " :key="pet.id" class="table-data">
            <td class="table-data-cell">
              <nuxt-img v-if="pet.images[0]" :src="pet.images[0]" class="table-data-cell-img"></nuxt-img>
              <span class="table-data-cell-name"> {{ pet.name }}</span>
              <nuxt-link :to="'/meet-them/' + pet?.id" class="table-data-cell-link">See
                profile</nuxt-link>
            </td>
            <td>{{ pet.isAdopted ? 'Adopted' : 'Registered'
            }}</td>
            <td>{{ formatDate(pet.createdAt) }}</td>
            <td>
              <div class="" v-if="pet.appointments.length === 1">
                <nuxt-link :to="'/applicants/' + pet.id">
                  <nuxt-img v-if="pet.appointments[0].client.image" :src="pet.appointments[0].client.image"
                    class="w-16 h-16 rounded-full"></nuxt-img>
                  <div class="w-16 h-16 rounded-full flex items-center  justify-center" v-else>
                    {{ nameToInitials(pet.appointments[0].client.name) }}
                  </div>

                </nuxt-link>
              </div>
              <div class="flex flex-col gap-2" v-else-if="pet.appointments.length > 1">
                <UAvatarGroup size="sm" :max="3" :ui="{
                  'ring': 'ring-0',
                  'wrapper': 'dark:bg-darkContSecond bg-contSecond',
                }">
                  <UAvatar v-for="p in pet.appointments" class="override-this-shit" :src="p?.client.image ?? ''"
                    :alt="p?.client.name" />

                </UAvatarGroup>
                <div class="">
                  <nuxt-link :to="'/applicants/' + pet.id">See Applicants</nuxt-link>
                </div>
              </div>
              <div class="text-contInactive" v-else>
                No applicants
              </div>
            </td>
            <td>
              <nuxt-link :to="`/pet?id=${pet.id}`">Edit {{ pet.name }} Profile</nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "My pets",
  titleTemplate: '%s | AnimalGod',
  meta: [
    {
      name: "description",
      content: "Table with information of your pets",
    },
  ],
});
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
  const year = date.getFullYear().toString().substr(-2);
  return `${day}/${month}/${year}`;
}


const { data, error, pending } = useLazyFetch(`/api/shelter`)
const hasAppointments = computed(() => data.value.pets.some(pet => pet.appointments.length > 0));

const nameToInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2);
}
</script>

<style></style>