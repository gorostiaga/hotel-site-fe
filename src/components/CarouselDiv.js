import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselDiv({ divs }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {divs.map((div) => (
        <div key={div.id}>{div.content}</div>
      ))}
    </Slider>
  );
}

export default CarouselDiv;
