import { Check, X } from "lucide-react";
import { useState } from "react";
import UIOptionTable from "../../base-ui/UIOptionTable";
import { switchTable } from "./SwitchData";
import {motion} from 'framer-motion';
import { usePageAnimation } from "../../../hooks/usePageAnimation";
interface ThemeSwitch {
  id: string;
  label: string;
  color: string;
}

const themeSwitches: ThemeSwitch[] = [
  { id: "primary", label: "Primary", color: "#3E97FF" },
  { id: "secondary", label: "Secondary", color: "#505863" },
  { id: "success", label: "Success", color: "#25B865" },
  { id: "info", label: "Info", color: "#02A0E4" },
  { id: "warning", label: "Warning", color: "#E49E3D" },
  { id: "danger", label: "Danger", color: "#D13B4C" },
];

const switchSizes = [
  { width: 40, height: 20, knob: 12, rounded: true },  
  { width: 48, height: 24, knob: 16, rounded: true },  
  { width: 48, height: 24, knob: 16, rounded: false }, 
  { width: 56, height: 28, knob: 20, rounded: true },  
];

type SwitchStates = {
  [key: string]: boolean;
};

const Switches: React.FC = () => {
  const [isTextOn, setIsTextOn] = useState<boolean>(true);
  const [isTextSquareOn, setIsTextSquareOn] = useState<boolean>(false);
  const [isIconOn, setIsIconOn] = useState<boolean>(false);
  const [isIconSquareOn, setIsIconSquareOn] = useState<boolean>(false);
  const [selectedGroup1, setSelectedGroup1] = useState<string>("");
  const [selectedGroup2, setSelectedGroup2] = useState<string>("");

 const [switchStates, setSwitchStates] = useState<SwitchStates>(() => {
    const initialState: SwitchStates = {};
    switchSizes.forEach((sizeIdx) => {
      themeSwitches.forEach((theme) => {
        const key = `${theme.id}-${sizeIdx}`;
        initialState[key] = true;
      });
    });
    return initialState;
  });

  const toggleSwitch = (key: string) => {
    setSwitchStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
     <motion.div  {...usePageAnimation()} className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7">
        {/* Default */}
        <div className="rounded-lg shadow border border-gray-100 bg-white xl:mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
            Default
          </div>
         <div className="p-4 md:p-6">
          <div className="flex flex-col gap-4">
            {/* Default Round Switch */}
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="relative w-10 h-5 bg-white border border-gray-200 rounded-full peer-checked:bg-blue peer-checked:border-transparent peer-focus:outline-none 
                after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-5">
              </div>
              <span className="ml-3 text-sm font-medium text-gray-900">Default</span>
            </label>

            {/* Square Switch */}
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="relative w-10 h-5 bg-white border border-gray-200 rounded-md peer-checked:bg-blue peer-checked:border-transparent peer-focus:outline-none 
                after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-5">
              </div>
              <span className="ml-3 text-sm font-medium text-gray-900">Square</span>
            </label>
          </div>
        </div>
        </div>

        {/* withText */}
        <div className="rounded-lg shadow border border-gray-100 bg-white xl:mb-7">
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
                    isTextOn ? "bg-blue" : "bg-white"
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
                    isTextSquareOn ? "bg-blue" : "bg-white"
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
        <div className="rounded-lg shadow border border-gray-100 bg-white sm:mb-7">
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
                    isIconOn ? "bg-blue" : "bg-white"
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
                    isIconSquareOn ? "bg-blue" : "bg-white"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
        <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
          <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
           Sizing
          </div>
          <div className="p-4 md:p-6">
            <div className="mb-4">
               <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-10 h-5 bg-white border border-gray-200 rounded-full peer-checked:bg-blue peer-checked:border-transparent peer-focus:outline-none 
                  after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-5">
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">Small</span>
               </label>
            </div>
            <div className="mb-4">
               <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-12 h-6 bg-white border border-gray-200 rounded-full peer-checked:bg-blue peer-checked:border-transparent peer-focus:outline-none 
                  after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-6">
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">Default</span>
               </label>
            </div>
            <div className="mb-4">
               <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-14 h-7 bg-white border border-gray-200 rounded-full peer-checked:bg-blue peer-checked:border-transparent peer-focus:outline-none 
                  after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-7">
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">Large</span>
               </label>
            </div>
          <div className="border border-gray-100 my-8"/>
          <div className="mb-4">
               <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-10 h-5 bg-white border border-gray-200 rounded peer-checked:bg-blue peer-checked:border-transparent peer-focus:outline-none 
                  after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-5">
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">Small Square</span>
               </label>
            </div>
            <div className="mb-4">
               <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-12 h-6 bg-white border border-gray-200 rounded peer-checked:bg-blue peer-checked:border-transparent peer-focus:outline-none 
                  after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-6">
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">Default Square</span>
               </label>
            </div>
            <div className="mb-4">
               <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-14 h-7 bg-white border border-gray-200 rounded peer-checked:bg-blue peer-checked:border-transparent peer-focus:outline-none 
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
      <div className="mb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={selectedGroup1 === "opt1"}
            onChange={() => setSelectedGroup1("opt1")}
          />
          <div className="relative w-10 h-5 bg-white border border-gray-200 rounded-full peer-checked:bg-blue peer-checked:border-transparent peer-focus:outline-none 
            after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-5">
          </div>
          <span className="ml-3 text-sm font-medium text-gray-900">Option 1</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={selectedGroup1 === "opt2"}
            onChange={() => setSelectedGroup1("opt2")}
          />
          <div className="relative w-12 h-6 bg-white border border-gray-200 rounded-full peer-checked:bg-blue peer-checked:border-transparent peer-focus:outline-none 
            after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-6">
          </div>
          <span className="ml-3 text-sm font-medium text-gray-900">Option 2</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={selectedGroup1 === "opt3"}
            onChange={() => setSelectedGroup1("opt3")}
          />
          <div className="relative w-14 h-7 bg-white border border-gray-200 rounded-full peer-checked:bg-blue peer-checked:border-transparent peer-focus:outline-none 
            after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-7">
          </div>
          <span className="ml-3 text-sm font-medium text-gray-900">Option 3</span>
        </label>
      </div>

      <div className="border border-gray-100 my-8" />

      {/* Group 2: Square */}
      <div className="mb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={selectedGroup2 === "opt1"}
            onChange={() => setSelectedGroup2("opt1")}
          />
          <div className="relative w-10 h-5 bg-white border border-gray-200 rounded peer-checked:bg-blue peer-checked:border-transparent peer-focus:outline-none 
            after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded after:h-3 after:w-3 after:transition-all peer-checked:after:translate-x-5">
          </div>
          <span className="ml-3 text-sm font-medium text-gray-900">Option 1</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={selectedGroup2 === "opt2"}
            onChange={() => setSelectedGroup2("opt2")}
          />
          <div className="relative w-12 h-6 bg-white border border-gray-200 rounded peer-checked:bg-blue peer-checked:border-transparent peer-focus:outline-none 
            after:content-[''] after:absolute after:top-[3px] after:left-1 after:bg-[#EEF0F3] after:rounded after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-6">
          </div>
          <span className="ml-3 text-sm font-medium text-gray-900">Option 2</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={selectedGroup2 === "opt3"}
            onChange={() => setSelectedGroup2("opt3")}
          />
          <div className="relative w-14 h-7 bg-white border border-gray-200 rounded peer-checked:bg-blue peer-checked:border-transparent peer-focus:outline-none 
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

      {switchSizes.map((size, sizeIdx) => (
        <div
          key={sizeIdx}
          className="p-6 border-b border-gray-100 flex gap-7 sm:gap-12 items-center flex-wrap"
        >
          {themeSwitches.map((theme) => {
            const key = `${theme.id}-${sizeIdx}`;
            const isOn = switchStates[key];

            return (
              <label
                key={key}
                className="inline-flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isOn}
                  onChange={() => toggleSwitch(key)}
                />
                <div
                  className={`relative transition border border-gray-100 ${
                    size.rounded ? "rounded-full" : "rounded-md"
                  }`}
                  style={{
                    width: `${size.width}px`,
                    height: `${size.height}px`,
                    backgroundColor: isOn ? theme.color : "white",
                  }}
                >
                  {/* ON/OFF text */}
                  {isOn ? (
                    <span
                      className="absolute font-bold text-white"
                      style={{
                        left: "4px",
                        top: size.height / 4,
                        fontSize: "8px",
                      }}
                    >
                      ON
                    </span>
                  ) : (
                    <span
                      className="absolute font-bold text-gray-500"
                      style={{
                        right: "4px",
                        top: size.height / 4,
                        fontSize: "8px",
                      }}
                    >
                      OFF
                    </span>
                  )}

                  {/* Knob */}
                  <div
                    className="absolute rounded-full transition-transform"
                    style={{
                      top: "3px",
                      left: "2px",
                      width: `${size.knob}px`,
                      height: `${size.knob}px`,
                      backgroundColor: isOn ? "white" : "#e5e7eb",
                      transform: isOn
                        ? `translateX(${size.width - size.knob -7}px)`
                        : "translateX(0px)",
                    }}
                  />
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">
                  {theme.label}
                </span>
              </label>
            );
          })}
        </div>
      ))}
    </div>
       <UIOptionTable title="Options" options={switchTable} />
    </motion.div>
  );
};

export default Switches;
