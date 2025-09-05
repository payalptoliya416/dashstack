import UIOptionTable from "../UIOptionTable";
import BasicTab from "./BasicTab";
import DropdownTab from "./DropdownTab";
import LineWithIconTab from "./LineWithIconTab";
import { NavTabData } from "./NavTabData";
import PillsTab from "./PillsTab";
import RichContent from "./RichContent";
import { ThemeTab } from "./ThemeTab";
import UnderTab from "./UnderTab";
import WithIcon from "./WithIcon";
import {motion} from 'framer-motion';
import { usePageAnimation } from "../../../hooks/usePageAnimation";

type Theme = {
  color: string;
};

const themes: Theme[] = [
  { color: "bg-[#3e97ff]"},
  { color: "bg-[#505863]"},
  { color: "bg-[#25b865]"},
  { color: "bg-[#02a0e4]"},
  { color: "bg-[#e49e3d]"},
  { color: "bg-[#d13b4c]"},
];

function UINavTabs() {
  return (
    <>
      <motion.div
                  {...usePageAnimation()}
                  className="overflow-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-7">
        <div className="rounded-lg shadow-md border border-gray-200 bg-white">
          <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
            Navigation
          </div>
          <div className="p-4 sm:p-6">
            <BasicTab />
          </div>
        </div>
        <div className="rounded-lg shadow-md border border-gray-200 bg-white">
          <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
            Pills
          </div>
          <div className="p-4 sm:p-6">
            <PillsTab />
          </div>
        </div>
        <div className="rounded-lg shadow-md border border-gray-200 bg-white">
          <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
            Underline
          </div>
          <div className="p-4 sm:p-6">
            <UnderTab />
          </div>
        </div>
        <div className="rounded-lg shadow-md border border-gray-200 bg-white">
          <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
            Dropdowns
          </div>
          <div className="p-4 sm:p-6">
            <DropdownTab />
          </div>
        </div>
        <div className="rounded-lg shadow-md border border-gray-200 bg-white">
          <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
            withIcon
          </div>
          <div className="p-4 sm:p-6">
            <WithIcon />
          </div>
        </div>
        <div className="rounded-lg shadow-md border border-gray-200 bg-white">
          <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
            lineWithIcon
          </div>
          <div className="p-4 sm:p-6">
            <LineWithIconTab />
          </div>
        </div>
      </div>
      <div className="rounded-lg shadow-md border border-gray-200 bg-white">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Theme
        </div>
        <div className="p-4 sm:p-6">
          {themes.map((theme, index) => (
            <div key={index}>
              <div className="mb-4">
                <ThemeTab themeColor={theme.color} />
              </div>
              {index < themes.length - 1 && (
                <div className="my-12 border border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          richContent
        </div>
        <div className="p-4 sm:p-6 border-b border-gray-100">
         <RichContent color='#3e97ff'/>
        </div>
        <div className="p-4 sm:p-6 border-b border-gray-100">
         <RichContent  color='#505863'/>
        </div>
        <div className="p-4 sm:p-6 border-b border-gray-100">
         <RichContent  color='#25b865'/>
        </div>
        <div className="p-4 sm:p-6 border-b border-gray-100">
         <RichContent  color='#02a0e4'/>
        </div>
        <div className="p-4 sm:p-6 border-b border-gray-100">
         <RichContent  color='#e49e3d'/>
        </div>
        <div className="p-4 sm:p-6 border-b border-gray-100">
         <RichContent  color='#d13b4c'/>
        </div>
      </div>

       <UIOptionTable title="Options" options={NavTabData} />
          </motion.div>
    </>
  );
}

export default UINavTabs;
