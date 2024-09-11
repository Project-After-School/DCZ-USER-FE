import Login from "@/pages/login";
import Header from "@/components/header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/home";

const loginRoute = {
  path: "/login",
  element: <Login />,
};

const routesWithHeader = {
  path: "",
  element: <Header />,
  children: [
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/upload",
      element: <div>Upload Content</div>,
    },
    {
      path: "/notice",
      element: <div>Notice Content</div>,
    },
    {
      path: "/homework",
      element: <div>Homework Content</div>,
    },
  ],
};

export const Router = createBrowserRouter([loginRoute, routesWithHeader]);
