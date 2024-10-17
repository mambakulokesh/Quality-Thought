import "./Footer.css";
function Footer() {
  return (
    <div className="footerContainer bg-dark text-white p-4">
      <div className="container-fluid px-5">

        <div className="row d-flex">
          <div className="col-4 mt-5">
            <h4>ABOUT FLEX BUSINESS PRO</h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              beatae voluptas nemo veritatis nostrum nesciunt. Earum in delectus
              tempore porro maiores sequi, laboriosam labore ad eos vero veniam
              distinctio quo iste ipsa mollitia quae unde sed aperiam quia sit?
              Quasi, praesentium voluptatem aspernatur minima officia ducimus
              fugit hic aliquam veritatis.
            </p>
          </div>

          <div className="col-3 mt-5">
            <h4>RECENT POSTS</h4>
            <br />
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <h6>Fly to London</h6>
                  <p>September 18, 2018</p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <h6>Fly to London</h6>
                  <p>September 18, 2018</p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <h6>Fly to London</h6>
                  <p>September 18, 2018</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-5 mt-5">
            <h4 className="mb-4">GALLERIES</h4>
            {/* <br /> */}

            <div className="container-fluid">
              <div className="row my-3 d-flex justify-content-around">
                <div className="col-3">
                  <img
                    src="https://th.bing.com/th?id=OIP.4EFXPEWvJO1Rct11ktzkWwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt=""
                    width={"120px"}
                    height={"80px"}
                    className="ml-2"
                  />
                </div>
                <div className="col-3">
                  <img
                    src="https://th.bing.com/th?id=OIP.4EFXPEWvJO1Rct11ktzkWwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt=""
                    width={"120px"}
                    height={"80px"}
                  />
                </div>
                <div className="col-3">
                  <img
                    src="https://th.bing.com/th?id=OIP.4EFXPEWvJO1Rct11ktzkWwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt=""
                    width={"120px"}
                    height={"80px"}
                  />
                </div>
                <div className="col-3">
                  <img
                    src="https://th.bing.com/th?id=OIP.4EFXPEWvJO1Rct11ktzkWwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt=""
                    width={"120px"}
                    height={"80px"}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <img
                    src="https://th.bing.com/th?id=OIP.4EFXPEWvJO1Rct11ktzkWwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt=""
                    width={"120px"}
                    height={"80px"}
                  />
                </div>
                <div className="col-3">
                  <img
                    src="https://th.bing.com/th?id=OIP.4EFXPEWvJO1Rct11ktzkWwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt=""
                    width={"120px"}
                    height={"80px"}
                  />
                </div>
                <div className="col-3">
                  <img
                    src="https://th.bing.com/th?id=OIP.4EFXPEWvJO1Rct11ktzkWwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt=""
                    width={"120px"}
                    height={"80px"}
                  />
                </div>
                <div className="col-3">
                  <img
                    src="https://th.bing.com/th?id=OIP.4EFXPEWvJO1Rct11ktzkWwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt=""
                    width={"120px"}
                    height={"80px"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
