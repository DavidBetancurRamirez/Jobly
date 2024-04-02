import '../styles/App.css';
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Aprende = () => {
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
          className="front aprende"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
         <h1 class= "card-title"> Aprende </h1>
        </div>
        <div
          className="back aprende"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h1> 
          Existen personas que aprendemos mejor haciendo, y con Jobly tienes un aprendizaje asegurado.</h1>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Aprende;
