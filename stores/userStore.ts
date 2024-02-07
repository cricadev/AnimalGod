import { defineStore, acceptHMRUpdate } from "pinia";
import { useSupabaseUser } from "@nuxtjs/supabase/dist/runtime/composables/useSupabaseUser";
export const useuserStore = defineStore("userStore", () => {
  const user = useSupabaseUser();
});
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useuserStore, import.meta.hot)
  );
}
