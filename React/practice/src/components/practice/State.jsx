import { useState } from 'react';

function State() {

    let [state, setState] = useState();

    function alertMsg(){
        alert(state);
    }
  return (
    <div style={{marginTop : "50px", textAlign : "center"}}>
        <h1>Update the State with input</h1>
        <input type="text" onChange={(event)=>{
          setState(event.target.value)
        }} /> <br /> <br />
        <button onClick={alertMsg}>Update State</button>
    </div>
  )
}

export default State
