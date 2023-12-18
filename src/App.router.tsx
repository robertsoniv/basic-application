import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./features/domains/ordercloud/components/Profile";
import Orders from "./features/domains/ordercloud/components/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Profile/>
      },
      {
        path: "/orders",
        element: <Orders direction="Incoming"/>
      }
    ],
  },
], {basename: import.meta.env.VITE_APP_CONFIG_BASE});

const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
