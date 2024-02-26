<template>
  <div class="section-step-layout">
    <FormPreHeaderStep question="Add some photos and one video of the pet" :expression="!upload">
    </FormPreHeaderStep>

    <div class="min-h-max overflow-y-auto">
      <label v-if="pet.images.length == 0" for="imageInput" class="text-contInactive">
        <div class="flex flex-col items-center justify-center gap-4">
          <Icon class="h-20 w-20 " name="material-symbols:photo-camera-rounded"></Icon>
          <span>Select from gallery or take a picture</span>
        </div>
        <input class="justify-center  mx-auto " type="file" id="imageInput"
          @change="(event) => handleFileUpload(event, 'animalgod-files', pet?.name)" multiple accept="image/*">
      </label>
      <div class="selected-images" v-else>
        <div class="image-container" v-for="(img, index) in pet.images" :key="index">
          <img :src="img" alt="pet image" class="w-full h-full object-cover">
          <button class="delete-icon" @click="(event) => deleteImage(index, 'animalgod-files', pet.name, img)"
            :disabled="isDeleting">
            <Icon class="h-5 w-5 p-px rounded-sm text-white bg-contAccent" name="cil:trash"></Icon>
          </button>
        </div>
        <div v-if="files.length > 5" class="more-images">
          +{{ files.length - 5 }} more
        </div>
      </div>
      <label v-if="pet.images.length !== 0" for="imageInput" class="text-contInactive">
        <div class="flex flex-col items-center justify-center gap-4">
          <Icon class="h-20 w-20 " name="material-symbols:photo-camera-rounded"></Icon>
          <span>Fancy another picture?</span>
        </div>
        <input type="file" id="imageInput" @change="(event) => handleFileUpload(event, 'animalgod-files', pet?.name)"
          multiple accept="image/*">
      </label>
    </div>


    <FormBackAndNextButtons @update-type="emit('update-type', 8)" @next="emit('next')" @back="emit('back')"
      :expression="files.length < 1">
    </FormBackAndNextButtons>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useformStore } from '~/stores/formStore';
const formStore = useformStore()
const { imagesURL, pet, files, upload, isDeleting } = storeToRefs(formStore)
const { handleFileUpload, deleteImage } = formStore

const supabase = useSupabaseClient()

defineProps({
  modelValue: {
    type: Array,
    required: true
  }
})


const emit = defineEmits(['update:modelValue', 'next', 'back', 'update-type'])

</script>

<style scoped>
.selected-images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
}

.image-container {
  position: relative;
}

.delete-icon {
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  border: none;
  background-color: transparent;
}

.more-images {
  grid-column: span 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
</style>