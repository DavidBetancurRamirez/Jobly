import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation, Outlet } from "react-router-dom";


export const RequiereAuth = () => {
    // Verificar si existe un usuario
    const { auth } = useAuth()
    const location = useLocation()

    return (
        auth?.access
            ? <Outlet />
            : <Navigate to="/sesion" state={{ from: location }} replace />
    )
}


export const RequiereRole = ({ allowedRoles }) => {
    // Verificar si el usuario cuenta con el rol necesario para acceder
    const { auth } = useAuth()
    const location = useLocation()

    return (
        allowedRoles?.includes(auth?.role)
            ? <Outlet />
            : auth?.access
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/sesion" state={{ from: location }} replace />
    )
}