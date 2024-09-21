export interface User {
    userId: string;
    name: string;
}

export interface Message {
    id: string;
    senderId: string;
    content: string;
    timestamp: Date;
    messageType: "text" | "image" | "video";
    status: "sent" | "delivered" | "read";
}