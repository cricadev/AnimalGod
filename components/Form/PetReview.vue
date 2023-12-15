<template>
  <div class="section-step-layout">
    <FormPreHeaderStep question="Let's review the info, confirm and register the pet!" :expression="expression">
    </FormPreHeaderStep>
    <div v-if="pet && shelter" class="pet-info space-y-4 my-12 overflow-y-auto overflow-x-hidden">
      <h4 class="font-bold">The pet's info is</h4>
      <div class="item">
        <UButton @click="emit('edit-type', 1)" label="Pet's Category" icon="i-mdi-pencil" trailing color="third"
          class="text-contInactive font-bold text-sm" variant="ghost"></UButton>
        <span class="font-bold ml-4">
          {{ pet.type }}
        </span>

      </div>
      <div class="item">
        <UButton @click="emit('edit-type', 2)" label="Pet's name" icon="i-mdi-pencil" trailing color="third"
          class="text-contInactive font-bold text-sm" variant="ghost"></UButton>
        <span class="font-bold ml-4">
          {{ pet.name }}
        </span>

      </div>
      <div class="flex-col gap-0">

        <div class="item">
          <UButton @click="emit('edit-type', 3)" label="Photos and Videos" icon="i-mdi-pencil" trailing color="third"
            class="text-contInactive font-bold text-sm" variant="ghost"></UButton>

        </div>
        <div class="selected-images flex gap-2" v-if="pet.images">
          <div class="image-container" v-for="( file, index ) in  pet.images " :key="index">

            <img :src="file" alt="pet image" class="w-16 h-auto object-cover">



          </div>

        </div>

      </div>
      <!-- BASIC INFO-->
      <div class="">
        <div class="flex flex-col justify-between">

          <div class="item">
            <UButton @click="emit('edit-type', 4)" label="Basic info" icon="i-mdi-pencil" trailing color="third"
              class="text-contInactive font-bold text-sm" variant="ghost"></UButton>

          </div>
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


        </div>
      </div>
      <div class="flex flex-col gap-0 w-full">
        <div class="item">
          <UButton @click="emit('edit-type', 5)" label="History" icon="i-mdi-pencil" trailing color="third"
            class="text-contInactive font-bold text-sm" variant="ghost"></UButton>

        </div>
        <div class="col-start-2 row-start-1  col-end-4 overflow-y-auto h-auto w-full ">
          <p class="leading-tight text-sm"> {{ pet.history }}</p>

        </div>


      </div>
      <div class="flex flex-col gap-0 w-full">
        <div class="item">
          <UButton @click="emit('edit-type', 6)" label="Personality" icon="i-mdi-pencil" trailing color="third"
            class="text-contInactive font-bold text-sm" variant="ghost"></UButton>

        </div>
        <div class="col-start-2 row-start-1  col-end-4 overflow-y-auto h-auto w-full flex flex-col gap-4">

          <ul class="list-disc list-inside">
            <li class="leading-tight font-bold text-sm" v-for=" item  in  pet.personality ">
              {{ item }}
            </li>
          </ul>

          <p class="leading-tight text-sm"> {{ pet.personalityDescription }}</p>
        </div>


      </div>
      <div class="flex flex-col w-full ">
        <div class="item">
          <UButton @click="emit('edit-type', 7)" label="Health Condition" icon="i-mdi-pencil" trailing color="third"
            class="text-contInactive font-bold text-sm" variant="ghost"></UButton>

        </div>

        <div class="col-start-2 row-start-1  col-end-4 overflow-y-auto h-auto w-full flex flex-col gap-4">

          <ul class="list-disc list-inside">
            <li class="leading-tight font-bold text-sm" v-for="( item, index ) in  pet.healthConditions ">
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


      </div>
    </div>
    <div class="pet-info space-y-4 my-12 overflow-y-auto overflow-x-hidden" v-if="!shelter">

      <h4 class="font-bold">Your preview info is</h4>
      <div class="item">
        <h5 class="text-contInactive font-bold text-sm">You live with
          <br>
        </h5>
        <UButton :label="pet.liveWith" icon="i-mdi-pencil" trailing color="secondary" variant="ghost"></UButton>

      </div>
      <div class="item">
        <h5 class="text-contInactive font-bold text-sm">You live in</h5>
        <UButton :label="pet.liveIn" icon="i-mdi-pencil" trailing color="secondary" variant="ghost"></UButton>

      </div>
      <!-- BASIC INFO-->
      <div class="">
        <div class="flex flex-col justify-between">
          <h5 class="text-contInactive font-bold text-sm">Basic info</h5>
          <ul class="list-disc list-inside">
            <li class="leading-tight font-bold text-sm" v-for="( item, index ) in  pet.qAndA ">
              <span class="" v-if="item.answer == 'Yes'">
                {{ qAndAResponses[index].responseIfYes }}
              </span>
              <span class="" v-if="item.answer == 'No'">
                {{ qAndAResponses[index].responseIfNo }}
              </span>
            </li>
          </ul>

          <p class="leading-tight text-sm"> {{ pet.qAndADescription }}</p>

          <UButton icon="i-mdi-pencil" trailing color="secondary" variant="ghost"></UButton>


        </div>
      </div>
      <div class="grid gap-8 w-full">
        <h5 class="text-contInactive font-bold text-sm col-start-1 col-end-2">Why you want to adopt a pet</h5>

        <div class="col-start-2 row-start-1  col-end-4 overflow-y-auto h-auto w-full ">
          <p class="leading-tight text-sm"> {{ pet.whyMessage }}</p>

        </div>
        <UButton class="col-start-3 col-end-4 row-start-1 row-end-2 self-start" icon="i-mdi-pencil" trailing
          color="secondary" variant="ghost"></UButton>

      </div>

    </div>

    <div class="submit-button flex justify-end">
      <UButton v-if="!route.query.id" class="py-3 px-4" icon="i-mdi-check" trailing @click="emit('submit', pet)">Confirm
        and Register</UButton>
      <UButton v-else class="py-3 px-4" icon="i-mdi-check" trailing @click="emit('update-pet', pet)">Confirm and Update
      </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
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


const qAndAResponses = [
  {
    responseIfYes: 'Enough time',
    responseIfNo: 'Not enough time',
  },
  {
    responseIfYes: 'Had a pet before',
    responseIfNo: 'Never had a pet before',
  },
  {
    responseIfYes: 'Travel a lot',
    responseIfNo: 'Do not travel a lot',
  },
  {
    responseIfYes: 'Want additional info on dog care',
    responseIfNo: 'Do not want additional info on dog care',
  },


]

const isObject = (value) => {
  return value && typeof value === 'object' && value.constructor === Object;
}
defineProps({
  pet: {
    type: Object,
    required: true
  },
  shelter: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(['submit', 'edit-type', 'update-pet'])

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
  @apply flex flex-col items-start;
}
</style>