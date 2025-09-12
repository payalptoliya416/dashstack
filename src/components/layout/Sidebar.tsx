import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
  ChevronRight,
  Dot,
  SquareKanban,
  CircleUser,
  Layers,
  CircleX,
  NotepadTextDashed,
  TableProperties,
  Group,
  NotebookPen,
  Pipette,
  MapPin,
  UserCog,
  Blocks,
  ChartNoAxesCombined,
} from "lucide-react";
import type { SidebarLink, SidebarProps } from "../../types/Sidebar";
import { useEffect, useRef, useState, type FC } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authSlice";

export const topLinks: SidebarLink[] = [
  // { name: "Dashboard", path: "/dashboard", icon: CircleGauge },
  {
    name: "Dashboard",
    icon: CircleGauge,
    children: [
      { name: "eCommerce", path: "/eCommerce" },
      { name: "Analytics", path: "/analytics" },
      { name: "CRM", path: "/crm" },
    ],
  },
  { name: "Products", path: "/products", icon: LayoutGrid },
  { name: "Favorites", path: "/favorites", icon: Heart },
  { name: "Inbox", path: "/inbox", icon: MessageSquare },
  { name: "Kanban", path: "/kanban-board", icon: SquareKanban },
  { name: "Order Lists", path: "/orderlist", icon: ListChecks },
  { name: "Product Stock", path: "/stock", icon: Table },
];

export const middleLinks: SidebarLink[] = [
  {
    name: "User Profile",
    icon: CircleUser,
    children: [
      { name: "Overview", path: "/user-profile/overview" },
      { name: "Activity", path: "/user-profile/activity" },
      { name: "Followers", path: "/user-profile/followers" },
      { name: "Contacts", path: "/user-profile/contacts" },
      { name: "Projects", path: "/user-profile/projects" },
      { name: "Gallery", path: "/user-profile/gallery" },
    ],
  },
   {
    name: "Account Settings",
    icon: UserCog,
    children: [
      { name: "Account", path: "/account-setting/account" },
      { name: "Security", path: "/account-setting/Security" },
      { name: "Notification", path: "/account-setting/notification" },
      { name: "Plan & Billing", path: "/account-setting/plan-billing" },
      { name: "Integration", path: "/account-setting/integration" },
    ],
  },
   {
    name: "Other Pages",
    icon: Layers,
    children: [
    { name: "Starter", path: "/starter" },
    { name: "FAQs", path: "/info/faqs" },
    { name: "Pricing", path: "/info/pricing" },
    { name: "About Us", path: "/info/about-us" },
    { name: "Contact Us", path: "/info/contact-us" },
    { name: "Privacy Policy", path: "/info/privacy-policy" },
    { name: "Terms of Services", path: "/info/terms-of-services" },
  ]
  },

  {
    name: "Error Pages",
    icon: CircleX,
    children: [
    { name: "404 Not Found", path: "/404-not-found" },
    { name: "401 Not Authorized", path: "/401-not-aithorized" },
    { name: "500 Server Error", path: "/500-server-error" },
    { name: "Comming Soon", path: "/comming-soon" },
    { name: "Under Maintenance", path: "/under-maintenance" },
  ]
  },

  {
    name: "Email Templates",
    icon: NotepadTextDashed,
    children: [
    { name: "Welcome Message", path: "/welcome-message" },
    { name: "Confirm Account", path: "/confirm-account" },
    { name: "Reset Password", path: "/email-reset-password" },
    { name: "Expired Card", path: "/expired-card" },
    { name: "Coupon Sale", path: "/coupon-sale" },
    { name: "Latest Update", path: "/latest-update" },
  ]
  },
]

