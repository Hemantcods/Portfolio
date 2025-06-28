// sectionStore.js
import { create } from 'zustand';

const useSectionStore = create((set) => ({
  currentSection: '',
  setCurrentSection: (name) => set({ currentSection: name })
}));

export default useSectionStore;
