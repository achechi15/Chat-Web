import { create } from "zustand";

interface ChatState {
    username: string;
    setUsername: (username: string) => void;
}


export const useChatStore = create<ChatState>()( ( set ) => ({
    username: '',
    setUsername: (username: string) => {
        set({
            username,
        });
    }
}));