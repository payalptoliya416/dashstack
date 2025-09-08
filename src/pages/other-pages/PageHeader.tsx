import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";
interface PageHeaderProps {
  tag?: string;        
  title: string;      
  description: string; 
}

export default function PageHeader({ tag, title, description }: PageHeaderProps) {
  return (
    <motion.div {...usePageAnimation()} className="overflow-hidden px-6 py-24 md:py-32 flex justify-center items-center text-center bg-[#F1F2F3]">
      <div>
        {tag && (
          <button className="uppercase text-blue-text bg-[#ecf5ff] text-13 rounded-full leading-[13px] px-4 py-[6px] font-semibold mb-6">
            {tag}
          </button>
        )}
        <h2 className="font-bold text-4xl md:text-[56px] text-[#252f4A] mb-6">
          {title}
        </h2>
        <p className="text-sm sm:text-[17px] w-full sm:max-w-[580px] text-[#252f4A] mb-4 mx-auto">
          {description}
        </p>
        <div className="h-[2px] bg-blue-text w-12 mb-5 mx-auto" />
      </div>
    </motion.div>
  );
}
