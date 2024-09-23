
import "./Carousel.css";

function Carousel() {

  setTimeout(function () {
   var img = document.getElementById("c-img");
   img.src ="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/61775218f4487fe8.jpg?q=20";
 }, 2000);

 setTimeout(function () {
   var img = document.getElementById("c-img");
   img.src ="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20";
 }, 6000);

  setTimeout(function () {
    var img = document.getElementById("c-img");
    img.src ="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9e9aa250dfecdbc3.jpg?q=20";
  }, 9000);
 
  return (
    <div className="carousel">
      <img
        id="c-img"
        src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/74b1a64b98702034.jpg?q=20"
        alt=""
        height={200}
        width={1280}
      />
    </div>
  );
}

export default Carousel
