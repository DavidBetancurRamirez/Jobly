import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation, Outlet } from "react-router-dom";


export const RequiereAuth = () => {
    // Verificar si existe un usuario
    const { auth } = useAuth()
    const location = useLocation()

    return (
        auth?.accessToken
            ? <Outlet />
            : <Navigate to="/sesion" state={{ from: location }} replace />
    )
}


export const RequiereRole = ({ allowedRoles }) => {
    // Verificar si el usuario cuenta con el rol necesario para acceder
    const { auth } = useAuth()
    const location = useLocation()

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.accessToken
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/sesion" state={{ from: location }} replace />
    )
}