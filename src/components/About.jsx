import React from 'react'
import aboutImg from '../assets/about-rx7AOsOa.png'

const About = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div className="col-lg-6">
              <div className="about_col1">
                <img src={aboutImg} alt="About_img" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_col2">
                <h3>overview</h3>
                <h1>A little information for our guest</h1>
                <p className="Main_p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis quidem veritatis cum cupiditate suscipit autem nisi
                  fugiat quae amet. At beatae mollitia odio tempore est, laborum
                  aliquid voluptatum accusamus neque?
                </p>
                <div className="counter py-4">
                  <div className="row">
                    <div className="col-md-5 py-3 py-md-0">
                      <h2>15K+</h2>
                      <h5>Happy Customer</h5>
                    </div>
                    <div className="col-md-4 py-3 py-md-0">
                      <h2>10+</h2>
                      <h5>Award Win</h5>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                      <h2>30+</h2>
                      <h5>Food Menu</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About