export const componentLink: SidebarLink[] = [
  {
    name: "Base UI",
    icon: Layers,
    children: [
      { name: "Accordion", path: "/ui-accordion" },
      { name: "Avatars", path: "/ui-avatars" },
      { name: "Buttons", path: "/ui-buttons" },
      { name: "Cards", path: "/ui-cards" },
      { name: "Carousel", path: "/ui-carousel" },
      { name: "Dropdowns", path: "/ui-dropdowns" },
      { name: "Modals", path: "/ui-modals" },
      { name: "NavTabs", path: "/ui-navTabs" },
      { name: "Toasts", path: "/ui-toasts" },
      { name: "Miscellaneous", path: "/ui-miscellaneous" },
    ],
  },

  {
    name: "Icons",
    icon: Heart,
    children: [
      { name: "Flaticon", path: "/icon-flaticon" },
      { name: "Feather", path: "/icon-feather" },
      { name: "Bootstrap", path: "/icon-bootstrap" },
      { name: "BoxIcons", path: "/icon-boxIcons" },
      { name: "Fontawesome", path: "/icon-fontawesome" },
      { name: "Lucide", path: "/icon-lucide" },
      { name: "Tabler", path: "/icon-tabler" },
      { name: "Weather", path: "/icon-weather" },
    ],
  },
  {
    name: "Tables",
    icon: TableProperties,
    children: [
      { name: "ReactTable", path: "/table-react" },
    ],
  },
  {
    name: "Charts",
    icon: ChartNoAxesCombined,
    children: [
      { name: "ApexCharts", path: "/charts-apexCharts" },
      { name: "ChartJs", path: "/charts-chartjs" },
      { name: "Recharts", path: "/charts-recharts" },
      { name: "Progressbar", path: "/charts-progressbar" },
    ],
  },

  {
    name: "Forms",
    icon: NotebookPen,
    children: [
      { name: "Radios", path: "/form-radio" },
      { name: "Checkboxs", path: "/form-checkboxs" },
      { name: "Switchs", path: "/form-switchs" },
      { name: "Elements", path: "/form-elements" },
      { name: "Validation", path: "/form-validaiton" },
      { name: "noUiSlider", path: "/form-nouislider" },
    ],
  },
  {
    name: "Editors",
    icon: Group,
    children: [
      { name: "TinyMCE", path: "/editors" },
    ],
  },
   {
    name: "Pickers",
    icon: Pipette,
    children: [
      { name: "Flatpickr", path: "/flatpickr" },
      { name: "DateRange", path: "/daterange" },
    ],
  },
   {
    name: "Maps",
    icon: MapPin,
    children: [
      { name: "Vector", path: "/map" },
    ],
  },

   {
    name: "Extended",
    icon: Blocks,
    children: [
      { name: "Select2", path: "/select2" },
      { name: "Sweetalert2", path: "/sweetalert2" },
      { name: "Slick Slider", path: "/slickslider" },
      { name: "Dropzone", path: "/dropzone" },
      { name: "Hot Toast", path: "/hot-toast" },
      { name: "Toastity", path: "/toastity" },
    ],
  },

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
    const location = useLocation();
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };

