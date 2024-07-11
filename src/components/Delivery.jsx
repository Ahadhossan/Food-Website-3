import React from 'react'
import delivery1 from '../assets/delivery1-VE-uoCTq.png'
import delivery2 from '../assets/delivery2-1vMH2tRW.png'
import delivery3 from "../assets/delivery3-gpGc9IdM.png";

const Delivery = () => {
  return (
    <>
      <div className="container-fluid text-center py-5">
        <h1 className="main_heading">
          Why <span>Foodies's</span>
        </h1>
        <div className="container py-4">
          <div className="row gx-0 delivery-cards">
            <div
              className="col-lg-4 aos-init aos-animate"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <div className="delivery_col1">
                <img src={delivery1} alt="" />
                <h3>Easy To Order</h3>
              </div>
            </div>
            <div
              className="col-lg-4 aos-init aos-animate"
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-easing="ease-in"
            >
              <div className="delivery_col1">
                <img src={delivery2} alt="" />
                <h3>Fastest Delivery</h3>
              </div>
            </div>
            <div
              className="col-lg-4 aos-init aos-animate"
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-easing="ease-in"
            >
              <div className="delivery_col1">
                <img src={delivery3} alt="" />
                <h3>Best Quality</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
