import React, { useState } from 'react';

const CounterApp = () => {
  // Initialize the count state to 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  // Function to reset the count to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ margin: '5px' }}>
        Increment
      </button>
      <button onClick={decrement} style={{ margin: '5px' }}>
        Decrement
      </button>
      <button onClick={reset} style={{ margin: '5px' }}>
        Reset
      </button>
    </div>
  );
};

export default CounterApp;
