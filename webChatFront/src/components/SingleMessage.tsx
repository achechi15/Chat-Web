import { Message } from "../entities/MessageEntity";
import { useChatStore } from "../store/chat-store";

interface Props {
    message: Message;
}



export const SingleMessage = ({ message }: Props) => {

    const { username } = useChatStore();

    return (
        (username === message.senderId) ? (
            <li className="flex ms-auto gap-x-2 sm:gap-x-4">
                <div className="grow text-end space-y-3">
                    <div className="inline-block flex-col justify-end">
                        {/*  Card  */}
                        <div className="inline-block w-fit bg-blue-600 rounded-2xl p-4 shadow-sm">
                            <p className="block text-sm text-white">
                                { message.content }
                            </p>
                        </div>
                        {/*  End Card */}
                        <span className="mt-1.5 ms-auto flex items-center gap-x-1 text-xs text-gray-500 dark:text-neutral-500">
                            { `${message.timestamp.toLocaleString()}` }
                        </span>
                    </div>
                </div>

                <span className="shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                    <span className="text-sm font-medium text-white leading-none">{ message.senderId.substring(0,3) }</span>
                </span>
            </li>

        ) : (
            <li className="max-w-lg flex gap-x-2 sm:gap-x-4">
                <span className="shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                    <span className="text-sm font-medium text-white leading-none">{ message.senderId.substring(0,3) }</span>
                </span>
                <div>
                    <div className="bg-white w-fit border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                        <p className="text-sm text-gray-800 dark:text-white">
                            { message.content }
                        </p>
                    </div>
                    <span className="mt-1.5 ms-auto flex items-center gap-x-1 text-xs text-gray-500 dark:text-neutral-500">
                        { `${message.timestamp.toLocaleString()}` }
                    </span>
                </div>

            </li>
        )
        
        
    )
}
