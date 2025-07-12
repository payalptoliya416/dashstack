import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "Sony WH-1000XM5",
    price: "$89.00",
    image: "/images/shopping.jfif",
  },
  {
    name: "Bose QuietComfort 45",
    price: "$89.00",
    image: "/images/shopping2.jfif",
  },
  {
    name: "JBL Live 660NC",
    price: "$89.00",
    image: "/images/shopping3.jfif",
  },
];


const FeaturedProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const nextProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProduct = products[currentIndex];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between relative">
      <h2 className="text-lg sm:text-[22px] text-[#202224] font-semibold mb-4">
        Featured Product
      </h2>

      {/* Product Image */}
      <div className="flex-grow flex items-center justify-center mx-auto w-[225px] h-[225px] bg-white rounded-md overflow-hidden border border-gray-200">
          <img
            src={currentProduct.image}
            alt={currentProduct.name}
            className="w-full h-full object-contain "
          />
        </div>
      {/* Product Info */}
      <div className="text-center mt-4">
        <p className="text-[#282D32] text-lg mb-2 font-bold">
          {currentProduct.name}
        </p>
        <p className="text-[#4880FF] opacity-[70%] text-base font-bold">
          {currentProduct.price}
        </p>
      </div>

      {/* Arrows */}
      <div
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full cursor-pointer"
        onClick={prevProduct}
      >
        <ChevronLeft size={20} className="text-gray-400" />
      </div>
      <div
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full cursor-pointer"
        onClick={nextProduct}
      >
        <ChevronRight size={20} className="text-gray-400" />
      </div>
    </div>
  );
};

export default FeaturedProductSlider;
