import React from "react";
import styled from "styled-components";
import { topMeals } from "./TopMeals";
import CarouselItem from "./CarouselItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderModule from "react-slick";
const Slider = SliderModule.default || SliderModule;

// const Wrapper = styled.div`
//   // min-height: 60vh;
//   font-family: var(--primary-font);
// `;

function MultiItemSliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="py-3">
      <Slider {...settings}>
        {topMeals.map((item) => (
          <CarouselItem image={item.image} title={item.title} />
        ))}
      </Slider>
    </div>
  );
}

export default MultiItemSliders;
