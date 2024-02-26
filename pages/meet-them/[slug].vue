<template>
  <div class="">
    <!--Carousel Section -->

    <div v-if="pet" class="h-full">

      <div
        class="h-auto  px-16 md:px-40 dark:bg-darkContSecond bg-contSecond grid relative place-items-center grid-rows-6 grid-cols-5">
        <h2 class="col-start-1 col-end-6 row-start-1 row-end-2 text-Heading1sm font-bold capitalize text-center">
          {{ pet?.name ?? "No name" }}
        </h2>
        <Carousel ref="myCarousel"
          class="col-span-5 row-span-6  self-center w-full h-full  overflow-hidden rounded-xl  place-items-center"
          :wrap-around="true" snap-align="center" :touch-drag="true" :mouse-drag="true">
          <Slide class="overflow-hidden rounded-xl h-full w-full  relative self-center"
            v-for="(img, index) in  pet?.images ">
            <nuxt-img v-if="img" :src="img" :key="index" class=" z-0 h-full max-h-[34rem] rounded-lg">
            </nuxt-img>
          </Slide>
          <template #addons v-if="pet.images.length > 1">
            <Pagination class="pt-4" style="padding-bottom: 0;" />
            <Navigation class="" />
          </template>
        </Carousel>
      </div>

      <div class="lg:max-w-[80%] 2xl:max-w-[50%] mx-auto px-5">
        <div class="grid md:grid-cols-2 gap-4 mt-6 ">
          <div class=" w-full  basic-info   rounded-lg   md:grid md:place-items-center    ">
            <div
              class="list-disc list-inside grid grid-cols-2 lg:grid-cols-3 place-items-start  w-full text-sm gap-2   md:gap-5  bg-contAccent text-Bg  h-full rounded-lg px-5 py-4">
              <span class="list-slug ">
                {{ pet.breed.toLowerCase().split("_").join(" ") }}
              </span>
              <span class="list-slug  ">
                {{ pet.age.toLowerCase() }} age
              </span>
              <span class="list-slug  ">
                {{ pet.gender.toLowerCase() }}
              </span>
              <span class="list-slug  whitespace-nowrap">
                Good with {{ pet.goodWith.toLowerCase() }}
              </span>
              <span class="list-slug  ">
                {{ pet.size.toLowerCase() }}
              </span>
              <span class="list-slug  ">
                {{ pet.personality[0].toLowerCase() }}
              </span>
            </div>
          </div>
          <div class="w-full rounded-lg are-you-interest bg-darkContThird   p-4 text-black " v-if="isPetFromCurrentUser">
            <div id="two" class="text-container">
              <span class="text-Heading3sm font-bold text-center whitespace-nowrap line-clamp-1 text-black">You are the
                owner of {{ pet.name }} </span>
              <div class="fader fader-left"></div>
              <div class="fader fader-right"></div>
            </div>
            <div class="grid md:grid-cols-2 gap-2 mt-4">
              <UButton size="xl" color="primary" variant="solid">
                <nuxt-link :to="`/pet?id=${pet.id}`">Edit {{ pet.name }} Profile</nuxt-link>
              </UButton>
              <UButton size="xl" color="white" variant="solid">
                <nuxt-link :to="'/applicants/' + pet.id">See Applicants</nuxt-link>
              </UButton>
            </div>
          </div>
          <div class="w-full rounded-lg are-you-interest bg-darkContThird   p-4 text-black  " v-else>
            <div class="" v-if="!user">
              <div id="two" class="text-container">
                <span class="text-Heading3sm font-bold text-black text-center whitespace-nowrap line-clamp-1">Are you
                  interested in
                  {{
                    pet.name }}?</span>
                <div class="fader fader-left"></div>
                <div class="fader fader-right"></div>
              </div>
              Please first <nuxt-link class="text-contAccent font-bold" to="/signup">Sign up</nuxt-link> or <nuxt-link
                class="text-contAccent font-bold" to="/login">Log in</nuxt-link> to apply
            </div>
            <div class="" v-else>
              <div id="two" class="text-container">
                <span class="text-Heading3sm font-bold text-center whitespace-nowrap line-clamp-1 text-black"> {{
                  isPetFormFilled ? 'You have already filled the form for ' : 'Are you interested in' }}
                  {{
                    pet.name }}{{ isPetFormFilled ? '!' : '?' }} </span>
                <div class="fader fader-left"></div>
                <div class="fader fader-right"></div>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-2 mt-4">
              <UButton size="xl" color="primary" variant="solid" :disabled="!user || isPetFormFilled">
                <nuxt-link v-if="!isPetFormFilled" class="w-full h-full" :to="'/form?id=' + pet.id">Prerequisites
                  form</nuxt-link>
                <span v-else>
                  Form filled
                </span>
              </UButton>
              <UButton size="xl" label="Prerequisites" color="white" variant="outline" class="bg-Bg font-bold ">
                <nuxt-link class="w-full h-full" to="/about-adoption">About Adoption</nuxt-link>
              </UButton>
            </div>
          </div>
        </div>
        <div class="tabs-details mt-12 md:mt-24 ">
          <UTabs :items="items" class="" :ui="{
            wrapper: ' relative space-y-2',
            container: 'relative w-full  bg',
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
                , background: 'bg-transparent', active: 'text-gray-900 dark:text-white', inactive: 'text-gray-500 dark:text-gray-400',
                height: 'h-8', padding: 'px-3', size: 'text-sm', font: 'font-medium', rounded: 'rounded-md', shadow: ''
              },
            },
          }
            ">
            <template #item="{ item }">
              <div class=" py-16">
                <p class="text-Heading3sm font-bold leading-6 text-gray-900 dark:text-white">
                  {{ pet.name }}'s {{ item.label }}
                </p>
                <div v-if="item.key === 'history'" class="space-y-3">
                  <p class=" mt-5 text-Body1sm font-regular  dark:text-darkContText leading-tight">
                    {{ pet.history }}
                  </p>
                </div>
                <div v-else-if="item.key === 'personality'" class="space-y-3">
                  <p>
                    {{ pet.personalityDescription }}
                  </p>
                  <ul class="space-y-4 md:grid md:grid-cols-2 md:space-y-0 md:gap-4 md:items-center">
                    <li class="h-full w-full" v-for="  adjective   in   pet.personality  " :key="adjective">
                      <div v-for="  explainedAdjective   in   personalityAdjectivesExplained  "
                        :key="explainedAdjective.label">
                        <div class="grid gap-4 rounded-lg place-items-center dark:bg-darkContSecond bg-contSecond p-4"
                          v-if="adjective.toUpperCase() === explainedAdjective.label.toUpperCase()">
                          <div
                            class="col-start-1 col-end-2 icon w-24 h-24 rounded-lg bg-contAccent grid place-items-center text-darkContText ">
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
                              <li v-for="  item   in   explainedAdjective.list  " class="text-Captionsm leading-tight"
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
                    <li v-for=" ( adjective, index )  in   pet.healthConditions  " :key="adjective">
                      <div>
                        <div class="flex gap-4" v-if="adjective.answer === 'Yes'">
                          <Icon size="20" name="mdi:check" class="bg-contAccent text-white rounded-full p-[2px]">
                          </Icon>
                          {{ HealthConditionOptions[index].responseIfYes }}
                        </div>
                        <div class="flex gap-4" v-else>
                          <Icon size="20" name="mdi:window-close" class="bg-contAccent text-white rounded-full">
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
      </div>
      <div class="shelter-info bg-[#166DD2] mt-16 pt-24 pb-8 relative text-white" v-if="shelter">
        <div class="flex items-center flex-col justify-center gap-4 ">
          <div class="absolute -top-12">
            <nuxt-img v-if="shelter.image" :src="shelter.image"
              class="rounded-full w-32 h-32 border-8 object-cover border-[#A1ABCF]"></nuxt-img>

          </div>
          <div class="flex flex-col gap-3">
            <h3 class="text-Heading3sm font-bold text-center"> {{ shelter.name }} </h3>
            <p class="text-Body1sm font-regular flex gap-2  items-center"> <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
              </svg>
              {{ shelter.email ?? 'No email provided' }}</p>
            <p class="text-Body1sm font-regular flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

              {{ shelter.address ?? 'No address provided' }}
            </p>
            <p class="text-Body1sm font-regular flex gap-2  items-center"><svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              {{ shelter.phone ?? 'No phone provided' }}</p>
          </div>
        </div>
      </div>


      <div class="flex flex-col pet-available-cta px-5 gap-8 my-32" v-if="relatedPets.length">
        <h3 class="text-Heading3sm font-bold text-center mt:">Pet available for adoption</h3>
        <div class="flex w-full items-center justify-center gap-5">
          <div class="" :key="animal.id" v-for="( animal, index ) in  relatedPets ">
            <nuxt-link class="grid relative w-32 h-32 overflow-hidden rounded-xl shadow-xl grid-cols-3 grid-rows-3"
              :to="`/meet-them/${animal.id}`">
              <h6
                class="row-start-3 row-end-4 col-start-1 col-end-4 capitalize z-30 text-Heading6lg font-bold font-Inter tracking-widest relative place-self-center text-contSecond text-center">
                {{ animal.name }}
              </h6>
              <nuxt-img v-if="animal.images.length > 0" :src="animal.images[0]"
                class="row-span-full col-span-full object-cover object-center z-0 w-full h-full max-h-full max-w-full"
                width="100%" height="100%"></nuxt-img>
              <div class="absolute h-[40%] w-full z-10 bottom-0 left-0"
                style="background: linear-gradient(0deg, rgba(0,0,0) 0%, rgba(0, 0, 0, 0) 100%);"></div>
            </nuxt-link>
          </div>
        </div>
        <div class="flex items-center justify-center gap-4">

          <UButton size="xl" color="primary" class="py-3 px-6" variant="solid">

            <nuxt-link to="/meet-them" class="text-white font-bold w-full h-full">Meet Them</nuxt-link>
          </UButton>

        </div>
      </div>
    </div>
    <div class="" v-else-if="!errorPet && !pet">
      <Loader />

    </div>
    <div class="flex items-center justify-center h-[80vh] flex-col gap-4" v-else>
      <h1 class="text-Heading1sm font-bold text-center">Pet not found</h1>
      <nuxt-link to="/meet-them" class="text-contAccent font-bold">Go back to meet them</nuxt-link>

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
import { useUserSessionStore } from '@/stores/UserSessionStore';
const UserSessionStore = useUserSessionStore();
const { itemsPets, currentPrismaUser } = storeToRefs(UserSessionStore);
const { fetchUserData, getCurrentUser } = UserSessionStore;
const ShelterStore = useShelterStore();
const PetStore = usePetStore();
const { pet, shelter, relatedPets } = storeToRefs(PetStore);
const route = useRoute();
const router = useRouter();

