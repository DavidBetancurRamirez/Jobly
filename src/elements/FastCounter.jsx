import { useState, useEffect } from 'react';
import '../styles/App.css';

const FastCounter = ({ limite}) => {
    const [numero, setNumero] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            if (numero < limite) {
                setNumero(prevNumero => prevNumero + 1);
            } else {
                clearInterval(intervalo);
            }
        }, 1);

        return () => clearInterval(intervalo);
    }, [numero, limite]);

    return <div>+ {numero}</div>;
}

export default FastCounter;