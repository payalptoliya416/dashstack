import { useEffect, useRef, useState } from "react";


type Tab = "home" | "profile" | "message" | "setting" | "disabled" | "dropdown";
type DropdownItem = "dropdown1" | "dropdown2" | "dropdown3" | "dropdown4";

const tabData: Record<Tab | DropdownItem, string> = {
  home: "Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.",
  profile:
    "Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.",
  message:
    "Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat.",
  setting:
    "Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi.",
  disabled: "This tab is disabled and cannot be selected.",
  // Added the missing 'dropdown' key to resolve the TypeScript error.
  dropdown: "", 
  dropdown1: "Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat.",
  dropdown2: "Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi.",
  dropdown3: "Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat.",
  dropdown4: "Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore amet ullamco voluptate nisi commodo ea sit eu. Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat.",
};

export default function DropdownTab() {
 const [activeTab, setActiveTab] = useState<Tab | DropdownItem>("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabClick = (tab: Tab) => {
    if (tab === "dropdown") {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      setActiveTab(tab);
      setIsDropdownOpen(false);
    }
  };

  const handleDropdownItemClick = (item: DropdownItem) => {
    setActiveTab(item);
  };
   const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);
  return (
    <>
      <div className="flex flex-wrap pt-4">
        {(["home", "profile", "message", "setting", "disabled"] as Tab[]).map((tab) => (
          <button
            key={tab}
            disabled={tab === "disabled"}
            onClick={() => tab !== "disabled" && setActiveTab(tab)}
            className={`px-4 py-2 text-sm rounded-md transition-all duration-300 font-bold
             ${
                activeTab === tab
                  ? "bg-[#3e97ff] text-white shadow"
                  : tab === "disabled"
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100 hover:text-[#3e97ff]"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
           <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => handleTabClick("dropdown")}
              className={`flex-1 flex items-center justify-center py-3 px-4 text-sm font-semibold rounded-lg transition-all duration-300
                ${
                  activeTab.startsWith("dropdown")
                    ? "bg-[#3e97ff] text-white shadow"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#3e97ff]"
                }`}
            >
              Dropdown
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                {(["dropdown1", "dropdown2", "dropdown3", "dropdown4"] as DropdownItem[]).map((item) => (
                  <button
                    key={item}
                    onClick={() => handleDropdownItemClick(item)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1).replace('1', ' 1').replace('2', ' 2').replace('3', ' 3').replace('4', ' 4')}
                  </button>
                ))}
              </div>
            )}
          </div>
      </div>
      <div className="pt-6 text-sm text-[#4b5675]">{tabData[activeTab]}</div>
    </>
  );
}
