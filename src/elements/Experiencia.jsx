import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FrontCard, BackCard } from './FlipCard';
import '../styles/App.css';

const Experiencia = () => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };

    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <FrontCard content="ALOalo" onClick={handleClick} />
        <BackCard content="Con los trabajos adquieres experiencia" />
      </ReactCardFlip>
    );
  };
  
  export default Experiencia;