import { create } from "zustand";
import { Chat } from "../entities/ChatEntity";
import { Message } from "../entities/MessageEntity";

interface ChatState {
    username: string;
    chats: Chat[];

    setUsername: (username: string) => void;
    addMessage: (chatId: string, message: Message) => void;
    loadChats: (chats: Chat[]) => void;
    getChatById: (chatId: string) => Chat | undefined;
}


export const useChatStore = create<ChatState>()( ( set, get ) => ({
    // Atributos
    username: '',
    chats: [],

    // Metodos
    setUsername: (username: string) => {
        set({
            username,
        });
    },
    loadChats: (chats) => set({ chats }),
    addMessage: (chatId, message) => set(state => ({
        chats: state.chats.map(chat => (
            chat.chatId === chatId 
                ? {
                    ...chat,
                    messages: [ ...chat.messages, message ],
                    lastMessage: message,
                    unreadCount: chat.unreadCount + 1,
                } : chat
        ))
    })),
    getChatById: (chatId) => {
        const chat = get().chats.find( chat => chat.chatId === chatId);
        return chat;
    },
}));