


import React, { useEffect, useRef, useState} from "react";
import moment from "moment";
import EventPopover from "./EventPopover";
import type { Event } from "../../types/Dashboard";
import { Link } from "react-router-dom";
import type {RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import MainTitle from "../../hooks/MainTitle";

interface CalendarGridProps {
  onShowSidebar: () => void;
}

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="py-5 xl:py-6 px-2 xl:px-5 flex flex-row md:flex-col xl:flex-row gap-3 border-b border-[#E0E0E0]/50 last:border-none">
    <div className="w-[38px] h-[38px] rounded-full">
      <div className="w-[38px] h-[38px]">
      <img src={event.avatar} alt={event.title} className="rounded-full w-[38px] h-[38px]" />
      </div>
    </div>
    <div>
      <h3 className="text-sm font-bold text-[#202224] leading-[26px]">
        {event.title}
      </h3>
      <p className="text-[#202224]/60 text-xs font-semibold">
        {event.dateTime}
      </p>
      <p className="text-[#202224]/60 text-xs font-semibold">
        {event.address}
      </p>
      <div className="flex gap-2 mt-1">
        {event.attendees.map((attendee, idx) => (
          <div key={idx} className="w-6 h-6 rounded-full">
            <img
              src={attendee.image}
              alt="attendee"
              className="rounded-full"
            />
          </div>
        ))}
        {event.extraAttendeeCount !== undefined && event.extraAttendeeCount > 0 && (
          <div className="w-6 h-6 rounded-full border border-[#4880FF] text-[#4880FF] text-[10px] flex justify-center items-center">
            {event.extraAttendeeCount}+
          </div>
        )}
      </div>
    </div>
  </div>
);

const CalendarGrid: React.FC<CalendarGridProps> = ({ onShowSidebar }) => {
  const events = useSelector((state: RootState) => state.events.events);
console.log("events",events )
  const [currentMonth, setCurrentMonth] = useState(moment("2019-10-01"));

  const startOfMonth = currentMonth.clone().startOf("month");
  const endOfMonth = currentMonth.clone().endOf("month");
  const startDay = startOfMonth.clone().startOf("week");
  const endDay = endOfMonth.clone().endOf("week");

  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("month");
    const currentDate = currentMonth.clone(); 

    const weekStart = currentMonth.clone().startOf("week");
    const weekDays: moment.Moment[] = [];

    for (let i = 0; i < 7; i++) {
      weekDays.push(weekStart.clone().add(i, "day"));
    }
  const handleToday = () => {
  setCurrentMonth(moment());
 };

  const calendarDays: moment.Moment[] = [];
  let day = startDay.clone();

  while (day.isBefore(endDay) || day.isSame(endDay, 'day')) {
    calendarDays.push(day.clone());
    day.add(1, "day");
  }

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.clone().subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.clone().add(1, "month"));
  };

  const getEventsForDate = (date: moment.Moment) => {
    return events.filter((event) => {
      const eventStart = moment(event.startDate);
      const eventEnd = moment(event.endDate);
      return date.isBetween(eventStart, eventEnd, null, '[]') || date.isSame(eventStart, 'day') || date.isSame(eventEnd, 'day');
    });
  };
  const eventStyles: Record<
  string,
  { bg: string; text: string; color: string }
