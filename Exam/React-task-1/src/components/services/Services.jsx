import "./Services.css";

function Services() {
  return (
    <div className="seviceContainer text-white mt-5 d-flex" >
      <div className="container mt-5 text-center">
        <div className="row">
          <div className="col-3">
            <i className="bi bi-trophy-fill fs-1"></i>
            <h2>22</h2>
            <p>Awards Winning</p>
          </div>

          <div className="col-3">
            <i className="bi bi-suitcase-lg-fill fs-1"></i>
            <h2>145</h2>
            <p>Finished Projects</p>
          </div>

          <div className="col-3">
            <i className="bi bi-car-front-fill fs-1"></i>
            <h2>349</h2>
            <p>Products Sold</p>
          </div>

          <div className="col-3">
            <i className="bi bi-twitter fs-1"></i>
            <h2>2456</h2>
            <p>Twitter Fans</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services
