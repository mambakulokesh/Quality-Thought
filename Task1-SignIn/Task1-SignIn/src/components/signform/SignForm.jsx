import { useState } from "react";
import "./SignForm.css";
import Table from "./Table";

function SignForm() {
    let [user, setUser] = useState({
        username : "",
        password : "",
        Email : "",
    })
    
    let [userList, setUserList] = useState([])


    const getUserName = (event)=>{
        setUser({
            ...user,
            username : event.target.value,
        })
    }

    const getUserPassword = (event)=>{
        setUser({
            ...user,
            password : event.target.value,
        })
    }

    const getUserEmail = (event) =>{
        setUser({
            ...user,
            Email : event.target.value,
        })
    }



    const getUserData = ()=>{

      if(!user.username || !user.password || !user.Email){
        alert("Please fill all the fields");
        return;
      }

       setUserList([...userList, user])
       setUser({
         username: "",
         password: "",
         Email: "",
       });
    }
    

  return (
    <div className="form">
      <h2>Sign Form</h2>

      <input
        type="text"
        placeholder="Enter UserName"
        value={user.username}
        onChange={getUserName}
      />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={user.password}
        onChange={getUserPassword}
      />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        value={user.Email}
        onChange={getUserEmail}
      />
      <br />

      <button onClick={getUserData}>Register</button>

      <div
        style={{ marginTop: "20px", border: "2px solid red", padding: "10px" }}
      >
        <Table userList={userList} setUserList={setUserList} />
      </div>
    </div>
  );
}

export default SignForm
