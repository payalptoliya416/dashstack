import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrow";

const MultipleSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
     prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="grid grid-cols-1">
    <div className="w-full mx-auto mb-7 relative group">
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="p-2">
            <div className="h-40 bg-[#EEF0F3] flex items-center justify-center text-darkgray">
             {num}
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default MultipleSlider;
