import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/installation";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("data.json").then((res) => res.json()),
      },
      { path: "home", element: <Home /> },
      { path: "apps", element: <Apps /> },
      { path: "installation", element: <Installation /> },
    ],
  },
]);

export default router;
