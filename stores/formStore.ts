import { defineStore, acceptHMRUpdate } from "pinia";
import type { Pet, Appointment } from "~/types";

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


  const qAndAOptions = [{
    label: 'Do you have enough time to spend with your pet?',
    responseIfYes: 'Enough time',
    responseIfNo: 'Not enough time',
  },
  {
    label: 'Had you have a pet before?',
    responseIfYes: 'Had a pet before',
    responseIfNo: 'Never had a pet before',
  },
  {
    label: 'Do you travel a lot?',
    responseIfYes: 'Travel a lot',
    responseIfNo: 'Do not travel a lot',
  },
  {
    label: 'Do you want additional info on dog care?',
    responseIfYes: 'Want additional info on dog care',
    responseIfNo: 'Do not want additional info on dog care',
  },
  ];


  const supabase = useSupabaseClient();
  const user = useSupabaseUser();
  const form = reactive<Appointment>({
    id: 0,
    liveWith: [],
    liveWithDescription: '',
    liveIn: false,
    isRenting: false,
    rentAcceptance: false,
    qAndA: qAndAOptions.map(condition => ({ condition: condition.value, answer: '' })),
    qAndADescription: '',
    whyMessage: '',
    clientId: 0,
    client: null,
    petId: 0,
    pet: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
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
  const filePaths = ref([]);

  const handleFileUpload = async (e: any, storageTableName: string, entityName: string) => {
    files.value = Array.from(e.target.files);
    const counter = ref(0);
    for (const file of files.value) {
      try {
        let filePath = `${storageTableName}/${entityName}${counter.value}`;
        const { data, error } = await supabase.storage.from(storageTableName).upload(filePath, file);
        counter.value = counter.value + 1;
        if (error) {
          console.error('Error uploading file:', error.message);
          return
        }
        imagesURL.value = [...imagesURL.value, URL.createObjectURL(file)]
        filePaths.value.push(filePath);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
    pet.images = imagesURL.value;
  };

  const deleteImage = async (index: number, storageTableName: string, entityName: string) => {
    try {
      let filePath = `${storageTableName}/${entityName}${index}`;
      console.log(filePath)
      const { data, error } = await supabase.storage.from(storageTableName).remove([filePath]);
      if (error) {
        console.error('Error deleting file:', error.message);
        return
      }
      imagesURL.value.splice(index, 1);
      files.value.splice(index, 1);
      filePaths.value.splice(index, 1);
    } catch (error) {
      console.error('Error deleting file:', error);
    }
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
    form,
    imagesURL,
    files,
    upload,
    handleFileUpload,
    deleteImage,
    resetPet,
    supabaseImages,
    HealthConditionOptions

  }
});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useformStore, import.meta.hot)
  );
}
