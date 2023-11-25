<template>
  <div class="overflow-hidden p-5 bg-form">
    <form @submit.prevent="handleFormSubmition"
      class="flex flex-col justify-between h-[80vh] gap-4 w-full bg-Bg relative z-[999] overflow-hidden rounded-lg">
      <TransitionGroup name="list" class="">
        <RegisterAnimalFormStepsCounter :currentStep="step" :totalSteps="8" />
        <RegisterAnimalFormSalutForm v-if="step === 0" @close="nextStep" @next="step++" />
        <RegisterAnimalFormPetTypeSelection v-if="step === 1" v-model="pet.type" @back="step--" @next="step++" />
        <RegisterAnimalFormPetNameInput v-if="step === 2" v-model="pet.name" @next="step++" @back="step--" />
        <RegisterAnimalFormPetImageUpload v-if="step === 3" v-model="pet.images" @next="step++" @back="step--" />
        <RegisterAnimalFormPetBasicInfo v-if="step === 4" v-model:gender="pet.gender" v-model:size="pet.size"
          v-model:age="pet.age" v-model:breed="pet.breed" v-model:goodWith="pet.goodWith" v-model:activity="pet.activity"
          :sizeOptions="SizeOptions" :breedOptions="BreedOptions" :good-with-options="GoodWithOptions"
          :activity-level-options="ActivityLevelOptions" @next="step++" @back="step--" />

        <RegisterAnimalFormPetHistory v-if="step === 5" v-model="pet.history" @next="step++" @back="step--" />
        <RegisterAnimalFormPetPersonality v-if="step === 6" v-model:personality="pet.personality"
          v-model:personalityDescription="pet.personalityDescription" :adjectivesOptions="PersonalityAdjectivesOptions"
          @next="step++" @back="step--" />
        <RegisterAnimalFormPetHealth v-if="step === 7" v-model:healthConditions="pet.healthConditions"
          v-model:healthDescription="pet.healthDescription" :healthOptions="HealthConditionOptions" @next="step++"
          @back="step--" />
        <RegisterAnimalFormPetReview @edit-type="goToAndFix" v-if="step === 8" :pet="pet" @back="step--"
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
const { pet } = storeToRefs(formStore);
const handleFormSubmition = () => {
  console.log(pet)
}
const SizeOptions = ['Small', 'Medium', 'Large'];
const BreedOptions = ['Golden Retriever', 'Siamese', /* other breeds... */];
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
const step = ref(8)
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
    const data = await $fetch('/api/create-pet', {
      method: 'post',
      body: { ...pet.value, email: user.value?.email }
    });
    if (!data) {
      throw new Error('Error creating client')
    }
    console.log(data)


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

