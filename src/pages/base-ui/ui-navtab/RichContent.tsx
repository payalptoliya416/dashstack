import { useState } from "react";
import { Ban, House, MessageSquare, Settings, User } from "lucide-react";

type RichContentProps = {
  color?: string;
};

function RichContent({color}: RichContentProps) {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home", icon: <House size={20}/>, content: "Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu." },
    { id: "profile", label: "Profile", icon: <User size={20}/>, content: "Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu." },
    { id: "message", label: "Message", icon: <MessageSquare size={20}/>, content: "Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu." },
    { id: "settings", label: "Settings", icon: <Settings size={20}/>, content: "Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu." },
    { id: "disabled", label: "Disabled", icon: <Ban size={20}/>, content: "Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.", disabled: true },
  ];

  return (
    <>
      <div className="flex justify-center items-center gap-3 sm:gap-5 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && setActiveTab(tab.id)}
            className={`p-[6px] rounded hover:bg-[#${color}1a] hover:text-[${color}] w-10 h-10 flex justify-center items-center transition-all duration-300  border border-dashed hover:border-[${color}] cursor-pointer ${
              activeTab === tab.id
                ? `bg-[${color}1a] text-[${color}] border-[${color}]`
                : "border-transparent"
            } ${tab.disabled ? "opacity-45 cursor-not-allowed" : ""}`}
            disabled={tab.disabled}
          >
            {tab.icon}
          </button>
        ))}
      </div>
      <div className="border border-gray-100 my-6 h-[1px]" />
      <div className="flex justify-center items-center gap-3 sm:gap-5 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && setActiveTab(tab.id)}
            className={`py-[10px] px-4 text-sm font-semibold rounded hover:bg-[${color}1a] hover:text-[${color}] flex justify-center items-center transition-all duration-300 border border-dashed hover:border-[${color}] cursor-pointer ${
              activeTab === tab.id
                ? `bg-[${color}1a] text-[${color}] border-[${color}]`
                : "border-transparent"
            } ${tab.disabled ? "opacity-45 cursor-not-allowed" : ""}`}
            disabled={tab.disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="border border-gray-100 my-6" />
      <div className="flex justify-center items-center gap-3 sm:gap-5 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && setActiveTab(tab.id)}
            className={`py-[10px] px-4 text-sm font-semibold rounded hover:bg-[${color}1a] hover:text-[${color}] flex gap-2 justify-center items-center transition-all duration-300 border border-dashed hover:border-[${color}] cursor-pointer ${
              activeTab === tab.id
                ? `bg-[${color}1a] text-[${color}] border-[${color}]`
                : "border-transparent"
            } ${tab.disabled ? "opacity-45 cursor-not-allowed" : ""}`}
            disabled={tab.disabled}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="border border-gray-100 my-6" />
      <div className="flex justify-center items-center gap-3 sm:gap-5 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && setActiveTab(tab.id)}
            className={`py-[10px] px-4 text-sm font-semibold rounded hover:bg-[${color}1a] hover:text-[${color}] flex flex-col gap-3 justify-center items-center transition-all duration-300 border border-dashed hover:border-[${color}] cursor-pointer ${
              activeTab === tab.id
                ? `bg-[${color}1a] text-[${color}] border-[${color}]`
                : "border-transparent"
            } ${tab.disabled ? "opacity-45 cursor-not-allowed" : ""}`}
            disabled={tab.disabled}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="border border-gray-100 my-6" />
      <div className="flex justify-center items-center gap-3 sm:gap-5 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && setActiveTab(tab.id)}
            className={`py-[10px] px-4 text-sm font-semibold rounded hover:bg-[${color}1a] hover:text-[${color}] flex flex-col gap-3 justify-center items-center transition-all duration-300 border border-dashed hover:border-[${color}] cursor-pointer ${
              activeTab === tab.id
                ? `bg-[${color}1a] text-[${color}] border-[${color}]`
                : "border-transparent"
            } ${tab.disabled ? "opacity-45 cursor-not-allowed" : ""}`}
            disabled={tab.disabled}
          >
            {tab.icon}
            <div>
              <h3>{tab.label}</h3>
              <p>Description</p>
            </div>
          </button>
        ))}
      </div>
      <div className="border border-gray-100 my-6" />
      <div className="flex justify-center items-center gap-3 sm:gap-5 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && setActiveTab(tab.id)}
            className={`py-[10px] px-4 text-sm font-semibold rounded hover:bg-[${color}1a] hover:text-[${color}] flex flex-row text-start gap-3 justify-center items-center transition-all duration-300 border border-dashed hover:border-[${color}] cursor-pointer ${
              activeTab === tab.id
                ? `bg-[${color}1a] text-[${color}] border-[${color}]`
                : "border-transparent"
            } ${tab.disabled ? "opacity-45 cursor-not-allowed" : ""}`}
            disabled={tab.disabled}
          >
            <div className="w-6 h-6">{tab.icon}</div>
            <div>
              <h3>{tab.label}</h3>
              <p>Description</p>
            </div>
          </button>
        ))}
      </div>
      <div className="border border-gray-100 my-6" />

      {/* Tab Content */}
      <div className="flex flex-col gap-7">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`py-[10px] px-4 text-sm font-semibold text-[#252F4a] rounded flex flex-row text-start gap-3 justify-center items-start transition-all duration-300 border border-dashed hover:border-[${color}] cursor-pointer ${
              activeTab === tab.id
                ? `bg-[${color}1a] text-[${color}] border-[${color}]`
                : "border-transparent"
            }`}
          >
            <div>{<div className="w-6 h-6">{tab.icon}</div>}</div>
            <div>
              <h3 className="text-base font-bold">{tab.label}</h3>
              <p className="text-[13px] text-[#6B7177] font-bold">
                {tab.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RichContent;