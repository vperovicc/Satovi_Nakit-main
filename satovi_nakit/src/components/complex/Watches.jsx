// Inside your component
import React from 'react';
import { Component } from 'react';
import './Watches.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Watches = ({ Images, Text }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1500,
        cssEase: "linear"
      };
  return (
    <div className='container_watches'>
      <p className='title_watches'>Neki Od Satova U Nasoj Ponudi</p>
      <div className="slider-container">
        <Slider {...settings}>
            {Images.map((image)=>(
                <img src={image}/>
            ))}
        </Slider>
    </div>
      <p className='description_watches'>{Text}</p>
    </div>
  );
};

export default Watches;
