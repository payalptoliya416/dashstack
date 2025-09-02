import { Check, X } from "lucide-react";
import { useState } from "react";
import UIOptionTable from "../../base-ui/UIOptionTable";
import { switchTable } from "./SwitchData";

const Switches: React.FC = () => {
  const [isTextOn, setIsTextOn] = useState<boolean>(false);
  const [isTextSquareOn, setIsTextSquareOn] = useState<boolean>(false);
  const [isIconOn, setIsIconOn] = useState<boolean>(false);
  const [isIconSquareOn, setIsIconSquareOn] = useState<boolean>(false);
  const [selectedGroup1, setSelectedGroup1] = useState<string>("");
  const [selectedGroup2, setSelectedGroup2] = useState<string>("");
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7">
        {/* Default */}
        <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
            Default
          </div>
         <div className="p-4 md:p-6">
          <div className="flex flex-col gap-4">
            {/* Default Round Switch */}
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="relative w-10 h-5 bg-white border border-gray-200 rounded-full peer-checked:bg-[#3E97FF] peer-checked:border-transparent peer-focus:outline-none 
                after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-5">
              </div>
              <span className="ml-3 text-sm font-medium text-gray-900">Default</span>
            </label>

            {/* Square Switch */}
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="relative w-10 h-5 bg-white border border-gray-200 rounded-md peer-checked:bg-[#3E97FF] peer-checked:border-transparent peer-focus:outline-none 
                after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-5">
              </div>
              <span className="ml-3 text-sm font-medium text-gray-900">Square</span>
            </label>
          </div>
        </div>
        </div>

        {/* withText */}
        <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
            withText
          </div>
          <div className="p-4 md:p-6">
            {/* Small Round */}
            <div className="flex gap-4 mb-4">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isTextOn}
                  onChange={() => setIsTextOn(!isTextOn)}
                />
                <div
                  className={`relative w-10 h-5 rounded-full transition border border-gray-100 ${
                    isTextOn ? "bg-[#3E97FF]" : "bg-white"
                  }`}
                >
                  {isTextOn ? (
                    <span className="absolute left-1 top-[4px] text-[8px] font-bold text-white">
                      ON
                    </span>
                  ) : (
                    <span className="absolute right-1 top-[4px] text-[8px] font-bold text-gray-500">
                      OFF
                    </span>
                  )}
                  <div
                    className={`absolute top-[3px] left-0.5 w-3 h-3 rounded-full transition-transform ${
                      isTextOn ? "translate-x-5 bg-white" : "bg-gray-200"
                    }`}
                  />
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">
                  withText Small
                </span>
              </label>
            </div>

            {/* Square */}
            <div className="flex gap-4 mb-4">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isTextSquareOn}
                  onChange={() => setIsTextSquareOn(!isTextSquareOn)}
                />
                <div
                  className={`relative w-10 h-5 rounded transition border border-gray-100 ${
                    isTextSquareOn ? "bg-[#3E97FF]" : "bg-white"
                  }`}
                >
                  {isTextSquareOn ? (
                    <span className="absolute left-1 top-[4px] text-[8px] font-bold text-white">
                      ON
                    </span>
                  ) : (
                    <span className="absolute right-1 top-[4px] text-[8px] font-bold text-gray-500">
                      OFF
                    </span>
                  )}
                  <div
                    className={`absolute top-[3px] left-0.5 w-3 h-3 rounded transition-transform ${
                      isTextSquareOn ? "translate-x-5 bg-white" : "bg-gray-200"
                    }`}
                  />
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">
                  withText Square
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* withIcon */}
        <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
            withIcon
          </div>
          <div className="p-4 md:p-6">
            {/* Default Round */}
            <div className="flex gap-4 mb-4">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isIconOn}
                  onChange={() => setIsIconOn(!isIconOn)}
                />
                <div
                  className={`relative w-10 h-5 rounded-full transition border border-gray-100 ${
                    isIconOn ? "bg-[#3E97FF]" : "bg-white"
                  }`}
                >
                  {isIconOn ? (
                    <span className="absolute left-1 top-[4px] text-[8px] font-bold text-white">
                      <Check className="w-3 h-3" />
                    </span>
                  ) : (
                    <span className="absolute right-1 top-[4px] text-[8px] font-bold text-gray-500">
                      <X className="w-3 h-3" />
                    </span>
                  )}
                  <div
                    className={`absolute top-[3px] left-0.5 w-3 h-3  rounded-full transition-transform ${
                      isIconOn ? "translate-x-5 bg-white" : "bg-gray-200"
                    }`}
                  />
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">
                  withIcon Default
                </span>
              </label>
            </div>

            {/* Square */}
            <div className="flex gap-4 mb-4">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isIconSquareOn}
                  onChange={() => setIsIconSquareOn(!isIconSquareOn)}
                />
                <div
                  className={`relative w-10 h-5 rounded transition  border border-gray-100 ${
                    isIconSquareOn ? "bg-[#3E97FF]" : "bg-white"
                  }`}
                >
                  {isIconSquareOn ? (
                    <span className="absolute left-1 top-[4px] text-[8px] font-bold text-white">
                      <Check className="w-3 h-3" />
                    </span>
                  ) : (
                    <span className="absolute right-1 top-[4px] text-[8px] font-bold text-gray-500">
                      <X className="w-3 h-3" />
                    </span>
                  )}
                  <div
                    className={`absolute top-[3px] left-0.5 w-3 h-3 rounded transition-transform ${
                      isIconSquareOn ? "translate-x-5 bg-white" : "bg-gray-200"
                    }`}
                  />
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">
                  withIcon Square
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
        <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
           Sizing
          </div>
          <div className="p-4 md:p-6">
            <div className="flex gap-4 mb-4">
               <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-10 h-5 bg-white border border-gray-200 rounded-full peer-checked:bg-[#3E97FF] peer-checked:border-transparent peer-focus:outline-none 
                  after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-5">
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">Small</span>
               </label>
            </div>
            <div className="flex gap-4 mb-4">
               <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-12 h-6 bg-white border border-gray-200 rounded-full peer-checked:bg-[#3E97FF] peer-checked:border-transparent peer-focus:outline-none 
                  after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-6">
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">Default</span>
               </label>
            </div>
            <div className="flex gap-4 mb-4">
               <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-14 h-7 bg-white border border-gray-200 rounded-full peer-checked:bg-[#3E97FF] peer-checked:border-transparent peer-focus:outline-none 
                  after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-7">
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">Large</span>
               </label>
            </div>
          <div className="border border-gray-100 my-8"/>
          <div className="flex gap-4 mb-4">
               <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-10 h-5 bg-white border border-gray-200 rounded peer-checked:bg-[#3E97FF] peer-checked:border-transparent peer-focus:outline-none 
                  after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-5">
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">Small Square</span>
               </label>
            </div>
            <div className="flex gap-4 mb-4">
               <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-12 h-6 bg-white border border-gray-200 rounded peer-checked:bg-[#3E97FF] peer-checked:border-transparent peer-focus:outline-none 
                  after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-6">
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">Default Square</span>
               </label>
            </div>
            <div className="flex gap-4 mb-4">
               <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-14 h-7 bg-white border border-gray-200 rounded peer-checked:bg-[#3E97FF] peer-checked:border-transparent peer-focus:outline-none 
                  after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-7">
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">Large Square</span>
               </label>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
           Stacked
          </div>
          <div className="p-4 md:p-6">
      {/* Group 1: Rounded */}
      <div className="flex gap-4 mb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={selectedGroup1 === "opt1"}
            onChange={() => setSelectedGroup1("opt1")}
          />
          <div className="relative w-10 h-5 bg-white border border-gray-200 rounded-full peer-checked:bg-[#3E97FF] peer-checked:border-transparent peer-focus:outline-none 
            after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-5">
          </div>
          <span className="ml-3 text-sm font-medium text-gray-900">Option 1</span>
        </label>
      </div>

      <div className="flex gap-4 mb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={selectedGroup1 === "opt2"}
            onChange={() => setSelectedGroup1("opt2")}
          />
          <div className="relative w-12 h-6 bg-white border border-gray-200 rounded-full peer-checked:bg-[#3E97FF] peer-checked:border-transparent peer-focus:outline-none 
            after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-6">
          </div>
          <span className="ml-3 text-sm font-medium text-gray-900">Option 2</span>
        </label>
      </div>

      <div className="flex gap-4 mb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={selectedGroup1 === "opt3"}
            onChange={() => setSelectedGroup1("opt3")}
          />
          <div className="relative w-14 h-7 bg-white border border-gray-200 rounded-full peer-checked:bg-[#3E97FF] peer-checked:border-transparent peer-focus:outline-none 
            after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-7">
          </div>
          <span className="ml-3 text-sm font-medium text-gray-900">Option 3</span>
        </label>
      </div>

      <div className="border border-gray-100 my-8" />

      {/* Group 2: Square */}
      <div className="flex gap-4 mb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={selectedGroup2 === "opt1"}
            onChange={() => setSelectedGroup2("opt1")}
          />
          <div className="relative w-10 h-5 bg-white border border-gray-200 rounded peer-checked:bg-[#3E97FF] peer-checked:border-transparent peer-focus:outline-none 
            after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-5">
          </div>
          <span className="ml-3 text-sm font-medium text-gray-900">Option 1</span>
        </label>
      </div>

      <div className="flex gap-4 mb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={selectedGroup2 === "opt2"}
            onChange={() => setSelectedGroup2("opt2")}
          />
          <div className="relative w-12 h-6 bg-white border border-gray-200 rounded peer-checked:bg-[#3E97FF] peer-checked:border-transparent peer-focus:outline-none 
            after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-6">
          </div>
          <span className="ml-3 text-sm font-medium text-gray-900">Option 2</span>
        </label>
      </div>

      <div className="flex gap-4 mb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={selectedGroup2 === "opt3"}
            onChange={() => setSelectedGroup2("opt3")}
          />
          <div className="relative w-14 h-7 bg-white border border-gray-200 rounded peer-checked:bg-[#3E97FF] peer-checked:border-transparent peer-focus:outline-none 
            after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-7">
          </div>
          <span className="ml-3 text-sm font-medium text-gray-900">Option 3</span>
        </label>
      </div>
    </div>
        </div>
      </div>
        <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
           Themes
          </div>
          <div className="flex items-center gap-5">

          </div>
      </div>
       <UIOptionTable title="Options" options={switchTable} />
    </>
  );
};

export default Switches;
