interface Shelter {
  id: number;
  name: string;
  email: string;
  pets: Pet[];
  country: string;
  phone: string;
  image?: string;
  address?: string;
  website?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Client {
  id: number;
  name: string;
  email: string;
  appointments: Appointment[];
  country: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Pet {
  id: number;
  type: string;
  name: string;
  images: string[];
  gender: boolean;
  size: Size;
  breed: Breed;
  goodWith: GoodWith[];
  activity: ActivityLevel;
  history: string;
  personality: personalityAdjectives[];
  personalityDescription: string;
  healthConditions: any;
  healthDescription?: string;
  isAdopted: boolean;
  shelterId?: number;
  shelter?: Shelter;
  appointments: Appointment[];
  createdAt: Date;
  updatedAt: Date;
}

interface Appointment {
  id: number;
  liveWith: liveWith[];
  liveWithDescription: string;
  liveIn: boolean;
  isRenting: boolean;
  rentAcceptance?: boolean;
  qAndA: any;
  qAndADescription: string;
  whyMessage: string;
  clientId: number;
  client: Client;
  petId: number;
  pet: Pet;
  createdAt: Date;
  updatedAt: Date;
}

enum Size {
  SMALL,
  MEDIUM,
  LARGE
}

enum Breed {
  GOLDEN_RETRIEVER,
  LABRADOR_RETRIEVER,
  GERMAN_SHEPHERD,
  BULLDOG,
  BEAGLE,
  POODLE,
  ROTTWEILER,
  YORKSHIRE_TERRIER,
  BOXER,
  DACHSHUND
}

enum GoodWith {
  CHILDREN,
  DOGS,
  CATS
}

enum ActivityLevel {
  LOW,
  MEDIUM,
  HIGH
}

enum personalityAdjectives {
  AFFECTIONATE,
  DOMINANT,
  RELAXED,
  INDEPENDENT,
  DEVOTED,
  CONFIDENT,
  ALOOF,
  COMPILANT,
  TIMID,
  ENTHUSIASTIC
}

enum liveWith {
  PARTNER,
  CHILDREN,
  OTHER_PETS,
  ALONE
}