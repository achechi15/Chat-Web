import { useEffect } from 'react'
import { useChatStore } from '../store/chat-store'
import { useNavigate } from 'react-router-dom';
import { SideNav } from '../components/SideNav';
import { ChatContent } from '../components/ChatContent';
import { useAppStore } from '../store/app-store';

export const ChatPage = () => {
    
    const { username } = useChatStore();
    const navigate = useNavigate();
    const { chatId } = useAppStore();


    useEffect(() => {
        if (username === '') navigate('/')
    }, [username, navigate])

    const ws = new WebSocket('ws://localhost:8080');
    // UseEffect for the chat setUp

    // UseEffect for the WebSocket
    useEffect(() => {

        ws.onopen = () => {
            console.log('Se ha conectado correctamente');
            ws.send(JSON.stringify({
                action: 'createUser',
                data: username,
            }))
        }

        // ws.onmessage = (event) => {
        //     // console.log('%s',message.data);
        //     const message: MessageFront = JSON.parse(event.data);
        //     setChats()
        //     // console.log(chat);
        // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='flex'>
            <SideNav />
            { chatId && <ChatContent chatId={ chatId } /> }
        </div>
    )
}