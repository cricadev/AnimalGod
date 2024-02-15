import { defineStore, acceptHMRUpdate } from "pinia";

export const useAppointmentStore = defineStore("AppointmentStore", () => {

});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useAppointmentStore, import.meta.hot)
  );
}
