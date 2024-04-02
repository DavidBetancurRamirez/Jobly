import '../styles/App.css';
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Networking = () => {
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
          className="front networking"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
         <h1 class="card-title"> Networking </h1>
        </div>
        <div
          className="back networking"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h1> 
Una increíble forma de conocer gente es en el trabajo, en especial, si es un sector que te gusta.</h1>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Networking;
