import React, { useState } from 'react';

function CounterState() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h2>Task 1 : Create Counter</h2>
      <h5>Requirements:</h5>
      <ol>
        <li><p>Increment Functionality</p></li>
        <li><p>Decrement Functionality</p></li>
        <li><p>Reset Functionality</p></li>
      </ol>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterState;
