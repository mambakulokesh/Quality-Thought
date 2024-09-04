import { useState } from 'react'

function Image() {

    let [head, setHead] = useState("React Js");

    let [image, setImage] = useState(
      "https://th.bing.com/th/id/OIP.EntHChgUyirgbZ9A3zTxkAHaFj?w=212&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    );

    const changeReact = () => {
        setImage("https://th.bing.com/th/id/OIP.EntHChgUyirgbZ9A3zTxkAHaFj?w=212&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7");
        setHead("React Js");
    }

    const changeNode = () => {
      setImage("https://th.bing.com/th/id/OIP.6M0aCTN1nVEz9KG3RMw3gQHaGI?pid=ImgDet&w=184&h=151&c=7&dpr=1.3");
      setHead("Node Js");
    };

  return (
    <div style={{textAlign : "center", marginTop : "50px" }}>
        <h2>{head}</h2>
      <img src={image} alt="" width={500} height={400} />
      <br />
      <br />
      <button onClick = {changeReact} >React Js</button>
      <button onClick = {changeNode} >Node Js</button>
    </div>
  )
}

export default Image
