import React, { useState } from 'react';
import './styles/cssCounter.css';

function Counter():JSX.Element {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const Plus = ():void => {
    setCount((prev) => prev + step);
  };

  const Minus = ():void => {
    setCount((prev) => prev - step);
  };
  return (
    <div className="counter-container">
        <h1 className="counter-title">Counter</h1>
        <h3 className="counter-text">{count}</h3>
        <div className="counter-step">
         <input className="counter-input" value={step} onChange={(e) => setStep(+e.target.value)} type="number" />
         <h6 className="counter-step_text">step</h6>
        </div>
        <div className="counter-button">
         <button className="counter-button_element button_plus" onClick={Plus} type="button"> + </button>
         <button className="counter-button_element button_minus" onClick={Minus} type="button"> - </button>
        </div>
    </div>
  );
}

export default Counter;
