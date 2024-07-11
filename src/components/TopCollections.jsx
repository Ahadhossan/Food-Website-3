import React from "react";
import collection1 from "../assets/collection1-Nz0-ENyM.png";
import foofie1 from "../assets/foofie1-5VUHiRee.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

const TopCollections = () => {
  return (
    <>
      <div className="container-fluid TopCollections py-3 py-lg-5">
        <h1 className="main_heading text-center">
          <span>Top</span> Collections
        </h1>
        <p className="text-center Main_p">
          All our meals in one delicious snap
        </p>
        <div className="container py-md-5 align-items-center">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={collection1}
                alt="TopCollections"
                className="img-fluid"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={foofie1} alt="TopCollections" className="img-fluid" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={collection1}
                alt="TopCollections"
                className="img-fluid"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={collection1}
                alt="TopCollections"
                className="img-fluid"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={collection1}
                alt="TopCollections"
                className="img-fluid"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={collection1}
                alt="TopCollections"
                className="img-fluid"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={collection1}
                alt="TopCollections"
                className="img-fluid"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={collection1}
                alt="TopCollections"
                className="img-fluid"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TopCollections;
