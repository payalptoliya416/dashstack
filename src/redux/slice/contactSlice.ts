import { createSlice,type PayloadAction } from "@reduxjs/toolkit";

export const contactList: ContactItem[] = [
  {
    id: 1,
    name: "Jason Price",
    email: "kuhlman.jermey@yahoo.com",
    image: "/images/bitm1.png",
  },
  {
    id: 2,
    name: "Duane Dean",
    email: "rusty.botsford@wilfrid.io",
    image: "/images/bitm2.png",
  },
  {
    id: 3,
    name: "Jonathan Barker",
    email: "cora_haley@quinn.biz",
    image: "/images/bitm3.png",
  },
  {
    id: 4,
    name: "Rosie Glover",
    email: "lockman.marques@hotmail.com",
    image: "/images/bitm4.png",
  },
  {
    id: 5,
    name: "Patrick Greer",
    email: "pearlie.eichmann@trevion.net",
    image: "/images/bitm5.png",
  },
  {
    id: 6,
    name: "Darrell Ortega",
    email: "chaya.shields@ferry.info",
    image: "/images/bitm6.png",
  },
];

export interface ContactItem {
  id: number;
  name: string;
  email: string;
  image: string;
}

interface ContactState {
  contacts: ContactItem[];
}

const initialState: ContactState = {
  contacts: [...contactList],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactItem>) => {
       state.contacts.unshift(action.payload);
    },
  },
});

export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;
