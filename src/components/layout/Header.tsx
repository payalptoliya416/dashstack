import { ChevronDown, Menu } from "lucide-react";
import { Fragment, useState, type FC } from "react";
import { Popover, Transition } from "@headlessui/react";
import LanguageDropdown from "../ui/LanguageDropdown";
import NotificationPopover from "../ui/NotificationPopover";
import type { Language } from "../../types/Header";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authSlice";
import type { AppDispatch } from "../../redux/store";
import MegaMenu from "./MegaMenu";

interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleMobileSidebar: () => void;
}

export const Header: FC<HeaderProps> = ({
  onToggleSidebar,
  onToggleMobileSidebar,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    name: "English",
    flag: "/images/flag1.png",
  });
  // const user = useSelector((state : RootState)=>state.auth.user);
   const dispatch = useDispatch<AppDispatch>();

  const languages: Language[] = [
    { name: "English", flag: "/images/flag1.png" },
    { name: "French", flag: "/images/flag2.png" },
    { name: "Spanish", flag: "/images/flag3.png" },
  ];

  const handleLogOut = () => {
    dispatch(logout());
  };
  
  return (
    <header className="w-full px-4 xl:px-[31px] py-[13px] bg-white shadow flex-col sm:flex-row flex justify-between items-center gap-5 lg:gap-auto sticky top-0 z-[999]">
      {/* ---left side */}
      <div className="flex justify-between sm:justify-center sm:items-center gap-5 xl:gap-[26px] w-full sm:w-auto">
        <button
          onClick={onToggleMobileSidebar}
          className="lg:hidden cursor-pointer"
        >
          <Menu color="#202224" />
        </button>
        {/* Desktop Sidebar toggle button */}
        <button
          onClick={onToggleSidebar}
          className="hidden lg:block cursor-pointer"
        >
          <Menu color="#202224" />
        </button>

        {/* <div className="flex items-center bg-gray-100 bg-opacity-[60%] rounded-full w-full sm:w-auto xl:w-[450px] px-4 py-[10px] border border-[#D5D5D5] ">
          <Search className="text-[#202224] w-5 h-5 mr-[13px]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-full text-sm text-gray-700 placeholder-[#202224]"
          />
        </div> */}
        <MegaMenu/>
      </div>
      {/* --right side */}
      <div className="flex items-center gap-5 xl:gap-[26px]">
        <NotificationPopover />

        {/* Language Dropdown */}
        <LanguageDropdown
          languages={languages}
          selectedLanguage={selectedLanguage}
          onChange={setSelectedLanguage}
        />

        {/* --admin */}
        <Popover className="relative">
          <Popover.Button className="flex items-center gap-1 sm:gap-3 xl:gap-[20px] focus:outline-none cursor-pointer">
            <img
              src="/images/admin.png"
              alt="Admin"
              loading="eager"
              className="w-9 sm:w-auto"
            />
            <div className="text-start">
              <h3 className="text-[#404040] text-xs sm:text-sm font-bold mb-0 sm:mb-[3px] leading-[14px]">
               {/* {user?.name ?? "Guest"} */}
               Jhon Doe
              </h3>
              <span className="text-[#565656] text-xs leading-[12px] font-semibold">
                Admin
              </span>
            </div>
            <div className="border w-[18px] h-[18px] border-[#5C5C5C] rounded-full flex justify-center items-center">
              <ChevronDown className="w-4 h-4 text-[#565656]" />
            </div>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 mt-2 bg-white rounded-xl shadow-lg z-[999] w-[254px]">
              <div className="text-sm text-gray-700">
                <a
                  href="javascript:void(0)"
                  className="flex py-3 px-5  items-center gap-[10px] border-b border-[rgba(151,151,151,0.25)]"
                >
                  <img src="/images/admin1.png" loading="eager" alt="" />
                  Manage Account
                </a>
                <a
                  href="javascript:void(0)"
                  className="flex py-3 px-5  items-center gap-[10px] border-b border-[rgba(151,151,151,0.25)]"
                >
                  <img src="/images/admin2.png" loading="eager" alt="" />
                  Change Password
                </a>
                <a
                  href="javascript:void(0)"
                  className="flex py-3 px-5  items-center gap-[10px] border-b border-[rgba(151,151,151,0.25)]"
                >
                  <img src="/images/admin3.png" loading="eager" alt="" />
                  Activity Log{" "}
                </a>
                <a href="javascript:void(0)" className="flex py-3 px-5  items-center gap-[10px]" onClick={handleLogOut}>
                  <img src="/images/admin4.png" loading="eager" alt="" />
                  Log out
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </header>
  );
};
