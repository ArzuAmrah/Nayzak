import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import   './Slider.css'
import "swiper/css/pagination";
import { Link } from 'react-router-dom'
import { Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="home-slider-all">
    <Swiper
      direction={"vertical"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="home-slider">
          <div className="home-slider-image-1"></div>
          <div className="swiper__text">
            <h1>molk®</h1>
            <p> Keep your everday style chic and on-trend with our selection 20+ styles to choose from.</p>
            <div className="seecollection">
              <div className="seecollection__txt">
                <Link to ='/Shop'>
                <p className='link-see'>See collection</p> 
                </Link>
              </div>
              <div className="seecollection__icon">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-slider">
          <div className="home-slider-image-2"></div>
          <div className="swiper__text">
            <h1>molk®</h1>
            <p> Keep your everday style chic and on-trend with our selection20+ styles to choose fro .</p>
            <div className="seecollection">
              <div className="seecollection__txt">
              <Link to ='/Shop'>
                <p className='link-see'>See collection</p> 
                </Link>
              </div>
              <div className="seecollection__icon">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-slider">
          <div className="home-slider-image-3"></div>
          <div className="swiper__text">
            <h1>molk®</h1>
                  <p> Keep your everday style chic and on-trend with our selection 20+ styles to choose from.</p>
            <div className="seecollection">
              <div className="seecollection__txt">
              <Link to ='/Shop'>
                <p className='link-see'>See collection</p> 
                </Link>
              </div>
              <div className="seecollection__icon">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  )
}

export default Slider