import "./Card.css";


function CreateCard(image, name) {
  return (
    <div className="card">
      <img src={image} alt="" width={250} height={300}/>
      <h3>{name}</h3>
      <h4>$123.00 <strike> $123.00 </strike> </h4>
      <p>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i> (99)
      </p>
    </div>
  );
}

function Card(){
    return (
      <div className="card-container">
        {CreateCard(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI1lDPUuROBhlloFv-7wwkFDwEQcCHySojqw&s",
          "Canon Camera"
        )}
        {CreateCard(
          "https://image.made-in-china.com/2f0j00UhBfVDPIJqkl/Custom-Mens-Oversized-Plain-Pullover-Crew-Neck-Sweatshirt-Without-Hood.webp",
          "SweatShirt"
        )}
        {CreateCard(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHvL4az1dglCkUWCgl53-RCSMaNdiFxulFQ&s",
          "Lamp"
        )}
        {CreateCard(
          "https://assets.ajio.com/medias/sys_master/root/20221107/tgOF/6369195faeb269659c759f7e/-473Wx593H-469331707-black-MODEL.jpg",
          "Black Sneaker"
        )}
      </div>
    );
}

export default Card
