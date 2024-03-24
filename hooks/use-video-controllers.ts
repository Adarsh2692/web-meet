import { create } from "zustand";

interface VideoControllerOptions {
    audioIcon?: boolean;
    videoIcon?: boolean;
    shareScreenIcon?: boolean;
    chatIcon?: boolean;
    setAudioIcon: (value: boolean) => void;
    setVideoIcon: (value: boolean) => void;
    setShareScreenIcon: (value: boolean) => void;
    setChatIcon: (value: boolean) => void;
    chatBox?: boolean;
    setChatBox: (value: boolean) => void;
}

export const useVideoControlState = create<VideoControllerOptions>((set) => ({
    audioIcon: false,
    videoIcon: false,
    shareScreenIcon: false,
    chatIcon: false,
    setAudioIcon: (value) => set({ audioIcon: value }),
    setVideoIcon: (value) => set({ videoIcon: value }),
    setShareScreenIcon: (value) => set({ shareScreenIcon: value }),
    setChatIcon: (value) => set({ chatIcon: value }),
    chatBox: false,
    setChatBox: (value) => set({ chatBox: value }),
}));
