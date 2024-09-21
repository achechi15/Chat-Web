import { Chat } from "../entities/ChatEntity";

export const mockChats: Chat[] = [
    {
        chatId: 'chat1',
        participants: [
            { userId: 'user_1', name: 'Alexis' },
            { userId: 'user_2', name: 'Jon' },
        ],
        messages: [
            {
            id: 'message1',
            senderId: 'user_1',
            content: 'Hello, Alexis!',
            timestamp: new Date(),
            messageType: 'text',
            status: 'sent'
            },
            {
                id: 'message2',
                senderId: 'Alexis',
                content: 'Hello, Bob!',
                timestamp: new Date(),
                messageType: 'text',
                status: 'sent',
            }
        ],
        createdAt: new Date(),
        lastMessage: {
            id: 'message1',
            senderId: 'user_1',
            content: 'Hello, Bob!',
            timestamp: new Date(),
            messageType: 'text',
            status: 'sent'
        },
        chatType: 'private',
        isArchived: false,
        isMuted: false,
        unreadCount: 0
        }
];
