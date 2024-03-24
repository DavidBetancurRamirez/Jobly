import { createBrowserRouter } from "react-router-dom";

import App from '../components/App';
import Sesion from "../components/Sesion";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/sesion",
        element: <Sesion />
    }
])