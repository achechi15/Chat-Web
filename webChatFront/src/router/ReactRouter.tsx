import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { LoginPage } from "../presentations/LoginPage"
import { ChatPage } from "../presentations/ChatPage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />
    },
    {
        path: '/chat',
        element: <ChatPage />
    }
])

export const ReactRouter = () => {
    return (
        <RouterProvider router={ router } />
    )
}
