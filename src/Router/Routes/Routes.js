import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminHome from '../../Pages/Dashboard/AdminHome/AdminHome';
import AddProduct from "../../Pages/Dashboard/Seller/AddProduct/AddProduct";
import MyProducts from "../../Pages/Dashboard/Seller/AddProduct/MyProducts/MyProducts";
import CategoryProducts from "../../Pages/CategoryProducts/CategoryProducts";
import SellerRoute from "../SellerRoute/SellerRoute";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import AllSeller from "../../Pages/Dashboard/AllUser/AllSeller";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import axios from 'axios';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }, {

        path: '/product/:id',
        element: <ProductDetails />
      },
      {
        path: '/categroy/:id',
        element: <CategoryProducts></CategoryProducts>,
        loader: ({ params }) => fetch(`http://localhost:5030/category/product/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: '/dashboard',
        element: <AdminHome></AdminHome>
      },
      {
        path: '/dashboard/all-seller',
        element: <AdminRoute><AllSeller></AllSeller></AdminRoute>,
        loader: () => fetch('http://localhost:5030/all/users/seller')
      },
      {
        path: '/dashboard/all-buyer',
        element: <AdminRoute><AllUser></AllUser></AdminRoute>,
        loader: () => fetch('http://localhost:5030/all/users/user')
      }
      , {
        path: '/dashboard/add-product',
        element: <SellerRoute><AddProduct></AddProduct></SellerRoute>,
        loader: () => fetch('http://localhost:5030/all/categories')
      }
      , {
        path: '/dashboard/my-product',
        element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
      }
      , {
        path: "/dashboard/my-order",
        element: <MyOrders></MyOrders>
      }
    ]
  }
]);

export default router;
