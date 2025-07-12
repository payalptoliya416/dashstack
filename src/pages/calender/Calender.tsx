// import React from "react";

// interface Attendee {
//   image: string;
// }

// interface Event {
//   id: number;
//   avatar: string;
//   title: string;
//   dateTime: string;
//   address: string;
//   location: string;
//   attendees: Attendee[];
//   extraAttendeeCount?: number;
// }

// const events: Event[] = [
//   {
//     id: 1,
//     avatar: "/images/unuser.png",
//     title: "Design Conference",
//     dateTime: "Today 07:19 AM",
//     address: "56 Davion Mission Suite 157",
//     location: "Meaghanberg",
//     attendees: [
//       { image: "/images/us1.png" },
//       { image: "/images/user.png" },
//       { image: "/images/user.png" },
//     ],
//     extraAttendeeCount: 15,
//   },
//   {
//     id: 2,
//     avatar: "/images/user1.png",
//     title: "Weekend Festival",
//     dateTime: "16 October 2019 at 5.00 PM",
//     address: "853 Moore Flats Suite 158",
//     location: "Sweden",
//     attendees: [
//       { image: "/images/us3.png" },
//       { image: "/images/us4.png" },
//       { image: "/images/us5.png" },
//     ],
//     extraAttendeeCount: 20,
//   },
//   {
//     id: 3,
//     avatar: "/images/user2.png",
//     title: "Glastonbury Festival",
//     dateTime: "20-22 October 2019 at 8.00 PM",
//     address: "646 Walter Road Apt. 571",
//     location: "Turks and Caicos Islands",
//     attendees: [
//       { image: "/images/us6.png" },
//       { image: "/images/us7.png" },
//       { image: "/images/us7.png" },
//     ],
//     extraAttendeeCount: 14,
//   },
//   {
//     id: 4,
//     avatar: "/images/user3.png",
//     title: "Ultra Europe 2019",
//     dateTime: "25 October 2019 at 10.00 PM",
//     address: "506 Satterfield Tunnel Apt. 963",
//     location: "San Marino",
//     attendees: [
//       { image: "/images/us9.png" },
//       { image: "/images/us10.png" },
//       { image: "/images/us11.png" },
//     ],
//     extraAttendeeCount: 42,
//   },
// ];

// const EventCard: React.FC<{ event: Event }> = ({ event }) => (
//   <div className="py-6 px-5 flex gap-3 border-b border-[#E0E0E0]/50 last:border-none">
//     <div className="w-[38px] h-[38px] rounded-full">
//       <img src={event.avatar} alt={event.title} className="rounded-full" />
//     </div>
//     <div>
//       <h3 className="text-sm font-bold text-[#202224] leading-[26px]">{event.title}</h3>
//       <p className="text-[#202224]/60 text-xs font-semibold">{event.dateTime}</p>
//       <p className="text-[#202224]/60 text-xs font-semibold">{event.address}</p>
//       <p className="text-[#202224]/60 text-xs font-semibold">{event.location}</p>
//       <div className="flex gap-2 mt-1">
//         {event.attendees.map((attendee, idx) => (
//           <div key={idx} className="w-6 h-6 rounded-full">
//             <img src={attendee.image} alt="attendee" className="rounded-full" />
//           </div>
//         ))}
//         {event.extraAttendeeCount && (
//           <div className="w-6 h-6 rounded-full border border-[#4880FF] text-[#4880FF] text-[10px] flex justify-center items-center">
//             {event.extraAttendeeCount}+
//           </div>
//         )}
//       </div>
//     </div>
//   </div>
// );

// const Calender: React.FC = () => {
//   return (
//     <div className="grid grid-cols-12">
//       <div className="col-span-3 bg-white rounded-xl">
//         <div className="px-6 pt-6 border-b border-[#E0E0E0]/50">
//           <button className="bg-[#4880FF] text-white rounded-md py-3 w-full text-center mb-6 hover:bg-blue-600 transition">
//             + Add New Event
//           </button>
//           <h3 className="text-[#202224] font-bold text-lg mb-[15px]">You are going to</h3>
//         </div>

//         {/* Events List */}
//         {events.map((event) => (
//           <EventCard key={event.id} event={event} />
//         ))}

//         <div className="text-center">
//           <button className="text-[#202224] font-bold text-sm bg-[#E2EAF8]/70 rounded-xl leading-[28px] py-[5px] px-8 mb-[27px] mt-[14px] hover:bg-[#d0dbeb] transition">
//             See More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calender;


