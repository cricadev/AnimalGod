<template>
  <div class="overflow-hidden p-5 bg-form">
    <form @submit.prevent="handleFormSubmition"
      class="flex flex-col justify-between h-[80vh] gap-4 w-full bg-Bg relative overflow-hidden rounded-lg">
      <TransitionGroup name="list" class="">
        <FormStepsCounter :currentStep="step" :totalSteps="6" />
        <FormSalutForm v-if="step === 0" @close="nextStep" @next="step++" />
        <FormPetPersonality @update-type="fixAndGoBackTo(6)" :shelter="false" v-if="step === 1"
          v-model:personality="form.liveWith" v-model:personalityDescription="form.liveWithDescription"
          :adjectivesOptions="liveWithOptions" @next="step++" @back="step--" />
        <FormPetTypeSelection @update-type="fixAndGoBackTo(6)" :shelter="false" v-if="step === 2" v-model="form.liveIn"
          @back="step--" @next="step++" />

        <FormReqRent @update-type="fixAndGoBackTo(6)" v-if="step === 3" v-model:isRenting="form.isRenting"
          v-model:rentAcceptance="form.rentAcceptance" @next="step++" @back="step--" />

        <FormPetHealth @update-type="fixAndGoBackTo(6)" :shelter="false" v-if="step === 4"
          v-model:healthConditions="form.qAndA" v-model:healthDescription="form.qAndADescription"
          :healthOptions="qAndAOptions" @next="step++" @back="step--" />

        <FormPetHistory @update-type="fixAndGoBackTo(6)" :shelter="false" v-if="step === 5" v-model="form.whyMessage"
          @next="step++" @back="step--" />

        <FormPetReview @update-pet="handlePetUpdate" :shelter="false" @edit-type="goToAndFix" v-if="step === 6"
          :pet="form" @back="step--" @submit="handlePetRegister" />
        <FormExitFormScreen :shelter="false" @exit-form="handleExitForm" v-if="step === 7" />

      </TransitionGroup>
    </form>

  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useformStore } from '~/stores/formStore';
import { useRefHistory } from '@vueuse/core'
const formStore = useformStore();
const { form } = storeToRefs(formStore);
onUnmounted(() => {
  formStore.resetForm();
})
const isEditing = ref(false);
provide('isEditing', isEditing);
const route = useRoute()

const qAndAOptions = [{
  label: 'Do you have enough time to spend with your pet?',
  value: 'Vaccinated',
},
{
  label: 'Had you have a pet before?',
  value: 'Sterilized',
},
{
  label: 'Do you travel a lot?',
  value: 'Active',
},
{
  label: 'Do you want additional info on dog care?',
  value: 'Healthy',
},
];

const handleFormSubmition = () => {
  console.log(form)
}
const handleExitForm = () => {
  formStore.resetForm();
  step.value = 0;
  setTimeout(() => {
    navigateTo('/');
  }, 500);
}
const step = ref(0)
const { history, undo, redo } = useRefHistory(step)


const nextStep = () => {
  step.value++;
}
const goToAndFix = (s: number) => {
  step.value = s;
  isEditing.value = true
}
const fixAndGoBackTo = (s: number) => {
  step.value = s;
  isEditing.value = false
}


const user = useSupabaseUser();

const liveWithOptions = ['PARTNER', 'CHILDREN', 'OTHER_PETS', 'ALONE'];
const handlePetRegister = async () => {
  try {
    // First, try to create the client
    const data = await $fetch('/api/form?id=' + route.query.id, {
      method: 'post',
      body: { ...form.value, email: user.value?.email }
    });
    if (!data) {
      throw new Error('Error creating client')
    }
    console.log(data)

    step.value++;

  }
  catch (error) {
    console.log(error);
  }
}

const handlePetUpdate = async () => {
  try {
    // First, try to create the client
    const data = await $fetch(`/api/form?id=${route.query.id}`, {
      method: 'PATCH',
      body: { ...form.value, email: user.value?.email }
    });
    if (!data) {
      throw new Error('Error creating client')
    }
    console.log(data)

    step.value++;

  }
  catch (error) {
    console.log(error);
  }
}

</script>

<style >
.selected {
  background-color: #ccc;
  /* Change to your preferred color */
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.bg-form {
  @apply bg-contAccent
  /* Change to your preferred color */
}
</style>

