import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../pages/layout/MainLayOut";
import Home from "../pages/Home/Home";
import Blog from "../pages/layout/Blog";
import ErrorPage from "../pages/layout/ErrorPage";
import Login from "../pages/layout/Login";
import Register from "../pages/layout/Register";




const router = createBrowserRouter([
      {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            {
                path :'/login',
                element: <Login></Login>
            },
            {
                path :'/register',
                element: <Register></Register>
            }
        ]
      }
]);

export default router;



