import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrow";

const SingleSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

  };

  return (
    <div className="grid grid-cols-1">
    <div className="w-full mx-auto mb-7 relative group">
      <Slider {...settings}>
        <div className="h-36 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] text-sm">
          <div className="flex justify-center items-center h-full">
           1
          </div>
        </div>
        <div className="h-36 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] text-sm">
          <div className="flex justify-center items-center h-full">
          2
          </div>
        </div>
        <div className="h-36 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] text-sm">
           <div className="flex justify-center items-center h-full">
           3
          </div>
        </div>
        <div className="h-36 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] text-sm">
           <div className="flex justify-center items-center h-full">
           4
          </div>
        </div>
        <div className="h-36 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] text-sm">
           <div className="flex justify-center items-center h-full">
          5
          </div>
        </div>
        <div className="h-36 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] text-sm">
           <div className="flex justify-center items-center h-full">
           6
          </div>
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default SingleSlider;
