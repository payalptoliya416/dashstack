import { useRef, useState, type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductSliderCard } from "../../hooks/useProductSliderCard";
import MainTitle from "../../hooks/useMainTitle";
import { usePageAnimation } from "../../hooks/usePageAnimation";
import { useFadeIn } from "../../hooks/useFadeIn";
import { motion } from "framer-motion";
import type { SlideData } from "../../types/Dashboard";

const slides: SlideData[] = [
  {
    date: "September 12–22",
    title: "Enjoy free home\ndelivery in this summer",
    desc: "Designer Dresses - Pick from trendy Designer Dress.",
    bg: "/images/slide-bg.png",
  },
  {
    date: "October 1–10",
    title: "New arrivals on\nfall collection",
    desc: "Explore the best trends for the season.",
    bg: "/images/slide-bg.png",
  },
  {
    date: "November 5–15",
    title: "Up to 50% off\non winter fashion",
    desc: "Shop before the chill hits!",
    bg: "/images/slide-bg.png",
  },
  {
    date: "December 20–31",
    title: "Celebrate New Year\nwith style",
    desc: "Get party-ready with designer dresses.",
    bg: "/images/slide-bg.png",
  },
];

const productData = [
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/watch1.png", "/images/watch1.png", "/images/watch1.png"],
    title: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
];

const Products: FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(productData.length / itemsPerPage);
  const paginatedData = productData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

 const pageAnimation = usePageAnimation();
  const fadeIn = useFadeIn();
  
const getPageButtons = () => {
  const buttons = [];
  let start = Math.max(2, currentPage - 1);
  let end = Math.min(totalPages - 1, currentPage + 1);

  // Adjust bounds for edges
  if (currentPage <= 2) {
    start = 2;
    end = 4;
  } else if (currentPage >= totalPages - 1) {
    start = totalPages - 3;
    end = totalPages - 1;
  }

  if (start > 2) {
    buttons.push(
      <span key="start-ellipsis" className="px-3 text-gray-500 flex items-end">...</span>
    );
  }

  for (let i = start; i <= end; i++) {
    if (i > 1 && i < totalPages) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 text-sm flex justify-center items-center ${
            currentPage === i
              ? "bg-gray-800 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }
  }

  // Add ellipsis after
  if (end < totalPages - 1) {
    buttons.push(
      <span key="end-ellipsis" className="px-3 text-gray-500 flex items-end">...</span>
    );
  }

  return buttons;
};
  return (
    <>
    <motion.div
          variants={pageAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
         <MainTitle title="Products"/>
      <div className="relative mb-[30px]">
        <div className="grid grid-col-12">
          <div
          ref={prevRef}
          className="w-7 sm:w-[41px] h-7 sm:h-[41px] rounded-full bg-[#F4F4F4] flex items-center justify-center shadow absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-10 cursor-pointer after:hidden"
        >
          <ChevronLeft className="text-black w-3 sm:w-5 h-3 sm:h-5" />
        </div>
        <div
          ref={nextRef}
          className="w-7 sm:w-[41px] h-7 sm:h-[41px] rounded-full bg-[#F4F4F4] flex items-center justify-center shadow absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-10 cursor-pointer after:hidden"
        >
          <ChevronRight className="text-black w-3 sm:w-5 h-3 sm:h-5" />
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
          {slides.map((slide: SlideData, index: number) => (
            <SwiperSlide key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full bg-no-repeat bg-cover bg-center flex items-center rounded-xl py-8 sm:py-[50px]"
                style={{ backgroundImage: `url('${slide.bg}')` }}
              >
                <div className="px-11 sm:px-20 xl:pl-[130px]">
                  <h6 className="text-base font-semibold leading-[30px] mb-2 text-white">
                    {slide.date}
                  </h6>
                  <h2 className="font-black text-2xl sm:text-[37px] mb-2 sm:leading-[48px] text-white whitespace-pre-line">
                    {slide.title}
                  </h2>
                  <p className="text-base font-semibold leading-5 sm:leading-[30px] text-white mb-4">
                    {slide.desc}
                  </p>
               <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF8743] text-white py-1 sm:py-2 rounded-md text-sm leading-[28px] px-5 sm:px-9 transition duration-150 ease-in-out cursor-pointer shadow-sm"
            >
              Get Started
            </motion.button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[28px]">
        {paginatedData.map((product, i) => (
           <motion.div
                      key={i}
                      custom={i}
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                    >
                      <ProductSliderCard key={i} {...product} />
                    </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-row justify-between items-center gap-4 mt-6"
      >
        <span className="text-sm text-gray-600">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, productData.length)} of{" "}
          {productData.length}
        </span>

        <div className="flex bg-[#FAFBFD] border border-[#979797] rounded-lg overflow-hidden">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="py-1 md:py-2 px-3 md:px-[12px] border-r border-[#979797] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} className="text-gray-600" />
          </button>
          {getPageButtons()}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="py-1 md:py-2 px-3 md:px-[12px] border-l border-[#979797] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={18} className="text-gray-600" />
          </button>
        </div>
      </motion.div>
        </motion.div>
    </>
  );
};

export default Products;
