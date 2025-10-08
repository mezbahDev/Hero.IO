import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "apps", element: <Apps /> },
      { path: "installation", element: <Installation /> },
    ],
  },
]);

export default router;
