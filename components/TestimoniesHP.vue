<script setup lang="ts">
import { Carousel, Navigation, Slide } from "vue3-carousel";
const user = useSupabaseUser();
const slidesResources = [
  {
    id: 1,
    title: `Alisson and Peter found <span class="text-darkContThird">Lily,</span> and here’s what they say`,
    image: "/v1685029472/testimonial_image0_adodv6.png",
    cover: "/v1685029471/testimonial_cover0_diclqc.png",
    content:
      "My boyfriend and I adopted sweet Lily two days after my birthday. It was a momentous day as I had waited over 8 years to adopt a dog after my previous dogs, Hershey and Chelsea had passed. Lily is my first rescue and I'm so thankful to have found her. She's affectionate, playful, energetic, and loyal. Our days are filled with walks, hikes, dog parks, belly rubs, tug of war, swimming, and fetch. She's the perfect dog for us in Colorado and we love her dearly. I'm so thankful for AnimalGod and Lily's rescue, Scroungy Dogs and Pretty Pups.",
    tag: "Alisson and Peter Alderson",
    date: "9/18/22",
    pet: "Lily",
  },
  {
    id: 2,
    title: `Sergio found <span class="text-darkContThird">Maggie,</span> and here’s what he says`,
    image: "/v1685029472/testimonial_image1_sgplja.png",
    cover: "/v1685029472/testimonial_cover1_ruewnx.png",
    content: `"I'm so glad I adopted my pet from the animal shelter! They were so helpful and informative, and I know that my pet is going to have a great life with me. Thank you AnimalGod!"`,
    tag: "Sergio de Paula",
    date: "8/23/22",
    pet: "Maggie",
  },
  {
    id: 3,
    title: `The Smith family found <span class="text-darkContThird">Lea & Ty, </span>and here’s what they say`,
    image: "/v1685029472/testimonial_image2_plsuqx.png",
    cover: "/v1685029471/testimonial_cover2_lxfahf.png",
    content: `While searching for our next furbaby after the loss of our 13-year-old female Eskie, Evie, we spotted the listings for these two, listed as a pair to be adopted together, and knew that we wanted them right away.
After filling out the application and being accepted as adopting parents, my family made the 400-mile drive from our home to Alaqua Animal Rescue to meet these two beautiful Dogs.
With a tail-wagging jump into our arms, Lea and Ty confirmed we were there for them. All the staff members were especially friendly and helpful in making our dream of adopting our new babies and in short order, we, all three of us, were on the ride back home. Thanks AnimalGod for contact my family with the shelter and find these two little angels.
`,
    tag: "The Smith family",
    date: "10/27/22",
    pet: "Lea & Ty",
  },
];
const shelterSlides = [
  {
    id: 1,
    title: `Kris and Molly found <span class="text-darkContThird">AnimalGod</span> and here’s what they say`,
    image: "/v1688158665/shelterPicture_mdyo6p.png",
    cover: "/v1688158664/shelterLogo_xzs4ip.png",
    content:
      "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor ac enim. ",
    tag: "CUDDLE BUDIES",
    date: "9/18/22",
    pet: "CUDDLE BUDIES",
  },
  {
    id: 2,
    title: `Mary found  <span class="text-darkContThird">AnimalGod</span>, and here’s what she says`,
    image: "/v1688158715/shelterPicture_gvetko.png",
    cover: "/v1688158714/shelterLogo_xhl86s.png",
    content:
      "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor ac enim. ",
    tag: "NEW ARRIVAL",
    date: "9/19/22",
    pet: "NEW ARRIVAL",
  },
  {
    id: 3,
    title: `Jane and Lily found  <span class="text-darkContThird">AnimalGod</span>,  and here’s what they say`,
    image: "/v1688158744/shelterPicture_snxhvr.png",
    cover: "/v1688158744/shelterLogo_qv2eg1.png",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod, sapien vel bibendum bibendum, sapien velit bibendum sapien, vel bibendum sapien velit bibendum sapien.",
    tag: "SUCCESS STORY",
    date: "9/20/22",
    pet: "SUCCESS STORY",
  },
  {
    id: 4,
    title: `Leslie found <span class="text-darkContThird">AnimalGod</span>, and here’s what she says  `,
    image: "/v1688158776/shelterPicture_pp8w6h.png",
    cover: "/v1688158776/shelterLogo_uwnwxw.png",
    content:
      "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Pro",
    tag: "SUCCESS STORY",
    date: "9/20/22",
    pet: "SUCCESS STORY",
  },
];
</script>

<template>
  <Carousel :wrap-around="true">
    <Slide
      class="dark:bg-contAccent bg-contAccent h-[80vh] w-full relative overflow-hidden flex flex-col gap-4 rounded-lg text-darkContText"
      v-for="slide in user?.user_metadata?.isShelter
        ? shelterSlides
        : slidesResources"
      :key="slide.content"
    >
      <h2
        v-html="slide.title"
        class="font-sans font-bold text-Heading2sm relative z-10"
      ></h2>
      <span
        class="text-contInactive place-self-end mr-4 z-10 font-medium text-base italic font-Inter"
        >{{ slide.date }}</span
      >
      <div class="relative h-[30%] w-full grid grid-cols-5 grid-rows-6 z-10">
        <nuxt-img
          provider="cloudinary"
          :src="slide.image"
          class="row-start-1 row-end-7 col-start-2 col-end-5 w-auto h-full"
        ></nuxt-img>
        <nuxt-img
          provider="cloudinary"
          :src="slide.cover"
          class="h-full w-auto object-cover object-center row-start-4 row-end-7 col-start-4 col-end-6 mt-4"
        ></nuxt-img>
      </div>
      <p
        class="mt-4 font-Inter font-regular text-Captionsm leading-tight px-4 relative z-10"
      >
        {{ slide.content }}
      </p>
      <span
        class="place-self-end mr-4 font-Inter font-medium italic text-sm relative z-10"
      >
        {{ slide.tag }}
      </span>
      <span
        class="absolute bottom-0 right-0 z-[1] font-extrabold text-right text-[#0955C9] text-[15rem] leading-none line-clamp-3"
      >
        {{ slide.pet }}
      </span>
    </Slide>
    <template #addons>
      <Navigation
        class="navigation-testimonies bg-transparent text-darkContText"
      />
    </template>
  </Carousel>
</template>
