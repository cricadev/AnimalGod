import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isMenuOpen: false,
    isSearchOpen: false,
    isLoading: false,
  }),
  persist: true,
});