import React, { useState } from "react";
import moment from "moment";

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
  startDate?: string; // Added for calendar functionality
  endDate?: string;   // Added for calendar functionality
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
    startDate: "2019-10-08", // Example: Design Conference on Oct 8
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
    startDate: "2019-10-16", // Weekend Festival on Oct 16
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
    startDate: "2019-10-20", // Glastonbury Festival from Oct 20-22
    endDate: "2019-10-22",
  },
  {
    id: 4,
    avatar: "/images/user3.png",
    title: "Ultra Europe 2019",
    dateTime: "25 October 2019 at 10.00 PM",
    address: "506 Satterfield Tunnel Apt. 963",
    location: "San Marino",
    attendees: [
      { image: "/images/us9.png" },
      { image: "/images/us10.png" },
      { image: "/images/us11.png" },
    ],
    extraAttendeeCount: 42,
    startDate: "2019-10-25", // Ultra Europe on Oct 25
    endDate: "2019-10-25",
  },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="py-6 px-5 flex gap-3 border-b border-[#E0E0E0]/50 last:border-none">
    <div className="w-[38px] h-[38px] rounded-full">
      <img src={event.avatar} alt={event.title} className="rounded-full" />
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
  const [currentMonth, setCurrentMonth] = useState(moment("2019-10-01")); // Set initial month to October 2019

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

  return (
    <div className="bg-white rounded-xl col-span-9 p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <button className="text-sm font-semibold text-[#202224] py-2 px-4 rounded-md border border-[#E0E0E0] hover:bg-gray-100 transition">
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
          <h2 className="text-lg font-bold text-[#202224]">
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
        <div className="flex gap-2">
          <button className="text-sm font-semibold text-[#202224]/60 py-2 px-4 rounded-md hover:bg-gray-100 transition">
            Day
          </button>
          <button className="text-sm font-semibold text-[#202224]/60 py-2 px-4 rounded-md hover:bg-gray-100 transition">
            Week
          </button>
          <button className="text-sm font-semibold text-white bg-[#4880FF] py-2 px-4 rounded-md hover:bg-blue-600 transition">
            Month
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-center text-[#202224]/60 font-semibold text-xs mb-4">
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
          <div key={day}>{day}</div>
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
              className={`relative h-28 border-r border-b border-[#E0E0E0] p-1 text-right text-sm ${
                isCurrentMonth ? "text-[#202224]" : "text-[#202224]/30"
              } ${isToday ? "bg-[#E2EAF8]/50" : ""}`}
            >
              <span className="font-semibold absolute top-2 right-2">{date.date()}</span>
              <div className="absolute bottom-1 left-1 right-1 flex flex-col items-start gap-1">
                {dayEvents.map((event) => {
                  const eventStart = moment(event.startDate);
                  const eventEnd = moment(event.endDate);
                  const duration = eventEnd.diff(eventStart, 'days') + 1;
                  const isMultiDay = duration > 1;

                  let eventClass = '';
                  if (event.title === "Design Conference") {
                    eventClass = 'bg-[#D1C6F8] text-[#7154BA]';
                  } else if (event.title === "Weekend Festival") {
                    eventClass = 'bg-[#F2C6F8] text-[#BA54B2]';
                  } else if (event.title === "Glastonbury Festival") {
                    eventClass = 'bg-[#F8E0C6] text-[#BA8C54]';
                  } else if (event.title === "Ultra Europe 2019") {
                    eventClass = 'bg-[#D1C6F8] text-[#7154BA]';
                  }


                  // Determine if this day is the start of a multi-day event,
                  // part of a multi-day event, or a single-day event
                  const isEventStart = date.isSame(eventStart, 'day');
                  const isEventEnd = date.isSame(eventEnd, 'day');
                  const isDuringEvent = date.isBetween(eventStart, eventEnd, null, '[]');


                  if (isMultiDay) {
                      // For multi-day events, highlight the duration
                      if (isEventStart) {
                          return (
                              <div
                                  key={event.id}
                                  className={`text-[10px] py-[2px] px-1 rounded-sm text-left ${eventClass}`}
                                  style={{ width: `${(duration / 7) * 100}%` }} // Simplified, can be more complex for true multi-cell spanning
                              >
                                  {event.title.split(' ')[0]}
                              </div>
                          );
                      } else if (isDuringEvent && !isEventStart) {
                        return (
                          <div
                              key={event.id}
                              className={`text-[10px] py-[2px] px-1 rounded-sm text-left ${eventClass}`}
                          >
                          </div>
                      );
                      }
                  } else {
                      // For single-day events
                      return (
                          <div
                              key={event.id}
                              className={`text-[10px] py-[2px] px-1 rounded-sm text-left ${eventClass}`}
                          >
                              {event.title.split(' ')[0]}
                          </div>
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
    <div className="grid grid-cols-12 gap-6 p-6 bg-[#F8F9FB] min-h-screen"> {/* Added padding and background color */}
      <div className="col-span-3 bg-white rounded-xl shadow-sm"> {/* Added shadow */}
        <div className="px-6 pt-6 border-b border-[#E0E0E0]/50">
          <button className="bg-[#4880FF] text-white rounded-md py-3 w-full text-center mb-6 hover:bg-blue-600 transition">
            + Add New Event
          </button>
          <h3 className="text-[#202224] font-bold text-lg mb-[15px]">
            You are going to
          </h3>
        </div>

        {/* Events List */}
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}

        <div className="text-center">
          <button className="text-[#202224] font-bold text-sm bg-[#E2EAF8]/70 rounded-xl leading-[28px] py-[5px] px-8 mb-[27px] mt-[14px] hover:bg-[#d0dbeb] transition">
            See More
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <CalendarGrid />
    </div>
  );
};

export default Calender;