> = {
  "Design Conference": {
    bg: "bg-[#E9E3FD]",
    text: "text-[#7551E9]",
    color: "#7551E9",
  },
  "Weekend Festival": {
    bg: "bg-[#FDE9FB]",
    text: "text-[#E951BF]",
    color: "#E951BF",
  },
  "Glastonbury Festival": {
    bg: "bg-[#FDECD9]",
    text: "text-[#FF9E58]",
    color: "#FF9E58",
  },
  "Ultra Europe 2019": {
    bg: "bg-[#516FE9]/30",
    text: "text-[#516FE9]",
    color: "#516FE9",
  },
};

  return (
    <div className="bg-white rounded-xl col-span-12 md:col-span-9 py-3 px-2 sm:p-5 xl:p-6">
      <div className="flex justify-around md:justify-between items-center mb-5 sm:mb-7 xl:mb-[51px] flex-wrap gap-3 sm:gap-2">
        <div className="flex gap-1 sm:gap-2 items-center">
            <button
          onClick={onShowSidebar}
          className="md:hidden px-4 mr-2 py-2 text-xs font-medium text-white bg-[#202224] hover:bg-[#333537] rounded-lg shadow-sm transition duration-200"
        > Events </button>
          <button  onClick={handleToday} className="text-sm font-semibold text-[#202224]/60 py-2 rounded-md cursor-pointer">
            Today
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={handlePrevMonth} className="text-[#202224]/60 hover:text-[#202224] transition">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h2 className="text-sm md:text-base xl:text-2xl font-bold text-[#202224]">
            {currentMonth.format("MMMM YYYY")}
          </h2>
          <button onClick={handleNextMonth} className="text-[#202224]/60 hover:text-[#202224] transition">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
       
        <div className="flex border border-[#D5D5D5] rounded-xl bg-[#FAFBFD]">
        {["day", "week", "month"].map((mode) => (
          <button
            key={mode}
            onClick={() => setViewMode(mode as "day" | "week" | "month")}
            className={`text-xs font-semibold px-4 py-2 xl:py-3 border-r border-[#D5D5D5] last:border-r-0 cursor-pointer ${
              viewMode === mode
                ? "bg-[#5A8DFF] text-white"
                : "text-[#202224] bg-transparent"
            } ${mode === "day" ? "rounded-l-xl" : mode === "month" ? "rounded-r-xl" : ""}`}
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </button>
        ))}
      </div>
      </div>
      {viewMode === "month" && (
       <>

      <div className="grid grid-cols-7 text-center text-xs bg-[#F1F4F9] rounded-t-xl">
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
          <div key={day} className="pt-4 pb-[13px] text-[10px] sm:text-xs xl:text-sm font-bold  text-[#202224]">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 border-t border-l border-[#E0E0E0]">
        {calendarDays.map((date, idx) => {
          const isCurrentMonth = date.month() === currentMonth.month();
          const dayEvents = getEventsForDate(date);
          const isToday = date.isSame(moment(), 'day');

          return (
            <div
              key={idx}
              className={`relative h-24 sm:h-[122px] border-r border-b border-[#3F3F3F]/21 p-1 text-right text-base font-semibold ${
                isCurrentMonth ? "text-[#202224]" : "text-[#B2B2B2] bg-[url(/images/pattern.png)] bg-no-repeat bg-cover"
              } ${isToday ? "bg-[#E2EAF8]/50" : ""}`}
            >
              <span className="font-semibold absolute top-2 right-2 text-xs md:text-sm xl:text-base">{date.date()}</span>
                <div  className="absolute bottom-0 left-0 right-0 w-full bg-no-repeat bg-cover bg-left bg-[url(/images/pattern2.png)]"
                >
                 {dayEvents.map((event: any) => {
                  const eventStart = moment(event.startDate);
                  const eventEnd = moment(event.endDate);
                  const duration = eventEnd.diff(eventStart, "days") + 1;

                  const isMultiDay = duration > 1;
                  const isEventStart = date.isSame(eventStart, "day");
                  const isDuringEvent = date.isBetween(eventStart, eventEnd, undefined, "[]");

                  const styles = eventStyles[event.title] || {
                    bg: "bg-[#E2E2E2]",
                    text: "text-[#202224]",
                    color: "#999999",
                  };

                if (isMultiDay && isEventStart) {
                  return (
                    <EventPopover
                      key={event.id}
                      event={{ ...event, ...styles }}
                      multiDay
                      duration={duration}
                    />
                  );
                }

                  // PART of Multi-Day (not start)
                  if (isMultiDay && isDuringEvent && !isEventStart) {
                    return (
                      <div
                        key={event.id + "_part"}
                        className={`relative z-0 text-[10px] py-[2px] px-1 w-full ${styles.bg}`}
                        style={{
                          backgroundImage: "url('/images/pattern2.png')",
                          backgroundRepeat: "repeat",
                          backgroundSize: "cover",
                        }}
                      />
                    );
                  }
                  
                  if (!isMultiDay && isEventStart) {
                  return (
                  <EventPopover
                    key={event.id}
                    event={{ ...event, ...styles }}
                     multiDay
                      duration={duration}
                  />
                  );
                  }
               
                  return null;
                })}

              </div>
            </div>
          );
        })}
      </div>
       </>
      )}
     {viewMode === "day" && (
  <div className="px-4 sm:px-6 md:px-8 py-4">
    <h2 className="text-lg font-semibold text-[#202224] mb-4">
      {currentDate.format("dddd, MMMM D, YYYY")}
    </h2>

    <div className="rounded-xl border border-[#E0E0E0] overflow-hidden shadow-sm bg-white">
      {Array.from({ length: 24 }).map((_, hour) => {
        const hourLabel = moment().startOf("day").add(hour, "hours").format("h A");
        const eventsAtHour = getEventsForDate(currentDate).filter((event) =>
          moment(event.startDate).hour() === hour
        );

        return (
          <div
            key={hour}
            className="relative h-16 border-b border-[#E0E0E0] last:border-b-0 flex"
          >
            <div className="w-16 px-2 text-[10px] sm:text-xs text-gray-400 pt-2">
              {hourLabel}
            </div>
            <div className="flex-1 h-full relative px-1">
              {eventsAtHour.map((event: any) => {
                const styles = eventStyles[event.title] || {
                  bg: "bg-[#E2E2E2]",
                  text: "text-[#202224]",
                  color: "#999999",
                };
                return (
                  <div key={event.id} className="absolute top-1 left-0 right-0">
                    <EventPopover event={{ ...event, ...styles }} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  </div>
)}

    {viewMode === "week" && (
  <div className="px-4 sm:px-6 md:px-8 py-4">
    {/* Header */}
    <div className="grid grid-cols-7 text-center text-xs font-bold text-[#202224] bg-[#F1F4F9] rounded-t-xl">
      {weekDays.map((date) => (
        <div key={date.toString()} className="py-3">
          {date.format("ddd")}
          <br />
          <span className="text-sm font-medium">{date.format("D")}</span>
        </div>
      ))}
    </div>

    {/* Grid */}
    <div className="grid grid-cols-7 border border-[#E0E0E0] rounded-b-xl overflow-hidden h-[600px] bg-white">
      {weekDays.map((date) => (
        <div
          key={date.toString()}
          className="relative border-r border-[#E0E0E0] last:border-r-0 p-1 overflow-visible"
        >
          <div className="text-center text-[10px] sm:text-xs font-semibold text-gray-400 pr-1 mb-1 py-2">
            {date.format("D MMM")}
          </div>

          {getEventsForDate(date).map((event: any) => {
            const eventStart = moment(event.startDate);
            const eventEnd = moment(event.endDate);
            const duration = eventEnd.diff(eventStart, "days") + 1;

            const isMultiDay = duration > 1;
            const isEventStart = date.isSame(eventStart, "day");
            const isDuringEvent = date.isBetween(eventStart, eventEnd, undefined, "[]");

            const styles = eventStyles[event.title] || {
              bg: "bg-[#E2E2E2]",
              text: "text-[#202224]",
              color: "#999999",
            };

            if (isMultiDay && isEventStart) {
              return (
                <EventPopover
                  key={event.id}
                  event={{ ...event, ...styles }}
                  multiDay
                  duration={duration}
                />
              );
            }

            if (isMultiDay && isDuringEvent && !isEventStart) {
              return (
                <div
                  key={event.id + "_part"}
                  className={`relative z-0 text-[10px] py-[2px] px-1 w-full ${styles.bg}`}
                  style={{
                    backgroundImage: "url('/images/pattern2.png')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "cover",
                  }}
                />
              );
            }

            if (!isMultiDay && isEventStart) {
              return (
                <EventPopover
                  key={event.id}
                  event={{ ...event, ...styles }}
                  multiDay={false}
                  duration={duration}
                />
              );
            }

            return null;
          })}
        </div>
      ))}
    </div>
  </div>
)}

    </div>
  );
};

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

  return (
    <>
        <MainTitle title="Calendar" />
    <div className="grid grid-cols-12 gap-4 xl:gap-6 bg-[#F8F9FB]"> 
       {showSidebar && (
        <div className="fixed inset-0 bg-black/30 z-[999] md:hidden" />
      )}
      <div ref={sidebarRef} className={`fixed md:static top-0 left-0 h-full md:rounded-xl bg-white  transition-transform duration-300 ease-in-out ${showSidebar ? 'translate-x-0 z-[999]' : '-translate-x-full'} md:translate-x-0 md:col-span-3 col-span-5 md:w-auto shadow-md md:shadow-none`}>
        <div className="px-4 xl:px-6 pt-5 xl:pt-6 border-b border-[#E0E0E0]/50">
          <Link  to="/calendar/add-new-event" className="block bg-[#4880FF] text-sm text-white rounded-md py-2 xl:py-3 px-2 w-full text-center mb-6 hover:bg-blue-600 cursor-pointer">
            + Add New Event
          </Link>
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
          <button
            onClick={handleSeeMore}
            className="text-[#202224] font-bold text-sm bg-[#E2EAF8]/70 rounded-xl leading-[28px] py-1 xl:py-[5px] px-5 xl:px-8 mb-[27px] mt-[14px] hover:bg-[#d0dbeb] transition"
          >
            See More
          </button>
        </div>
      )}
        </div>
      </div>
      <CalendarGrid onShowSidebar={() => setShowSidebar(true)} />
    </div>
    </>
  );
};

export default Calender;