import { useState } from "react";

type Tab = "home" | "profile" | "contact" | "disabled";

const tabData: Record<Tab, string> = {
  home: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
  profile:
    "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
  contact:
    "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
  disabled: "This tab is disabled and cannot be selected.",
};

export default function ButtonTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <div className="shadow rounded-md">
      <div className="flex flex-wrap border-b border-gray-200 p-4">
        {(["home", "profile", "contact", "disabled"] as Tab[]).map((tab) => (
          <button
            key={tab}
            disabled={tab === "disabled"}
            onClick={() => tab !== "disabled" && setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-[#3e97ff] text-white shadow"
                  : tab === "disabled"
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="p-6 text-sm text-[#4b5675]">{tabData[activeTab]}</div>
    </div>
  );
}
