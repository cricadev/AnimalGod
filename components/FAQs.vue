<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div class="mx-5 bg-contSecond dark:bg-darkContSecond mb-5">
    <h1 class="font-bold font-Inter text-Heading2sm">FAQs</h1>
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-x-0 border-b-0 border-2 border-darkContThird focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:text-gray-400 bg-transparent"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
        >
          <span>What is Flowbite?</span>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        class="hidden"
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div class="p-5 border-darkContThird bg-transparent">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to
            <a
              href="/docs/getting-started/introduction/"
              class="text-blue-600 dark:text-blue-500 hover:underline"
              >get started</a
            >
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-x-0 border-b-0 border-2 border-darkContThird focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:text-gray-400 bg-transparent"
          data-accordion-target="#accordion-collapse-body-2"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-2"
        >
          <span>Is there a Figma file available?</span>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        class="hidden"
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div class="p-5 border-darkContThird bg-transparent">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the
            <a
              href="https://flowbite.com/figma/"
              class="text-blue-600 dark:text-blue-500 hover:underline"
              >Figma design system</a
            >
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-x-0 border-b-0 border-2 border-darkContThird focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:text-gray-400 bg-transparent"
          data-accordion-target="#accordion-collapse-body-3"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-3"
        >
          <span
            >What are the differences between Flowbite and Tailwind UI?</span
          >
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        class="hidden"
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div class="p-5 border-darkContThird bg-transparent">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
            <li>
              <a
                href="https://flowbite.com/pro/"
                class="text-blue-600 dark:text-blue-500 hover:underline"
                >Flowbite Pro</a
              >
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                class="text-blue-600 dark:text-blue-500 hover:underline"
                >Tailwind UI</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
