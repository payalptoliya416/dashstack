
import UIOptionTable from "../UIOptionTable"
import { DropdownButton } from "./BasicDrop";
import { SplitDrop } from "./SplitDrop";
import { WIthIconDrop } from "./WithIconDrop";
import { cardOption } from "./DropdownData";
import { MenuSizrDrop } from "./MenuSizeDrop";
import { ThemeDrop } from "./ThemeDrop";
import { ThemeSoft } from "./ThemeSoftDrop";
import {motion} from 'framer-motion';
import { usePageAnimation } from "../../../hooks/usePageAnimation";

function UIDropdown() {
  return (
    <>
    <motion.div
                  {...usePageAnimation()}
                  className="overflow-hidden">
      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Basic
        </div>
         <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap">
          <DropdownButton color="#3e97ff" label="Primary" />
          <DropdownButton color="#505863" label="Secondary" />
          <DropdownButton color="#25b865" label="Success" />
          <DropdownButton color="#02a0e4" label="Info" />
          <DropdownButton color="#e49e3d" label="Warning" />
          <DropdownButton color="#d13b4c" label="Danger" />
        </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Split
        </div>
         <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap">
            <SplitDrop color="#3e97ff" label="Primary" />
            <SplitDrop color="#505863" label="Secondary" />
            <SplitDrop color="#25b865" label="Success" />
            <SplitDrop color="#02a0e4" label="Info" />
            <SplitDrop color="#e49e3d" label="Warning" />
            <SplitDrop color="#d13b4c" label="Danger" />
      </div>
        </div>
      </div>

         <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          withIcon & Close
        </div>
         <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap">
        <WIthIconDrop label="Default Close" closeType="default" />
        <WIthIconDrop label="Clickable Outside" closeType="outside" />
        <WIthIconDrop label="Clickable Inside" closeType="inside" />
        <WIthIconDrop label="Manual Close" closeType="manual" />
      </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
         menuSizing
        </div>
         <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap ">
            <MenuSizrDrop label="Dropdown SM" color="#3e97ff" closeType="default" width="w-36" />
            <MenuSizrDrop label="Dropdown MD" color="#505863" closeType="default" width="w-40" />
            <MenuSizrDrop label="Dropdown LG" color="#25b865" closeType="default" width="w-48" />
            <MenuSizrDrop label="Dropdown XL" color="#02a0e4" closeType="default" width="w-44 md:w-56" />
            <MenuSizrDrop label="Dropdown 2XL" color="#e49e3d" closeType="default" width="w-64" />
            <MenuSizrDrop label="Dropdown 3XL" color="#d13b4c" closeType="default" width="w-72" />
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
         Theme
        </div>
         <div className="p-4 sm:p-6">
           <div className="flex gap-2 items-center flex-wrap">
        <ThemeDrop label="Theme Primary" color="#3e97ff" closeType="default" />
        <ThemeDrop label="Theme Secondary" color="#505863" closeType="default" />
        <ThemeDrop label="Theme Success" color="#25b865" closeType="default" />
        <ThemeDrop label="Theme Info" color="#02a0e4" closeType="default" />
        <ThemeDrop label="Theme Warning" color="#e49e3d" closeType="default" />
        <ThemeDrop label="Theme Danger" color="#d13b4c" closeType="default" />
      </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
         ThemeSoft
        </div>
         <div className="p-4 sm:p-6">
          <div className="flex gap-2 items-center flex-wrap">
         <ThemeSoft label="Theme Primary" color="#3e97ff" closeType="default" />
        <ThemeSoft label="Theme Secondary" color="#505863" closeType="default" />
        <ThemeSoft label="Theme Success" color="#25b865" closeType="default" />
        <ThemeSoft label="Theme Info" color="#02a0e4" closeType="default" />
        <ThemeSoft label="Theme Warning" color="#e49e3d" closeType="default" />
        <ThemeSoft label="Theme Danger" color="#d13b4c" closeType="default" />
      </div>
        </div>
      </div>

        <UIOptionTable title="Options" options={cardOption} />
        </motion.div>
    </>
  )
}

export default UIDropdown
