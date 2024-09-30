import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar text-white bg-dark">
      <div className="container">
        <div className="logo">
          <h2>Flex Business Pro</h2>
          <p>Clean and Modern Business Theme</p>
        </div>
        <div className="links">
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Styleguide</a>
          <a href="">Blog</a>
          <a href="">Contact us</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar
