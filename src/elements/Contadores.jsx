import styled from 'styled-components';
import colores from '../styles/colores';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Contenedor = styled.section`
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 550px) {
        flex-direction: column;
        justify-content: center;
    }
`
const Registrados = styled.article`
    color: ${colores.principal};

    div , p {
        text-align: center;
        font-weight: bold;
    }

    div { font-size: 5rem; }

    @media (max-width: 550px) {
        margin: 10px;
    }
`

const Contadores = ({ estudiantes, empresas, tiempo=3 }) => {
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    const pasos = tiempo * 60;
    const incremento1 = estudiantes / pasos;
    const incremento2 = empresas / pasos;
    const [ref, inView] = useInView({ threshold: 0 });

    useEffect(() => {
        let interval;

        if (inView) {
            interval = setInterval(() => {
                if (contador1 < estudiantes) {
                    setContador1((prevContador) => Math.min(prevContador + incremento1, estudiantes));
                }
                if (contador2 < empresas) {
                    setContador2((prevContador) => Math.min(prevContador + incremento2, empresas));
                }
            }, 1000 / pasos);
        } else {
            // Para que cada vez que el contador se muestre en pantalla, se reinicie la animación
            setContador1(0);
            setContador2(0);
        }
        
        return () => clearInterval(interval);
    }, [inView]);

    return (
        <Contenedor ref={ref}>
            <Registrados>
                <div>+ {Math.floor(contador1)}</div>
                <p>Estudiantes registrados</p>
            </Registrados>

            <Registrados>
                <div>+ {Math.floor(contador2)}</div>
                <p>Empresas registradas</p>
            </Registrados>
        </Contenedor>
    );
};

export default Contadores;
