


import React, { useState ,useRef, useEffect, } from "react";
import moment from "moment";
import { Popover } from "@headlessui/react";
import EventPopover from "./EventPopover";
interface Attendee {
  image: string;
}

interface Event {
  id: number;
  avatar: string;
  title: string;
  dateTime: string;
  address: string;
  location: string;
  attendees: Attendee[];
  extraAttendeeCount?: number;
  startDate?: string;
  endDate?: string;  
}

const events: Event[] = [
  {
    id: 1,
    avatar: "/images/unuser.png",
    title: "Design Conference",
    dateTime: "Today 07:19 AM",
    address: "56 Davion Mission Suite 157",
    location: "Meaghanberg",
    attendees: [
      { image: "/images/us1.png" },
      { image: "/images/user.png" },
      { image: "/images/user.png" },
    ],
    extraAttendeeCount: 15,
    startDate: "2019-10-08",
    endDate: "2019-10-08",
  },
  {
    id: 2,
    avatar: "/images/user1.png",
    title: "Weekend Festival",
    dateTime: "16 October 2019 at 5.00 PM",
    address: "853 Moore Flats Suite 158",
    location: "Sweden",
    attendees: [
      { image: "/images/us3.png" },
      { image: "/images/us4.png" },
      { image: "/images/us5.png" },
    ],
    extraAttendeeCount: 20,
    startDate: "2019-10-16", 
    endDate: "2019-10-16",
  },
  {
    id: 3,
    avatar: "/images/user2.png",
    title: "Glastonbury Festival",
    dateTime: "20-22 October 2019 at 8.00 PM",
    address: "646 Walter Road Apt. 571",
    location: "Turks and Caicos Islands",
    attendees: [
      { image: "/images/us6.png" },
      { image: "/images/us7.png" },
      { image: "/images/us7.png" },
    ],
    extraAttendeeCount: 14,
    startDate: "2019-10-20", 
    endDate: "2019-10-22",
  },
  {
    id: 4,
    avatar: "/images/user3.png",
    title: "Ultra Europe 2019",
    dateTime: "25 Octuber 2019 at 10.00 PM",
    address: "506 Satterfield Tunnel Apt. 963",
    location: "San Marino",
    attendees: [
      { image: "/images/us9.png" },
      { image: "/images/us10.png" },
      { image: "/images/us11.png" },
    ],
    extraAttendeeCount: 14,
    startDate: "2019-10-25", 
    endDate: "2019-10-25",
  },
 
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="py-6 px-5 flex gap-3 border-b border-[#E0E0E0]/50 last:border-none">
    <div className="w-[38px] h-[38px] rounded-full">
      <div className="w-[38px] h-[38px]">
      <img src={event.avatar} alt={event.title} className="rounded-full" />
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
      <p className="text-[#202224]/60 text-xs font-semibold">
        {event.location}
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
        {event.extraAttendeeCount && (
          <div className="w-6 h-6 rounded-full border border-[#4880FF] text-[#4880FF] text-[10px] flex justify-center items-center">
            {event.extraAttendeeCount}+
          </div>
        )}
      </div>
    </div>
  </div>
);

const CalendarGrid: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(moment("2019-10-01"));

  const startOfMonth = currentMonth.clone().startOf("month");
  const endOfMonth = currentMonth.clone().endOf("month");
  const startDay = startOfMonth.clone().startOf("week");
  const endDay = endOfMonth.clone().endOf("week");

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
    <div className="bg-white rounded-xl col-span-9 p-6">
      <div className="flex justify-between items-center mb-[51px]">
        <div className="flex gap-2">
          <button className="text-sm font-semibold text-[#202224]/60 py-2 px-4 rounded-md">
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
          <h2 className="text-2xl font-bold text-[#202224]">
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
          <button className="text-xs font-semibold text-[#202224] px-4 py-3 border-r border-[#D5D5D5] rounded-l-xl">
            Day
          </button>
          <button className="text-xs font-semibold text-[#202224] px-4 py-3 border-r border-[#D5D5D5] ">
            Week
          </button>
          <button className="text-xs font-semibold text-white  px-4 py-3 border-r bg-[#5A8DFF] rounded-r-xl">
            Month
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-center text-xs bg-[#F1F4F9] rounded-t-xl">
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
          <div key={day} className="pt-4 pb-[13px] text-sm font-bold  text-[#202224]">{day}</div>
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
              className={`relative h-[122px] border-r border-b border-[#3F3F3F]/21 p-1 text-right text-base font-semibold ${
                isCurrentMonth ? "text-[#202224]" : "text-[#B2B2B2] bg-[url(/images/pattern.png)] bg-no-repeat bg-cover"
              } ${isToday ? "bg-[#E2EAF8]/50" : ""}`}
            >
              <span className="font-semibold absolute top-2 right-2">{date.date()}</span>
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
    </div>
  );
};

const Calender: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-6 bg-[#F8F9FB] min-h-screen"> 
      <div className="col-span-3 bg-white rounded-xl shadow-sm"> 
        <div className="px-6 pt-6 border-b border-[#E0E0E0]/50">
          <button className="bg-[#4880FF] text-white rounded-md py-3 w-full text-center mb-6 hover:bg-blue-600 cursor-pointer">
            + Add New Event
          </button>
          <h3 className="text-[#202224] font-bold text-lg mb-[15px]">
            You are going to
          </h3>
        </div>

        {/* Events List */}
        <div className="overflow-y-auto h-[800px]">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
        <div className="text-center">
          <button className="text-[#202224] font-bold text-sm bg-[#E2EAF8]/70 rounded-xl leading-[28px] py-[5px] px-8 mb-[27px] mt-[14px] hover:bg-[#d0dbeb] transition">
            See More
          </button>
        </div>
        </div>

      </div>

      {/* Calendar Grid */}
      <CalendarGrid />
    </div>
  );
};

export default Calender;