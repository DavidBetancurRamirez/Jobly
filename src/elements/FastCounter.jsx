import React, { useState, useEffect } from 'react';
import '../styles/App.css';

function FastCounter({ stopAt }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let counterInterval;

    const startCounter = () => {
      counterInterval = setInterval(() => {
        if (count < stopAt) {
          setCount(prevCount => prevCount + 1);
        } else {
          clearInterval(counterInterval);
        }
      }, 15);
    };

    // Start the counter when the component mounts
    startCounter();

    // Clean up the interval when the component unmounts
    return () => clearInterval(counterInterval);
  }, [count, stopAt]);

  return (
    <div>
      {count}
    </div>
  );
}

export default FastCounter;

