import type { Album, Connection, ContactType, Experience, InterestCategory, IntroItem, ProjectType, Skill, UserType } from "../../types/UserProfile";

export const introData: IntroItem[] = [
  { label: "Full Name:", value: "Alexandra Della" },
  { label: "Company:", value: "WRAPCODERS" },
  { label: "Mobile Number:", value: "+01 (375) 5896 3214" },
  { label: "Email Address:", value: "alex.della@outlook.com" },
  { label: "Location:", value: "California, United States" },
  { label: "Communication:", value: "Email, Phone, Chatboot" },
  { label: "Website:", value: "https://wrapcoders.com" },
];

export const skills: Skill[] = [
  "Frontend", "Bootstrap", "Tailwind", "HTML5", "CSS3", "JQuery", "React", "Next", "Nuxt",
  "Vuejs", "Angular", "Laravel", "Svelt", "Gulpjs", "SASS/LESS", "SEO"
].map(name => ({ name }));

export const connectionsData: Connection[] = [
  { img: "/images/recent1.png", name: "Alexandra Della", connections: 94, following: true },
  { img: "/images/recent2.png", name: "Anderson Thomas", connections: 85, following: true },
  { img: "/images/recent3.png", name: "Holland Scott", connections: 75, following: true },
  { img: "/images/recent4.png", name: "Nancy Elliot", connections: 56, following: true },
  { img: "/images/recent5.png", name: "Marianne Audrey", connections: 26, following: false },
];

export const experiences: Experience[] = [
  {
    img: "/images/ex1.png",
    title: "Shopify Developer",
    date: "June 2022 - Present",
    duration: "2 Years",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptate voluptas illo totam ducimus! Assumenda, numquam rerum laboriosam nostrum odit harum porro, autem neque est nihil eaque et. Odio, eos?"
  },
  {
    img: "/images/ex2.png",
    title: "UI/UX Designer",
    date: "June 2020 - Present",
    duration: "4 Years",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptate voluptas illo totam ducimus! Assumenda, numquam rerum laboriosam nostrum odit harum porro, autem neque est nihil eaque et. Odio, eos?"
  }
];

export const interests: InterestCategory[] = [
  { title: "Movies:", items: ["Parasite", "Inception", "The Godfather", "The Dark Knight", "The Matrix"] },
  { title: "Musics:", items: ["Wolf Hall", "Normal People", "A Spy Alone", "Moscow X", "Beirut Station"] },
  { title: "Books:", items: ["The Box", "Superbike", "If I Can't Have You", "Don't Start Now", "Adore You"] },
  { title: "Games:", items: ["Genshin Impact", "Pokémon GO", "Call of Duty", "Resident Evil 4", "Deathloop"] },
  { title: "Hobbies:", items: ["Gardening", "Photography", "Yoga", "Hiking", "Cooking"] },
  { title: "Episodes:", items: ["Breaking Bad", "Game of Thrones", "Attack on Titan", "Mr. Robot", "Code Geass"] },
];

export const usersData: UserType[] = [
  { img: "/images/f1.png", name: "Alexandra Della", email: "alex.della@outlook.com", following: true },
  { img: "/images/f2.png", name: "Anderson Thomas", email: "anderson.thomas@yahoo.com", following: true },
  { img: "/images/f3.png", name: "Holland Scott", email: "holland.scott@gmail.com", following: true },
  { img: "/images/f4.png", name: "Nancy Elliot", email: "nancy.elliot@yahoo.com", following: true },
  { img: "/images/f5.png", name: "Marianne Audrey", email: "marianne.audrey@live.com", following: true },
  { img: "/images/f6.png", name: "Henry Leach", email: "henry.leach@live.com", following: true },
  { img: "/images/f7.png", name: "Frances Arnold", email: "frances.arnold@email.com", following: true },
  { img: "/images/f8.png", name: "Nolan Etienne", email: "nolan.etienne@email.com", following: true },
  { img: "/images/f9.png", name: "Maxim Werner", email: "maxim.werner@gmail.com", following: true },
  { img: "/images/f10.png", name: "Mildred Chavez", email: "mildred.chavez@email.com", following: true },
  { img: "/images/f11.png", name: "Logan Saunders", email: "logan.saunders@live.com", following: true },
  { img: "/images/f12.png", name: "Phillip Burke", email: "phillip.burke@live.com", following: true },
];

