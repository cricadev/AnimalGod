<template>
  <div
    class="relative h-[15vh] overflow-hidden rounded-md max-w-4xl 2xl:max-w-6xl w-full mx-auto    bg-contSecond dark:bg-darkContSecond">
    <nuxt-img provider="cloudinary" src="/heroAboutAdoption_ak3i5i.png" height="100%" width="100%"
      class="absolute bottom-2 left-0"></nuxt-img>
    <nuxt-img provider="cloudinary" src="/groupCircleTopAboutAdoption_nlcpko.png" height="100%" width="100%"
      class="absolute top-0 right-0"></nuxt-img>
    <nuxt-img provider="cloudinary" src="/circleAboutAdoption_mscnaz.png" height="100%" width="100%"
      class="absolute bottom-0 left-0"></nuxt-img>
    <h2 class="line-clamp-1 w-full text-Heading6sm font-bold text-center absolute bottom-8 z-50">
      Do you wanna know what’s your perfect breed?
    </h2>
    <div class="flex flex-col items-center justify-center absolute bottom-0 z-20 left-1/2 translate-x-[-50%] gap-2 mb-2">
      <UButton size="xl" label="Try this test" color="primary" variant="solid" :ui="{
        size: {
          xl: 'text-[.55rem]',
        },
        padding: {
          xl: 'px-3 py-1 text-center justify-center',
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
    <div
      class="absolute h-[40%] w-full bg-gradient-to-t from-contSecond dark:from-darkContSecond z-10 bottom-0 left-0 to-transparent">
    </div>
  </div>
</template>
