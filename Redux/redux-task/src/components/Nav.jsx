import {Link} from "react-router-dom";

function Nav() {
  return (
    <div style={{ height: "70px", background: "black", color: "white", display: "flex", justifyContent : "center", alignItems :"center", gap:"40px" }}>
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        Home
      </Link>
      <Link style={{ textDecoration: "none", color: "white" }} to="/result">
        Result
      </Link>
    </div>
  );
}

export default Nav
