import { defineStore, acceptHMRUpdate } from "pinia";
import type { Pet } from "~/types";

export const useformStore = defineStore("formStore", () => {
  const upload = ref(false)
  const HealthConditionOptions = [{
    label: 'Is the pet fully vaccinated?',
    value: 'Vaccinated',
  },
  {
    label: 'Is the pet sterilized?',
    value: 'Sterilized',
  },
  {
    label: 'Is the pet physically active?',
    value: 'Active',
  },
  {
    label: 'Is the pet healthy eating habits?',
    value: 'Healthy',
  },
  {
    label: 'Does the pet have good hygiene?',
    value: 'Hygienic',
  },
  {
    label: 'Does the pet have any psychological problems?',
    value: 'Psychological',
  },


  ];
  const supabase = useSupabaseClient();
  const pet = reactive<Pet>({
    id: 0,
    type: '',
    name: '',
    images: [''],

    gender: '',
    size: '', // Default to the first option
    age: null,
    breed: '', // Default to the first option
    goodWith: '', // This will be an array of selected options
    activity: '', // Default to the first option
    history: '',
    personality: [''], // This will be an array of selected options
    personalityDescription: '',
    healthConditions: HealthConditionOptions.map(condition => ({ condition: condition.value, answer: '' })),
    healthDescription: '',
    isAdopted: false,
    shelterId: null,
    appointments: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const imagesURL = ref<string[]>([]);
  const files = ref<File[]>([]);

  const handleFileUpload = async (e: any) => {
    files.value = Array.from(event.target.files);

    for (let file of files.value) {
      try {
        let filePath = `avatars/${file.name}`;
        const { data, error } = await supabase.storage.from('avatars').upload(filePath, file);
        if (error) {
          console.error('Error uploading file:', error.message);
          return

        }


        imagesURL.value = [...imagesURL.value, URL.createObjectURL(file)]

      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }

    pet.images = imagesURL.value;
    // emit('update:modelValue', files);
  };

  const deleteImage = async (index) => {

    try {
      let filePath = `avatars/${files.value[index].name}`;
      const { data, error } = await supabase.storage.from('avatars').remove([filePath]);
      if (error) {
        console.error('Error deleting file:', error.message);
        return
      }
      imagesURL.value.splice(index, 1);
      files.value.splice(index, 1);
    } catch (error) {
      console.error('Error deleting file:', error);
    }
    // emit('update:modelValue', files);


  }
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

  return {
    pet,
    imagesURL,
    files,
    upload,
    handleFileUpload,
    deleteImage

  }
});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useformStore, import.meta.hot)
  );
}
