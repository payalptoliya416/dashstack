import { Bell, CircleDollarSign, LockKeyhole, SquarePlus, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const tabs = [
  { label: "Account", path: "/account-setting/account", icon: <User size={14} /> },
  { label: "Security", path: "/account-setting/Security" ,icon: <LockKeyhole size={14} /> },
  { label: "Notification", path: "/account-setting/notification",icon: <Bell size={14} />  },
  { label: "Plan & Billing", path: "/account-setting/plan-billing" , icon: <CircleDollarSign size={14} /> },
  { label: "Integration", path: "/account-setting/integration" , icon: <SquarePlus size={14} />},
];

export default function AccountTab() {
  return (
   <>
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-[10px] rounded text-sm cursor-pointer transition-all duration-500 whitespace-nowrap  ${
              isActive ? "bg-[#3e97ff] text-white" : "text-[#202224] hover:bg-[#e0f0ff] "
            }`
          }
        >
         {tab.icon} {tab.label}
        </NavLink>
      ))}
   </>
  );
}
