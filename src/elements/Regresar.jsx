import styled from "styled-components"
import colores from "../styles/colores"
import useRegresar from "../hooks/useRegresar"
import { FaArrowCircleLeft } from "react-icons/fa"

const BRegresar = styled.button`
    background: ${colores.oscuro};
    border: none;
    border-radius: 10px;
    padding: 10px;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.5s ease;

    svg {
        margin-right: 5px;
    }

    &:hover { color: ${colores.claro}; }
`

const Regresar = ({ replace }) => {
    const regresar = useRegresar(replace)

    return (
        <BRegresar type="button" onClick={() => regresar()}>
            <FaArrowCircleLeft />Regresar
        </BRegresar>
    )
}

export default Regresar