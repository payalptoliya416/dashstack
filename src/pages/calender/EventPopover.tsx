import React, { useState, useRef, useEffect } from "react";
import { Popover } from "@headlessui/react";
import type { EventProps } from "../../types/Dashboard";

const EventPopover: React.FC<EventProps> = ({ event, multiDay, duration }) => {
  const [alignLeft, setAlignLeft] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const checkSpace = () => {
      const rect = buttonRef.current?.getBoundingClientRect();
      const spaceRight = window.innerWidth - (rect?.right || 0);
      setAlignLeft(spaceRight < 300);
    };
    checkSpace();
    window.addEventListener("resize", checkSpace);
    return () => window.removeEventListener("resize", checkSpace);
  }, []);

  return (
    <Popover className="relative">
      <Popover.Button
        ref={buttonRef}
        className={`relative z-10 text-[10px] font-bold py-[11px] pl-[13px] pr-1 flex items-center overflow-hidden ${event.bg} ${event.text}`}
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
        <span className="ml-[6px] font-semibold truncate">{event.title}</span>
      </Popover.Button>

      <Popover.Panel
        className={`absolute text-start ${
          alignLeft ? "right-full mr-2" : "left-full ml-2"
        } top-0 mt-2 w-64 z-20 bg-white rounded-lg shadow-lg`}
      >
        <div className="p-[18px] pb-0 border-b border-[#707070]/64">
          <img
            src="/images/eventuser.png"
            alt=""
            className="rounded-md mb-[5px]"
          />
          {/* <img src={event.avatar} alt="" className="rounded-md mb-[5px]" /> */}
          <div className="text-base font-bold text-[#202224]">
            {event.title}
          </div>
          <div className="text-sm font-semibold text-[#646464] mb-[3px]">
            {event.dateTime}
          </div>
          <div className="text-sm font-semibold text-[#919191] mb-[5px]">
            {event.address}
          </div>
          <div className="text-sm font-semibold text-[#919191] mb-[14px]">
            {event.location}
          </div>
        </div>
        <div className="flex gap-2 p-[18px]">
          {event.attendees.map((attendee, i) => (
            <img
              key={i}
              src={attendee.image}
              alt="attendee"
              className="w-6 h-6 rounded-full"
            />
          ))}
          {event.extraAttendeeCount && (
            <div className="w-6 h-6 rounded-full border border-[#4880FF] text-[#4880FF] text-[10px] flex justify-center items-center">
              {event.extraAttendeeCount}+
            </div>
          )}
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default EventPopover;
