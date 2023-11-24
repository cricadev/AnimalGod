<template>
  <div class="section-step-layout">
    <h2>Add some photos and one video of the pet</h2>
    <label v-if="!upload" for="imageInput" class="text-contInactive">
      <div class="flex flex-col items-center justify-center gap-4">
        <Icon class="h-20 w-20 " name="material-symbols:photo-camera-rounded"></Icon>
        <span>Select from gallery or take a picture</span>
      </div>
      <input type="file" id="imageInput" @change="handleFileUpload" multiple accept="image/*">
    </label>
    <div class="selected-images" v-else>
      <div class="image-container" v-for="(file, index) in files.slice(0, 5)" :key="index">
        {{ file }}

        <button class="delete-icon" @click="deleteImage(index)">

          <Icon class="h-8 w-8" name="cil:trash"></Icon>
        </button>
      </div>
      <div v-if="files.length > 5" class="more-images">
        +{{ files.length - 5 }} more
      </div>
    </div>

  </div>
</template>

<script setup>
const files = ref([])
console.log(files.value)
const upload = ref(false)
defineProps({
  modelValue: {
    type: Array,
    required: true
  }
})
watch(files, (newVal, oldVal) => {
  if (newVal.length > 0) {
    upload.value = true
  } else {
    upload.value = false
  }
}, {
  immediate: true,
  deep: true
})

const emit = defineEmits(['update:modelValue', 'next', 'back'])

const handleFileUpload = (event) => {
  files.value = Array.from(event.target.files);

  emit('update:modelValue', files);
}

const deleteImage = (index) => {
  files.value.splice(index, 1);
  emit('update:modelValue', files);
}
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
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
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