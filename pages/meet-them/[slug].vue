<template>
  <div class="">
    <!--Carousel Section -->

    <div v-if="pet" class="h-full">

      <div class="h-[40vh] px-16 bg-darkContSecond grid relative place-items-center grid-rows-6 grid-cols-5">
        <h2 class="col-start-1 col-end-6 row-start-1 row-end-2 text-Heading1sm font-bold capitalize text-center">
          {{ pet?.name ?? "No name" }}
        </h2>
        <Carousel ref="myCarousel"
          class="row-start-2 row-end-7 col-start-1 col-end-6 w-full h-full overflow-hidden rounded-xl shadow-xl"
          :wrap-around="true" snap-align="center" :touch-drag="false">
          <Slide class="grid relative w-full h-full overflow-hidden rounded-xl shadow-xl grid-cols-2 grid-rows-2 gap-5"
            v-for="(img, index) in pet?.images">
            <nuxt-img
              :src="'https://selsrqgtbifccztqjvag.supabase.co/storage/v1/object/public/animalgod-files/animalgod-files/' + pet?.name + index"
              class="row-span-full col-span-full object-cover object-center z-0 w-full h-full max-h-full max-w-full">
            </nuxt-img>
          </Slide>
          <template #addons>
            <Pagination class=" pt-24 scale-50" />
            <Navigation class="" />
          </template>
        </Carousel>
      </div>

      <div class="basic-info bg-contAccent mx-4 rounded-lg px-4 py-4 my-4">

        <ul class="list-disc list-inside grid grid-cols-2 w-full text-sm gap-2">
          <li class="pl-4 capitalize -ml-4">
            {{ pet.breed.toLowerCase().split("_").join(" ") }}
          </li>
          <li>
            {{ pet.age }} years old
          </li>
          <li>
            {{ pet.gender.toLowerCase() }}
          </li>

          <li>
            Good with {{ pet.goodWith.toLowerCase() }}
          </li>
          <li class="capitalize">
            {{ pet.size.toLowerCase() }}
          </li>
          <li class="capitalize">
            {{ pet.personality[0].toLowerCase() }}
          </li>
        </ul>



      </div>

      <div class="rounded-lg are-you-interest bg-darkContThird mx-4 px-8 py-2 text-black">
        <div>
          <div class="" v-if="!user">
            <h3 class="text-Heading3sm font-bold">Are you interested in {{ pet.name }}?</h3>
            Please first <nuxt-link class="text-contAccent font-bold" to="/signup">Sign up</nuxt-link> or <nuxt-link
              class="text-contAccent font-bold" to="/login">Log in</nuxt-link> to apply
          </div>
          <div class="" v-else>
            <h3 class="text-Heading3sm font-bold">Are you interested in {{ pet.name }}?</h3>

          </div>
          <div class="flex items-center justify-center gap-4 mt-4">
            <UButton size="xl" color="primary" class="py-3 px-6" variant="solid" :disabled="!user">
              <nuxt-link :to="'/form?id=' + pet.id">Prerequisites form</nuxt-link>
            </UButton>
            <UButton size="xl" label="Prerequisites" color="white" variant="outline" class="bg-Bg font-bold py-3 px-6" />
          </div>

        </div>

      </div>
      <div class="tabs-details mt-12">
        <UTabs :items="items" class="" :ui="{
          wrapper: ' relative space-y-2',
          container: 'relative w-full bg',
          base: 'focus:outline-none',
          list: {
            base: 'relative'
            , background: 'bg-transparent dark:bg-transparent', rounded: 'rounded-lg', shadow: '', padding: 'p-1',
            height: 'h-10', width: 'w-full', marker: {
              wrapper: 'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none border-b-2 py-4 border-contAccent bg-transparent  dark:bg-transparent', base: 'w-full h-full',
              background: 'bg-transparent  dark:bg-transparent', rounded: 'rounded-md', shadow: 'shadow-sm'
            },
            tab: {
              base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out'
              , background: 'bg-darkBg', active: 'text-gray-900 dark:text-white', inactive: 'text-gray-500 dark:text-gray-400',
              height: 'h-8', padding: 'px-3', size: 'text-sm', font: 'font-medium', rounded: 'rounded-md', shadow: ''
            },
          },
        }">
          <template #item="{ item }">
            <div class="px-5 py-16">
              <p class="text-Heading3sm font-bold leading-6 text-gray-900 dark:text-white">
                {{ pet.name }}'s {{ item.label }}
              </p>

              <div v-if="item.key === 'history'" class="space-y-3">

                <p class="mt-5 text-Body1sm font-regular text-darkContText leading-tight">
                  {{ pet.history }}
                </p>

              </div>
              <div v-else-if="item.key === 'personality'" class="space-y-3">
                <p>
                  {{ pet.personalityDescription }}
                </p>

                <ul class="space-y-4 ">
                  <li v-for=" adjective  in  pet.personality " :key="adjective">
                    <div v-for=" explainedAdjective  in  personalityAdjectivesExplained " :key="explainedAdjective.label">
                      <div class="grid gap-4 rounded-lg place-items-center bg-darkContSecond p-4"
                        v-if="adjective.toUpperCase() === explainedAdjective.label.toUpperCase()">
                        <div
                          class="col-start-1 col-end-2 icon w-24 h-24 rounded-lg bg-contAccent grid place-items-center ">
                          <Icon :name="explainedAdjective.icon.replace('-', ':')" class="w-full h-full p-8"></Icon>
                        </div>
                        <div class="flex flex-col col-start-2 col-end-4 text-cap">
                          <h3 class="font-bold text-Heading5sm">
                            {{ explainedAdjective.label }}
                          </h3>
                          <p class="font-semibold text-Footer leading-none">
                            {{ explainedAdjective.tag }}
                          </p>
                          <ul class="list-disc list-inside mt-2">
                            <li v-for=" item  in  explainedAdjective.list " class="text-Captionsm leading-tight"
                              :key="item">
                              {{ item }}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

              </div>
              <div v-else-if="item.key === 'health'" class="space-y-3">
                <p>
                  {{ pet.healthDescription }}
                </p>

                <ul class="space-y-4 ">
                  <li v-for=" (adjective, index)  in  pet.healthConditions " :key="adjective">
                    <div>
                      <div class="flex gap-4" v-if="adjective.answer === 'Yes'">

                        <Icon size="20" name="mdi:check" class="bg-contAccent text-black rounded-full p-[2px]">

                        </Icon>

                        {{ HealthConditionOptions[index].responseIfYes }}
                      </div>
                      <div class="flex gap-4" v-else>

                        <Icon size="20" name="mdi:window-close" class="bg-contAccent text-black rounded-full">

                        </Icon>
                        {{ HealthConditionOptions[index].responseIfNo }}
                      </div>
                    </div>
                  </li>
                </ul>

              </div>


            </div>


          </template>
        </UTabs>

      </div>
      <div class="">
        <div class="shelter-info bg-[#166DD2]" v-if="shelter">
          <div class="flex items-center flex-col justify-center gap-4">
            <div class="">
              <nuxt-img :src="shelter.image" width="100" height="100" class="rounded-full"></nuxt-img>
            </div>
            <div class="flex flex-col">
              <h3 class="text-Heading3sm font-bold"> {{ shelter.name }} </h3>
              <p class="text-Body1sm font-regular">{{ shelter.email ?? 'No email provided' }}</p>
              <p class="text-Body1sm font-regular">{{ shelter.address ?? 'No address provided' }}</p>
              <p class="text-Body1sm font-regular">{{ shelter.phone ?? 'No phone provided' }}</p>
            </div>
          </div>
        </div>

      </div>

      <div class="flex flex-col pet-available-cta px-5 gap-8 my-32" v-if="relatedPets">
        <h3 class="text-Heading3sm font-bold text-center">Pet available for adoption</h3>
        <div class="flex w-full items-center justify-center gap-5">
          <div class="" v-for="(animal, index) in relatedPets">
            <nuxt-link class="grid relative w-32 h-32 overflow-hidden rounded-xl shadow-xl grid-cols-3 grid-rows-3"
              :to="`/meet-them/${animal.name}`">
              <h6
                class="row-start-3 row-end-4 col-start-1 col-end-4 capitalize z-50 text-Heading6lg font-bold font-Inter tracking-widest relative place-self-center text-contSecond">
                {{ animal.name }}
              </h6>
              <nuxt-img v-if="animal.images.length > 0"
                :src="'https://selsrqgtbifccztqjvag.supabase.co/storage/v1/object/public/animalgod-files/animalgod-files/' + animal.name + '0'"
                class="row-span-full col-span-full object-cover object-center z-0 w-full h-full max-h-full max-w-full"
                width="100%" height="100%"></nuxt-img>
              <div class="absolute h-[40%] w-full z-10 bottom-0 left-0"
                :style="`background: linear-gradient(0deg, ${animal.hexColor} 0%, rgba(0, 0, 0, 0) 100%);`"></div>
            </nuxt-link>
          </div>
        </div>
        <div class="flex items-center justify-center gap-4">
          <UButton size="xl" label="Meet Them" color="primary" class="py-3 px-6" variant="solid" />

        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";
