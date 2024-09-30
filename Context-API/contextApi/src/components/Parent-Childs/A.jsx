import B from "./B";
import {useState} from "react";
import mycontext from "./context";

function A() {
  const [data, setData] = useState({
    name : "lokesh",
    age : 23,
  });
  return (
    <div>
        <h2>A Component</h2>
        <button onClick={()=>{
          setData({name : "sarvan", age : 24});
        }}>Update</button>
        <hr />
        <mycontext.Provider value={data}>
          <B />
        </mycontext.Provider>
    </div>
  )
}

export default A;
