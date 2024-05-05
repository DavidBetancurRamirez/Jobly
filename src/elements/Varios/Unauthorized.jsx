import { useNavigate } from "react-router-dom"
import useRegresar from "../../hooks/useRegresar"

const Unauthorized = () => {
    const regresar = useRegresar()
    const navigate = useNavigate()

    return (
        <div>
            <p>Unauthorized</p>
            <button onClick={() => regresar()}>Regresar</button>
            <button onClick={() => navigate("/")}>Home</button>
        </div>
    )
}

export default Unauthorized