import { storeToRefs } from 'pinia';
import type { Pet, Shelter } from "~/types";
import { useformStore } from '~/stores/formStore';
import { useShelterStore } from "~/stores/ShelterStore";
import { usePetStore } from "~/stores/PetStore";
const PetStore = usePetStore();
const { pet, shelter, relatedPets } = storeToRefs(PetStore);
const route = useRoute();

onMounted(async () => {
  if (route.params.slug) {
    try {
      await PetStore.fetchPet(route.params.slug);
      if (pet.value) {
        PetStore.setShelter(pet.value.shelterId);
        await PetStore.fetchRelatedPets(pet.value.id);
      }
    }
    catch (err) {
      console.log(err)
    }
  }
})

onUnmounted(() => {
  PetStore.resetPet();
})


const formStore = useformStore();
const { HealthConditionOptions } = formStore;



// get carouselImages value from animalDataByName
const user = useSupabaseUser();
const items = [{
  key: 'history',
  label: 'History',
  content: 'This is the content shown for Tab1'
}, {
  key: 'personality',
  label: 'Personality',
  content: 'And, this is the content for Tab2'
}, {
  key: 'health',
  label: 'Health conditions',
  content: 'Finally, this is the content for Tab3'
}]
const personalityAdjectivesExplained = [
  {
    label: 'Affectionate',
    tag: 'Animals with this personality tend to:',
    icon: 'mdi-heart',
    list: [
      'Snuggling with you',
      'Giving out puppy kisses',
      'Acting as your shadow',
      'Being happy to see you',
      'Spending time with you',
      'Being sensitive to your emotions',
    ]
  },
  {
    label: 'Aloof',
    tag: 'Animals with this personality tend to:',
    icon: 'mdi-cat',
    list: [
      'Keeping to themselves',
      'Being indifferent to cuddles',
      'Preferring solitude',
      'Observing from a distance',
      'Being wary of strangers',
      'Showing independence in their actions',
    ]
  },
  {
    label: 'Dominant',
    tag: 'Animals with this personality tend to:',
    icon: 'mdi-alpha-d-box',
    list: [
      'Taking charge of situations',
      'Leading other pets',
      'Being protective of their territory',
      'Asserting their presence',
      'Showing confidence in their actions',
      'Being less likely to submit',
    ]
  },
  {
    label: 'Compliant',
    tag: 'Animals with this personality tend to:',
    icon: 'mdi-thumb-up',
    list: [
      'Following instructions well',
      'Being easy to train',
      'Adapting to routines quickly',
      'Showing eagerness to please',
      'Responding well to commands',
      'Being cooperative with other pets',
    ]
  },
  {
    label: 'Relaxed',
    tag: 'Animals with this personality tend to:',
    icon: 'mdi-beach',
    list: [
      'Being calm in various situations',
      'Adapting easily to changes',
      'Not being easily startled',
      'Enjoying leisurely activities',
      'Showing patience',
      'Being less reactive to stimuli',
    ]
  },
  {
    label: 'Enthusiastic',
    tag: 'Animals with this personality tend to:',
    icon: 'mdi-party-popper',
    list: [
      'Showing excitement often',
      'Being energetic in play',
      'Eagerly exploring new environments',
      'Reacting positively to stimuli',
      'Displaying a zest for life',
      'Being highly interactive',
    ]
  },
  {
    label: 'Confident',
    tag: 'Animals with this personality tend to:',
    icon: 'mdi-crown',
    list: [
      'Exploring new areas without fear',
      'Facing challenges head-on',
      'Being assertive in their actions',
      'Showing independence',
      'Displaying self-assuredness',
      'Not being easily intimidated',
    ]
  },
  {
    label: 'Timid',
    tag: 'Animals with this personality tend to:',
    icon: 'mdi-rabbit',
    list: [
      'Being shy around new people or pets',
      'Hesitating in new situations',
      'Preferring familiar environments',
      'Being cautious in their actions',
      'Needing time to warm up to strangers',
      'Showing nervousness in unfamiliar settings',
    ]
  },
  {
    label: 'Devoted',
    tag: 'Animals with this personality tend to:',
    icon: 'mdi-dog-service',
    list: [
      'Forming strong bonds with their owners',
      'Being loyal to their family',
      'Following their owner around',
      'Protecting their loved ones',
      'Showing distress when separated',
      'Being attentive to their owner’s needs',
    ]
  },
  {
    label: 'Independent',
    tag: 'Animals with this personality tend to:',
    icon: 'mdi-account',
    list: [
      'Doing things on their own',
      'Not requiring constant attention',
      'Being self-sufficient',
      'Exploring independently',
      'Making decisions without guidance',
      'Being content when left alone',
    ]
  },
];




</script>
<style scoped>
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}

.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}

.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}

.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}

.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}

.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}

.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}

.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}

.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}

.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}

.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}

.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}

.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}

.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}

.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}

.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}

.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}

.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}

@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>