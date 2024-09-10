import Login from "@/pages/login";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
    {
        path:'/',
        children:[{
            path:'login',
            element: <Login/>
        }]
    }
]);
