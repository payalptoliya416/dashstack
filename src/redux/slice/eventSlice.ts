import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Event } from "../../types/Dashboard";


export const eventsList: Event[] = [
  {
    id: 1,
    avatar: "/images/unuser.png",
    title: "Design Conference",
    dateTime: "Today 07:19 AM",
    address: "56 Davion Mission Suite 157 Meaghanberg",
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
    address: "853 Moore Flats Suite 158 Sweden",
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
    address: "646 Walter Road Apt. 571 Turks and Caicos Islands",
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
    address: "506 Satterfield Tunnel Apt. 963 San Marino",
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

interface EventState {
  events: Event[];
}

const initialState: EventState = {
  events:[...eventsList], 
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
        state.events.unshift(action.payload);
    },
  },
});

export const { addEvent } = eventSlice.actions;
export default eventSlice.reducer;
