<template>
  <div v-if="pending">

    loading...
  </div>
  <div v-else-if="error">
    {{ error }}
  </div>


  <div class="max-w-4xl 2xl:max-w-6xl mx-auto px-8" v-else>
    <!-- <nuxt-img :src="data?.pets.">

    </nuxt-img> -->
    <div v-if="appointmentBasedOnId" class=" flex flex-col gap-2 mb-16  mt-12 justify-center items-center">
      <div class="">
        <nuxt-img v-if="appointmentBasedOnId.client.image" :src="appointmentBasedOnId.client.image"
          class="w-16 rounded-full object-cover h-16">
        </nuxt-img>
        <div class="w-16 rounded-full object-cover h-16" v-else>
          {{ nameToInitials(appointmentBasedOnId.client?.name) }}

        </div>
      </div>
      <h2 class="text-Heading2sm font-bold leading-none text-center">
        {{ appointmentBasedOnId.client.name }}
      </h2>
      <span class="leading-none text-Captionlg text-contInactive font-semibold">
        {{ appointmentBasedOnId.client.phone }}
      </span>
      <span class="leading-none text-Captionlg text-contInactive font-semibold">
        {{ appointmentBasedOnId.client.email }}
      </span>
      <div class="flex gap-3">
        <UButton color="primary" label="Approve"></UButton>
        <UButton color="secondary" label="Deny"></UButton>
      </div>
    </div>
    <div class="" v-if="appointmentBasedOnId">
      <h3 class="text-Heading3sm
      font-bold mb-16">Answers</h3>
      <div class="flex flex-col gap-4">

        <div class="flex flex-col font-bold">

          Who do you live with?
          <span class="text-contInactive"> Option:{{ appointmentBasedOnId.liveWith }}
            <br>
            {{ appointmentBasedOnId.liveWithDescription }}
          </span>


        </div>
        <div class="flex flex-col font-bold">

          Where do you live?
          <span class="text-contInactive">

            Option:{{ appointmentBasedOnId.liveIn ? 'House' : 'Apartment' }}
          </span>


        </div>
        <div class="flex flex-col font-bold">

          Do you own or rent your home?
          <span class="text-contInactive">

            Option:{{ appointmentBasedOnId.isRenting ? 'Rent' : 'Own' }}
            <br>
            <span v-if="appointmentBasedOnId.isRenting">

              Option:{{ appointmentBasedOnId.rentAcceptance ? 'Accept Animals' : 'Dont accept animals' }}
            </span>
          </span>


        </div>
        <div v-for="opt in appointmentBasedOnId.qAndA" class="flex flex-col font-bold">

          {{ opt.label }}
          <span class="text-contInactive">


            Option: {{ opt.answer }}
          </span>


        </div>
        <div class="flex flex-col font-bold">

          Why do you want a pet?
          <span class="text-contInactive">

            {{ appointmentBasedOnId.whyMessage }}
          </span>


        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const clientRef = ref(null)
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
const appointmentBasedOnId = computed(() => {
  let appointment;
  for (let pet of petsApplicants.value) {
    appointment = pet.appointments.find(appointment => appointment.id == route.params.id);
    if (appointment) {
      break;
    }
  }
  return {
    ...appointment,
    client: appointment?.client
  };
});
const nameToInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2);
}
</script>

<style></style>