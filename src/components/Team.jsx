import React from 'react'
import cheif1 from '../assets/cheif1-_GG9T0LA.png'
import cheif2 from '../assets/cheif2-Hvou_Fzi.png'
import cheif3 from '../assets/cheif3-toURgSnt.png'
import cheif4 from '../assets/cheif4-UjZ0uPfE.png'

const Team = () => {
  return (
    <>
      <div className="container-fluid Team py-3 py-lg-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 col-7">
              <h1 className="main_heading">
                Meet Our <span>Chefs</span>
              </h1>
            </div>
            <div className="col-lg-2 col-5 text-end">
              <button className="btn1 btn_0 fs-lg-5 fs-6">
                See All <i className="fa-solid fa-arrow-right ps-2"></i>
              </button>
            </div>
          </div>
          <div className="row gx-0  py-5 text-center">
            <div
              className="col-lg-3 aos-init aos-animate"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <div className="team_col1">
                <img src={cheif1} alt="" />
                <h5>Jhon Deo</h5>
              </div>
            </div>
            <div
              className="col-lg-3 aos-init aos-animate"
              data-aos="fade-down"
              data-aos-duration="1400"
              data-aos-easing="ease-in"
            >
              <div className="team_col1">
                <img src={cheif2} alt="" />
                <h5>Jhon Smith</h5>
              </div>
            </div>
            <div
              className="col-lg-3 aos-init aos-animate"
              data-aos="fade-down"
              data-aos-duration="1700"
              data-aos-easing="ease-in"
            >
              <div className="team_col1">
                <img src={cheif3} alt="" />
                <h5>Jhon Aleyia</h5>
              </div>
            </div>
            <div
              className="col-lg-3 aos-init aos-animate"
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-easing="ease-in"
            >
              <div className="team_col1">
                <img src={cheif4} alt="" />
                <h5>Jhon Deo</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team
