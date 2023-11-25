import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../components/web/home/Home";
import Categories from "../components/web/categories/Categories";
import Dlayout from "./Dlayout";
import Dhome from "../components/dashboard/dhome/Dhome";
import Dcategories from "../components/dashboard/dcategories/Dcategories";
import Register from "../components/web/register/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
        path: "home",
        element: <Home/>,
        },
        {
          path: "categories",
          element: <Categories/>,
        },
        {
            path: "register",
            element: <Register/>,
            },
        {
            path:'*',
            element:<h2>page not found --- web</h2>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <Dlayout/>,
      children:[
        {
        path: "home",
        element: <Dhome/>,
        },
        {
          path: "categories",
          element: <Dcategories/>,
        },
        {
            path:'*',
            element:<h2>page not found --- dashboard</h2>
        }
      ]
    },
  ]);