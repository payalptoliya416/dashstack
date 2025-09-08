import "@flaticon/flaticon-uicons/css/all/all.css";
import { ArrowRight } from "lucide-react";
import { boldIcon, brandIcon, regularIcon, solidIcon, straightIcon } from "./FlatIconData";

function FaltIcon() {
  return (
    <>
      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center ">
          <h3 className="font-bold text-[17px] text-darkgray"> Regular</h3>
            <a href="https://www.flaticon.com/icon-fonts-most-downloaded?weight=regular&type=uicon"  target="_blank"
              className="text-blue-text text-sm flex justify-center items-center gap-2 font-bold">
              All Regular Icons <ArrowRight size={14} className="font-bold"/>
            </a>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {regularIcon.map((icon, index) => (
            <div
              key={index}
              className="relative border border-gray-100 rounded py-9 sm:py-12 px-4 flex justify-center items-center group overflow-hidden" > <i className={`fi ${icon.name} text-2xl text-darkgray`}></i>
              <div className="absolute inset-0 bg-[#eef0f3] flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                <span className="text-darkgray text-sm font-medium">
                  {icon.name}
                </span>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      {/* --- */}
      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center ">
          <h3 className="font-bold text-[17px] text-darkgray"> Solid</h3>
            <a href="https://www.flaticon.com/icon-fonts-most-downloaded?weight=solid&type=uicon"  target="_blank"
              className="text-blue-text text-sm flex justify-center items-center gap-2 font-bold">
              All Solid Icons <ArrowRight size={14} className="font-bold"/>
            </a>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {solidIcon.map((icon, index) => (
            <div
              key={index}
              className="relative border border-gray-100 rounded py-9 sm:py-12 px-4 flex justify-center items-center group overflow-hidden" > <i className={`fi ${icon.name} text-2xl text-darkgray`}></i>
              <div className="absolute inset-0 bg-[#eef0f3] flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                <span className="text-darkgray text-sm font-medium">
                  {icon.name}
                </span>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      {/* --- */}
      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center ">
          <h3 className="font-bold text-[17px] text-darkgray"> Straight</h3>
            <a href="https://www.flaticon.com/icon-fonts-most-downloaded?corner=straight&type=uicon"  target="_blank"
              className="text-blue-text text-sm flex justify-center items-center gap-2 font-bold">
              All Straight Icons <ArrowRight size={14} className="font-bold"/>
            </a>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {straightIcon.map((icon, index) => (
            <div
              key={index}
              className="relative border border-gray-100 rounded py-9 sm:py-12 px-4 flex justify-center items-center group overflow-hidden" > <i className={`fi ${icon.name} text-2xl text-darkgray`}></i>
              <div className="absolute inset-0 bg-[#eef0f3] flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                <span className="text-darkgray text-sm font-medium">
                  {icon.name}
                </span>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      {/* --- */}
      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center ">
          <h3 className="font-bold text-[17px] text-darkgray"> Bold</h3>
            <a href="https://www.flaticon.com/icon-fonts-most-downloaded?weight=bold&type=uicon"  target="_blank"
              className="text-blue-text text-sm flex justify-center items-center gap-2 font-bold">
              All Bold Icons <ArrowRight size={14} className="font-bold"/>
            </a>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {boldIcon.map((icon, index) => (
            <div
              key={index}
              className="relative border border-gray-100 rounded py-9 sm:py-12 px-4 flex justify-center items-center group overflow-hidden" > <i className={`fi ${icon.name} text-2xl text-darkgray`}></i>
              <div className="absolute inset-0 bg-[#eef0f3] flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                <span className="text-darkgray text-sm font-medium">
                  {icon.name}
                </span>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      {/* --- */}
      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center ">
          <h3 className="font-bold text-[17px] text-darkgray"> Brand</h3>
            <a href="https://www.flaticon.com/icon-fonts-most-downloaded?brands=1&type=uicon"  target="_blank"
              className="text-blue-text text-sm flex justify-center items-center gap-2 font-bold">
              All Brand Icons <ArrowRight size={14} className="font-bold"/>
            </a>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {brandIcon.map((icon, index) => (
            <div
              key={index}
              className="relative border border-gray-100 rounded py-9 sm:py-12 px-4 flex justify-center items-center group overflow-hidden" > <i className={`fi ${icon.name} text-2xl text-darkgray`}></i>
              <div className="absolute inset-0 bg-[#eef0f3] flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                <span className="text-darkgray text-sm font-medium">
                  {icon.name}
                </span>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FaltIcon;
