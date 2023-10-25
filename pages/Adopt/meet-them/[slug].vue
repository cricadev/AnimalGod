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

console.log(data.value);


</script>
