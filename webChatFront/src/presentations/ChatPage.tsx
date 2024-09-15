import { useEffect } from 'react'
import { useChatStore } from '../store/chat-store'
import { useNavigate } from 'react-router-dom';
import { SideNav } from '../components/SideNav';
import { ChatContent } from '../components/ChatContent';

export const ChatPage = () => {
    
    const { username } = useChatStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (username === '') navigate('/')
    }, [username])

    return (
        <div className='flex'>
            <SideNav />
            <ChatContent />
        </div>
    )
}