export const contactsData: ContactType[] = [
  { img: "/images/f1.png", name: "Alexandra Della", email: "della@outlook.com", phone: "(587)-987-9632", starred: false },
  { img: "/images/f2.png", name: "Anderson Thomas", email: "thomas@yahoo.com", phone: "(456)-987-9632", starred: false },
  { img: "/images/f3.png", name: "Holland Scott", email: "scott@gmail.com", phone: "(247)-987-9632", starred: false },
  { img: "/images/f4.png", name: "Nancy Elliot", email: "elliot@yahoo.com", phone: "(856)-987-9632", starred: false },
  { img: "/images/f5.png", name: "Marianne Audrey", email: "audrey@live.com", phone: "(632)-987-9632", starred: false },
  { img: "/images/f6.png", name: "Henry Leach", email: "leach@live.com", phone: "(958)-987-9632", starred: false },
  { img: "/images/f7.png", name: "Frances Arnold", email: "arnold@email.com", phone: "(856)-987-9632", starred: false },
  { img: "/images/f8.png", name: "Nolan Etienne", email: "etienne@email.com", phone: "(557)-987-9632", starred: false },
  { img: "/images/f9.png", name: "Maxim Werner", email: "werner@gmail.com", phone: "(547)-987-9632", starred: false },
  { img: "/images/f10.png", name: "Mildred Chavez", email: "chavez@email.com", phone: "(966)-987-9632", starred: false },
  { img: "/images/f11.png", name: "Logan Saunders", email: "saunders@live.com", phone: "(366)-987-9632", starred: false },
  { img: "/images/f12.png", name: "Phillip Burke", email: "burke@live.com", phone: "(589)-987-9632", starred: false },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    type: "Mobile App",
    typeColor: "#3e97ff",
    typeBg: "#ecf5ff",
    title: "React Admin Dashboard",
    client: "Mark Stock",
    started: "20/12/2024",
    deadline: "25/12/2024",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sapiente repudiandae illo dolores consectetur quo?",
    progress: 78,
    progressColor: "#3E97FF",
    attachments: 2,
    comments: 1,
    team: ["/images/f1.png", "/images/f2.png", "/images/f3.png", "/images/f4.png"],
  },
  {
    id: 2,
    type: "Web Design",
    typeColor: "#e49e3d",
    typeBg: "#fcf3e8",
    title: "React Admin Dashboard",
    client: "Laura Foreman",
    started: "20/12/2024",
    deadline: "25/12/2024",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sapiente repudiandae illo dolores consectetur quo?",
    progress: 78,
    progressColor: "#e49e3d",
    attachments: 5,
    comments: 6,
    team: ["/images/f6.png", "/images/f8.png", "/images/f4.png"],
  },
  {
    id: 3,
    type: "Web Design",
    typeColor: "#25b865",
    typeBg: "#e9f8f0",
    title: "React Admin Dashboard",
    client: "Kenneth Hune",
    started: "20/12/2024",
    deadline: "25/12/2024",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sapiente repudiandae illo dolores consectetur quo?",
    progress: 78,
    progressColor: "#25b865",
    attachments: 4,
    comments: 6,
    team: ["/images/f6.png", "/images/f8.png", "/images/f2.png", "/images/f4.png", "/images/f3.png"],
  },
  {
    id: 4,
    type: "Logo Design",
    typeColor: "#d13b4c",
    typeBg: "#fbeff1",
    title: "React Admin Dashboard",
    client: "Timothy Boyd",
    started: "20/12/2024",
    deadline: "25/12/2024",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sapiente repudiandae illo dolores consectetur quo?",
    progress: 78,
    progressColor: "#d13b4c",
    attachments: 4,
    comments: 6,
    team: ["/images/f6.png", "/images/f8.png", "/images/f2.png", "/images/f4.png", "/images/f3.png"],
  },
  {
    id: 5,
    type: "React Admin",
    typeColor: "#02a0e4",
    typeBg: "#e6f6fc",
    title: "React Admin Dashboard",
    client: "Timothy Boyd",
    started: "20/12/2024",
    deadline: "25/12/2024",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sapiente repudiandae illo dolores consectetur quo?",
    progress: 78,
    progressColor: "#02a0e4",
    attachments: 4,
    comments: 6,
    team: ["/images/f6.png", "/images/f8.png", "/images/f2.png", "/images/f4.png", "/images/f3.png"],
  },
  {
    id: 6,
    type: "Figma Dashboard",
    typeColor: "#252f4a",
    typeBg: "#eef0f3",
    title: "React Admin Dashboard",
    client: "Client Name", 
    started: "20/12/2024", 
    deadline: "25/12/2024",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sapiente repudiandae illo dolores consectetur quo?",
    progress: 78,
    progressColor: "#252f4a",
    attachments: 5,
    comments: 8, 
    team:  ["/images/f1.png", "/images/f2.png", "/images/f3.png", "/images/f4.png"], 
  },
];

