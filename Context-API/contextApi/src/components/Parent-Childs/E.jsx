import { useContext } from "react";
import mycontext from "./context";

function E() {
  let contextData = useContext(mycontext);
  return (
    <div>
      <h2>E component</h2>
      <hr />
      <dl>
        <dt><b>Name : </b></dt>
        <dd>{contextData.name}</dd>
        <dt><b>Age : </b></dt>
        <dd>{contextData.age}</dd>
      </dl>
    </div>
  )
}

export default E;
