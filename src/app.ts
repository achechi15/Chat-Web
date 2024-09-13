import WebSocket ,{ WebSocketServer } from 'ws';

interface MessageFront {
    type: 'message' | 'setUser',
    payload: string;
    to?: string;
}

const wss = new WebSocketServer({ port: 8080});

const users: Map<string, WebSocket> = new Map(); 

wss.on('connection', (ws) => {
    console.log('Nuevo cliente conectado')
    ws.on('message', (message) => {
        const mensaje: MessageFront = JSON.parse(message.toString());
        console.log(mensaje);
        if (mensaje.type === 'setUser') {
            users.set(mensaje.payload, ws);
            console.log(`Se ha conectado un nuevo usuario ${mensaje.payload}`);
            return;
        }

        if (mensaje.type === 'message' && mensaje.to) {
            const addresseeWS = users.get(mensaje.to);
            if (addresseeWS) {
                addresseeWS.send(`${mensaje.payload}`);
            }
        }

    })

    ws.on('close', () => {
        console.log('Cliente desconectado');
    })
})


console.log('WS running on port 8080');