export const albums: Album[] = [
  {
    id: 1,
    title: "Project albums",
    images: ["/images/g1.jpg", "/images/g2.jpg", "/images/g3.jpg", "/images/g4.jpg", "/images/g5.jpg", "/images/g6.jpg"],
    photoCount: 23,
    date: "26 Mar, 2024",
  },
  {
    id: 2,
    title: "Project albums",
    images: ["/images/g13.jpg", "/images/g14.jpg", "/images/g15.jpg", "/images/g16.jpg", "/images/g17.jpg", "/images/g18.jpg"],
    photoCount: 23,
    date: "26 Mar, 2024",
  },
  {
    id: 3,
    title: "Project albums",
    images: ["/images/g19.png", "/images/g20.png", "/images/g21.png", "/images/g22.png", "/images/g23.png", "/images/g24.png"],
    photoCount: 23,
    date: "26 Mar, 2024",
  },
  {
    id: 4,
    title: "Project albums",
    images: ["/images/g13.jpg", "/images/g14.jpg", "/images/g15.jpg", "/images/g16.jpg", "/images/g17.jpg", "/images/g18.jpg"],
    photoCount: 23,
    date: "26 Mar, 2024",
  },
   {
    id: 5,
    title: "Project albums",
    images: ["/images/g19.png", "/images/g20.png", "/images/g21.png", "/images/g22.png", "/images/g23.png", "/images/g24.png"],
    photoCount: 23,
    date: "26 Mar, 2024",
  },
    {
    id: 6,
    title: "Project albums",
    images: ["/images/g1.jpg", "/images/g2.jpg", "/images/g3.jpg", "/images/g4.jpg", "/images/g5.jpg", "/images/g6.jpg"],
    photoCount: 23,
    date: "26 Mar, 2024",
  },
   {
    id: 7,
    title: "Project albums",
    images: ["/images/g19.png", "/images/g20.png", "/images/g21.png", "/images/g22.png", "/images/g23.png", "/images/g24.png"],
    photoCount: 23,
    date: "26 Mar, 2024",
  },
    {
    id: 8,
    title: "Project albums",
    images: ["/images/g13.jpg", "/images/g14.jpg", "/images/g15.jpg", "/images/g16.jpg", "/images/g17.jpg", "/images/g18.jpg"],
    photoCount: 23,
    date: "26 Mar, 2024",
  },
  {
    id: 9,
    title: "Project albums",
    images: ["/images/g19.png", "/images/g20.png", "/images/g21.png", "/images/g22.png", "/images/g23.png", "/images/g24.png"],
    photoCount: 23,
    date: "26 Mar, 2024",
  },
];
