import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import testimonial1 from "../assets/t1.jpg";
import testimonial2 from "../assets/t2.jpg";
import testimonial3 from "../assets/t3.jpg";
import testimonial4 from "../assets/t4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <>
      <div className="container-fluid Testimonial py-5">
        <h1 className="main_heading text-center pb-4 pb-lg-0">
          What's Our <span>Client Say</span>
        </h1>
        <div className="container py-md-5 my-lg-5 Testimonial1">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="row">
                <div className="col-md-4">
                  <div className="test_col1">
                    <img
                      src={testimonial1}
                      alt="testimonial"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="test_col2">
                    <h3>Jhon Smith</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro quas assumenda voluptate sed quam ad placeat itaque
                      minus voluptatum fugit!
                    </p>
                    <span className="badge rounded-pill text-bg-secondary">
                      Student
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-4">
                  <div className="test_col1">
                    <img
                      src={testimonial2}
                      alt="testimonial"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="test_col2">
                    <h3>Jhon Smith</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro quas assumenda voluptate sed quam ad placeat itaque
                      minus voluptatum fugit!
                    </p>
                    <span className="badge rounded-pill text-bg-secondary">
                      Student
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-4">
                  <div className="test_col1">
                    <img
                      src={testimonial3}
                      alt="testimonial"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="test_col2">
                    <h3>Jhon Smith</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro quas assumenda voluptate sed quam ad placeat itaque
                      minus voluptatum fugit!
                    </p>
                    <span className="badge rounded-pill text-bg-secondary">
                      Student
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                <div className="col-md-4">
                  <div className="test_col1">
                    <img
                      src={testimonial4}
                      alt="testimonial"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="test_col2">
                    <h3>Jhon Smith</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro quas assumenda voluptate sed quam ad placeat itaque
                      minus voluptatum fugit!
                    </p>
                    <span className="badge rounded-pill text-bg-secondary">
                      Student
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
