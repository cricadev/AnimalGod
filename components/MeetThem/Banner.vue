<template>
  <div
    class="relative h-[15vh] overflow-hidden mx-5 rounded-md bg-contSecond dark:bg-darkContSecond"
  >
    <nuxt-img
      provider="cloudinary"
      src="/e_grayscale/v1685128552/heroAboutAdoption_ak3i5i.png"
      height="100%"
      width="100%"
      class="absolute bottom-2 left-0"
    ></nuxt-img>
    <nuxt-img
      provider="cloudinary"
      src="/v1685129859/groupCircleTopAboutAdoption_nlcpko.png"
      height="100%"
      width="100%"
      class="absolute top-0 right-0"
    ></nuxt-img>
    <nuxt-img
      provider="cloudinary"
      src="/v1685129859/circleAboutAdoption_mscnaz.png"
      height="100%"
      width="100%"
      class="absolute bottom-0 left-0"
    ></nuxt-img>
    <h2
      class="line-clamp-1 w-full text-Heading6sm font-bold text-center absolute bottom-8 z-50"
    >
      Do you wanna know what’s your perfect breed?
    </h2>
    <div
      class="flex flex-col items-center justify-center absolute bottom-0 z-20 left-1/2 translate-x-[-50%] gap-2 mb-2"
    >
      <UButton
        size="xl"
        label="Try this test"
        color="primary"
        variant="solid"
      />
    </div>
    <div
      class="absolute h-[40%] w-full bg-gradient-to-t from-contSecond dark:from-darkContSecond z-10 bottom-0 left-0 to-transparent"
    ></div>
  </div>
</template>
