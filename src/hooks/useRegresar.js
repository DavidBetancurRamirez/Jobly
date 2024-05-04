import { useLocation, useNavigate  } from 'react-router-dom'

const useRegresar = (replace=false) => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const regresar = () => {
        // navigate(from, {replace:replace})
        navigate(from, { replace })
    }

    return regresar
}

export default useRegresar