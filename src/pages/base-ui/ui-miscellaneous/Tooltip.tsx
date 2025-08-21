import { Popover } from "@headlessui/react";
import { type FC } from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  color: string;
}

const Tooltip: FC<TooltipProps> = ({ children, text, color }) => {
  return (
    <Popover className="relative group">
      {({ open }) => (
        <>
          <Popover.Button as="div" className="w-fit cursor-pointer">
            {children}
          </Popover.Button>

          <Popover.Panel
            static
            className={`absolute z-10 w-48 bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 text-sm font-normal text-center rounded-lg shadow-lg ring-2 ring-white/10 text-[${color}]
              ${
                open
                  ? "opacity-100 visible"
                  : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              }
              transition-opacity duration-300
              after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:border-8 after:border-x-transparent after:border-b-transparent`}
            style={{ backgroundColor: color, borderTopColor: color }}
          >
            <span className="text-white">{text}</span>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};

export default Tooltip;
