<template>
  <div class="overflow-hidden p-5 bg-form">
    <form @submit.prevent="handleFormSubmition"
      class="flex flex-col justify-between h-[80vh] gap-4 w-full bg-Bg relative overflow-hidden rounded-lg">
      <TransitionGroup name="list">
        <FormStepsCounter :currentStep="step" :totalSteps="9" />
        <FormSalutForm v-if="step === 0" @close="nextStep" @next="step++" />
        <FormPetTypeSelection @update-type="fixAndGoBackTo" v-if="step === 1" v-model="pet.type" @back="step--"
          @next="step++" />
        <FormPetNameInput @update-type="fixAndGoBackTo" v-if="step === 2" v-model="pet.name" @next="step++"
          @back="step--" />
        <FormPetImageUpload @update-type="fixAndGoBackTo" v-if="step === 3" v-model="pet.images" @next="step++"
          @back="step--" />
        <FormPetBasicInfo v-if="step === 4" v-model:gender="pet.gender" v-model:size="pet.size" v-model:age="pet.age"
          v-model:breed="pet.breed" v-model:goodWith="pet.goodWith" v-model:activity="pet.activity"
          :sizeOptions="SizeOptions" :breedOptions="BreedOptions" :good-with-options="GoodWithOptions"
          :activity-level-options="ActivityLevelOptions" @next="step++" @back="step--" />

        <FormPetHistory v-if="step === 5" v-model="pet.history" @next="step++" @back="step--" />
        <FormPetPersonality v-if="step === 6" v-model:personality="pet.personality"
          v-model:personalityDescription="pet.personalityDescription" :adjectivesOptions="PersonalityAdjectivesOptions"
          @next="step++" @back="step--" />
        <FormPetHealth v-if="step === 7" v-model:healthConditions="pet.healthConditions"
          v-model:healthDescription="pet.healthDescription" :healthOptions="HealthConditionOptions" @next="step++"
          @back="step--" />
        <FormPetReview @edit-type="goToAndFix" v-if="step === 8" :pet="pet" @back="step--" @submit="handlePetRegister" />

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
const { pet } = storeToRefs(formStore);

onUnmounted(() => {
  formStore.resetPet();
})
const isEditing = ref(false);
provide('isEditing', isEditing);
const route = useRoute();

const handleFormSubmition = () => {
  console.log(pet)
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

if (route.query.id) {
  step.value = 8;
  console.log(Number(route.query.id))
  try {
    await formStore.fetchPetById(Number(route.query.id));
  }
  catch (error) {
    console.log(error)
  }
}

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


const handlePetRegister = async () => {
  try {
    // First, try to create the client
    const data = await $fetch('/api/pet', {
      method: 'post',
      body: { ...pet.value, email: user.value?.email }
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
