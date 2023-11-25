import { defineStore, acceptHMRUpdate } from "pinia";
import type { Pet } from "~/types";

export const useformStore = defineStore("formStore", () => {
  const upload = ref(false)
  const HealthConditionOptions = [{
    label: 'Is the pet fully vaccinated?',
    responseIfYes: 'Fully vaccinated',
    responseIfNo: 'Not all vacuums',

  },
  {
    label: 'Is the pet sterilized?',
    responseIfYes: 'Sterilized',
    responseIfNo: 'Not sterilized',
  },
  {
    label: 'Is the pet physically active?',
    responseIfYes: 'Physically active',
    responseIfNo: 'Not physically active',
  },
  {
    label: 'Is the pet healthy eating habits?',
    responseIfYes: 'Healthy eating habits',
    responseIfNo: 'Unhealthy eating habits',
  },
  {
    label: 'Does the pet have good hygiene?',
    responseIfYes: 'Good hygiene',
    responseIfNo: 'Bad hygiene',
  },
  {
    label: 'Does the pet have any psychological problems?',
    responseIfYes: 'Psychological problems',
    responseIfNo: 'No psychological problems',
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
  const supabaseImages = ref<string[]>([]);
  const resetPet = () => {

    pet.value = {
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
    }
  }

  const handleFileUpload = async (e: any) => {
    files.value = Array.from(e.target.files);
    const counter = ref(0);
    for (const file of files.value) {
      try {
        let filePath = `avatars/${pet.name}${counter.value}`;
        const { data, error } = await supabase.storage.from('avatars').upload(filePath, file);
        counter.value = counter.value + 1;
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

    supabaseImages.value = pet.name

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
    deleteImage,
    resetPet,
    supabaseImages

  }
});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useformStore, import.meta.hot)
  );
}
