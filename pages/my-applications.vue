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
          <th>Shelter</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pet in data?.tableData" :key="pet.id">
          <td>
            <nuxt-img
              :src="'https://selsrqgtbifccztqjvag.supabase.co/storage/v1/object/public/animalgod-files/animalgod-files/' + pet?.petName + '0'"
              class="rounded-full object-cover h-12 w-12"></nuxt-img>
            {{ pet.petName }}

            <nuxt-link :to="'/meet-them/' + pet?.petName">See profile</nuxt-link>
          </td>
          <td>{{ pet.appointmentState === 'IN_PROCESS' ? 'In process' :
            pet.appointmentState === 'ACCEPTED' ? 'Accepted' :
              pet.appointmentState === 'DENIED' ? 'Denied' : 'Canceled'

          }}</td>
          <td>{{ formatDate(pet.appointmentCreatedAt) }}</td>
          <td>
            <nuxt-img :src="pet.shelterImage" class="w-16 h-16 rounded-full"></nuxt-img>
            <span class="font-semibold "> {{ pet.shelterName }} </span>

          </td>

          <td>
            <div class="flex flex-col gap-2 items-start justify-start">
              <span class="flex gap-2 items-center">
                <Icon name="material-symbols:call-sharp"></Icon>
                {{ pet.shelterContact.phone }}
              </span>
              <span class="flex gap-2 items-center">
                <Icon name="material-symbols:alternate-email"></Icon>
                {{ pet.shelterContact.email }}
              </span>
            </div>
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

const { data, error, pending } = useLazyFetch(`/api/client`)
</script>

<style></style>