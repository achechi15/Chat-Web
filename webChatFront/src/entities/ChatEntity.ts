import { Message, User } from "./MessageEntity";

export interface Chat {
    chatId: string;
    participants: User[];
    messages: Message[];
    createdAt: Date;
    lastMessage: Message;
    chatType: "private" | "group";
    isArchived: boolean;
    isMuted: boolean;
    unreadCount: number;
}