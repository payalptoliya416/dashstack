import { useState } from "react";

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

export default function BasicTab() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <>
      <div className="flex flex-wrap border-b border-gray-200 pt-4">
        {(["home", "profile", "message","setting", "disabled"] as Tab[]).map((tab) => (
          <button
            key={tab}
            disabled={tab === "disabled"}
            onClick={() => tab !== "disabled" && setActiveTab(tab)}
            className={`font-bold px-4 py-2 text-sm cursor-pointer transition-all duration-300 outline-none focus:outline-none
              ${
                activeTab === tab
                  ? "border border-gray-200 border-b-white rounded-t-md relative after:absolute after:-bottom-1 after:left-0 after:content-[''] after:bg-white after:w-full after:h-1"
                  : tab === "disabled"
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100 hover:text-blue-text"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="pt-6 text-sm text-[#4b5675]">{tabData[activeTab]}</div>
    </>
  );
}
