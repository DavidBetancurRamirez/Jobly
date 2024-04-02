import '../styles/App.css';
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Ingresos = () => {
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
          className="front ingresos"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
         <h1 class="card-title"> Ingresos </h1>
        </div>
        <div
          className="back ingresos"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h1> Con Jobly podrás aumentar tus ingresos y monetizar tu tiempo libre.</h1>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Ingresos;
