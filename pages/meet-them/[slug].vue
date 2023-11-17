<template>
  <div class="">
    <!--Carousel Section -->

    <div class="" v-if="pending">
      <h1>
        Loading...
      </h1>
    </div>
    <div class="" v-else-if="error || !data">
      There's an error in the API CALL
      {{ error }}
    </div>
    <div v-else class="h-[50vh]">
      <h2 class="text-Heading1sm font-bold capitalize text-center">
        {{ data?.name ?? "No name" }}
      </h2>

      <Carousel ref="myCarousel" class="w-full h-full overflow-hidden rounded-xl shadow-xl" :start-slide="currentSlide"
        @slide-end="onSlideEnd" :wrap-around="true" snap-align="center" :touch-drag="false">


        <Slide class="grid relative w-full h-full overflow-hidden rounded-xl shadow-xl grid-cols-2 grid-rows-2 gap-5"
          v-for="img in data?.images">


          <nuxt-img :src="img" provider="cloudinary"
            class="row-span-full col-span-full object-cover object-center z-0 w-full h-full max-h-full max-w-full">

          </nuxt-img>

        </Slide>


      </Carousel>



    </div>
  </div>
</template>
<script setup lang="ts">
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";
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
const route = useRoute();
// get carouselImages value from animalDataByName


const currentSlide = ref(0);

const { data, error, pending } = await useLazyFetch<Animal>(`/api/${route.params.slug}`);

console.log(data.value?.images)
const onSlideEnd = () => {
  currentSlide.value += 1;
};


</script>
