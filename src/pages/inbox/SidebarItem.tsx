import type { MailItem } from "../../types/Dashboard";


export const SidebarItem = ({
  item,
  activeTab,
  setActiveTab,
}: {
  item: MailItem;
  activeTab: string;
  setActiveTab: (label: string) => void;
}) => (
  <div
    onClick={() => setActiveTab(item.label)}
    className={`flex justify-between items-center gap-2 py-3 px-4 rounded-xl cursor-pointer transition duration-500 hover:bg-[#4880FF]/13 hover:text-[#4880FF] ${
      activeTab === item.label ? "bg-[#4880FF]/13 text-[#4880FF]" : ""
    }`}
  >
    <div className="flex items-center gap-3">
      {item.icon}
      <h3
        className={`text-sm font-bold ${
          activeTab === item.label ? "text-[#4880FF]" : "text-[#202224]"
        }`}
      >
        {item.label}
      </h3>
    </div>
    <div
      className={`text-sm font-bold ${
        activeTab === item.label
          ? "text-[#4880FF]"
          : "text-[#202224] opacity-60"
      }`}
    >
      {item.count}
    </div>
  </div>
);
