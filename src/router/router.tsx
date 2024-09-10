import Login from "@/pages/login";
import Header from "@/components/header";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: "",
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Header />,
      },
      {
        path: "/upload",
        element: <Header />,
      },
      {
        path: "/notice",
        element: <Header />,
      },
      {
        path: "/homework",
        element: <Header />,
      },
    ],
  },
]);
