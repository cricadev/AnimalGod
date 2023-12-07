<template>
  <div class="overflow-hidden p-5 bg-form">
    <form @submit.prevent="handleFormSubmition"
      class="flex flex-col justify-between h-[80vh] gap-4 w-full bg-Bg relative overflow-hidden rounded-lg">
      <TransitionGroup name="list" class="">
        <FormStepsCounter :currentStep="step" :totalSteps="6" />
        <FormSalutForm v-if="step === 0" @close="nextStep" @next="step++" />
        <FormPetPersonality :shelter="false" v-if="step === 1" v-model:personality="form.liveWith"
          v-model:personalityDescription="form.liveWithDescription" :adjectivesOptions="liveWithOptions" @next="step++"
          @back="step--" />
        <FormPetTypeSelection :shelter="false" v-if="step === 2" v-model="form.liveIn" @back="step--" @next="step++" />

        <FormReqRent v-if="step === 3" v-model:isRenting="form.isRenting" v-model:rentAcceptance="form.rentAcceptance"
          @next="step++" @back="step--" />

        <FormPetHealth :shelter="false" v-if="step === 4" v-model:healthConditions="form.qAndA"
          v-model:healthDescription="form.qAndADescription" :healthOptions="qAndAOptions" @next="step++" @back="step--" />

        <FormPetHistory v-if="step === 5" v-model="form.whyMessage" @next="step++" @back="step--" />

        <FormPetReview :shelter="false" @edit-type="goToAndFix" v-if="step === 6" :pet="form" @back="step--"
          @submit="handlePetRegister" />
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
  formStore.resetPet();
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
  console.log(history.value)
}

const user = useSupabaseUser();

const liveWithOptions = ['My Husband/Wife', 'Children', 'Other Pet', 'Alone'];
const handlePetRegister = async () => {
  try {
    // First, try to create the client
    const data = await $fetch('/api/form', {
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

