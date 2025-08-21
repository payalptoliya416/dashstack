import { useState, type JSX } from "react";
import { Home, User, MessageSquare, Settings, Ban } from "lucide-react";

// Define types for the tabs and the color theme.
type Tab = "home" | "profile" | "message" | "setting" | "disabled";

// Data for the content of each tab.
const tabData: Record<Tab, string> = {
  home: "Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.",
  profile:
    "Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.",
  message:
    "Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat.",
  setting:
    "Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi.",
  disabled: "This tab is disabled and cannot be selected.",
};
const tabIcons: Record<Tab, JSX.Element> = {
  home: <Home className="w-5 h-5 mr-2" />,
  profile: <User className="w-5 h-5 mr-2" />,
  message: <MessageSquare className="w-5 h-5 mr-2" />,
  setting: <Settings className="w-5 h-5 mr-2" />,
  disabled: <Ban className="w-5 h-5 mr-2" />,
};

export const ThemeTab = ({ themeColor }: { themeColor: string }) => {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <>
      <div className="flex flex-wrap justify-between pt-4">
        {(["home", "profile", "message", "setting", "disabled"] as Tab[]).map((tab) => (
          <button
            key={tab}
            disabled={tab === "disabled"}
            onClick={() => tab !== "disabled" && setActiveTab(tab)}
            className={`flex-1 rounded flex items-center font-bold px-4 py-[10px] text-sm cursor-pointer transition-all duration-300 outline-none focus:outline-none relative
            ${
              activeTab === tab
                ? `${themeColor} text-white shadow`
                : tab === "disabled"
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:text-white"
            }
            ${activeTab !== tab && tab !== "disabled" ? `hover:${themeColor}` : ''}
            `}
          >
            {tabIcons[tab]}
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="pt-6 text-sm text-[#4b5675]">{tabData[activeTab]}</div>
    </>
  );
};