import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../pages/layout/MainLayOut";
import Home from "../pages/Home/Home";
import Blog from "../pages/layout/Blog";




const router = createBrowserRouter([
      {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
        ]
      }
]);

export default router;



