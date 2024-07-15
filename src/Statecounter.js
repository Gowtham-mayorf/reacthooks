import React, { useState } from 'react';
import './Statecounter.css';

export default function StateCounter() {
  const [counter, setCounter] = useState({ value: 100, type: 'counter' });

  const increment = () => {
    setCounter((prevCounter) => ({
      value: prevCounter.value + 3,
      type: prevCounter.type
    }));
  };

  const decrement = () => {
    setCounter((prevCounter) => ({
      value: prevCounter.value - 3,
      type: prevCounter.type
    }));
  };

  return (
    <>
      <h1>{`Counter value is ${counter.value}`}</h1>
      <div className="marquee left">&lt;&lt;&lt;</div>
      <button onClick={increment}>+3</button>
      <div className="marquee right">&lt;&lt;&lt;</div>
      <button onClick={decrement}>-3</button>
    </>
  );
}
