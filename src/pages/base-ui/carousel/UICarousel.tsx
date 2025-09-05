import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {motion} from 'framer-motion';
import { usePageAnimation } from "../../../hooks/usePageAnimation";

const images = [
  "/images/g1.jpg",
  "/images/g2.jpg",
  "/images/g3.jpg",
  "/images/g4.jpg",
  "/images/g5.jpg",
];

function UICarousel() {
  const [controlledIndex, setControlledIndex] = useState(0);
  return (
      <motion.div
                  {...usePageAnimation()}
                  className="overflow-hidden">
     <div className="p-6 grid grid-cols-1 xl:grid-cols-2 gap-6 carousel-parent">
      {/* Basic */}
      <div className="rounded-lg shadow-md bg-white">
        <div className="p-4 font-bold text-base  sm:text-lg">Basic</div>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="rounded-b-lg"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img src={src} alt={`slide-${idx}`} className="w-full rounded-b-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Controlled */}
      <div className="rounded-lg shadow-md bg-white">
        <div className="p-4 font-bold text-base  sm:text-lg">Controlled</div>
        <Swiper
          onSlideChange={(swiper) => setControlledIndex(swiper.activeIndex)}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          initialSlide={controlledIndex}
          className="rounded-b-lg"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative">
                <img src={src} alt={`slide-${idx}`} className="w-full rounded-b-lg" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#252f4a1a] text-white py-2 sm:py-6 px-1 md:px-4 rounded-lg text-center w-[60%]">
                  <h3 className="text-[#eef3ff] text-xl md:text-2xl mb-2 font-bold">First slide label</h3>
                  <p className="text-xs sm:text-sm text-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Crossfade */}
      <div className="rounded-lg shadow-md bg-white">
        <div className="p-4 font-bold text-base  sm:text-lg">Crossfade</div>
        <Swiper
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, EffectFade]}
          className="rounded-b-lg"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative">
                <img src={src} alt={`slide-${idx}`} className="w-full rounded-b-lg" />
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#252f4a1a] text-white py-2 sm:py-6 px-1 md:px-4 rounded-lg text-center w-[60%]">
                  <h3 className="text-[#eef3ff] text-xl md:text-2xl mb-2 font-bold">First slide label</h3>
                  <p className="text-xs sm:text-sm text-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Autoplay */}
      <div className="rounded-lg shadow-md  bg-white">
        <div className="p-4 font-bold text-base  sm:text-lg">Autoplay</div>
        <Swiper
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          className="rounded-b-lg"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative">
                <img src={src} alt={`slide-${idx}`} className="w-full rounded-b-lg" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#252f4a1a] text-white py-2 sm:py-6 px-1 md:px-4 rounded-lg text-center w-[60%]">
                  <h3 className="text-[#eef3ff] text-xl md:text-2xl mb-2 font-bold">First slide label</h3>
                  <p className="text-xs sm:text-sm text-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
                  </motion.div>
  )
}

export default UICarousel
