
import React, { useState } from "react";
import EventPopover from "./EventPopover";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { Popover } from "@headlessui/react";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

dayjs.extend(isBetween);

interface CalendarGridProps {
  onShowSidebar: () => void;
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({ onShowSidebar }) => {
const events = useSelector((state: RootState) => state.events.events);
const [currentDate, setCurrentDate] = useState(dayjs());
const currentMonth = currentDate.startOf("month");
const startOfMonth = currentMonth.startOf("month");
const endOfMonth = currentMonth.endOf("month");
const startDay = startOfMonth.startOf("week");
const endDay = endOfMonth.endOf("week");

  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("month");
const weekStart = currentDate.startOf("week"); 
  const weekDays: dayjs.Dayjs[] = [];

  for (let i = 0; i < 7; i++) {
    weekDays.push(weekStart.add(i, "day"));
  }
    const handleToday = () => {
    setCurrentDate(dayjs());
    };

  const calendarDays: dayjs.Dayjs[] = [];
  let day = startDay;

  while (day.isSame(endDay) || day.isBefore(endDay)) {
    calendarDays.push(day);
    day = day.add(1, "day");
  }

const handlePrev = () => {
  if (viewMode === "month") {
    setCurrentDate(currentDate.subtract(1, "month"));
  } else if (viewMode === "week") {
    setCurrentDate(currentDate.subtract(1, "week"));
  } else if (viewMode === "day") {
    setCurrentDate(currentDate.subtract(1, "day"));
  }
};

const handleNext = () => {
  if (viewMode === "month") {
    setCurrentDate(currentDate.add(1, "month"));
  } else if (viewMode === "week") {
    setCurrentDate(currentDate.add(1, "week"));
  } else if (viewMode === "day") {
    setCurrentDate(currentDate.add(1, "day"));
  }
};

  const getEventsForDate = (date: dayjs.Dayjs) => {
    return events.filter((event) => {
      const eventStart = dayjs(event.startDate);
      const eventEnd = dayjs(event.endDate);
      return (
        date.isBetween(eventStart, eventEnd, null, "[]") ||
        date.isSame(eventStart, "day") ||
        date.isSame(eventEnd, "day")
      );
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
          >
            {" "}
            Events{" "}
          </button>
          <button
            onClick={handleToday}
            className="text-sm font-semibold text-[#202224]/60 py-2 rounded-md cursor-pointer"
          >
            Today
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="text-[#202224]/60 hover:text-[#202224] transition"
          >
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
        {viewMode === "month"
            ? currentDate.format("MMMM YYYY")
            : viewMode === "week"
            ? `${currentDate.startOf("week").format("D MMM")} - ${currentDate
                .endOf("week")
                .format("D MMM, YYYY")}`
            : currentDate.format("D MMM, YYYY")}
        </h2>

          <button
            onClick={handleNext}
            className="text-[#202224]/60 hover:text-[#202224] transition"
          >
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
              } ${
                mode === "day"
                  ? "rounded-l-xl"
                  : mode === "month"
                  ? "rounded-r-xl"
                  : ""
              }`}
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
              <div
                key={day}
                className="pt-4 pb-[13px] text-[10px] sm:text-xs xl:text-sm font-bold  text-[#202224]"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 border-t border-l border-[#E0E0E0]">
            {calendarDays.map((date, idx) => {
              const isCurrentMonth = date.month() === currentMonth.month();
              const dayEvents = getEventsForDate(date);
              const isToday = date.isSame(dayjs(), "day");
              return (
                <div
                  key={idx}
                  className={`relative h-24 sm:h-[122px] border-r border-b border-[#3F3F3F]/21 p-1 text-right text-base font-semibold ${
                    isCurrentMonth
                      ? "text-[#202224]"
                      : "text-[#B2B2B2] bg-[url(/images/pattern.png)] bg-no-repeat bg-cover"
                  } ${isToday ? "bg-[#E2EAF8]/50" : ""}`}
                >
                  <span className="font-semibold absolute top-2 right-2 text-xs md:text-sm xl:text-base">
                    {date.date()}
                  </span>
                <div className="absolute bottom-0 left-0 right-0 w-full bg-no-repeat bg-cover bg-left bg-[url(/images/pattern2.png)]">
              {dayEvents.slice(0, 1).map((event: any) => {
            const eventStart = dayjs(event.startDate);
            const eventEnd = dayjs(event.endDate);
            const duration = eventEnd.diff(eventStart, "day") + 1;
            const styles = eventStyles[event.title] || {
                bg: "bg-[#E9E3FD]",
                text: "text-[#7551E9]",
                color: "#7551E9",
            };

        return (
            <div key={event.id} className="flex flex-col">
            <EventPopover
                key={event.id}
                event={{
                ...event,
                ...styles,
                location: event.location ?? "",
                }}
                multiDay={duration > 1}
                duration={duration}
            />
            {dayEvents.length > 1 && (
                <Popover className="relative z-10">
                <Popover.Button className={` leading-[10px] text-[#FF9E58] bg-[#FF9E58]/40 text-[10px] flex justify-center items-center focus:outline-none mx-auto w-full py-1`}>
                  See more  {dayEvents.length - 1}+
                </Popover.Button>

                <Popover.Panel className="absolute z-30 mt-2 w-max bg-white rounded-lg shadow-lg p-2">
                    {dayEvents.slice(1).map((event: any) => {
              const duration =
                dayjs(event.endDate).diff(dayjs(event.startDate), "day") + 1;
              const styles = eventStyles[event.title] || {
                bg: "bg-[#E9E3FD]",
                text: "text-[#7551E9]",
                color: "#7551E9",
              };

              return (
                <EventPopover
                  key={event.id}
                  event={{
                    ...event,
                    ...styles,
                    location: event.location ?? "", 
                  }}
                  multiDay={duration > 1}
                  duration={duration}
                />
              );
            })}
          </Popover.Panel>
        </Popover>
            )}
            </div>
            );
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
                const hourLabel = dayjs().startOf("day").add(hour, "hour").format("h A");
               const eventsToday = getEventsForDate(currentDate);
                const eventsStartingNow = eventsToday.filter(
                (event) => dayjs(event.startDate).hour() === hour
                ); 
                console.log("eventsStartingNow",eventsStartingNow)
                 const hourEvents = eventsToday.filter((event) => {
                const eventTime = dayjs(event.dateTime, "D MMMM, YYYY [at] h:mm A").format("h A");
                return eventTime === hourLabel;
              });
                return (
                    <>
                <div
                    key={hour}
                    className="h-11 border-b relative border-[#E0E0E0] last:border-b-0 flex">
                    <div className="w-16 px-2 text-[10px] sm:text-xs text-gray-400 pt-2">
                    {hourLabel}
                    </div>
                     <div className="flex-1 h-full relative px-1">
                    {hourEvents.map((event: any) => {
                        const styles = eventStyles[event.title] || {
                        bg: "bg-[#E9E3FD]",
                        text: "text-[#7551E9]",
                        color: "#7551E9",
                        };

                        const startMinute = dayjs(event.startDate).minute();
                        const topOffset = (startMinute / 60) * 44; 
                        return (
                        <div
                            key={event.id}
                            className={` mb-2 ${viewMode === "day" ? "":"absolute  left-0 right-0"}`}
                            style={{ top: `${topOffset}px` }}
                        >
                            <EventPopover event={{ ...event, ...styles }} />
                        </div>
                        );
                    })}
                    </div>
                </div>
                    </>
                );
            })}
            </div>
        </div>
    )}

      {viewMode === "week" && (
        <div className="px-4 sm:px-6 md:px-8 py-4">
         
          <div className="grid grid-cols-7 text-center text-xs font-bold text-[#202224] bg-[#F1F4F9] rounded-t-xl">
            {weekDays.map((date) => (
              <div key={date.toString()} className="py-3">
                {date.format("ddd")}
                <br />
                <span className="text-sm font-medium">{date.format("D")}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 border border-[#E0E0E0] rounded-b-xl  h-[600px] bg-white">
            {weekDays.map((date) => (
              <div
                key={date.toString()}
                className="relative border-r border-[#E0E0E0] last:border-r-0 p-1 overflow-visible"
              >
                <div className="text-center text-[10px] sm:text-xs font-semibold text-gray-400 pr-1 mb-1 py-2">
                  {date.format("D MMM")}
                </div>

                {getEventsForDate(date).map((event: any) => {
                  const eventStart = dayjs(event.startDate);
                  const eventEnd = dayjs(event.endDate);
                  const duration = eventEnd.diff(eventStart, "days") + 1;

                  const isMultiDay = duration > 1;
                  const isEventStart = date.isSame(eventStart, "day");
                  const isDuringEvent = date.isBetween(
                    eventStart,
                    eventEnd,
                    undefined,
                    "[]"
                  );

                  const styles = eventStyles[event.title] || {
                    bg: "bg-[#E9E3FD]",
                    text: "text-[#7551E9]",
                    color: "#7551E9",
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