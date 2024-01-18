<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

const props = defineProps({
  skrew: {
    type: Boolean,
    default: false,

  },
})
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

const FAQS = [
  {
    number: "01",
    question: "Where are you located?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    number: "02",
    question: "I am interested in learning more about an animal. Who can I contact?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    number: "03",
    question: "What are your adoption fees?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    number: "04",
    question: "What is your return policy?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    number: "05",
    question: "Do you offer pet grooming services?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    number: "06",
    question: "What is your adoption process?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },

]
</script>

<template>
  <div class="bg-contSecond dark:bg-darkContSecond p-10">
    <h1 class="font-bold font-Inter text-Heading2sm mb-16">FAQs</h1>
    <div id="accordion-collapse" data-accordion="collapse" class="overflow-y-scroll h-[50vh] md:h-full">
      <div class="" v-for="(faq, index) in FAQS">

        <h2 :id="'accordion-collapse-heading-1'" :class="[
          {
            '': !skrew,
            'md:-skew-x-6': skrew,
          }
        ]">
          <button type="button" :id="'button-accordion-collapse-heading-1'" :class="[
            {
              'border-b-2': index === 5,
              'last-button': index === 5,
            }
          ]" :data-accordion-target="'#accordion-collapse-body-' + (index + 1)" aria-expanded="true"
            :aria-controls="'accordion-collapse-body-' + (index + 1)">
            <span class="h2">{{ faq.number }}</span>
            <span class="title"> {{ faq.question }} </span>
          </button>
        </h2>
        <div :id="'accordion-collapse-body-' + (index + 1)" class="hidden"
          :aria-labelledby="'accordion-collapse-heading-' + (index + 1)">
          <div class="p-5 border-darkContThird" :class="[
            {
              '': !skrew,
              'md:-skew-x-6': skrew,
            }
          ]">
            <p class="mb-2 text-darkBg dark:text-Bg ">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </p>
          </div>

        </div>
      </div>

    </div>
    <div class="flex justify-center mt-8 lg:justify-start">
      <UButton size="xl" label="Read More" color="primary" variant="solid" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#button-accordion-collapse-heading-1 {
  @apply bg-transparent flex items-center gap-4 w-full p-5 font-medium text-left text-darkBg dark:text-Bg border-y-2 border-darkContThird border-b-0;

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
