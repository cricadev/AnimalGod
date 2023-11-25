<template>
  <div class="flex justify-center items-center flex-col  mx-5">
    <div class="my-12 flex flex-col justify-center items-center text-center">
      <span class="text-Captionlg font-semibold font-Inter text-contInactive mb-4">{{ myData?.length }} results</span>
      <h4 class="text-Heading4sm font-bold font-Inter mb-1">
        Black cats are less likely to be adopted
      </h4>
      <p class="text-Footer font-regular text-contInactive leading-none mx-8">
        In a study of shelters in Colorado, solid black cats took an average of
        26.55 days to be adopted compared to 20.64 days for their non-black
        counterparts.
      </p>
    </div>

    <div class="" v-if="pending">
      <h1>
        Loading...
      </h1>
    </div>
    <div class="" v-else-if="error || !myData">
      There's an error in the API CALL
    </div>
    <Carousel v-else ref="myCarousel" :wrap-around="true" snap-align="center-even" :items-to-show="myData?.length">

      <Slide v-for="animal in        myData       " :key="animal.name">

        <nuxt-link class="grid relative w-full h-full overflow-hidden rounded-xl shadow-xl grid-cols-3 grid-rows-3"
          :to="`/meet-them/${animal.name}`">
          <h6
            class="row-start-3 row-end-4 col-start-1 col-end-4 capitalize z-50 text-Heading6lg font-bold font-Inter tracking-widest relative place-self-center text-contSecond">
            {{ animal.name }}
          </h6>
          <nuxt-img v-if="animal.images.length > 0"
            :src="'https://selsrqgtbifccztqjvag.supabase.co/storage/v1/object/public/avatars/avatars/' + animal.name + '0'"
            class="row-span-full col-span-full object-cover object-center z-0 w-full h-full max-h-full max-w-full"
            width="100%" height="100%"></nuxt-img>
          <div class="absolute h-[40%] w-full z-10 bottom-0 left-0"
            :style="`background: linear-gradient(0deg, ${animal.hexColor} 0%, rgba(0, 0, 0, 0) 100%);`"></div>
        </nuxt-link>

      </Slide>
      <template #addons>
        <Pagination class="results-pagination" />

      </template>

    </Carousel>
    <div class="results-navigation">
      <button @click="prev">Prev</button>

      <button @click="next">Next</button>

    </div>


  </div>
</template>
<script setup lang="ts">
import { useformStore } from "~/stores/formStore";
import { storeToRefs } from "pinia";

import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";

import animals from "~/db/animals.json";
interface Animal {
  age: Number;
  breed: String;
  createdAt: String;
  description: String;
  id: Number;
  images: Array<String>;
  isAdopted: Boolean;
  name: String;
  type: String;
  updatedAt: String;
  hexColor: String;
}
const myCarousel = ref(null);
const formStore = useformStore();
const { supabaseImages } = storeToRefs(formStore);
onMounted(() => {
  const track = document.querySelector('.carousel__track');

  if (track) {
    track.insertAdjacentHTML('afterbegin', '<div class="card">');
    track.insertAdjacentHTML('afterbegin', '</div>')
  }
})
const currentSlide = ref(0);
const offset = ref(0)

const { data: myData, error, pending } = await useLazyFetch<Animal[]>('/api/get-all-animals?offset=' + offset.value)


const next = async () => {
  myCarousel.value?.next()

  offset.value += 4

  const { data, error, pending } = await useLazyFetch<Animal[]>('/api/get-all-animals?offset=' + offset.value)
  if (data) {
    myData.value = data.value
  }
};

const prev = async () => {
  myCarousel.value?.prev()
  offset.value -= 4
  const { data, error, pending } = await useLazyFetch<Animal[]>('/api/get-all-animals?offset=' + offset.value)
  if (data) {
    myData.value = data.value
  }
}


</script>
<style scoped>
.carousel__track {
  @apply grid relative w-full h-full overflow-hidden rounded-xl shadow-xl grid-cols-2 grid-rows-2 gap-5;
}
</style>