const errorPet = ref(false);
const isPetFormFilled = computed(() => {
  return itemsPets?.value?.appointments?.some((appointment: any) => appointment.petId === pet.value.id)
})
const isPetFromCurrentUser = computed(() => {
  return Number(currentPrismaUser?.value?.id) === pet.value?.shelterId
})

onMounted(async () => {
  fetchUserData(user.value);
  getCurrentUser();
  if (route.params.slug) {
    try {
      await PetStore.fetchPet(route.params.slug);
      if (pet.value) {
        shelter.value = ShelterStore.findShelterById(pet.value.shelterId);
        await PetStore.fetchRelatedPets();

        useHead({
          title: pet.value?.name,
          titleTemplate: '%s | AnimalGod',
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: pet.value?.history,
            },
          ],
        })
        if (user.value?.user_metadata.isShelter && !isPetFromCurrentUser.value) {
          // If not, redirect to another page
          router.push('/');
          return;
        }
      }
    }
    catch (err) {
      console.log(err)
      errorPet.value = true;

    }
  }
  let container2 = document.querySelector("#two");
  let text2 = document.querySelector("#two span");

  if (container2?.clientWidth < text2?.clientWidth) {
    text2.classList.add("animate");
  }

})

onUnmounted(() => {
  console.log('unmounted reset pet')
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
.list-slug {
  @apply capitalize flex items-center justify-center h-min;

  &::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
    @apply bg-white
  }
}

#two {
  width: 100%;

  overflow: hidden;
}

.text-container {
  min-width: 0;
  font-size: 2rem;
  color: #708090;
  white-space: nowrap;
  overflow: visible;
  position: relative;


  span {
    display: inline-block;
  }

  .animate {
    position: relative;
    animation: leftright 3s infinite alternate ease-in-out;
  }
}

@keyframes leftright {

  0%,
  20% {
    transform: translateX(0%);
    left: 0%;
  }

  80%,
  100% {
    transform: translateX(-100%);
    left: 100%;
  }
}

.fader {
  position: absolute;
  top: 0;
  height: 100%;
  width: 25px;

  /* &.fader-left {
    left: 0;
    background: linear-gradient(to left,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.2));
  }

  &.fader-right {
    right: 0;
    background: linear-gradient(to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.2));
  } */
}

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