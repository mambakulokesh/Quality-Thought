import { useState } from "react";
import "./Card.css";

function Card() {
  let [name, setName] = useState("Rohith");
  let [gender, setGender] = useState("Male");
  let [mail, setMail] = useState("rohith@gmail.com");
  let [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZh8i-Gf6xWEoJw0d0S7fPvDmxSNJoGF-bw&s"
  );
  let [theme, setTheme] = useState({
    bgColor : "white",
    textColor : "black",
    message : "Check to switch Darkmode"
  })

  const changeFemale = () => {
    setName("santhi");
    setGender("Female");
    setMail("santhi@gmail.com");
    setImage(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0K0X8fq3LNuM2l2mm4kGu4e1kSC8goYwryQ&s"
    );
  };

  const changeMale = () => {
    setName("Rohith");
    setGender("Male");
    setMail("rohith@gmail.com");
    setImage(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZh8i-Gf6xWEoJw0d0S7fPvDmxSNJoGF-bw&s"
    );
  };

  const changeTheme = (event)=>{
    if(event.target.checked){
      setTheme({
        bgColor : "black",
        textColor : "white",
        message : "Uncheck to Lightmode"
      })
    }else{
      setTheme({
        bgColor : "white",
        textColor : "black",
        message : "Check to switch Darkmode"
      })
    }
  }


  return (
    <div
      className="card"
      style={{ backgroundColor: theme.bgColor, color: theme.textColor }}
    >
      <div className="img">
        <img src={image} alt="" width={290} />
      </div>
      <div className="content">
        <h2>Name : {name}</h2>
        <h2>Gender : {gender}</h2>
        <h2>Mail : {mail}</h2>
        <p>
          <b>Description :</b> Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. A quas dolorum soluta itaque eius consectetur ab!
          Optio iste quas consectetur quam praesentium blanditiis saepe aliquam
          inventore fuga dignissimos, dolorem totam?
        </p>
        <button className="btn" onClick={changeMale}>
          Rohith
        </button>
        <button className="btn" onClick={changeFemale}>
          Santhi
        </button>
        <br />
        <br />
        <input onChange={changeTheme} type="checkbox" />
        <label htmlFor="">{theme.message}</label>
      </div>
    </div>
  );
}

export default Card;
