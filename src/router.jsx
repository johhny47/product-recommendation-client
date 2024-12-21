import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Registration from "./Page/Registration";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/login",
            element:<Login></Login>

        },
        {
            path: "/registration",
            element:<Registration></Registration>

        },
        {
            path: "/",
            element: <Home></Home>

        }
      ]
    },
  ]);

  export default router