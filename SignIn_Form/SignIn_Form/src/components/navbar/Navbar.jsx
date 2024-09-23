import "./Navbar.css";

function Navbar(){
    return (
        <div className="navbar">
            <div className="title">
                <h1>MyCart-App</h1>
            </div>
            <div className="links">
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">Services</a>
                <a href="">Contact Us</a>
            </div>
            <div className="nextlinks">
                <a href="">Profile</a>
                <a href="">Cart</a>
                <a href="">Login</a>
            </div>
        </div>
    );
};


export default Navbar;