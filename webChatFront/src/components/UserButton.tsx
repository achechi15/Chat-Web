import { useAppStore } from "../store/app-store";

interface Props {
    name: string;
    lastMessage: string;
    chatId: string;
}


export const UserButton = ({ name, lastMessage, chatId }: Props) => {
    const { setChatId } = useAppStore();

    return (
        <button 
            className="flex w-[100%] items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            onClick={() => setChatId(chatId)}
        >
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
            <div className="block">
                <strong>{ name }</strong>

                <p className="text-xs text-slate-500">{ lastMessage }</p>
            </div>
        </button>
    )
}
