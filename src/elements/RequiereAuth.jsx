import useAuth from "../hooks/useAuth"
import { Navigate, useLocation, Outlet } from "react-router-dom"

// Verificar si existe un usuario
const RequiereAuth = () => {
    const { auth } = useAuth()
    const location = useLocation()

    return (
        auth?.name
            ? <Outlet />
            : <Navigate to="/sesion" state={{ from: location }} replace />
    )
}

// Verificar si tiene el rol necesario para acceder
export const RequiereRole = ({ allowedRoles }) => {
    const { auth } = useAuth()
    const location = useLocation()

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.name
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/sesion" state={{ from: location }} replace />
    )
}

export default RequiereAuth;