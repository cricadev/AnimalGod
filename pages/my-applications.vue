<template>
  <div v-if="pending">
    <Loader />

  </div>
  <div v-else-if="error">
    {{ error }}
  </div>


  <div v-else>
    <div class="">
      <h2 class="header-table">Your applications</h2>
    </div>
    <div class="overflow-x-auto  px-2 max-w-4xl 2xl:max-w-6xl mx-auto rounded-lg">
      <table class="table rounded-lg">
        <thead class="table-head ">
          <tr class="table-row ">
            <th class="table-header ">Pet</th>
            <th>State</th>
            <th>Date</th>
            <th>Shelter</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody class="table-body">
          <tr class="table-data" v-for="pet in data?.tableData" :key="pet.id">
            <td class="table-data-cell">

              <nuxt-img v-if="pet.petImages[0]" :src="pet.petImages[0]" class="table-data-cell-img"></nuxt-img>
              <span class="table-data-cell-name">{{ pet.petName }}</span>
              <nuxt-link class="table-data-cell-link" :to="'/meet-them/' + pet.petId">See profile</nuxt-link>
            </td>
            <td :class="[
              pet.appointmentState === 'IN_PROCESS' ? 'text-yellow-300' :
                pet.appointmentState === 'ACCEPTED' ? 'text-green-500' :
                  pet.appointmentState === 'DENIED' ? 'text-red-500' : ''

            ]" v-html="pet.appointmentState === 'IN_PROCESS' ? 'In process' :
  pet.appointmentState === 'ACCEPTED' ? 'Approved <br>the shelter will contact you soon' :
    pet.appointmentState === 'DENIED' ? 'Denied' : ''">
            </td>
            <td>{{ formatDate(pet.appointmentCreatedAt) }}</td>
            <td>
              <nuxt-img v-if="pet.shelterImage" :src="pet.shelterImage" class="mx-auto w-16 h-16 rounded-full"></nuxt-img>
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
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "My Applications",
  titleTemplate: '%s | AnimalGod',
  meta: [
    {
      name: "description",
      content:
        "Here you can see the status of your applications to adopt a pet.",
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

const { data, error, pending } = await useLazyFetch(`/api/client`)
if (error.value) {
  throw createError({
    fatal: true,
    statusCode: 500,
    statusMessage: 'Something went wrong with the server, go home and try again.'
  })
}
</script>

<style></style>