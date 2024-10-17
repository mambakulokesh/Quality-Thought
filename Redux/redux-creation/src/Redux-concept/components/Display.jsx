
import {useSelector} from "react-redux";

function Display() {
  let storeData = useSelector((store)=>{
    return store;
  })
  return (
    <div>
        <h1>Store Data</h1>
        <h2>A Data : {storeData}</h2>
      
    </div>
  )
}

export default Display
