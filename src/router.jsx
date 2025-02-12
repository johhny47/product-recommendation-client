import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Registration from "./Page/Registration";
import Queries from "./Page/Queries";
import MyQueries from "./Page/MyQueries";
import RecommendationsForMe from "./Page/RecommendationsForMe";
import MyRecommendations from "./Page/MyRecommendations";
import AddQueries from "./Component/AddQueries";
import ViewDetails from "./Component/ViewDetails";
import Update from './Component/Update';
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorPage from "./Component/ErrorPage";
import SeeMore from "./Component/SeeMore";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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

        },
        
        {
          path: "/queries",
          element: <Queries></Queries>
        },
        {
          path: "/recommendationforme",
          element: <PrivateRoute><RecommendationsForMe></RecommendationsForMe></PrivateRoute>
        },
        {
          path: "/myqueries",
          element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>,
         
        },
        {
          path: "myqueries/addqueries",
          element:<PrivateRoute><AddQueries></AddQueries></PrivateRoute>
        },
        {
          path: "details/:id",
          element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        
        },
        {
          path: "seemore/:id",
          element:<PrivateRoute><SeeMore></SeeMore></PrivateRoute>,
        
        },
        {
          path: "update/:id",
          element:<PrivateRoute><Update></Update></PrivateRoute>,
        
        },
        
        {
          path: "/myrecommendation",
          element: <PrivateRoute><MyRecommendations></MyRecommendations></PrivateRoute>
        }
      ]
    },
  ]);

  export default router