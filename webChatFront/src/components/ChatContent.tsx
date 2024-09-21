import { useEffect, useRef, useState } from "react";
import { ChatInput } from "./ChatInput"
import { SingleMessage } from "./SingleMessage"
import { MessageFront } from "../entities/MessageEntity";
import { useChatStore } from "../store/chat-store";
import { Chat } from "../entities/ChatEntity";
import { useAppStore } from "../store/app-store";
import { text } from "stream/consumers";

interface Props {
    chatId: string;
}

export const ChatContent = ({ chatId }: Props) => {
    
    const chat = useChatStore((state) => state.getChatById(chatId));
    const { addMessage } = useChatStore();
    const { username } = useChatStore();

    // TODO: crearlo un hook en otro archivo
    const handleAddMessage = (value: string) => {
        addMessage(chatId, {
            id: crypto.randomUUID(),
            senderId: username,
            content: value,
            messageType: 'text',
            status: 'sent',
            timestamp: new Date(),
        })
    }

    const messagesEndRef = useRef<null | HTMLDivElement>(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth'});
    }

    useEffect(() => {
        scrollToBottom();
    }, [chat]);


    if (chat === undefined) return <h1>Error 404: Chat Not Found</h1>  

    return (
        <div className="flex flex-1 items-center justify-center flex-col">
            <div className="flex flex-1 w-full marginTop overflow-y-scroll">
                <ul className="w-full h-[300px] m-10">
                    {
                        chat.messages.map( message => <SingleMessage key={crypto.randomUUID()} message={message} />)
                    }
                    <div ref={messagesEndRef} />
                </ul>
            </div>
            <ChatInput onClick={ handleAddMessage } />
        </div>

    )
}
