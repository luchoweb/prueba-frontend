import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/public/home";
import ImagesPage from "./pages/public/images";

import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/images/:query",
    element: <ImagesPage />
  },
  {
    path: "*",
    element: <p>404</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
