import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import type { DropdownProps, MenuItemRenderProps } from '../../../types/UiType';

export const SplitDrop: React.FC<DropdownProps> = ({ color, label }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex">
        <button  style={{ backgroundColor: color }}
          className={`px-5 py-2 rounded-l text-white font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500`}
        >
          {label}
        </button>

        <Menu.Button  style={{ backgroundColor: color }}
          className={`px-[15px] py-2 rounded-r text-white focus:outline-none font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500`}
        >
          <ChevronDown className="inline-block" size={12} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-44 md:w-56 origin-top-right rounded-md bg-white shadow-lg -1 focus:outline-none z-10 p-[10px]">
          <div className="py-1">
            <Menu.Item>
              {({ active }: MenuItemRenderProps) => (
                <a
                  href="#"
                  className={`block px-4 py-[10px] text-sm ${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  }`}
                >
                  Action
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }: MenuItemRenderProps) => (
                <a
                  href="#"
                  className={`block px-4 py-[10px] text-sm ${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  }`}
                >
                  Another action
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <a
                  href="#"
                  className="block px-4 py-[10px] text-sm text-blue-500 font-semibold"
                >
                  Active Item
                </a>
              )}
            </Menu.Item>
            <div className="border-t border-gray-100 my-[10px]"></div>
            <Menu.Item>
              {({ active }: MenuItemRenderProps) => (
                <a
                  href="#"
                  className={`block px-4 py-[10px] text-sm ${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  }`}
                >
                  Separated link
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};