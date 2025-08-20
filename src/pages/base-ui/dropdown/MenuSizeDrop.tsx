import { Fragment, useState, useEffect, useRef } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDown, Airplay, Star, Trash2, LayoutGridIcon } from 'lucide-react';

interface DropdownProps {
  color?: string;
  label: string;
  closeType: 'default' | 'outside' | 'inside' | 'manual';
  width: string; 
}

interface MenuItemRenderProps {
  active: boolean;
}

export const MenuSizrDrop: React.FC<DropdownProps> = ({ color = '#3e97ff', label, closeType, width }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        if (closeType === 'default' || closeType === 'inside') {
          setIsMenuOpen(false);
        }
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen, closeType]);

  return (
    <Menu as="div" className="relative inline-block text-left" ref={menuRef}>
      <div>
        <Menu.Button
          className={`px-5 py-2 rounded text-white bg-[${color}] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500`}
          onClick={handleMenuToggle}
        >
         
          {label} <ChevronDown className="inline-block ml-2" size={12} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        show={isMenuOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute left-0 mt-2 ${width} origin-top-right rounded-md bg-white shadow-lg focus:outline-none z-10 p-[10px]`}
        >
          <div className="py-1">
            <Menu.Item as={Fragment}>
              {({ active }: MenuItemRenderProps) => (
                <a
                  href="#"
                  className={`block px-4 py-[10px] text-sm whitespace-nowrap ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                  onClick={() => {
                    if (closeType === 'default' || closeType === 'outside') {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  <LayoutGridIcon className='inline-block me-2' size={16} /> Menu item
                </a>
              )}
            </Menu.Item>
            <Menu.Item as={Fragment}>
              {({ active }: MenuItemRenderProps) => (
                <a
                  href="#"
                  className={`block px-4 py-[10px] text-sm whitespace-nowrap ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                  onClick={() => {
                    if (closeType === 'default' || closeType === 'outside') {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  <Airplay className='inline-block me-2' size={16} /> Menu item 2
                </a>
              )}
            </Menu.Item>
            <Menu.Item as={Fragment}>
              {({ active }: MenuItemRenderProps) => (
                <a
                  href="#"
                  className={`block px-4 py-[10px] text-sm whitespace-nowrap ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                  onClick={() => {
                    if (closeType === 'default' || closeType === 'outside') {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  <Star className='inline-block me-2' size={16} /> Menu item 3
                </a>
              )}
            </Menu.Item>
            <div className="border-t border-gray-100 my-[10px]"></div>
            <Menu.Item as={Fragment}>
              {({ active }: MenuItemRenderProps) => (
                <a
                  href="#"
                  className={`block px-4 py-[10px] text-sm whitespace-nowrap ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                  onClick={() => {
                    if (closeType === 'default' || closeType === 'outside') {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  <Trash2 className='inline-block me-2' size={16} /> Menu item 4
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
