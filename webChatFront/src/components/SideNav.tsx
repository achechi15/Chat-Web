import { useEffect, useState } from "react";
import { useChatStore } from "../store/chat-store";
import { UserButton } from "./UserButton";
import Modal from 'react-modal';
import { mockChats } from "../Data/mockData";

const modalCustomStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        'background-color': '#FEFFFA',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        "flex-direction": "column",
        padding: '100px',
        "justify-content": 'center',
        'align-items': 'center',
        'border-radius': '30px',
    },
};

export const SideNav = () => {

    const { chats, loadChats } = useChatStore();
    const { username } = useChatStore();
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const handleModalButton = () => {
        setModalIsOpen(false);
    }

    // Cargar chats simulados al iniciar el componente
    useEffect(() => {
        loadChats(mockChats);
    }, [loadChats]);

    return (
        <aside id="default-sidebar" className="block top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-col justify-between">
                <ul className="font-medium">
                    <li className="mb-4 flex items-center justify-center">Username: {username}</li>
                    {
                        chats.map( chat => (<UserButton name={ chat.participants.filter(p => p.name !== username).map(p => p.name).join(', ') } chatId={ chat.chatId } lastMessage={ chat.lastMessage.content } key={crypto.randomUUID()} />))
                    }
                </ul>
                <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={ () => setModalIsOpen(prev => !prev)}
                >
                    Añadir nuevo usuario
                </button>
            </div>
            <Modal
                isOpen={ modalIsOpen }
                style={ modalCustomStyles }
                onRequestClose={ () => setModalIsOpen(false)}
            >
                <h2 className="mb-5 text-xl font-bold dark:text-white">Introduce el nombre de usuario</h2>
                <input className="py-3 mb-5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="E.g Montalvo" />
                <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={handleModalButton}
                >
                    Confirmar
                </button>
            </Modal>
        </aside>
    )
}
