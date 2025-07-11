import { NavLink } from "react-router-dom";
import {
  CircleGauge,
  LayoutGrid,
  Heart,
  MessageSquare,
  ListChecks,
  Table,
  Gift,
  CalendarDays,
  Users2,
  LayoutPanelTop,
  UserRound,
  Banknote,
  ClipboardList,
  Settings,
  LogOut,
} from "lucide-react";
import type { SidebarLink, SidebarProps } from "../../types/Sidebar";
import type { FC } from "react";

export const topLinks: SidebarLink[] = [
  { name: "Dashboard", path: "/", icon: CircleGauge },
  { name: "Products", path: "/products", icon: LayoutGrid },
  { name: "Favorites", path: "/favorites", icon: Heart },
  { name: "Inbox", path: "/inbox", icon: MessageSquare },
  { name: "Order Lists", path: "/orderlist", icon: ListChecks },
  { name: "Product Stock", path: "/stock", icon: Table },
];

export const middleLinks: SidebarLink[] = [
  { name: "Pricing", path: "/pricing", icon: Gift },
  { name: "Calender", path: "/calendar", icon: CalendarDays },
  { name: "To-Do", path: "/todo", icon: ClipboardList },
  { name: "Contact", path: "/contact", icon: Users2 },
  { name: "Invoice", path: "/invoice", icon: Banknote },
  { name: "UI Elements", path: "/ui-elements", icon: LayoutPanelTop },
  { name: "Team", path: "/team", icon: UserRound },
  { name: "Table", path: "/table", icon: Table },
];

export const bottomLinks: SidebarLink[] = [
  { name: "Settings", path: "/settings", icon: Settings },
  { name: "Logout", path: "/logout", icon: LogOut },
];

export const Sidebar: FC<SidebarProps> = ({
  collapsed,
  mobileOpen,
  onCloseMobile,
}) => {
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-[#D5D5D5]/40 backdrop-blur-sm z-[9999] lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`
    ${mobileOpen ? "left-0 h-full" : "-left-60 h-screen"} 
    lg:left-0
    ${collapsed ? "w-30" : "w-52 xl:w-60"} 
    bg-white shadow-md  overflow-y-auto 
    transition-all duration-300 
    fixed top-0 z-[99999] lg:sticky flex flex-col justify-between
  `}
      >
        <div>
          <div className="text-center font-bold text-xl mt-6 mb-[30px] whitespace-nowrap overflow-hidden">
            <span className="text-[#4880FF]">{collapsed ? "D" : "Dash"}</span>
            {!collapsed && "Stack"}
          </div>
          <nav className="space-y-2">
            {[topLinks, middleLinks, bottomLinks].map((group, index) => (
              <div key={index}>
                {index === 1 && (
                  <div className="text-xs text-gray-500 font-semibold px-6 mb-1 mt-4 uppercase tracking-wide">
                    Pages
                  </div>
                )}
                {group.map(({ name, path, icon: Icon }) => (
                  <NavLink
                    key={name}
                    to={path}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-4 py-2 lg:py-4 rounded-md text-sm ${
                        collapsed ? "mx-1 justify-center" : "mx-3 xl:mx-6 lg:mx-4"
                      } ${
                        isActive ? "bg-[#4880FF] text-white" : "text-[#202224]"
                      }`
                    }
                  >
                    <Icon size={16} />
                    {collapsed ? "" : name}
                  </NavLink>
                ))}
                {index < 2 && <hr className="my-3 border-t border-[#E0E0E0]" />}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};
