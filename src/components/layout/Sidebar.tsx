import { NavLink, useNavigate } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authSlice";

export const topLinks: SidebarLink[] = [
  { name: "Dashboard", path: "/dashboard", icon: CircleGauge },
  { name: "Products", path: "/products", icon: LayoutGrid },
  { name: "Favorites", path: "/favorites", icon: Heart },
  { name: "Inbox", path: "/inbox", icon: MessageSquare },
  { name: "Order Lists", path: "/orderlist", icon: ListChecks },
  { name: "Product Stock", path: "/stock", icon: Table },
];

export const middleLinks: SidebarLink[] = [
  { name: "Pricing", path: "/pricing", icon: Gift },
  { name: "Calendar", path: "/calendar", icon: CalendarDays },
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
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logout());       
    navigate("/");
  };

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
    bg-white
    transition-all duration-300 
    fixed top-0 z-[99999] lg:sticky flex flex-col justify-between
  `}
>
  <div>
    {/* Fixed top header */}
    <div className="text-center font-bold text-xl mt-6 mb-[30px] whitespace-nowrap overflow-hidden">
      <span className="text-[#4880FF]">{collapsed ? "D" : "Dash"}</span>
      {!collapsed && "Stack"}
    </div>

    {/* Scrollable nav list */}
    <div className="overflow-y-auto h-[calc(100vh-120px)] pr-1">
      <nav className="space-y-2">
        {[topLinks, middleLinks, bottomLinks].map((group, index) => (
          <div key={index}>
            {index === 1 && (
              <div className="text-xs text-gray-500 font-semibold px-6 mb-1 mt-4 uppercase tracking-wide">
                Pages
              </div>
            )}
           
                  {group.map(({ name, path, icon: Icon }) => {
                    const isLogout = name === "Logout";

                    return (
                      <NavLink
                        key={name}
                        to={isLogout ? "#" : path}
                        onClick={isLogout ? handleLogOut : undefined}
                        className={({ isActive }) =>
                          `group flex items-center gap-2 px-4 py-2 lg:py-4 rounded-md text-sm transition-all duration-300
                          ${collapsed ? "mx-1 justify-center" : "mx-3 xl:mx-6 lg:mx-6"} 
                          ${
                            isActive && !isLogout
                              ? "bg-[#4880FF] text-white shadow-md"
                              : "text-[#202224] hover:bg-[#4880FF]/70 hover:text-white hover:backdrop-blur-md hover:shadow-md"
                          } 
                          relative after:content-[''] after:absolute after:top-0 after:left-[-17px] xl:after:left-[-27px]
                          after:w-[9px] after:h-full after:rounded-r-[20px] after:transition-all after:duration-300
                          ${
                            isActive && !isLogout
                              ? "after:bg-[#4880FF]"
                              : "after:bg-transparent hover:after:bg-[#4880FF]/70"
                          }`
                        }
                      >
                        <Icon size={16} />
                        {collapsed ? "" : name}
                      </NavLink>
                    );
                  })}
            {index < 2 && <hr className="my-3 border-t border-[#E0E0E0]" />}
          </div>
        ))}
      </nav>
    </div>
  </div>
</aside>

    </>
  );
};
