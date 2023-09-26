import React, { useState, useEffect } from 'react';
export function Countdown(props) {
    const [timeRemaining, setTimeRemaining] = useState(30); // Cambia 10 al tiempo inicial que desees
    const interval = 900; // Intervalo de actualización en milisegundos (1 segundo)
    
    useEffect(() => {
      const countdownInterval = setInterval(() => {
        if (timeRemaining > 0) {
          setTimeRemaining(timeRemaining - 1);
        }else if (props==true){
          setTimeRemaining(30);
        }
      }, interval);
  
      return () => clearInterval(countdownInterval);
    }, [timeRemaining]);
  
    return (
      <div>
       
       <button  style={{ backgroundColor: `red`, color: "white", borderColor: "red" }} disabled>Tiempo restante: {timeRemaining} segundos </button>
                        
      </div>
    );
  }
  
