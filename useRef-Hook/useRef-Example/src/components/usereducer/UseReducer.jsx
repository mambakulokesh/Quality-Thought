import { useReducer } from "react";

function UseReducer() {
  const reducer = (state, action)=>{
    var newState;
    if(action.type === "Add"){
      newState = state + action.value
    }else if(action.type === "Sub"){
      newState = state - action.value;
    }else if(action.type === "Mul"){
      newState = state * action.value;
    }

    return newState;
  }

  let [state, dispatch]  = useReducer(reducer, 0);
  
  return (
    <div style={{textAlign : "center", marginTop : "70px"}}>

      <p>Count: {state}</p>

      <button onClick={()=>{
        dispatch({type : "Add", value : 1});
      }}>Inc by 1</button>

      <button onClick={()=>{
        dispatch({type : "Sub", value : 1});
      }}>Dec by 1</button>

      <button onClick={()=>{
        dispatch({type : "Mul", value : 2});
      }}>Mul by 2</button>

    </div>
  )
}

export default UseReducer;
