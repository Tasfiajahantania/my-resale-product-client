import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import SignUp from "../../Pages/SignUp/SignUp";

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
        element: <ProductDetails />,
        loader: ({ params }) => fetch(`http://localhost:5030/product/${params.id}`)
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
]);

export default router;
