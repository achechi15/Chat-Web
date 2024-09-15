import { useChatStore } from "../store/chat-store";
import { UserButton } from "./UserButton";

export const SideNav = () => {

    const users: string[] = ['Alexis', 'Montalvo'];
    const { username } = useChatStore();

    return (
        <aside id="default-sidebar" className="block top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="font-medium">
                    <li className="mb-4 flex items-center justify-center">Username: {username}</li>
                    {
                        users.map( user => (<UserButton name={ user } key={crypto.randomUUID()} />))
                    }
                </ul>
            </div>
        </aside>
    )
}
