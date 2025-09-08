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
    className={`flex justify-between items-center gap-2 py-3 px-4 rounded-xl cursor-pointer transition duration-500 hover:bg-blue-light/13 hover:text-blue-light ${
      activeTab === item.label ? "bg-blue-light/13 text-blue-light" : ""
    }`}
  >
    <div className="flex items-center gap-3">
      {item.icon}
      <h3
        className={`text-sm font-bold ${
          activeTab === item.label ? "text-blue-light" : "text-darkgray"
        }`}
      >
        {item.label}
      </h3>
    </div>
    <div
      className={`text-sm font-bold ${
        activeTab === item.label
          ? "text-blue-light"
          : "text-darkgray opacity-60"
      }`}
    >
      {item.count}
    </div>
  </div>
);
