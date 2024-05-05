import { useLocation, useNavigate  } from 'react-router-dom'

const useRegresar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || -1

    const regresar = () => {
        navigate(from)
    }

    return regresar
}

export default useRegresar