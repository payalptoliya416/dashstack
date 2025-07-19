import MainTitle from "../../hooks/useMainTitle";
import { ProductSliderCard } from "../../hooks/useProductSliderCard";
import { usePageAnimation } from "../../hooks/usePageAnimation";
import type { productData } from "../../types/Sidebar";
import {motion} from 'framer-motion';

const productData: productData[] = [
  {
    images: ["/images/Bitmap.png", "/images/Bitmap.png", "/images/Bitmap.png"],
    title: "Apple Watch Series 4 ",
    price: "$120.00",
    rating: 4,
    reviewsCount: 131,
  },
  {
    images: ["/images/Bitmap.png", "/images/Bitmap.png", "/images/Bitmap.png"],
    title: "Air-Max-270",
    price: "$60.00",
    rating: 4,
    reviewsCount: 64,
  },
  {
    images: ["/images/Bitmap.png", "/images/Bitmap.png", "/images/Bitmap.png"],
    title: "Minimal Chair Tool",
    price: "$24.59",
    rating: 4,
    reviewsCount: 63,
  },
  {
    images: ["/images/Bitmap.png", "/images/Bitmap.png", "/images/Bitmap.png"],
    title: "Amazfit Vip",
    price: "$24.59",
    rating: 4,
    reviewsCount: 63,
  },
  {
    images: ["/images/Bitmap.png", "/images/Bitmap.png", "/images/Bitmap.png"],
    title: "Gumbo Mouse",
    price: "$24.59",
    rating: 4,
    reviewsCount: 63,
  },
  {
    images: ["/images/Bitmap.png", "/images/Bitmap.png", "/images/Bitmap.png"],
    title: "Camera Tripod",
    price: "$24.59",
    rating: 4,
    reviewsCount: 63,
  },
];

function Favorites() {
    const pageAnim = usePageAnimation();
  return (
    <>
     <motion.div
      variants={pageAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <MainTitle title="Favorites"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[28px]">
        {productData.map((product, i) => (
          <ProductSliderCard key={i} {...product} heartColor="#F93C65" />
        ))}
      </div>
      </motion.div>
    </>
  );
}

export default Favorites;
