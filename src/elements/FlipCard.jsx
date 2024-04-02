import React, { useState } from 'react';
import '../styles/App.css';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card-container ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card">
        <div className="card-front">
          {/* Content for the front of the card */}
          <h1>Front Side</h1>
        </div>
        <div className="card-back">
          {/* Content for the back of the card */}
          <h1>Back Side</h1>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
