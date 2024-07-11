import React from 'react'
import heroImg from "../assets/foodie-home-ak1eVlt3.png";

const Hero = () => {
  return (
    <>
      <div className="container-fluid Hero_main">
        <div className="container">
          <div className="row align-items-lg-center">
            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="hero_col1">
                <h1>The taste of traditions's with a modern twist</h1>
                <p className="py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, voluptas? Voluptate veniam sapiente harum, a qui
                  veritatis obcaecati nostrum quidem quis expedita unde amet
                  ducimus!
                </p>
                <div className="hero_btns">
                  <button className="btn1 fs-5 btn0 my-2 my-md-0">
                    Get Started
                  </button>
                  <button className="btn1 mx-lg-4 fs-5 btn00 my-2 my-md-0">
                    See Our Menu
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="hero_col2">
                <img
                  src={heroImg}
                  alt="heroimg"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero
