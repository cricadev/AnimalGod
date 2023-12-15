<template>
  <div v-if="pending">

    loading...
  </div>
  <div v-else-if="error">
    {{ error }}
  </div>


  <div class="" v-else>
    <div class="">
      <h2 class="header-table">Your registered pets</h2>
    </div>
    <div class="overflow-scroll">
      <table class="table">
        <thead class="table-head">
          <tr class="table-row">
            <th class="table-header">Pet</th>
            <th>State</th>
            <th>Date</th>
            <th>Applicants</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody class="table-body">
          <tr v-for="pet in  data?.pets " :key="pet.id" class="table-data">
            <td class="table-data-cell">
              <nuxt-img :src="pet.images[0]" class="table-data-cell-img"></nuxt-img>
              <span class="table-data-cell-name"> {{ pet.name }}</span>
              <nuxt-link :to="'/meet-them/' + pet?.name" class="table-data-cell-link">See
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
                  <span class="font-semibold "> {{ pet.appointments[0].client.name }} </span></nuxt-link>
              </div>
              <div class="flex flex-col gap-2" v-else-if="pet.appointments.length > 1">
                <UAvatarGroup size="sm" :max="4" :ui="{
                  'ring': 'ring-0',
                  'wrapper': 'bg-darkContSecond',
                }">
                  <UAvatar v-for="p in pet.appointments" v-if="p?.client.image" class="override-this-shit"
                    :src="p?.client.image" :alt="p?.client.name" />

                  <UAvatar v-for="p in pet.appointments" v-else class="override-this-shit" :alt="p?.client.name" />
                </UAvatarGroup>
                <div class="">
                  <nuxt-link :to="'/applicants/' + pet.id">See Applicants</nuxt-link>
                </div>
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
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
  const year = date.getFullYear().toString().substr(-2);
  return `${day}/${month}/${year}`;
}

const { data, error, pending } = useLazyFetch(`/api/shelter`)
</script>

<style></style>