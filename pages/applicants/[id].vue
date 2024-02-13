<template>
  <div v-if="pending">

    loading...
  </div>
  <div v-else-if="error">
    {{ error }}
  </div>


  <div v-else>
    <!-- <nuxt-img :src="data?.pets.">

    </nuxt-img> -->
    <div class="px-32 flex flex-col gap-2 mb-16  mt-12 justify-center items-center">
      <nuxt-img :src="petBasedOnId?.images[0]" class="w-16 rounded-full object-cover h-16">

      </nuxt-img>
      <h2 class="text-Heading2sm font-bold leading-none">
        {{ petBasedOnId.name }}
      </h2>
      <span class="leading-none text-Captionlg text-contInactive font-semibold">
        Applicants ({{ petBasedOnId?.appointments.length }})
      </span>
    </div>
    <div class="overflow-scroll">
      <table class="table">
        <thead class="table-head">
          <tr class="table-row">
            <th scope="col" class="table-header">Applicant</th>
            <th scope="col">State</th>
            <th scope="col">Date</th>
            <th scope="col">Info</th>
          </tr>
        </thead>
        <tbody class="table-body">
          <tr scope="row" class="table-data" v-for="appointment in petBasedOnId?.appointments" :key="appointment.id">
            <td class="table-data-cell">
              <div class="">
                <nuxt-img v-if="appointment.client.image" :src="appointment.client.image"
                  class="w-16 h-16 rounded-full"></nuxt-img>
                <Icon v-else name="i-mdi-account" class="w-16 h-16 rounded-full" />

                <span class="font-semibold "> {{ appointment.client.name }} </span>
              </div>
            </td>
            <td>
              {{ appointment.acceptedForm }}
            </td>
            <td>{{ formatDate(appointment.createdAt) }}</td>
            <td>
              <nuxt-link :to="`/applicant-form/${appointment.id}`">See Form Answers</nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
  const year = date.getFullYear().toString().substr(-2);
  return `${day}/${month}/${year}`;
}

const { data, error, pending } = useLazyFetch(`/api/shelter`)
const petsApplicants = computed(() => {
  return data.value?.pets.filter(pet => pet.appointments && pet.appointments.length > 0)
    .map(pet => ({
      ...pet,
      appointments: pet.appointments
    }));
})
// const allAppointments = computed(() => {
//   return petsApplicants.value.flatMap(pet => pet.appointments);
// });
const petBasedOnId = computed(() => {
  return petsApplicants.value.find(pet => pet.id == route.params.id);
})
</script>

<style></style>