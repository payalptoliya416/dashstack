import { MoveLeft, MoveRight } from "lucide-react";

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 
                 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                 cursor-pointer flex items-center justify-center bg-white text-white 
                 rounded-full w-8 h-8"
    >
      <MoveLeft size={16} className="text-black" />
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 
                 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                 cursor-pointer flex items-center justify-center bg-white text-white 
                 rounded-full w-8 h-8"
    >
      <MoveRight size={16} className="text-black" />
    </div>
  );
};

export { PrevArrow, NextArrow };
