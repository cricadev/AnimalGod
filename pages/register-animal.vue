<template>
  <div>
    <form @submit.prevent="handlePetRegister" class="flex flex-col w-full justify-center items-center gap-4">

      <div>
        <label>Is the pet a dog or a cat?</label>
        <button :class="{ 'selected': pet.type === 'dog' }" @click.prevent="pet.type = 'dog'">
          <img src="path/to/dog/icon" alt="Dog Icon"> Dog
        </button>
        <button :class="{ 'selected': pet.type === 'cat' }" @click.prevent="pet.type = 'cat'">
          <img src="path/to/cat/icon" alt="Cat Icon"> Cat
        </button>
      </div>



      <label>
        what's the pet's name?
        <input v-model="pet.name" type="text" required />
      </label>
      <label>
        Images:
        <input v-model="pet.images[0]" type="text" required />
      </label>
      <label>
        Gender:
        <select v-model="pet.gender">
          <option value="true">Male</option>
          <option value="false">Female</option>
        </select>
      </label>
      <label>
        Size:
        <select v-model="pet.size">
          <option v-for="size in SizeOptions" :key="size" :value="size">{{ size }}</option>
        </select>
      </label>
      <label>
        Breed:
        <select v-model="pet.breed">
          <option v-for="breed in BreedOptions" :key="breed" :value="breed">{{ breed }}</option>
        </select>
      </label>
      <label>
        Good With:
        <select v-model="pet.goodWith">
          <option v-for="option in GoodWithOptions" :key="option" :value="option">{{ option }}</option>
        </select>
      </label>
      <label>
        Activity Level:
        <select v-model="pet.activity">
          <option v-for="level in ActivityLevelOptions" :key="level" :value="level">{{ level }}</option>
        </select>
      </label>
      <label>
        History:
        <textarea v-model="pet.history" required></textarea>
      </label>


      <div>
        <label>Personality:</label>
        <div v-for="adjective in PersonalityAdjectivesOptions" :key="adjective">
          <input type="checkbox" :id="adjective" v-model="pet.personality" :value="adjective">
          <label :for="adjective">{{ adjective }}</label>
        </div>
      </div>


      <label>
        Personality Description:
        <textarea v-model="pet.personalityDescription" required></textarea>
      </label>
      <div v-for="condition in HealthConditionOptions" :key="condition">
        <label>{{ condition }}:</label>
        <input type="radio" :id="`${condition}-yes`" v-model="pet.healthConditions[condition]" value="Yes">
        <label :for="`${condition}-yes`">Yes</label>
        <input type="radio" :id="`${condition}-no`" v-model="pet.healthConditions[condition]" value="No">
        <label :for="`${condition}-no`">No</label>
      </div>

      <label>
        Health Description:
        <textarea v-model="pet.healthDescription" required></textarea>
      </label>
      <button type="submit">Register Pet</button>
    </form>
  </div>
</template>
<script lang="ts" setup>
const user = useSupabaseUser();
const SizeOptions = ['Small', 'Medium', 'Large'];
const BreedOptions = ['Golden Retriever', 'Siamese', /* other breeds... */];
const GoodWithOptions = ['Children', 'Dogs', 'Cats'];
const ActivityLevelOptions = ['Low', 'Medium', 'High'];
const PersonalityAdjectivesOptions = ['Friendly', 'Playful', 'Calm', /* other adjectives... */];
const HealthConditionOptions = ['Vaccinated', 'Sterilized', /* other conditions... */];
const pet = reactive({
  id: 0,
  type: '',
  name: '',
  images: [''],
  gender: false,
  size: SizeOptions[0], // Default to the first option
  breed: BreedOptions[0], // Default to the first option
  goodWith: [], // This will be an array of selected options
  activity: ActivityLevelOptions[0], // Default to the first option
  history: '',
  personality: [], // This will be an array of selected options
  personalityDescription: '',
  healthConditions: Object.fromEntries(HealthConditionOptions.map(condition => [condition, 'No'])), // e.g., { Vaccinated: 'Yes', Sterilized: 'No' }
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

</script>

<style scoped>
.selected {
  background-color: #ccc;
  /* Change to your preferred color */
}
</style>

