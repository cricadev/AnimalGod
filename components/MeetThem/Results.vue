<template>
  <div class="flex justify-center items-center flex-col  mx-5 h-full">
    <div class="my-12 flex flex-col justify-center items-center text-center">
      <span class="text-Captionlg font-semibold font-Inter text-contInactive mb-4"> {{ query }} {{ queryParamsText
      }}</span>
      <span class="text-Captionlg font-semibold font-Inter text-contInactive mb-4">{{ allData?.length }} results</span>
      <h4 class="text-Heading4sm  lg:text-Heading3lg font-bold font-Inter mb-1">
        Black cats are less likely to be adopted
      </h4>
      <p class="text-Footer font-regular text-contInactive leading-none mx-8 lg:text-sm">
        In a study of shelters in Colorado, solid black cats took an average of
        26.55 days to be adopted compared to 20.64 days for their non-black
        counterparts.
      </p>
    </div>

    <div v-if="pending">
      <Loader />

    </div>
    <div class="" v-else-if="error || !allData">
      There's an error in the API CALL
      {{ error }}
    </div>

    <div class="px-2 max-w-4xl 2xl:max-w-6xl" v-else>
      <div class="" v-if="!isLoadingSearch && !isPetSearchInvalid">
        <div
          class="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 lg:grid-cols-4 h-[50vh] gap-4">
          <div v-for="animal in myData" :key="animal.name">
            <nuxt-link class="grid relative w-full h-full overflow-hidden rounded-xl shadow-xl grid-cols-3 grid-rows-3"
              :to="`/meet-them/${animal.name}`">
              <h6
                class="row-start-3 row-end-4 col-start-1 col-end-4 capitalize z-50 text-Heading6lg font-bold font-Inter tracking-widest relative place-self-center text-contSecond">
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

      </div>

      <div v-else-if="isLoadingSearch && !isPetSearchInvalid">
        <Loader />
      </div>
      <div v-else-if="isPetSearchInvalid && !isLoadingSearch">
        <h1>
          No pets found
        </h1>
      </div>
      <div class=" w-full flex justify-between gap-8 items-center pb-12">
        <button @click="prev(4)">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>

        </button>
        <span class="text-Captionlg font-semibold font-Inter text-contInactive ">{{ offset + 1 }} - {{ offset +
          limit }} of {{ allData?.length }}</span>
        <button @click="next(4)" :disabled="disableNext" class="disabled:text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>


        </button>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import { useformStore } from "~/stores/formStore";
import { storeToRefs } from "pinia";
import type { Pet } from "~/types";
import { useWindowSize } from "@vueuse/core";

const { height, width } = useWindowSize();

const isMobile = computed(() => width.value < 768);
const isTablet = computed(() => width.value < 1024 && width.value >= 768);
const isDesktop = computed(() => width.value >= 1024);

onMounted(() => {
  if (isMobile.value) {
    limit.value = 4;
  } else if (isTablet.value) {
    limit.value = 6;
  } else if (isDesktop.value) {
    limit.value = 8;
  }
});
watch([isMobile, isTablet, isDesktop], ([newVal, newVal1, newVa2]) => {
  if (isMobile.value === false && isTablet.value === true) {
    limit.value = 6;
  } else if (isMobile.value === true && isTablet.value === false) {
    limit.value = 4;
  }
  else if (isMobile.value === false && isTablet.value === false && isDesktop.value === true) {
    limit.value = 8;
  }
})

const props = defineProps({
  query: {
    type: String,
    required: true,
  },
  filters: {
    type: Object,
    required: false,
  },
})
const queryParamsText = ref('')
const myCarousel = ref(null);
const formStore = useformStore();
const { supabaseImages } = storeToRefs(formStore);
const { data: allData, error, pending } = await useLazyFetch<Pet[]>('/api/pets');

if (error.value) {
  console.error(error.value.message)
}

const limit = ref(4); // Number of items to display
const offset = ref(0); // Number of items to skip

const myData = computed(() => allData?.value?.slice(offset.value, offset.value + limit.value));

const next = () => {
  offset.value = Math.min(allData.value.length - limit.value, offset.value + limit.value);
}

const prev = () => {
  offset.value = Math.max(0, offset.value - limit.value);
}
const disableNext = computed(() => offset.value + limit.value >= allData.value.length);


watch(() => props.query, async (newVal) => {
  if (newVal) {
    console.log(newVal)
    const { data, error } = await useLazyFetch<Pet[]>('/api/pets?searchQuery=' + newVal);
    if (data) {
      allData.value = data.value;
      console.log(data)
    }
  } else {
    const { data, error } = await useLazyFetch<Pet[]>('/api/pets');
    if (data) {
      allData.value = data.value;
      console.log(data)
    }

  }
})
const isLoadingSearch = ref(false);
const isPetSearchInvalid = ref(false);
watch(() => props.filters, (newFilters) => {
  // Create a query string from the filters
  if (newFilters) {
    console.log(newFilters)
    const queryParams = Object.entries(newFilters)
      .filter(([key, value]) => value) // Remove entries with empty values
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');

    console.log(queryParams)
    queryParamsText.value = queryParams;
    const { data, pending, error } = useLazyFetch<Pet[]>('/api/pets?' + queryParams);

    watch(pending, (newPending) => {
      if (newPending) {
        console.log('pending', newPending)
        isLoadingSearch.value = true;
        isPetSearchInvalid.value = false;
      }
    }, { immediate: true });

    watch(error, (newError) => {
      if (newError) {
        console.log('error', newError)
        isPetSearchInvalid.value = true;
        isLoadingSearch.value = false;
      }
    }, { immediate: true });

    watch(data, (newData) => {
      if (newData) {
        console.log('data', newData)
        allData.value = newData;
        isLoadingSearch.value = false;
        isPetSearchInvalid.value = false;
        if (newData.length === 0) {
          isPetSearchInvalid.value = true
        }
        console.log(data)
      }
    }, { immediate: true });
  }
}, { deep: true })
</script>
<style scoped>
.carousel__track {
  @apply grid relative w-full h-full overflow-hidden rounded-xl shadow-xl grid-cols-2 grid-rows-2 gap-5;
}
</style>