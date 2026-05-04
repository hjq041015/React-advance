import App from "../App.jsx";
import Home from "../features/home/Home.jsx";
import Forecast from "../features/forecast/Forecast.jsx";
import { createBrowserRouter } from "react-router";
import { getCurrentLocation } from "../utils/locationHelper.js";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: App,
    loader: getCurrentLocation,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "forecast",
        Component: Forecast,
      },
    ],
  },
]);

export default router;
