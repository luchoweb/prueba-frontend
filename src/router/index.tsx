import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/public/home";
import ImagesPage from "../pages/public/images";
import PrivateRoute from "../components/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/images/:query",
    element: <ImagesPage />,
  },
  {
    path: "/admin",
    element: <PrivateRoute component={<p>Admin</p>} />,
  },
  {
    path: "*",
    element: <p>404</p>,
  },
]);
