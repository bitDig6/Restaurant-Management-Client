import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/Shop/Shop/Shop";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            }
        ]
    }
]);

export default router;