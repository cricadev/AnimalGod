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
    <div v-else class="h-full">

      <div class="h-[50vh]">
        <h2 class="text-Heading1sm font-bold capitalize text-center">
          {{ data?.name ?? "No name" }}
        </h2>
        <Carousel ref="myCarousel" class="w-full h-full overflow-hidden rounded-xl shadow-xl" :start-slide="currentSlide"
          @slide-end="onSlideEnd" :wrap-around="true" snap-align="center" :touch-drag="false">
          <Slide class="grid relative w-full h-full overflow-hidden rounded-xl shadow-xl grid-cols-2 grid-rows-2 gap-5"
            v-for="(img, index) in data?.images">
            <nuxt-img
              :src="'https://selsrqgtbifccztqjvag.supabase.co/storage/v1/object/public/avatars/avatars/' + data?.name + index"
              class="row-span-full col-span-full object-cover object-center z-0 w-full h-full max-h-full max-w-full">
            </nuxt-img>
          </Slide>
          <template #addons>
            <Pagination class="results-pagination" />
            <Navigation class="" />
          </template>
        </Carousel>
      </div>

      <div class="basic-info bg-contAccent mx-4 rounded-lg">

        <ul class="list-disc list-inside">
          <li>
            {{ data.breed }}
          </li>
          <li>
            {{ data.age }} years old
          </li>
          <li>
            {{ data.gender }}
          </li>

          <li>
            Good with {{ data.goodWith }}
          </li>
          <li>
            {{ data.size }} size
          </li>
          <li class="leading-tight font-bold text-sm">
            {{ data.personality[0] }}
          </li>
        </ul>



      </div>

      <div class="are-you-interest bg-darkContThird mx-4 px-8 py-2 text-black">
        <div v-if="!user">
          <h3 class="text-Heading3sm font-bold">Are you interested in {{ data.name }}?</h3>
          Please first <nuxt-link class="text-contAccent font-bold" to="/signup">Sign up</nuxt-link> or <nuxt-link
            class="text-contAccent font-bold" to="/login">Log in</nuxt-link> to apply
          <div class="flex items-center justify-center gap-4">
            <UButton size="xl" label="Prerequisits form" color="primary" variant="solid" />
            <UButton size="xl" label="Prerequisites" color="primary" variant="solid" />
          </div>

        </div>
        <div class="" v-else-if="user?.user_metadata?.isShelter">
          <h3 class="text-Heading3sm font-bold">Are you interested in {{ data.name }}?</h3>
          Please first <nuxt-link class="text-contAccent font-bold" to="/signup">Sign up</nuxt-link> or <nuxt-link
            class="text-contAccent font-bold" to="/login">Log in</nuxt-link> to apply
          <div class="flex items-center justify-center gap-4">
            <UButton size="xl" label="Prerequisits form" color="primary" variant="solid" />
            <UButton size="xl" label="Prerequisites" color="primary" variant="solid" />
          </div>

        </div>
        <div class="" v-else>

          <h3 class="text-Heading3sm font-bold">Are you interested in {{ data.name }}?</h3>
          Please first <nuxt-link class="text-contAccent font-bold" to="/signup">Sign up</nuxt-link> or <nuxt-link
            class="text-contAccent font-bold" to="/login">Log in</nuxt-link> to apply
          <div class="flex items-center justify-center gap-4">
            <UButton size="xl" label="Prerequisits form" color="primary" variant="solid" />
            <UButton size="xl" label="Prerequisites" color="primary" variant="solid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";
import type { Pet } from "~/types";
const route = useRoute();
// get carouselImages value from animalDataByName
const user = useSupabaseUser();


const currentSlide = ref(0);


const { data, error, pending } = await useLazyFetch<Pet>(`/api/${route.params.slug}`);

if (error) {
  console.log(error)
}

console.log(data.value?.images)
const onSlideEnd = () => {
  currentSlide.value += 1;
};


</script>
