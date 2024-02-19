<template>
  <div class=" w-full text-center justify-center flex flex-col">
    <div class="flex items-center my-4 justify-center">
      <div class="flex-1 h-px bg-[#5C6D82]"></div>
      <div class="mx-4 font-bold text-[#5C6D82] text-Heading6lg">or NOT RECOMMENDED</div>
      <div class="flex-1 h-px bg-[#5C6D82]"></div>
    </div>
    <div class="flex flex-col gap-2">
      <form>
        <UButton disabled icon="i-logos-google-icon" size="providers" type="submit" color="secondary" variant="outline"
          label="Continue with Google" :trailing="false" id="google" block />
      </form>
      <form>
        <UButton disabled icon="i-logos-facebook" size="providers" color="secondary" variant="outline"
          label="Continue with Facebook" :trailing="false" type="submit" id="facebook" block />
      </form>
    </div>
    <nuxt-link :to="isLogin ? '/signup' : 'login'" class="text-contInactive mt-4 text-Heading6sm">
      {{ isLogin ? 'Not a member?' : 'Already a member?' }}
      <strong class="text-contAccent">

        {{ isLogin ? 'Sign up' : 'Log in' }}
      </strong>
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  isLogin: Boolean,

})
</script>

<style></style>