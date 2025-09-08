
import { type FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import {motion} from 'framer-motion';
import { useFadeIn } from "./useFadeIn";

type ProductSliderCardProps = {
  images: string[];
  title: string;
  price: string;
  rating: number; 
  reviewsCount: number;
  onEditClick?: () => void;
   heartColor?: string;
     index?: number; 
};

export const ProductSliderCard: FC<ProductSliderCardProps> = ({
  images,
  title,
  price,
  rating,
  reviewsCount,
  onEditClick,
  heartColor ,
    index = 0,
}) => {
    const fadeIn = useFadeIn();
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
const [isFavorite, setIsFavorite] = useState(false)

  return (
    <motion.div   variants={fadeIn}
      initial="hidden"
      animate="visible"
      custom={index} className="bg-white rounded-xl">
      <div className="relative">
        <div
          ref={prevRef}
          className="w-[41px] h-[41px] rounded-full bg-[#e2eaf8a3] flex items-center justify-center shadow absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer"
        >
          <ChevronLeft className="text-[#626262] w-5 h-5" />
        </div>
        <div
          ref={nextRef}
          className="w-[41px] h-[41px] rounded-full bg-[#e2eaf8a3] flex items-center justify-center shadow absolute top-1/2 -translate-y-1/2 right-4 z-10 cursor-pointer"
        >
          <ChevronRight className="text-[#626262] w-5 h-5" />
        </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: prevRef.current!,
            nextEl: nextRef.current!,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation]}
          className="rounded-xl w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={title} className="w-full rounded-xl" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-darkgray text-lg font-bold mb-2">{title}</h2>
            <h3 className="text-blue-light text-base font-bold mb-2">{price}</h3>
          </div>
          <motion.div whileTap={{ scale: 0.85 }} className="w-[44px] h-[44px] rounded-full bg-[#F9F9F9] flex justify-center items-center cursor-pointer"    onClick={() => setIsFavorite(!isFavorite)}>
            <Heart size={18} color={heartColor ? "#FF3B3B" : "#626262"} fill={isFavorite && heartColor? "#FF3B3B" : isFavorite  ? "#000000" :"none"}/>
          </motion.div>
        </div>

        <div className="flex gap-[2px] items-center mb-5">
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={i}
              src={i <= rating ? "/images/Star.svg" : "/images/GrayStar.svg"}
              alt="star"
            />
          ))}
          <span className="opacity-[40%] text-sm font-semibold ml-2">
            ({reviewsCount})
          </span>
        </div>
    <motion.button
      onClick={onEditClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="bg-[#E2EAF8] bg-opacity-[70%] rounded-lg py-[5px] px-[23px] text-sm font-bold"
    >
      Edit Product
    </motion.button>
      </div>
    </motion.div>
  );
};
