
export interface IntroItem {
  label: string;
  value: string;
}

export interface Skill {
  name: string;
}

export interface Connection {
  img: string;
  name: string;
  connections: number;
  following: boolean;
}

export interface Experience {
  img: string;
  title: string;
  date: string;
  duration: string;
  description: string;
}

export interface InterestCategory {
  title: string;
  items: string[];
}

export interface UserType {
  img: string;
  name: string;
  email: string;
  following: boolean;
}

export type ContactType = {
  img: string;
  name: string;
  email: string;
  phone: string;
  starred: boolean;
};

export interface ProjectType {
  id: number;
  type: string;
  typeColor: string;
  typeBg: string;
  title: string;
  client: string;
  started: string;
  deadline: string;
  description: string;
  progress: number;
  progressColor: string;
  attachments: number;
  comments: number;
  team: string[];
}

export type Album = {
  id: number;
  title: string;
  images: string[];
  photoCount: number;
  date: string;
};