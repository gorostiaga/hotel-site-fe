import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "react-bootstrap/Image";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/carousel-images.css";

import { useState } from "react";

import ImageShowCase from "./ImageShowCase";

function CarouselImages({ images }) {

    const [openImage, setOpenImage] =useState(false);
    const [imageSource, setImageSource]  = useState(); 


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };

  const imageClickHandler = (imageSrc) => {
    setImageSource(imageSrc);     
    setOpenImage(true);        
  };

  const closeHandler = () => {
    setOpenImage(false);
  }


  return (
    <div>
      <Slider {...settings}>
        {images.map((image) => (
          <Image src={image.path} thumbnail onClick={e => imageClickHandler(image.path, e)} key={image.name}/>
        ))}
      </Slider>
      {openImage && <ImageShowCase imageSource={imageSource} onCloseButton={closeHandler} />}      </div>
    
  );
}

export default CarouselImages;
