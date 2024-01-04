import { defineStore } from 'pinia';

export const usePositionStore = defineStore('positionStore', {
  state: () => ({
    activeSection: 'home', // Initial active section
  }),
  actions: {
    setActiveSection(section) {
      this.activeSection = section;
    },
  },
});