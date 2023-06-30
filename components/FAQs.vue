<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();

  // Get the last accordion and its button
  const lastAccordion = document.querySelector("#accordion-collapse-body-6");
  const lastButton = document.querySelector(
    "#button-accordion-collapse-heading-1.last-button"
  );

  // Check if the last accordion is hidden
  if (lastAccordion.classList.contains("hidden")) {
    // Add the border-b-2 class to the last button
    lastButton.classList.add("border-b-2");
  }

  // Listen for click events on the accordion buttons
  document
    .querySelectorAll("button[data-accordion-target]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        // Check if the last accordion is hidden
        if (lastAccordion.classList.contains("hidden")) {
          // Add the border-b-2 class to the last button
          lastButton.classList.add("border-b-2");
        } else {
          // Remove the border-b-2 class from the last button
          lastButton.classList.remove("border-b-2");
        }
      });
    });
});
</script>

<template>
  <div class="bg-contSecond dark:bg-darkContSecond p-10">
    <h1 class="font-bold font-Inter text-Heading2sm mb-16">FAQs</h1>
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          id="button-accordion-collapse-heading-1"
          class=""
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
        >
          <span class="h2">01</span>
          <span class="title">Where are you located?</span>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        class="hidden"
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div class="p-5 border-darkContThird bg-transparent">
          <p class="mb-2 text-darkBg dark:text-Bg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          id="button-accordion-collapse-heading-1"
          data-accordion-target="#accordion-collapse-body-2"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-2"
        >
          <span class="h2">02</span>
          <span class="title"
            >I am interested in learning more about an animal. Who can I
            contact?</span
          >
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        class="hidden"
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div class="p-5 border-darkContThird bg-transparent">
          <p class="mb-2 text-darkBg dark:text-Bg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          id="button-accordion-collapse-heading-1"
          data-accordion-target="#accordion-collapse-body-3"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-3"
        >
          <span class="h2">03</span>
          <span class="title">What are your adoption fees?</span>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        class="hidden"
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div class="p-5 border-darkContThird bg-transparent">
          <p class="mb-2 text-darkBg dark:text-Bg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>

      <h2 id="accordion-collapse-heading-4">
        <button
          type="button"
          id="button-accordion-collapse-heading-1"
          data-accordion-target="#accordion-collapse-body-4"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-4"
        >
          <span class="h2">04</span>
          <span class="title">What is your return policy?</span>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-4"
        class="hidden"
        aria-labelledby="accordion-collapse-heading-4"
      >
        <div class="p-5 border-darkContThird bg-transparent">
          <p class="mb-2 text-darkBg dark:text-Bg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>

      <h2 id="accordion-collapse-heading-5">
        <button
          type="button"
          id="button-accordion-collapse-heading-1"
          data-accordion-target="#accordion-collapse-body-5"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-5"
        >
          <span class="h2">05</span>
          <span class="title">Do you offer pet grooming services?</span>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-5"
        class="hidden"
        aria-labelledby="accordion-collapse-heading-5"
      >
        <div class="p-5 border-darkContThird bg-transparent">
          <p class="mb-2 text-darkBg dark:text-Bg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>

      <h2 id="accordion-collapse-heading-6">
        <button
          type="button"
          id="button-accordion-collapse-heading-1"
          class="last-button"
          data-accordion-target="#accordion-collapse-body-6"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-6"
        >
          <span class="h2">06</span>
          <span class="title">What is your adoption process?</span>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-6"
        class="hidden"
        aria-labelledby="accordion-collapse-heading-6"
      >
        <div class="p-5 border-darkContThird bg-transparent">
          <p class="mb-2 text-darkBg dark:text-Bg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <UButton size="xl" label="Read More" color="primary" variant="solid" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#button-accordion-collapse-heading-1 {
  @apply bg-transparent flex items-center  gap-4 w-full p-5 font-medium text-left text-darkBg   dark:text-Bg border-y-2 border-darkContThird border-b-0;
  .h2 {
    @apply text-Heading2sm dark:text-darkContText text-darkBg;
  }
  .title {
    @apply text-Body1sm font-semibold;
  }
}
#accordion-collapse-body-6 {
  @apply border-b-2 border-darkContThird;
}
/*
#accordion-collapse-body-6.hidden
  ~ #accordion-collapse-heading-6
  #button-accordion-collapse-heading-1.last-button {
  @apply border-b-2 border-darkContThird;
}
#accordion-collapse-body-6 {
  @apply border-b-2 border-darkContThird;
}
#accordion-collapse-body-6
  ~ #accordion-collapse-heading-6
  #button-accordion-collapse-heading-1.last-button {
  @apply border-b-0;
}*/
.border-b-2 {
  border-bottom-width: 2px !important;
}
</style>
