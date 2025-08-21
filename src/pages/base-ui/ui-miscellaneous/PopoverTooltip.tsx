import { Popover } from "@headlessui/react";
import { type FC } from "react";

interface PopoverTooltipProps {
  text: string;
  children: React.ReactNode;
  bgcolor: string;
  head: string;
}

const PopoverTooltip: FC<PopoverTooltipProps> = ({
  children,
  text,
  bgcolor,
  head,
}) => {
  const bgColorStyle = { backgroundColor: bgcolor };
  const borderColorStyle = { borderTopColor: bgcolor };

  return (
    <Popover className="relative group">
      {({ open }) => (
        <>
          <Popover.Button as="div" className="w-fit cursor-pointer">
            {children}
          </Popover.Button>

          <Popover.Panel
            static
            className={`absolute z-10 w-48 bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 text-sm font-normal text-center rounded-lg shadow-lg ring-2 ring-white/10 text-[${bgcolor}]
              ${
                open
                  ? "opacity-100 visible"
                  : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              }
              transition-opacity duration-300
              after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:border-8 after:border-x-transparent after:border-b-transparent`}
            style={{
              ...bgColorStyle,
              borderTopColor: bgcolor,
            }}
          >
            <div
              className="px-2 py-1 text-sm font-bold text-white mb-1 rounded"
              style={bgColorStyle}
            >
              Popover {head}
            </div>
            <span className="text-white text-xs">{text}</span>
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full"
              style={borderColorStyle}
            />
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};

export default PopoverTooltip;
