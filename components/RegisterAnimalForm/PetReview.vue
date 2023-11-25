<template>
  <div class="section-step-layout">
    <RegisterAnimalFormPreHeaderStep question="Let's review the info, confirm and apply!" :expression="expression">
    </RegisterAnimalFormPreHeaderStep>
    <div v-if="pet" class="pet-info space-y-4 my-12 overflow-y-auto overflow-x-hidden">
      <h4 class="font-bold">The pet's info is</h4>
      <div class="item">
        <h5 class="text-contInactive font-bold text-sm">Pet's
          <br> category
        </h5>
        <UButton :label="pet.type" icon="i-mdi-pencil" trailing color="secondary" variant="ghost"></UButton>

      </div>
      <div class="item">
        <h5 class="text-contInactive font-bold text-sm">Pet's name</h5>
        <UButton :label="pet.name" icon="i-mdi-pencil" trailing color="secondary" variant="ghost"></UButton>

      </div>
      <div class="flex-col gap-0">
        <div class="flex justify-between">
          <h5 class="text-contInactive font-bold text-sm">Photos and video</h5>
          <UButton icon="i-mdi-pencil" trailing color="secondary" variant="ghost"></UButton>
        </div>

        <div class="selected-images flex gap-2" v-if="pet.images">
          <div class="image-container" v-for="(file, index) in pet.images" :key="index">

            <img :src="file" alt="pet image" class="w-16 h-auto object-cover">



          </div>

        </div>

      </div>
      <!-- BASIC INFO-->
      <div class="">
        <div class="flex justify-between">
          <h5 class="text-contInactive font-bold text-sm">Basic info</h5>
          <ul class="list-disc list-inside">
            <li class="leading-tight font-bold text-sm">
              {{ pet.gender }}
            </li>
            <li class="leading-tight font-bold text-sm">
              {{ pet.size }} size
            </li>
            <li class="leading-tight font-bold text-sm">
              {{ pet.breed }}
            </li>
            <li class="leading-tight font-bold text-sm">
              {{ pet.age }} years old
            </li>
            <li class="leading-tight font-bold text-sm">
              Good with {{ pet.goodWith }}
            </li>



          </ul>
          <UButton icon="i-mdi-pencil" trailing color="secondary" variant="ghost"></UButton>


        </div>
      </div>
      <div class="grid gap-8 w-full">
        <h5 class="text-contInactive font-bold text-sm col-start-1 col-end-2">History</h5>

        <div class="col-start-2 row-start-1  col-end-4 overflow-y-auto h-auto w-full ">
          <p class="leading-tight text-sm"> {{ pet.history }}</p>

        </div>
        <UButton class="col-start-3 col-end-4 row-start-1 row-end-2 self-start" icon="i-mdi-pencil" trailing
          color="secondary" variant="ghost"></UButton>

      </div>
      <div class="grid gap-8 w-full">
        <h5 class="text-contInactive font-bold text-sm col-start-1 col-end-2">Personality</h5>

        <div class="col-start-2 row-start-1  col-end-4 overflow-y-auto h-auto w-full flex flex-col gap-4">

          <ul class="list-disc list-inside">
            <li class="leading-tight font-bold text-sm" v-for="item in pet.personality">
              {{ item }}
            </li>
          </ul>

          <p class="leading-tight text-sm"> {{ pet.personalityDescription }}</p>
        </div>
        <UButton class="col-start-3 col-end-4 row-start-1 row-end-2 self-start" icon="i-mdi-pencil" trailing
          color="secondary" variant="ghost"></UButton>

      </div>
      <div class="grid gap-8 w-full grid-cols-3">
        <h5 class="text-contInactive font-bold text-sm col-start-1 col-end-2">Health Condition</h5>

        <div class="col-start-2 row-start-1  col-end-4 overflow-y-auto h-auto w-full flex flex-col gap-4">

          <ul class="list-disc list-inside">
            <li class="leading-tight font-bold text-sm" v-for="(item, index) in pet.healthConditions">
              <span class="" v-if="item.answer == 'Yes'">
                {{ healthConditionResponses[index].responseIfYes }}
              </span>
              <span class="" v-if="item.answer == 'No'">
                {{ healthConditionResponses[index].responseIfNo }}
              </span>
            </li>
          </ul>

          <p class="leading-tight text-sm"> {{ pet.healthDescription }}</p>

        </div>
        <UButton class="col-start-3 col-end-4 row-start-1 row-end-2 self-start" icon="i-mdi-pencil" trailing
          color="secondary" variant="ghost"></UButton>

      </div>
    </div>
    <div class="submit-button flex justify-end">
      <UButton class="py-3 px-4" icon="i-mdi-check" trailing @click="emit('submit', pet)">Confirm
        and Apply</UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
const expression = computed(() => {
  return true
})
const healthConditionResponses = [
  {
    responseIfYes: 'Fully vaccinated',
    responseIfNo: 'Not all vacuums',

  },
  {
    responseIfYes: 'Sterilized',
    responseIfNo: 'Not sterilized',
  },
  {
    responseIfYes: 'Physically active',
    responseIfNo: 'Not physically active',
  },
  {

    responseIfYes: 'Healthy eating habits',
    responseIfNo: 'Unhealthy eating habits',
  },
  {

    responseIfYes: 'Good hygiene',
    responseIfNo: 'Bad hygiene',
  },
  {

    responseIfYes: 'Psychological problems',
    responseIfNo: 'No psychological problems',
  },

]
const isObject = (value) => {
  return value && typeof value === 'object' && value.constructor === Object;
}
defineProps({
  pet: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['submit', 'editType'])

const stepIndex = (key) => {
  const steps = ['type', 'name', 'images', 'gender', 'size', 'age', 'breed', 'goodWith', 'activity', 'history', 'personality', 'personalityDescription', 'healthConditions', 'healthDescription'];
  return steps.indexOf(key) + 1;
}

const formatLabel = (key) => {
  return key.split(/(?=[A-Z])/).join(' ').toUpperCase();
}

const deleteImage = (index) => {
  const images = [...pet.value.images ?? []];
  images.splice(index, 1);
  emit('editType', {
    key: 'images',
    value: images
  })
}
</script>
<style scoped>
.item {
  @apply flex gap-8;
}
</style>