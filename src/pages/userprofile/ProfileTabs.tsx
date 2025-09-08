import { Activity, BookImage, CircleUserRound, FolderKanban, UserPlus, UserRoundCheck } from "lucide-react";
import { NavLink } from "react-router-dom";

const tabs = [
  { label: "Overview", path: "/user-profile/overview" , icon: <CircleUserRound size={14} />},
  { label: "Activity", path: "/user-profile/activity" ,icon: <Activity size={14} /> },
  { label: "Followers", path: "/user-profile/followers",icon: <UserRoundCheck size={14} />  },
  { label: "Contacts", path: "/user-profile/contacts", icon: <UserPlus size={14} /> },
  { label: "Projects", path: "/user-profile/projects", icon: <FolderKanban size={14} /> },
  { label: "Gallery", path: "/user-profile/gallery", icon: <BookImage size={14} /> },
];

export default function ProfileTabs() {
  return (
   <>
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-[10px] rounded text-sm cursor-pointer transition-all duration-500 ${
              isActive ? "bg-blue-text text-white" : "text-darkgray hover:bg-[#e0f0ff] "
            }`
          }
        >
         {tab.icon} {tab.label}
        </NavLink>
      ))}
   </>
  );
}
