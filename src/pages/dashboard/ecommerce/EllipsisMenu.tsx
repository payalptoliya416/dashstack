import { Menu, Transition } from "@headlessui/react";
import { ChartColumn, EllipsisVertical, RefreshCw, Share2 } from "lucide-react";
import React, { Fragment } from "react";

const EllipsisMenu: React.FC = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <div className="hover:bg-[#EEF0F3] transition-all duration-500 flex items-center justify-center rounded-full w-8 h-8 cursor-pointer">
          <EllipsisVertical size={17} />
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 scale-95 -translate-y-1"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100 translate-y-0"
        leaveTo="opacity-0 scale-95 -translate-y-1"
      >
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg focus:outline-none z-10">
          <ul className="p-[10px] border-b border-gray-200">
            <li className="flex items-center gap-2 px-4 py-[10px]">
              <Share2 size={16} />
              <h3 className="text-sm mb-0">Share</h3>
            </li>
            <li className="flex items-center gap-2 px-4 py-[10px]">
              <RefreshCw size={16} />
              <h3 className="text-sm mb-0">Refresh</h3>
            </li>
          </ul>
          <div className="px-[10px] py-2">
            <div className="flex items-center gap-2 px-4 py-[10px]">
              <ChartColumn size={16} />
              <h3 className="text-sm mb-0">Full Reports</h3>
            </div>
          </div>
        </div>
      </Transition>
    </Menu>
  );
};

export default EllipsisMenu;
