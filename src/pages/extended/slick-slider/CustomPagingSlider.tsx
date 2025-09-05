
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrow";
const images = [
    "/images/g1.jpg",
    "/images/g2.jpg",
    "/images/g3.jpg",
    "/images/g4.jpg",
    "/images/g5.jpg",
];

function CustomPagingSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
         prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    customPaging: (i: number) => (
      <div className="w-10 sm:w-14 h-8 sm:h-11 overflow-hidden rounded-md border border-gray-300">
        <img
          src={images[i]}
          alt={`thumb-${i}`}
          className="w-full h-full"
        />
      </div>
    ),
    dotsClass:
      "slick-dots flex justify-center gap-6 sm:gap-10 !flex mt-4 space-x-3 [&>li]:w-16 [&>li]:h-12 [&>li>button]:p-0",
  };
  return (
    <div className="grid grid-cols-1">
      <div className="w-full mx-auto mb-20 relative group">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full xl:h-[640px] rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CustomPagingSlider;
