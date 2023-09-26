<template>
  <div class="">
    <!-- HERO -->
    <div class="relative h-[30vh]">
      <nuxt-img provider="cloudinary" src="/e_grayscale/heroAboutAdoption_ak3i5i.png" height="100%" width="100%"
        class="absolute bottom-8 left-0"></nuxt-img>
      <nuxt-img provider="cloudinary" src="/groupCircleTopAboutAdoption_nlcpko.png" height="100%" width="100%"
        class="absolute top-0 right-0"></nuxt-img>
      <nuxt-img provider="cloudinary" src="/circleAboutAdoption_mscnaz.png" height="100%" width="100%"
        class="absolute bottom-0 left-0"></nuxt-img>
      <h2 class="text-Heading2sm font-bold text-center absolute bottom-0 z-20">
        Everything you need to know about adoption
      </h2>
      <div class="absolute h-[40%] w-full bg-gradient-to-t from-Bg dark:from-darkBg z-10 bottom-0 left-0 to-transparent">
      </div>
    </div>
    <!-- DO'S AND DON'TS -->
    <div class="pt-12 px-5 flex flex-col gap-12">
      <div class="flex gap-4">
        <h1 class="text-Heading1sm font-extrabold">01</h1>
        <div class="flex flex-col gap-2">
          <h3 class="text-Heading3sm font-bold leading-tight">
            Adopting an animal from a shelter is a wonderful way to provide a
            forever home for a needy pet.
          </h3>
          <p class="text-Body1sm font-regular leading-tight">
            Adopting an animal from a shelter is a wonderful way to provide a
            forever home for a needy pet. However, there are some important
            things to keep in mind before making the commitment to adopt. First
            and foremost, it is important to do your research on the animal you
            are interested in adopting. This means learning about the animal's
            behavior and history, as well as what kind of care they will need.
            Once you have done your research, it is important to visit the
            shelter to meet the animal in person. This will help you to gauge
            whether or not the animal is a good fit for your home. Finally, be
            prepared to provide the animal with a forever home. This means
            having the time, patience, and resources to provide the animal with
            everything they need.
          </p>
        </div>
      </div>
      <div class="flex gap-4">
        <h1 class="text-Heading1sm font-extrabold">02</h1>
        <div class="flex flex-col gap-2">
          <h3 class="text-Heading3sm font-bold leading-tight">
            Do's and Dont's if you wish to adopt from an animal shelter
          </h3>
          <ul class="first-list">
            <li>
              Research the animal you are interested in adopting thoroughly
            </li>
            <li>Visit the shelter to meet the animal in person</li>
            <li>
              Ask the shelter staff questions about the animal's behavior and
              history
            </li>
            <li>Be prepared to provide the animal with a forever home</li>
          </ul>
          <ul class="second-list mt-12">
            <li>Adopt on impulse</li>
            <li>Get a animal without doing research first</li>
            <li>Expect the animal to conform to your lifestyle</li>
            <li>Return the animal to the shelter if it doesn't work out</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- CTA -->
    <div class="flex justify-center my-8">
      <UButton size="xl" label="Learn more" color="primary" variant="solid" :ui="{
        size: {
          xl: 'text-Captionsm',
        },
        padding: {
          xl: 'px-6 py-3',
        },
        color: {
          contAccent: {
            solid:
              ' shadow-sm  text-darkContText dark:text-white bg-contAccent hover:bg-contAccent-700 disabled:bg-white dark:bg-contAccent dark:hover:bg-contAccent/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
          },
        },
        variant: {
          solid:
            'shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
          outline:
            'ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 dark:hover:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
          soft: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 dark:bg-{color}-950 dark:hover:bg-{color}-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
          link: 'text-{color}-500 hover:text-{color}-600 dark:text-{color}-400 dark:hover:text-{color}-500 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
        },
        icon: {
          base: 'flex-shrink-0',
          size: {
            '2xs': 'h-3.5 w-3.5',
            xs: 'h-4 w-4',
            sm: 'h-4 w-4',
            md: 'h-5 w-5',
            lg: 'h-5 w-5',
            xl: 'h-6 w-6',
          },
        },
      }" />
    </div>
    <!-- FAQS -->
    <FAQs></FAQs>
    <!-- PETS FOR ADOPTION -->
    <div class="flex flex-col gap-12 h-[70vh] w-full justify-center items-center">
      <h3 class="text-Heading3sm font-bold">Pets available for adoption</h3>
      <div class="flex flex-row gap-4">
        <div class="relative">
          <nuxt-img provider="cloudinary" src="/adoptionDog01_pybtrk.png" height="100%" width="100%"></nuxt-img>
          <h6 class="text-Heading6sm font-bold absolute bottom-2 left-1/2 translate-x-[-50%] z-10 text-Bg">
            Shultz
          </h6>
          <div class="absolute h-[20%] w-full bg-gradient-to-t from-[#EBA5B0] bottom-0 left-0 to-transparent"></div>
        </div>
        <div class="relative">
          <nuxt-img provider="cloudinary" src="/adoptionDog02_xbdir8.png" height="100%" width="100%"></nuxt-img>
          <h6 class="text-Heading6sm text-Bg font-bold absolute bottom-2 left-1/2 translate-x-[-50%] z-10">
            Mickey
          </h6>
          <div class="absolute h-[20%] w-full bg-gradient-to-t from-[#EFB206] bottom-0 left-0 to-transparent"></div>
        </div>
      </div>
      <div class="flex justify-center mb-8">
        <UButton size="sm" label="Meet Them" color="primary" variant="solid" :ui="{
          size: {
            sm: 'text-Captionsm',
          },
          padding: {
            sm: 'px-6 py-3',
          },
          color: {
            contAccent: {
              solid:
                'shadow-sm  text-darkContText dark:text-white bg-contAccent hover:bg-contAccent-700 disabled:bg-white dark:bg-contAccent dark:hover:bg-contAccent/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
            },
          },
          variant: {
            solid:
              'shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
            outline:
              'ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 dark:hover:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
            soft: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 dark:bg-{color}-950 dark:hover:bg-{color}-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
            link: 'text-{color}-500 hover:text-{color}-600 dark:text-{color}-400 dark:hover:text-{color}-500 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
          },
          icon: {
            base: 'flex-shrink-0',
            size: {
              '2xs': 'h-3.5 w-3.5',
              xs: 'h-4 w-4',
              sm: 'h-4 w-4',
              md: 'h-5 w-5',
              lg: 'h-5 w-5',
              xl: 'h-6 w-6',
            },
          },
        }" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
ul {
  list-style: none;

  li {
    @apply text-Body1sm font-regular my-2 leading-tight;
  }
}

.first-list {
  li::before {
    content: url("https://res.cloudinary.com/ddc0cce3m/image/upload/checkGreen_r6qaq1.png");
    margin-right: 1rem;
    display: inline-block;
  }
}

.second-list {
  li::before {
    content: url("https://res.cloudinary.com/ddc0cce3m/image/upload/checkRed_vpapp0.png");
    margin-right: 1rem;
    display: inline-block;
  }
}
</style>
