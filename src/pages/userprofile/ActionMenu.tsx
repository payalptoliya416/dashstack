import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDown } from "lucide-react";

export default function ActionMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <h3 className="text-[#3e97ff] text-xs py-[6px] px-[10px] border border-gray-100 rounded-full bg-[#F8F9FA]">
          Action <ChevronDown size={10} className="inline-block" />
        </h3>
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
        <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg focus:outline-none z-10">
          <ul className="p-[10px] border-b border-gray-200">
            {["Invite", "Rename", "View Details", "Add to Favorite"].map((item, i) => (
              <li key={i} className="py-[10px] px-4 mb-1 text-sm cursor-pointer hover:bg-gray-50">{item}</li>
            ))}
          </ul>
          <div className="px-[10px] py-2">
            <div className="flex items-center gap-2 px-4 py-[10px] cursor-pointer hover:bg-gray-50">
              <h3 className="text-sm mb-0">Leave Project</h3>
            </div>
          </div>
        </div>
      </Transition>
    </Menu>
  );
}
