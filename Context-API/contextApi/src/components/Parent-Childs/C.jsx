import mycontext from "./context";
import D from "./D";
import { useContext } from "react";

function C() {
  const context = useContext(mycontext)
  return (
    <div>
        <h2>C Component : {context.name} : {context.age} </h2>
        <hr />
        <D />
    </div>
  )
}

export default C;
