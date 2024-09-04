import { useState } from 'react';
import "./Counter.css";

function Counter() {
    let [state, setState] = useState(0);

    const fnCount = () => {
        setState(state + 1);
    }

  return (
    <div className="counter">
        <h2>Count value is : {state}</h2>
        <br /><br />
        <button onClick={fnCount} >Increment</button>
    </div>
  )
}

export default Counter
