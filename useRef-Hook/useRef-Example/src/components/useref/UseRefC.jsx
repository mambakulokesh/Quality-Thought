import {useRef, useEffect} from 'react';

function UseRefC() {
    let data = useRef(null);

    useEffect(()=>{
        data.current.focus();
    }, []);
    
  return (
    <div style={{textAlign : "center"}}>

        <input ref={data}  type="text" placeholder="enter a name" />

        <button onClick={()=>{

            console.log(data.current.value);

            data.current.value = "Hi, Loki";

            console.log(data.current.value);

        }}>changeValue</button> 
        
    </div>
  )
}

export default UseRefC
