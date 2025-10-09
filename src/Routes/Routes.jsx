import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/installation";
import ErrorPage from "../pages/ErrorPage";
import AppDetail from "../pages/AppDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "apps", element: <Apps /> },
      { path: "installation", element: <Installation /> },
      { path: "app/:id", element: <AppDetail /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default router;
