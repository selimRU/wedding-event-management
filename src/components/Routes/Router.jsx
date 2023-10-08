import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Signin from "../Pages/Signin";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import About from "../Pages/About";
import Orders from "../Pages/Orders";
import PrivatRoutes from "../PrivatRoutes/PrivatRoutes";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../services.json')
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: 'about/',
                element: <About></About>
            },
            {
                path: 'orders/',
                element: <Orders></Orders>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/service/:id',
                element: <PrivatRoutes><ServiceDetails></ServiceDetails></PrivatRoutes>,
                loader: () => fetch('../services.json')
            },
        ]
    }
])


export default router;