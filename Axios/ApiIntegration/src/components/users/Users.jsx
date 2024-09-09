import "./Users.css";

import { getUSer } from "../services/Service";
import User from "../user/User";
import { useState } from "react";
// import { useState, useEffect } from "react";

function Users() {
  let [users, setUsers] = useState([]);

  // const [filteredUsers, setFilteredUsers] = useState([]);
  // const [gender, setGender] = useState("all"); 
  
  // useEffect(() => {
  //   getRequest();
  // }, []);

  const getRequest = ()=>{

    var userPromiseObject = getUSer();

    userPromiseObject
    .then((users)=>{
      console.log(users.data.results)
      setUsers(users.data.results);
      // setFilteredUsers(users.data.results);
    })
    .catch((error)=>{
      console.log(error);
      alert("Failed");
    });
  }

  // const filterUsersByGender = (selectedGender) => {
  //   setGender(selectedGender);

  //   if (selectedGender === "all") {
  //     setFilteredUsers(users); // Show all users
  //   } else {
  //     const filtered = users.filter((user) => user.gender === selectedGender);
  //     setFilteredUsers(filtered);
  //   }
  // };


  
  return (
    <div className="users">
      <h2>Users</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel
        deserunt cumque suscipit dolorem eveniet veritatis quam adipisci libero
        aliquid!
      </p>
      <button className="btn" onClick={getRequest}>
        getUsers
      </button>

      <div>
        <div>
          <input
            type="radio"
            name="gender"
            id="all"
            // onClick={() => filterUsersByGender("all")}
            // checked={gender === "all"}
          />
          <label htmlFor="all">All</label>
        </div>

        <div>
          <input
            type="radio"
            name="gender"
            id="male"
            // onClick={() => filterUsersByGender("male")}
            // checked={gender === "male"}
          />
          <label htmlFor="male">Male</label>
        </div>

        <div>
          <input
            type="radio"
            name="gender"
            id="female"
            // onClick={() => filterUsersByGender("female")}
            // checked={gender === "female"}
          />
          <label htmlFor="female">Female</label>
        </div>
      </div>

      <div className="cardContainer">
        
        {users.map((element, index) => {
          return <User user={element} />;
        })}


        {/* {filteredUsers.map((element, index) => (
          <User key={index} user={element} />
        ))} */}
      </div>
    </div>
  );
}

export default Users;
