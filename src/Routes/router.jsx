import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
]);

export default router;