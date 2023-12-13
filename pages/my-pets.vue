<template>
  <div v-if="pending">

    loading...
  </div>
  <div v-else-if="error">
    {{ error }}
  </div>


  <div v-else>
    <table>
      <thead>
        <tr>
          <th>Pet</th>
          <th>State</th>
          <th>Date</th>
          <th>Applicants</th>
          <th>Info</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pet in  data?.pets " :key="pet.id">
          <td>
            <nuxt-img
              :src="'https://selsrqgtbifccztqjvag.supabase.co/storage/v1/object/public/animalgod-files/animalgod-files/' + pet?.name + '0'"
              class="rounded-full object-cover h-12 w-12"></nuxt-img>
            {{ pet.name }}

            <nuxt-link :to="'/meet-them/' + pet?.name">See profile</nuxt-link>
          </td>
          <td>{{ pet.isAdopted ? 'Adopted' : 'Registered'
          }}</td>
          <td>{{ formatDate(pet.createdAt) }}</td>
          <td>
            <div class="" v-if="pet.appointments.length === 1">
              <nuxt-link :to="'/applicants/' + pet.id">
                <nuxt-img :src="pet.appointments[0].client.image" class="w-16 h-16 rounded-full"></nuxt-img>
                <span class="font-semibold "> {{ pet.appointments[0].client.name }} </span></nuxt-link>



            </div>
            <div class="flex flex-col gap-2" v-else-if="pet.appointments.length > 1">

              <UAvatarGroup size="sm" :max="4" :ui="{
                'ring': 'ring-0',
                'wrapper': 'bg-darkContSecond',
              }">
                <UAvatar class="override-this-shit" :src="p?.client.image" :alt="p?.client.name"
                  v-for="p in pet.appointments" />
              </UAvatarGroup>
              <div class="">

                <nuxt-link :to="'/applicants/' + pet.id">See Applicants</nuxt-link>

              </div>
            </div>
          </td>

          <td>
            <nuxt-link :to="`/pet/${pet.id}`">Edit {{ pet.name }} Profile</nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
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