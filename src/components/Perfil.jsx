import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Perfil = () => {
    const { auth, signOut } = useAuth();
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut()
        navigate("/")
    }
    
    return (
        auth.accessToken
            ? <>
                <h3>Bienvenido {auth.username}!</h3>
                <button onClick={handleSignOut}>Cerrar sesion</button>
            </>
            : <>
                <h3>Aun no has iniciado sesion</h3>
                <button onClick={() => navigate("/sesion")}>Iniciar sesion</button>
            </>
    )
}

export default Perfil