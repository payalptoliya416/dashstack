import { Star } from "lucide-react";
import type { Product } from "../../../types/DashboardModule";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 px-6 py-4">
      <div className="flex gap-3 items-center">
        <div className="w-[55px] h-[47px] bg-[#eef0f3] rounded-lg flex justify-center items-center">
          <img src={product.image} alt={product.title} />
        </div>
        <div>
          <h3 className="text-sm mb-1 font-semibold">{product.title}</h3>
          <p className="text-xs">Code: {product.code}</p>
        </div>
      </div>
      <div>
        <div className="flex gap-[1px] items-center justify-end mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              fill="#e49e3d"
              stroke="black"
              strokeWidth={0}
              size={17}
            />
          ))}
        </div>
        <h3 className="text-[13px] text-end">{product.reviews} Reviews</h3>
      </div>
    </div>
  );
}

export default ProductCard;
