<template>
  <div class="overflow-hidden">
    <form @submit.prevent="handlePetRegister"
      class="flex flex-col w-full justify-center items-center gap-4 bg-Bg h-full absolute top-0 left-0 z-[9999] overflow-hidden">
      <TransitionGroup name="list">
        <RegisterAnimalFormSalutForm v-if="step === 0" @close="nextStep" @next="step++" />
        <RegisterAnimalFormPetTypeSelection v-if="step === 1" v-model="pet.type" @next="step++" />
        <RegisterAnimalFormPetNameInput v-if="step === 2" v-model="pet.name" @next="step++" @back="step--" />
        <RegisterAnimalFormPetImageUpload v-if="step === 3" v-model="pet.images" @next="step++" @back="step--" />
        <RegisterAnimalFormPetBasicInfo v-if="step === 4" v-model="pet" :sizeOptions="SizeOptions"
          :breedOptions="BreedOptions" :good-with-options="GoodWithOptions" :activity-level-options="ActivityLevelOptions"
          @next="step++" @back="step--" />

        <RegisterAnimalFormPetHistory v-if="step === 5" v-model="pet" @next="step++" @back="step--" />
        <RegisterAnimalFormPetPersonality v-if="step === 6" v-model="pet"
          :adjectivesOptions="PersonalityAdjectivesOptions" @next="step++" @back="step--" />
        <RegisterAnimalFormPetHealth v-if="step === 7" v-model="pet" :healthOptions="HealthConditionOptions"
          @next="step++" @back="step--" />
        <RegisterAnimalFormPetReview @edit-type="goToAndFix" v-if="step === 8" :pet="pet" @back="step--"
          @submit="handlePetRegister" />
      </TransitionGroup>
    </form>

  </div>
</template>
<script lang="ts" setup>
import { useRefHistory } from '@vueuse/core'
const step = ref(0)
const { history, undo, redo } = useRefHistory(step)

const nextStep = () => {
  step.value++;
}
const goToAndFix = (s: number) => {

  step.value = s;

}
const user = useSupabaseUser();
const SizeOptions = ['Small', 'Medium', 'Large'];
const BreedOptions = ['Golden Retriever', 'Siamese', /* other breeds... */];
const GoodWithOptions = ['Children', 'Dogs', 'Cats'];
const ActivityLevelOptions = ['Low', 'Medium', 'High'];
const PersonalityAdjectivesOptions = ['Friendly', 'Playful', 'Calm', /* other adjectives... */];
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
const pet = reactive({
  id: 0,
  type: '',
  name: '',
  images: [''],

  gender: false,
  size: SizeOptions[0], // Default to the first option
  age: 0,
  breed: BreedOptions[0], // Default to the first option
  goodWith: GoodWithOptions[0], // This will be an array of selected options
  activity: ActivityLevelOptions[0], // Default to the first option
  history: '',
  personality: PersonalityAdjectivesOptions[0], // This will be an array of selected options
  personalityDescription: '',
  healthConditions: HealthConditionOptions.map(condition => ({ condition: condition.value, answer: '' })),
  healthDescription: '',
  isAdopted: false,
  shelterId: null,
  appointments: [],
  createdAt: new Date(),
  updatedAt: new Date(),
});
const handlePetRegister = async () => {
  try {
    // First, try to create the client
    const data = await $fetch('/api/create-pet', {
      method: 'post',
      body: { ...pet, email: user.value?.email }
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

const handleFileUpload = (event) => {
  const files = event.target.files;
  pet.images = Array.from(files);
  console.log(pet.images)
};
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
</style>

