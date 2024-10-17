import { BactionCreator } from "./actons/BactionCreator";
import store from "../store/Store";

function B() {
  const getBdata = () => {
    store.dispatch(BactionCreator("redux"));
  };
  return (
    <div>
      <h2>B Component</h2>
      <button onClick={getBdata}>submit</button>
    </div>
  );
}

export default B;
