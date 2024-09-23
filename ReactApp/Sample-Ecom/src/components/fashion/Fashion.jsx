import "./Fashion.css"

function Fashion() {
  return (
    <div className="grid-container">

      <div className="grid-col-1">
        <div className="content">
          <h1>Men Fashion</h1>
          <p>
            Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet
            amet amet ndiam elitr ipsum diam.
          </p>
          <button className="shop-now">Shop Now</button>
        </div>
      </div>

      <div className="grid-col-2 row-1">
        <div className="content">
          <h3>Save 20%</h3>
          <h2>Special Offer</h2>
          <button className="shop-now">Shop Now</button>
        </div>
      </div>

      <div className="grid-col-2 row-2">

        <div className="content">
          <h3>Save 20%</h3>
          <h2>Special Offer</h2>
          <button className="shop-now">Shop Now</button>
        </div>

      </div>

    </div>
  );
}

export default Fashion;
