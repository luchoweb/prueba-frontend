import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "../components";
import { HomePage, ImagesPage, LoginPage } from "../pages";

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
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <p>404</p>,
  },
]);
