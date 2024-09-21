import WebSocket ,{ WebSocketServer } from 'ws';

// Interfaces para definir la estructura de datos

interface Message {
    messageId: string;
    senderId: string;
    content: string;
    timestamp: string;
    messageType: 'text' | 'image' | 'video';
    status: 'sent' | 'delivered' | 'read';
}

interface Chat {
    chatId: string;
    participants: Participant[];
    messages: Message[];
    chatType: 'private' | 'group';
}

interface Participant {
    userId: string;
    name: string;
}

interface SendMessagePayload {
    chatId: string;
    senderId: string;
    content: string;
    messageType: 'text' | 'image' | 'video';
}

interface CreateChatPayload {
    participants: Participant[];
    chatType: 'private' | 'group';
}

interface MarkMessageReadPayload {
    messageId: string;
}

interface ActionPayload {
    action: 'send_Message' | 'create_chat' | 'mark_message_read' | 'createUser';
    data: any;
}

const wss = new WebSocketServer({ port: 8080});

const users: Map<string, WebSocket> = new Map(); 

wss.on('connection', (ws) => {
    console.log('Nuevo cliente conectado')
    
    


    // Handle del mensaje del front
    ws.on('message', async (message) => {
        const parsedMessage: ActionPayload = JSON.parse(message.toString());
        console.log(parsedMessage);
        switch(parsedMessage.action) {
            case 'createUser': 
                handleCreateUser(parsedMessage.data, ws);
                break;
            case 'create_chat':
                console.log('aún no implementado');
                break;
            case 'mark_message_read':
                console.log('aún no implementado');
                break;
            case 'send_Message':
                console.log('aún no implementado');
                break;
            default: 
                console.log('Función no implementada')
        }

    })

    ws.on('close', () => {
        console.log('Cliente desconectado');
    })
})


console.log('WS running on port 8080');


const handleCreateUser = (user: string, ws: WebSocket) => {
    users.set(user, ws);
    console.log(`${user} creado exitosamente`);
}