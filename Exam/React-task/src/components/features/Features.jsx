import "./Features.css";

function Features() {
  return (
    <div className="featuresContainer text-center">
      <h2 className="mt-4">Our Features</h2>

      <div className="container d-flex justify-content-evenly gap-5 mt-5">
        <div className="card">
          <div
            className="card-header d-flex justify-content-center align-items-center"
            style={{ height: "180px" }}
          >
            <i className="bi bi-pc-display-horizontal text-white fs-3 bg-primary p-3 rounded-circle"></i>
          </div>
          <div className="card-body">
            <h4>Fully Responsive</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              culpa similique dolor, vel nisi quaerat.
            </p>
            <a href="" className="text-decoration-none">
              Read More
            </a>
          </div>
        </div>

        <div className="card">
          <div
            className="card-header  d-flex justify-content-center align-items-center"
            style={{ height: "180px" }}
          >
            <i className="bi bi-person-fill text-white fs-3 p-3 bg-primary rounded-circle"></i>
          </div>
          <div className="card-body">
            <h4>Fully Responsive</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              culpa similique dolor, vel nisi quaerat.
            </p>
            <a href="" className="text-decoration-none">
              Read More
            </a>
          </div>
        </div>

        <div className="card">
          <div
            className="card-header  d-flex justify-content-center align-items-center"
            style={{ height: "180px" }}
          >
            <i className="bi bi-recycle text-white fs-3 p-3 bg-primary rounded-circle"></i>
          </div>
          <div className="card-body">
            <h4>Fully Responsive</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              culpa similique dolor, vel nisi quaerat.
            </p>
            <a href="" className="text-decoration-none">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features
