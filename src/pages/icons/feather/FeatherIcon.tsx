import { Search } from "lucide-react";
import { featherIcons, FeatureIconData } from "./FeatherData";
import { useState, type ChangeEvent, type JSX} from "react";
import {motion} from 'framer-motion';
import { usePageAnimation } from "../../../hooks/usePageAnimation";
interface FeatherIconType {
  name: string;
  svg: JSX.Element;
}

const FeatherIcon: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredIcons = featherIcons.filter((icon: FeatherIconType) =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
        <motion.div  {...usePageAnimation()} className="overflow-hidden">

      <div className="rounded-lg shadow-md border border-gray-200 bg-[#F8F9FA] mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px] flex items-center gap-2">
          <Search className="text-[#4b5675]" size={18} />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="bg-white text-sm p-1 placeholder:text-sm font-light focus:outline-none"
            placeholder="Search icons..."
          />
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {filteredIcons.map((icon, index) => (
              <div
                key={index}
                className="relative border border-gray-100 rounded py-9 sm:py-12 px-4 flex justify-center items-center cursor-pointer group overflow-hidden"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
               <FeatureIconData
                  icon={icon}
                  size={24}
                  className="text-darkgray"
                />
                {/* Hover overlay (existing) */}
                <div className="absolute inset-0 bg-[#eef0f3] flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                  <span className="text-darkgray text-sm font-medium">
                    {icon.name}
                  </span>
                </div>

                {/* Click overlay */}
                {activeIndex === index && (
                  <div className="absolute inset-0 bg-[#eef0f3] flex justify-center items-center z-20">
                    <span className="text-darkgray text-sm font-medium">
                      {icon.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-[#F8F9FA] mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          <h3 className="font-bold text-[17px] text-darkgray">Installation</h3>
        </div>
        <div className="p-6">
          <p className="text-[#e83e8c] py-[3px] px-2 rounded bg-[#f1f2f3] text-sm w-max">
            npm install react-icons --save
          </p>
        </div>
      </div>
        </motion.div>
    </>
  );
};

export default FeatherIcon;
