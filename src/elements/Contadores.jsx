import { useState, useEffect } from 'react';
import styled from 'styled-components';
import colores from '../styles/colores';

const Contenedor = styled.section`
    display: flex;
    justify-content: space-evenly;
`
const Registrados = styled.article`
    color: ${colores.principal};

    div , p {
        text-align: center;
        font-weight: bold;
    }

    div { font-size: 2rem; }
    p { font-size: 1.5rem; }
`

const Contadores = ({ estudiantes, empresas, tiempo=3 }) => {
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    const pasos = tiempo * 60;
    const incremento1 = estudiantes / pasos; // Incremento para llegar al máximo de pasos (tiempo en segundos)
    const incremento2 = empresas / pasos;

    useEffect(() => {
        const interval = setInterval(() => {
            // Incrementar ambos contadores hasta su máximo de pasos
            if (contador1 < estudiantes) {
                setContador1((prevContador) => Math.min(prevContador + incremento1, estudiantes));
            }
            if (contador2 < empresas) {
                setContador2((prevContador) => Math.min(prevContador + incremento2, empresas));
            }
        }, 1000 / 60); // Ajustar para que haya la cantidad de pasos en el tiempo pasado en segundo

        return () => clearInterval(interval);
    }, [contador1, contador2, incremento1, incremento2, estudiantes, empresas]);

    return (
        <Contenedor>
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
