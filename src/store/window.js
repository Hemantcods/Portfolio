import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@constants";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow:(windowkey,data=null)=>set((state)=>{
        const win=state.windows[windowkey]
        if(!win) return;
        win.isOpen=true
        win.data=data ?? win.data
        win.zIndex=state.nextZIndex
        state.nextZIndex++
    }),
    closeWindow:(windowkey)=>set((state)=>{
        const win=state.windows[windowkey]
        if(!win) return;
        win.isOpen=false
        win.data=null
        win.zIndex=state.INITIAL_Z_INDEX
        state.nextZIndex++
    }),
    focusWindow:(windowkey  )=>set((state)=>{
      const win=state.windows[windowkey]
      win.zIndex=state.nextZIndex++
    }),
  })),
);

export default useWindowStore;
