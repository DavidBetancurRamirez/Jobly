import '../styles/App.css';
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Experiencia = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div className="flip-card-container">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          className="front experiencia"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
         <h1 class="card-title"> Experiencia </h1>
        </div>
        <div
          className="back experiencia"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h1 class> A través de los trabajos de Jobly obtendrás experiencia en campos de tu interés, perfectos para tu CV. </h1>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Experiencia;
