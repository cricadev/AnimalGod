<template>
  <div class="section-step-layout">
    <FormPreHeaderStep
      :question="shelter ? 'Lets review the info, confirm and register the pet!' : 'Lets review the info, confirm and apply!'"
      :expression="expression">
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
        <UButton @click="emit('edit-type', 1)" label="You live with" icon="i-mdi-pencil" trailing color="third"
          class="text-contInactive font-bold text-sm" variant="ghost"></UButton>
        <span class="font-bold ml-4">
          {{ pet.liveWith }}
        </span>
        <span class="font-bold ml-4">
          {{ pet.liveWithDescription }}
        </span>
      </div>
      <div class="item">
        <UButton @click="emit('edit-type', 2)" label="You live in" icon="i-mdi-pencil" trailing color="third"
          class="text-contInactive font-bold text-sm" variant="ghost"></UButton>
        <span class="font-bold ml-4">
          {{ pet.liveIn }}
        </span>

      </div>

      <!-- BASIC INFO-->
      <div class="">
        <div class="flex flex-col justify-between">
          <div class="item">
            <UButton @click="emit('edit-type', 3)" label="Rent Details" icon="i-mdi-pencil" trailing color="third"
              class="text-contInactive font-bold text-sm" variant="ghost"></UButton>
            <span class="font-bold ml-4">
              {{ pet.isRenting ? 'Rent' : 'Own' }} {{ pet.liveIn }}
              acceps pets: {{ pet.rentAcceptance ? 'Yes' : 'No' }}
            </span>

          </div>
          <ul class="list-disc list-inside">
            <div class="item">
              <UButton @click="emit('edit-type', 4)" label="Basic Info" icon="i-mdi-pencil" trailing color="third"
                class="text-contInactive font-bold text-sm" variant="ghost"></UButton>


            </div>
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



        </div>
      </div>
      <div class="flex flex-col gap-0 w-full">
        <div class="item">
          <UButton @click="emit('edit-type', 5)" label="Why do you want to adopt a pet?" icon="i-mdi-pencil" trailing
            color="third" class="text-contInactive font-bold text-sm" variant="ghost"></UButton>
          <p class="leading-tight text-sm"> {{ pet.whyMessage }}</p>


        </div>



      </div>

    </div>

    <div class="submit-button flex justify-end">
      <UButton :loading="loading" v-if="!shelter || !route.query.id" class="py-3 px-4" icon="i-mdi-check" trailing
        @click="emit('submit', pet)">Confirm
        and Register</UButton>
      <UButton :loading="loading" v-else class="py-3 px-4" icon="i-mdi-check" trailing @click="emit('update-pet', pet)">
        Confirm and Update
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

defineProps({
  pet: {
    type: Object,
    required: true
  },
  shelter: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['submit', 'edit-type', 'update-pet'])

</script>
<style scoped>
.item {
  @apply flex flex-col items-start;
}
</style>