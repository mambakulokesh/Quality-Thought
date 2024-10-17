import AactionCreator from "./actons/AactionCreator";
import store from "../store/Store";

function A() {
  const getAData = () => {
    store.dispatch(AactionCreator("React"));
  };
  return (
    <div>
      <h2>A Component</h2>
      <button onClick={getAData}>submit</button>
    </div>
  );
}

export default A;
