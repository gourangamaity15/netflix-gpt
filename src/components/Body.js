import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/menu",
      element: <h1>Menu</h1>,
    },
    {
      path: "/*",
      element: <h1>404</h1>,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
