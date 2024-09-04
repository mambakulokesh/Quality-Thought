
import "./User.css";

function User({ user }) {
  return (
    <div className='cardUser'>
        <img src={user.picture.medium} alt="not a img" width={"100%"} height={"200px"}/>
        <h3>{user.name.title}. {user.name.first} {user.name.last}</h3>
        <p>{user.gender}</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam.</p>
        <button>get Details</button>
      
    </div>
  )
}

export default User
