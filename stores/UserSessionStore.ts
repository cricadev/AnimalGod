import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserSessionStore = defineStore("UserSessionStore", () => {
  const session = ref(null);
  return { session }
});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useUserSessionStore, import.meta.hot)
  );
}
