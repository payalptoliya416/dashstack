import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrow";

const ResponsiveSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
     prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // below 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // below 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // below 480px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
     <div className="grid grid-cols-1">
    <div className="w-full mx-auto mb-7 relative group">
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
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

export default ResponsiveSlider;
