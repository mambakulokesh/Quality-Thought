import { useState } from "react";
import actionCreator from "../Action";
import myStore from "../store";

function Input() {
    let [state, setState] = useState("");

    const storeDataInAction = ()=>{
        var actioObj = actionCreator(state);
        myStore.dispatch(actioObj);
    }

  return (
    <div>
        <h2>A Component</h2>
        <input type="text" onChange={(event)=>{
            setState(event.target.value);
        }} placeholder="enter value" />      
        
        <button onClick={storeDataInAction}>Submit</button>
    </div>
  )
}

export default Input
