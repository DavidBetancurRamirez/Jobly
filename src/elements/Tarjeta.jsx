import '../styles/App.css';
import { useState } from 'react'
import ReactCardFlip from "react-card-flip";

const Tarjeta = ({ info }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => {
        setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        setIsFlipped(false);
    };

    return (
        <div className="grid-item">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div
                    className={`front`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ background: info.color }}
                >
                    <h1 className="card-title">{info.nombre}</h1>
                </div>
                <div
                    className={`back`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ background: info.color }}
                >
                    <h1>{info.texto}</h1>
                </div>
            </ReactCardFlip>
        </div>
    )
}

export default Tarjeta