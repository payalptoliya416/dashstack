import { useState, type JSX } from "react";
import { Home, User, MessageSquare, Settings, Ban } from "lucide-react";

type Tab = "home" | "profile" | "message" |"setting" | "disabled";

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

export default function WithIcon() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <>
      <div className="flex flex-wrap border-b border-gray-200 pt-4">
       {(["home", "profile", "message", "setting", "disabled"] as Tab[]).map((tab) => (
  <button
    key={tab}
    disabled={tab === "disabled"}
    onClick={() => tab !== "disabled" && setActiveTab(tab)}
    className={`flex items-center font-bold px-4 py-2 text-sm cursor-pointer transition-all duration-300 outline-none focus:outline-none relative
  ${
    activeTab === tab
      ? "border border-gray-200 border-b-white rounded-t-md after:absolute after:-bottom-1 after:left-0 after:content-[''] after:bg-white after:w-full after:h-1"
      : tab === "disabled"
      ? "text-gray-400 cursor-not-allowed"
      : "text-gray-700 hover:text-[#3e97ff] hover:border hover:border-gray-200 hover:border-b-white hover:rounded-t-md hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:content-[''] hover:after:bg-white hover:after:w-full hover:after:h-1"
  }`}
  >
    {tabIcons[tab]}
    {tab.charAt(0).toUpperCase() + tab.slice(1)}
  </button>
))}
      </div>
      <div className="pt-6 text-sm text-[#4b5675]">{tabData[activeTab]}</div>
    </>
  );
}
