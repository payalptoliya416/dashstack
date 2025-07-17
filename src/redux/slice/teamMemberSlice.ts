import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TeamMember } from "../../types/Dashboard";

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Jason Price",
    position: "Admin",
    email: "janick_parisian@yahoo.com",
    phone: "9876543210",
    gender: "Male",
    image: "/images/team1.png",
  },
  {
    id: 2,
    name: "Jukkoe Sisao",
    position: "CEO",
    email: "sibyl_kozey@gmail.com",
    phone: "9876543211",
    gender: "Male",
    image: "/images/team2.png",
  },
  {
    id: 3,
    name: "Harriet King",
    position: "CTO",
    email: "nadia_block@hotmail.com",
    phone: "9876543212",
    gender: "Female",
    image: "/images/team3.png",
  },
  {
    id: 4,
    name: "Lenora Benson",
    position: "Lead",
    email: "feil.wallace@kunde.us",
    phone: "9876543213",
    gender: "Female",
    image: "/images/team4.png",
  },
  {
    id: 5,
    name: "Olivia Reese",
    position: "Strategist",
    email: "kemmer.hattie@cremin.us",
    phone: "9876543214",
    gender: "Female",
    image: "/images/team5.png",
  },
  {
    id: 6,
    name: "Bertha Valdez",
    position: "CEO",
    email: "loraine.koelpin@tromp.io",
    phone: "9876543215",
    gender: "Female",
    image: "/images/team6.png",
  },
  {
    id: 7,
    name: "Harriett Payne",
    position: "Digital Marketer",
    email: "nannie_west@estrella.tv",
    phone: "9876543216",
    gender: "Female",
    image: "/images/team7.png",
  },
  {
    id: 8,
    name: "George Bryant",
    position: "Social Media",
    email: "delmer.kling@gmail.com",
    phone: "9876543217",
    gender: "Male",
    image: "/images/team8.png",
  },
  {
    id: 9,
    name: "Lily French",
    position: "Strategist",
    email: "lucienne.herman@hotmail.com",
    phone: "9876543218",
    gender: "Female",
    image: "/images/team9.png",
  },
  {
    id: 10,
    name: "Howard Adkins",
    position: "CEO",
    email: "wiegand.leonor@herman.us",
    phone: "9876543219",
    gender: "Male",
    image: "/images/team10.png",
  },
  {
    id: 11,
    name: "Earl Bowman",
    position: "Digital Marketer",
    email: "waino_altenwerth@nicolette.tv",
    phone: "9876543220",
    gender: "Male",
    image: "/images/team11.png",
  },
  {
    id: 12,
    name: "Patrick Padilla",
    position: "Social Media",
    email: "octavia.nienow@gleichner.net",
    phone: "9876543221",
    gender: "Male",
    image: "/images/team12.png",
  },
];

interface TeamMemberState {
  members: TeamMember[];
}

const initialState: TeamMemberState = {
  members: [...teamData],
};

const teammemberSlice = createSlice({
  name: "teammember",
  initialState,
  reducers: {
    addTeamMember: (state, action: PayloadAction<TeamMember>) => {
      state.members.unshift(action.payload);
    },
  },
});

export const { addTeamMember } = teammemberSlice.actions;
export default teammemberSlice.reducer;
