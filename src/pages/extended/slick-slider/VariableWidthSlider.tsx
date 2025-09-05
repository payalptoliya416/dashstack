
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrow";

function VariableWidthSlider() {
     const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    speed: 500,
     prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
   <div className="grid grid-cols-1">
      <div className="w-full mx-auto mb-7 relative group">
         <Slider {...settings}>
  <div style={{ width: 425 }}>
    <div className="h-32 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] mx-2">
      425
    </div>
  </div>
  <div style={{ width: 275 }}>
    <div className="h-32 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] mx-2">
      275
    </div>
  </div>
  <div style={{ width: 150 }}>
    <div className="h-32 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] mx-2">
      150
    </div>
  </div>
  <div style={{ width: 200 }}>
    <div className="h-32 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] mx-2">
      200
    </div>
  </div>
  <div style={{ width: 250 }}>
    <div className="h-32 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] mx-2">
      250
    </div>
  </div>
  <div style={{ width: 300 }}>
    <div className="h-32 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] mx-2">
      300
    </div>
  </div>
  <div style={{ width: 425 }}>
    <div className="h-32 bg-[#EEF0F3] flex items-center justify-center text-[#252f4a] mx-2">
      425
    </div>
  </div>
</Slider>

    </div>
    </div>
  )
}

export default VariableWidthSlider
