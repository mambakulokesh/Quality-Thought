import { useState } from 'react';
import "./SignIn.css";
import Table from './Table';

function SignIn() {

    let [user, setUser] = useState({
      username : "",
      password : "",
      email : "",

    });

    const [tableData, setTableData] = useState([]);


    const getFormData = (e)=>{
      e.preventDefault();
      if(!user.username || !user.password || !user.email){
        alert("Please fill all the fields");
        return;
      }
      setTableData([
        ...tableData,
        user,
      ])
      setUser({
        username: "",
        password: "",
        email: "",
      });
    }

    const getUserName = (event)=>{
      setUser({
        ...user,
        username : event.target.value, 
      });
    }

    const getUserPass = (event)=>{
      setUser({
        ...user,
        password: event.target.value,
      });};

    const getUserMail = (event) => {
      setUser({
        ...user,
        email: event.target.value,
      });
    };

  return (
    <div className="signin">
      <h2>Sign In</h2>
      <label htmlFor="">User Name : </label>
      <input type="text" value={user.username} onChange={getUserName} />
      <br />
      <label htmlFor="">Password : </label>
      <input type="password" value={user.password} onChange={getUserPass} />
      <br />
      <label htmlFor="">Email : </label>
      <input type="email" value={user.email} onChange={getUserMail} />
      <br />
      <button onClick={getFormData}>Sign in</button>
      <div style={{marginTop : "20px"}}>
        <Table tableData={tableData} />
      </div>
    </div>
  );
}

export default SignIn
