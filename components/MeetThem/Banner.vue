<template>
  <div
    class="relative h-[15vh] overflow-hidden rounded-md max-w-4xl 2xl:max-w-6xl w-full mx-auto    bg-contSecond dark:bg-darkContSecond md:flex md:flex-row">

    <div class="h-full w-full relative">
      <nuxt-img provider="cloudinary" src="/groupCircleTopAboutAdoption_nlcpko.png" height="100%" width="100%"
        class="absolute top-0 right-0"></nuxt-img>
      <nuxt-img provider="cloudinary" src="/circleAboutAdoption_mscnaz.png" height="100%" width="100%"
        class="absolute bottom-0 left-0"></nuxt-img>
      <nuxt-img provider="cloudinary" src="/heroAboutAdoption_ak3i5i.png"
        class="w-full h-full  grayscale object-contain"></nuxt-img>
    </div>

    <div class="md:flex md:flex-col lg:items-start lg:px-5  md:justify-center md:items-center md:gap-4 lg:gap-8">
      <h2
        class="line-clamp-1 w-full text-Heading6sm font-bold text-center absolute bottom-8 z-50  my-2 md:relative md:line-clamp-none md:bottom-0 md:my-0 md:text-Heading3lg md:leading-none lg:whitespace-nowrap">
        Do you wanna know what’s your perfect breed?
      </h2>
      <div
        class="md:relative flex flex-col items-center justify-center absolute bottom-0 z-20 left-1/2 translate-x-[-50%] gap-2 mb-2 md:left-0 md:translate-x-0">
        <UButton size="sm" label="Try this test" color="primary" variant="solid" class="whitespace-nowrap" />
      </div>
    </div>
    <div
      class="absolute h-[60%] w-full bg-gradient-to-t from-contSecond dark:from-darkContSecond z-10 bottom-0 left-0 to-transparent md:hidden">
    </div>
  </div>
</template>
