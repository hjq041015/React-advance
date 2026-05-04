import { createBrowserRouter } from "react-router";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import App from "../App.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
    ],
  },
]);

export default router;
