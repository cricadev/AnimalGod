<template>
  <div class="section-step-layout">
    <RegisterAnimalFormPreHeaderStep question="Add some photos and one video of the pet" :expression="!upload">
    </RegisterAnimalFormPreHeaderStep>

    <label v-if="!upload" for="imageInput" class="text-contInactive">
      <div class="flex flex-col items-center justify-center gap-4">
        <Icon class="h-20 w-20 " name="material-symbols:photo-camera-rounded"></Icon>
        <span>Select from gallery or take a picture</span>
      </div>
      <input type="file" id="imageInput" @change="handleFileUpload" multiple accept="image/*">
    </label>
    <div class="selected-images" v-else>
      <div class="image-container" v-for="(img, index) in imagesURL.slice(0, 5)" :key="index">
        <img :src="img" alt="pet image" class="w-full h-full object-cover">

        <button class="delete-icon" @click="deleteImage(index)">

          <Icon class="h-5 w-5 p-px rounded-sm text-white bg-contAccent" name="cil:trash"></Icon>
        </button>
      </div>
      <div v-if="files.length > 5" class="more-images">
        +{{ files.length - 5 }} more
      </div>
    </div>


    <RegisterAnimalFormBackAndNextButtons @next="emit('next')" @back="emit('back')" :expression="files.length < 1">
    </RegisterAnimalFormBackAndNextButtons>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useformStore } from '~/stores/formStore';
const formStore = useformStore()
const { imagesURL, pet, files, upload } = storeToRefs(formStore)
const { handleFileUpload, deleteImage } = formStore

const supabase = useSupabaseClient()

defineProps({
  modelValue: {
    type: Array,
    required: true
  }
})


const emit = defineEmits(['update:modelValue', 'next', 'back'])

// const handleFileUpload = async (event) => {
//   files.value = Array.from(event.target.files);

//   for (let file of files.value) {
//     try {
//       let filePath = `avatars/${file.name}`;
//       const { data, error } = await supabase.storage.from('avatars').upload(filePath, file);
//       if (error) {
//         console.error('Error uploading file:', error.message);
//         return
//       }
//       imagesURL.value = [...imagesURL.value, URL.createObjectURL(file)]
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   }

//   emit('update:modelValue', files);
// }

// const deleteImage = async (index) => {


//   try {
//     const { data, error } = await supabase.storage.from('avatars').remove([`avatars/${files.value[index].name}`])

//     if (error) {
//       console.error('Error deleting file:', error.message);
//       return
//     }
//     files.value.splice(index, 1);
//     imagesURL.value.splice(index, 1);

//   } catch (error) {
//     console.error('Error deleting file:', error);
//   }
//   emit('update:modelValue', files);
// }
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