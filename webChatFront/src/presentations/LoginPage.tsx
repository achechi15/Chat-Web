import { useRef } from "react";
import { useNavigate } from "react-router-dom"
import { useChatStore } from "../store/chat-store";

export const LoginPage = () => {

    const navigate = useNavigate()
    const { setUsername, username: user } = useChatStore();

    const formValue = useRef('');

    const handleSubmitUser = (username: string) => {
        if(username.length <= 3) return;
        setUsername(username);
        navigate('/chat');
    } 

    return (
        <div className="h-[100vh] flex flex-col items-center justify-center space-y-4">
            <label className="block text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                </span>
                <input 
                    type="text"
                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Alexis Montalvo" 
                    onChange={(event) => formValue.current = event.target.value}
                />

            </div>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={ () => handleSubmitUser(formValue.current)}
            >
                Confirmar
            </button>
        </div>
    )
}
