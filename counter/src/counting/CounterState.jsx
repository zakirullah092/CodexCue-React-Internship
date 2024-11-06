import React, { useState } from 'react';
import './CounterState.css';

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
    <div className='main'>
      <h1 className='topHeading'>React Internship by <i>CodexCue</i></h1>
      <h2 className='heading'>Task 1 : Create Counter</h2>
      <h5>Requirements:</h5>
      <ol>
        <li><p>Increment Functionality</p></li>
        <li><p>Decrement Functionality</p></li>
        <li><p>Reset Functionality</p></li>
      </ol>
      <h1>{counter}</h1>
      <div className="buttons">
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default CounterState;
