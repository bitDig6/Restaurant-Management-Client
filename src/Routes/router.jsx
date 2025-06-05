import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import Menu from "../Pages/Menu/Menu/Menu";

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
            }
        ]
    }
]);

export default router;