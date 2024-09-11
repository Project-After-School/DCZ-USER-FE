import Login from "@/pages/login";
import Header from "@/components/header";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
import { AssignmentDetailPage } from "@/pages/home/detail";

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
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: ":id",
          element: (
            <AssignmentDetailPage
              title="수학포스터 만들어서 제출하기"
              subject="수학"
              teacher="강해민 선생님"
              period="9월 20일 ~ 9월 23일"
              explain="한글 ㅁ누서로 11포인트로 해서 만ㄷ르어와 얘들아~한글 ㅁ누서로 11포인트로 해서 만ㄷ르어와 얘들아~한글 ㅁ누서로 11포인트로 해서 만ㄷ르어와 얘들아~한글 ㅁ누서로 11포인트로 해서 만ㄷ르어와 얘들아~한글 ㅁ누서로 11포인트로 해서 만ㄷ르어와 얘들아~한글 ㅁ누서로 11포인트로 해서 만ㄷ르어와 얘들아~"
              submission_form="한글 ㅁ누서로 11포인트로 해서 만ㄷ르어와 얘들아~"
              file_form=""
            />
          ),
        },
      ],
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
