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
        <tr v-for="pet in data" :key="pet.id">
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
          <td>{{ pet.appointments ?? 'No applicants' }}</td>

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
const { data, error, pending } = useLazyFetch(`/api/get-all-by-shelter`)
</script>

<style></style>