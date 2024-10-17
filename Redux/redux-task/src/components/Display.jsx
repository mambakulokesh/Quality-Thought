import { useSelector } from "react-redux";

function Display() {
  let storedata = useSelector((storeData) => {
    return storeData;
  });
  return (
    <div>
      <h2> Display Component</h2>
      <p>a : {storedata.firstReducer.a}</p>
      <p>b : {storedata.secondReducer.b}</p>
    </div>
  );
}

export default Display;
