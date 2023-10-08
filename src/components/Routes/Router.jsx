import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Signin from "../Pages/Signin";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import About from "../Pages/About";
import PrivatRoutes from "../PrivatRoutes/PrivatRoutes";
import Orders from "../Orders/Orders";
import Error from "../Error/Error";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
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
                element: <PrivatRoutes><About></About></PrivatRoutes>
            },
            {
                path: 'orders/',
                element: <PrivatRoutes><Orders></Orders></PrivatRoutes>
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