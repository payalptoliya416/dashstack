import React, { useEffect, useRef, useState } from "react";
import type { Event } from "../../types/Dashboard";
import { Link } from "react-router-dom";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import MainTitle from "../../hooks/useMainTitle";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { CalendarGrid } from "./CalendarGrid";

dayjs.extend(isBetween);

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="py-5 xl:py-6 px-2 xl:px-5 flex flex-row md:flex-col xl:flex-row gap-3 border-b border-[#E0E0E0]/50 last:border-none">
    <div className="w-[38px] h-[38px] rounded-full">
      <div className="w-[38px] h-[38px]">
        <img
          src={event.avatar}
          alt={event.title}
          className="rounded-full w-[38px] h-[38px]"
        />
      </div>
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#202224] leading-[26px]">
        {event.title}
      </h3>
      <p className="text-[#202224]/60 text-xs font-semibold">
        {event.dateTime}
      </p>
      <p className="text-[#202224]/60 text-xs font-semibold">{event.address}</p>
      <div className="flex gap-2 mt-2">
        {event.attendees.map((attendee, idx) => (
          <div key={idx} className="w-6 h-6 rounded-full">
            <img src={attendee.image} alt="attendee" className="rounded-full" />
          </div>
        ))}
        {event.extraAttendeeCount !== undefined &&
          event.extraAttendeeCount > 0 && (
            <div className="w-6 h-6 rounded-full border border-[#4880FF] leading-[10px] text-[#4880FF] text-[10px] flex justify-center items-center">
              {event.extraAttendeeCount}+
            </div>
          )}
      </div>
    </div>
  </div>
);

const Calender: React.FC = () => {
  const events = useSelector((state: RootState) => state.events.events);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(4);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        showSidebar &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setShowSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showSidebar]);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visibleEvents = events.slice(0, visibleCount);
  const hasMore = visibleCount < events.length;
  const MotionLink = motion(Link);
  return (
    <>
      <MainTitle title="Calendar" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="grid grid-cols-12 gap-4 xl:gap-6 bg-[#F8F9FB]"
      >
        {showSidebar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-[999] md:hidden"
          />
        )}
        <div
          ref={sidebarRef}
          className={`fixed md:static top-0 left-0 h-full md:rounded-xl bg-white  transition-transform duration-300 ease-in-out ${
            showSidebar ? "translate-x-0 z-[999]" : "-translate-x-full"
          } md:translate-x-0 md:col-span-3 col-span-5 md:w-auto shadow-md md:shadow-none`}
        >
          <div className="px-4 xl:px-6 pt-5 xl:pt-6 border-b border-[#E0E0E0]/50">
            <MotionLink
              to="/calendar/add-new-event"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="block bg-[#4880FF] text-sm text-white rounded-md py-2 xl:py-3 px-2 w-full text-center mb-6"
            >
              + Add New Event
            </MotionLink>
            <h3 className="text-[#202224] font-bold text-lg mb-[15px]">
              You are going to
            </h3>
          </div>
          <div className="overflow-y-auto h-[600px] sm:h-[700px]">
            {visibleEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}

            {hasMore && (
              <div className="text-center">
                <motion.button
                  onClick={handleSeeMore}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#202224] font-bold text-sm bg-[#E2EAF8]/70 rounded-xl leading-[28px] py-1 xl:py-[5px] px-5 xl:px-8 mb-[27px] mt-[14px]"
                >
                  See More
                </motion.button>
              </div>
            )}
          </div>
        </div>
        <CalendarGrid onShowSidebar={() => setShowSidebar(true)} />
      </motion.div>
    </>
  );
};

export default Calender;
