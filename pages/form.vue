<template>
  <div class="overflow-hidden p-5 bg-form">
    <form @submit.prevent="handleFormSubmition"
      class="flex flex-col justify-between h-[80vh] gap-4 w-full bg-Bg relative overflow-hidden rounded-lg">
      <TransitionGroup name="list" class="">
        <FormStepsCounter :currentStep="step" :totalSteps="3" />
        <FormSalutForm v-if="step === 0" @close="nextStep" @next="step++" />
        <FormPetTypeSelection :shelter="false" v-if="step === 1" v-model="form.type" @back="step--" @next="step++" />


        <FormPetReview @edit-type="goToAndFix" v-if="step === 8" :pet="form" @back="step--" @submit="handlePetRegister" />

        <FormExitFormScreen @exit-form="handleExitForm" v-if="step === 9" />

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
const SizeOptions = ['Small', 'Medium', 'Large'];
const BreedOptions = [
  'Golden Retriever',
  'Labrador Retriever',
  'German Shepherd',
  'Bulldog',
  'Beagle',
  'Poodle',
  'Rottweiler',
  'Yorkshire Terrier',
  'Boxer',
  'Dachshund'
];
const GoodWithOptions = ['Children', 'Dogs', 'Cats'];
const ActivityLevelOptions = ['Low', 'Medium', 'High'];
const PersonalityAdjectivesOptions = ['Affectionate', 'Aloof', 'Dominant', 'Compliant', 'Relaxed', 'Enthusiastic', 'Confident', 'Timid', 'Devoted', 'Independent'];
const HealthConditionOptions = [{
  label: 'Is the pet fully vaccinated?',
  value: 'Vaccinated',
},
{
  label: 'Is the pet sterilized?',
  value: 'Sterilized',
},
{
  label: 'Is the pet physically active?',
  value: 'Active',
},
{
  label: 'Is the pet healthy eating habits?',
  value: 'Healthy',
},
{
  label: 'Does the pet have good hygiene?',
  value: 'Hygienic',
},
{
  label: 'Does the pet have any psychological problems?',
  value: 'Psychological',
},


];
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

