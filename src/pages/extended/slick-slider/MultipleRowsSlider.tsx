import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrow";

const MultipleRowsSlider: React.FC = () => {
     const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rows: 2, 
    slidesPerRow: 3, 
     prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="grid grid-cols-1">
      <div className="w-full mx-auto mb-7 relative group">
  <Slider {...settings}>
        {[...Array(12)].map((_, i) => (
          <div key={i} className="p-2">
            <div className="h-32 bg-[#EEF0F3] flex items-center justify-center text-darkgray">
              Slide {i + 1}
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default MultipleRowsSlider;
