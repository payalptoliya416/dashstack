import React, { useState, useRef, useEffect } from "react";
import { Popover } from "@headlessui/react";
import type { EventProps } from "../../types/Dashboard";
import { motion } from "framer-motion";

const EventPopover: React.FC<EventProps> = ({ event, multiDay, duration }) => {
    const [alignPosition, setAlignPosition] = useState<"left" | "right" | "center">("right");
  const [verticalAlignPosition, setVerticalAlignPosition] = useState<"top" | "bottom">("bottom");
  const buttonRef = useRef<HTMLButtonElement>(null);

useEffect(() => {
  const checkSpace = () => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const spaceLeft = rect.left;
    const spaceRight = window.innerWidth - rect.right;
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;

    // Horizontal alignment
    if (spaceRight >= 200) {
      setAlignPosition("right");
    } else if (spaceLeft >= 200) {
      setAlignPosition("left");
    } else {
      setAlignPosition("center");
    }

    // Vertical alignment — strict condition
    if (spaceBelow < 296 && spaceAbove >= 296) {
      setVerticalAlignPosition("top");
    } else {
      setVerticalAlignPosition("bottom");
    }
  };

  checkSpace();
  window.addEventListener("resize", checkSpace);
  return () => window.removeEventListener("resize", checkSpace);
}, []);


  return (
    <Popover as="div" className="relative inline-block w-full">
      <>
        <Popover.Button
          ref={buttonRef}
          className={`relative z-10 text-[10px] font-bold py-1 sm:py-2 xl:py-[11px] pl-2 xl:pl-[13px] pr-1 flex items-center overflow-hidden focus:outline-none cursor-pointer ${event.bg} ${event.text}`}
          style={{
            backgroundImage: "url('/images/pattern2.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            width: multiDay && duration ? `calc(${duration}00%)` : "100%",
          }}
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-[4px]"
            style={{ backgroundColor: event.color }}
          />
          <span className="ml-1 xl:ml-[6px] font-semibold truncate">
            {event.title}
          </span>
        </Popover.Button>

        <Popover.Panel
        as={motion.div}
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.95 }}
          className={`absolute z-30 mt-2 w-36 sm:w-64 bg-white text-start rounded-lg shadow-lg
             ${verticalAlignPosition === "bottom" ? "top-full mt-2" : ""}
            ${verticalAlignPosition === "top" ? "bottom-full mb-2" : ""}
            ${alignPosition === "right" ? "left-0" : ""}
            ${alignPosition === "left" ? "right-0" : ""}
            ${alignPosition === "center" ? "left-1/2 -translate-x-1/2" : ""}
          `}
        >
          <div className="p-3 sm:p-[18px] pb-0 border-b border-[#707070]/64">
            <img
              src="/images/eventuser.png"
              alt=""
              className="rounded-md mb-[5px]"
            />
            <div className="text-sm sm:text-base font-bold text-[#202224]">
              {event.title}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#646464] mb-[3px]">
              {event.dateTime}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#919191] mb-[5px]">
              {event.address}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#919191] mb-[14px]">
              {event.location}
            </div>
          </div>
          <div className="flex gap-2 p-3 sm:p-[18px]">
            {event.attendees.map((attendee, i) => (
              <img
                key={i}
                src={attendee.image}
                alt="attendee"
                className="w-6 h-6 rounded-full"
              />
            ))}
            {event.extraAttendeeCount && (
              <div className="w-6 h-6 rounded-full border border-[#4880FF] leading-[10px] text-[#4880FF] text-[10px] flex justify-center items-center">
                {event.extraAttendeeCount}+
              </div>
            )}
          </div>
        </Popover.Panel>
      </>
    </Popover>
  );
};

export default EventPopover;
