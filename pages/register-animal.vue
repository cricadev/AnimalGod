<template>
  <div>
    <form @submit.prevent="handlePetRegister" class="flex flex-col w-full justify-center items-center gap-4">
      <label>
        Name:
        <input v-model="pet.name" type="text" required />
      </label>
      <label>
        Age:
        <input v-model="pet.age" type="number" required />
      </label>
      <label>
        Breed:
        <input v-model="pet.breed" type="text" required />
      </label>
      <label>
        Description:
        <textarea v-model="pet.description" required></textarea>
      </label>
      <label>
        Type:
        <input v-model="pet.type" type="text" required />
      </label>
      <label>
        Hex Color:
        <input v-model="pet.hexColor" type="text" required />
      </label>
      <button type="submit">Register Pet</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
const user = useSupabaseUser();
const pet = reactive({
  name: "",
  age: "",
  breed: "",
  description: "",
  type: "",
  images: [],
  isAdopted: false,
  hexColor: "",
});
const handlePetRegister = async () => {
  try {
    // First, try to create the client
    const data = await $fetch('/api/create-pet', {
      method: 'post',
      body: { ...pet, shelterId: user.value?.id }
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

<style></style>