useEffect(() => {
  const activeParent = topLinks
    .concat(middleLinks)
    .concat(bottomLinks)
    .concat(componentLink)
    .find(
      (link) =>
        link.children?.some((child) => child.path === location.pathname)
    );

  if (activeParent) {
    setOpenDropdown(activeParent.name);
  } else {
    setOpenDropdown(null);
  }
}, [location.pathname]);

  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
  if (activeLinkRef.current) {
    const parent = activeLinkRef.current.closest(".overflow-y-auto") as HTMLElement;

    if (parent) {
      // make sure element is visible before calculating
      requestAnimationFrame(() => {
        const parentRect = parent.getBoundingClientRect();
        const childRect = activeLinkRef.current!.getBoundingClientRect();

        const relativeTop = childRect.top - parentRect.top;
        const offset = 120; // 👈 top margin (adjust as needed)
        const scrollTo = parent.scrollTop + relativeTop - offset;

        parent.scrollTo({
          top: scrollTo,
          behavior: "smooth",
        });
      });
    }
  }
}, [location.pathname, openDropdown]);

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
            <span className="text-blue-light">{collapsed ? "D" : "Dash"}</span>
            {!collapsed && "Stack"}
          </div>

          {/* Scrollable nav list */}
          <div className="overflow-y-auto h-[calc(100vh-120px)] pr-1">
            <nav className="space-y-2">
              {[topLinks, middleLinks,componentLink, bottomLinks].map((group, index) => (
                <div key={index}>
                  {index === 1 && (
                    <div className="text-xs text-gray-500 font-semibold px-6 mb-1 mt-4 uppercase tracking-wide">
                     UI Pages
                    </div>
                  )}
                  {index === 2 && (
                    <div className="text-xs text-gray-500 font-semibold px-6 mb-1 mt-4 uppercase tracking-wide">
                    Components
                    </div>
                  )}

                  {group.map(({ name, path, icon: Icon, children }) => {
                    const isLogout = name === "Logout";
                    const isOpen = openDropdown === name;

                    if (!children) {
                          const isActive = location.pathname === path;
                      return (
                        <NavLink
                          key={name}
                          to={isLogout ? "#" : path || "#"}
                          ref={isActive ? activeLinkRef : null}
                          onClick={isLogout ? handleLogOut : undefined}
                          className={({ isActive }) =>
                            `group flex items-center gap-2 px-2 py-2 lg:py-4 my-1 rounded-md text-sm transition-all duration-300
                        ${
                          collapsed
                            ? "mx-1 justify-center"
                            : "mx-3 xl:mx-5"
                        } 
                        ${
                          isActive && !isLogout
                            ? "bg-blue-light text-white shadow-md"
                            : "text-darkgray hover:bg-blue-light/70 hover:text-white hover:backdrop-blur-md hover:shadow-md"
                        } 
                        relative after:content-[''] after:absolute after:top-0 after:left-[-17px] xl:after:left-[-27px]
                        after:w-[9px] after:h-full after:rounded-r-[20px] after:transition-all after:duration-300
                        ${
                          isActive && !isLogout
                            ? "after:bg-blue-light"
                            : "after:bg-transparent hover:after:bg-blue-light/70"
                        }`
                          }
                        >
                          <Icon size={16} />
                          {collapsed ? "" : name}
                        </NavLink>
                      );
                    }

                    return (
                      <div key={name}>
                        <button
                          onClick={() => toggleDropdown(name)}
                          className={`
                       group flex items-center gap-2 px-2 py-2 lg:py-4 rounded-md text-sm transition-all duration-300 w-full max-w-[180px] xl:max-w-[200px]
                        ${
                          collapsed
                            ? "mx-1 justify-center"
                            : "mx-3 xl:mx-5"
                        } 
                        text-darkgray hover:bg-blue-light/70 hover:text-white hover:backdrop-blur-md hover:shadow-md
                        relative after:content-[''] after:absolute after:top-0 after:left-[-17px] xl:after:left-[-27px]
                        after:w-[9px] after:h-full after:rounded-r-[20px] after:transition-all after:duration-300
                        ${
                          isOpen
                            ? "after:bg-blue-light"
                            : "after:bg-transparent hover:after:bg-blue-light/70"
                        }
                      `}
                        >
                          <Icon size={16} />
                          {collapsed ? "" : name}
                          {!collapsed && (
                            <ChevronRight
                              size={16}
                              className={`ml-auto transition-transform duration-300 ${
                                isOpen ? "rotate-90" : ""
                              }`}
                            />
                          )}
                        </button>

                        {/* Submenu */}
                        {isOpen && !collapsed && (
                          <div className="my-1 space-y-1">
                            {children.map((sub) => {
                                  const isSubActive = location.pathname === sub.path;
                                  return (
                              <NavLink
                                key={sub.name}
                                to={sub.path || "#"}
                                ref={isSubActive  ? activeLinkRef : null}
                                className={({ isActive }) =>
                                  `flex items-center gap-2 px-2 py-2 lg:py-2 rounded text-sm transition-all duration-300 mx-3 xl:mx-5
                              ${
                                isActive
                                  ? "bg-blue-light text-white shadow-md"
                                  : "text-darkgray hover:bg-blue-light/70 hover:text-white hover:shadow-md"
                              }`
                                }
                              >
                                <Dot size={16} /> {sub.name}
                              </NavLink>
                                ) })}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {index < 2 && (
                    <hr className="my-3 border-t border-[#E0E0E0]" />
                  )}
                </div>
              ))}
              <div className={`p-3 xl:p-6 rounded bg-primary mx-3 xl:mx-5 text-white text-center ${collapsed ? 'hidden': ''}`}>
                    <h3 className="text-base uppercase mb-2">Support Center</h3>
                    <p className="text-13 leading-[16px] w-full max-w-36 mb-6">Window is a production ready admin dashboard to get started up and running quickly.</p>
                    <a href="javascript:void(0)" className="px-3 py-2 bg-blue rounded text-sm w-full block">Get Support</a>
              </div>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};
