import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import styled from 'styled-components';
import colores from '../styles/colores';

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

    div { font-size: 2rem; }
    p { font-size: 1.5rem; }

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
        if (inView) {
            const interval = setInterval(() => {
              if (contador1 < estudiantes) {
                setContador1((prevContador) => Math.min(prevContador + incremento1, estudiantes));
              }
              if (contador2 < empresas) {
                setContador2((prevContador) => Math.min(prevContador + incremento2, empresas));
              }
            }, 1000 / pasos);
      
            return () => clearInterval(interval);
          }
    }, [inView, contador1, contador2, incremento1, incremento2, estudiantes, empresas, pasos]);

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
