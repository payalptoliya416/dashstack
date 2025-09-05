import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrow";

function AutoPlaySlider() {
    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, 
    speed: 3000,      
    cssEase: "linear",
     prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
      <div className="grid grid-cols-1">
      <div className="w-full mx-auto mb-7 relative group">
      <Slider {...settings}>
        <div className="px-2">
          <div className="h-36 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] text-sm">
            <h3>1</h3>
          </div>
        </div>
        <div className="px-2">
          <div className="h-36 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] text-sm">
            <h3>2</h3>
          </div>
        </div>
        <div className="px-2">
          <div className="h-36 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] text-sm">
            <h3>3</h3>
          </div>
        </div>
        <div className="px-2">
          <div className="h-36 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] text-sm">
            <h3>4</h3>
          </div>
        </div>
        <div className="px-2">
          <div className="h-36 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] text-sm">
            <h3>5</h3>
          </div>
        </div>
        <div className="px-2">
          <div className="h-36 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] text-sm">
            <h3>6</h3>
          </div>
        </div>
      </Slider>
      </div>
      </div>
  )
}

export default AutoPlaySlider
