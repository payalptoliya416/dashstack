import { X } from "lucide-react";
import BadgeButton from "./BadgeButton";
import Tooltip from "./Tooltip";
import PopoverTooltip from "./PopoverTooltip";
import {motion} from 'framer-motion';
import { usePageAnimation } from "../../../hooks/usePageAnimation";

type AlertItem = {
  id: number;
  title: string;
  message: string;
  icon: string;
  style: React.CSSProperties;
};

const alerts: AlertItem[] = [
  {
    id: 1,
    title: "Notify!",
    message: "Lorem Ipsum is simply dummy text of the printing.",
    icon: "/images/bell.svg",
    style: { background: "#3e97ff" },
  },
  {
    id: 2,
    title: "Notify!",
    message: "Lorem Ipsum is simply dummy text of the printing.",
    icon: "/images/bell.svg",
    style: {
      background:
        "linear-gradient(135deg, rgb(188, 26, 78) 0%, rgb(0, 79, 230) 100%)",
    },
  },
  {
    id: 3,
    title: "Notify!",
    message: "Lorem Ipsum is simply dummy text of the printing.",
    icon: "/images/bell.svg",
    style: {
      background:
        'linear-gradient(135deg, rgba(188, 26, 78, 0.5) 0%, rgba(0, 79, 230, 0.5) 100%), url("/images/g2.jpg") center/cover no-repeat',
    },
  },
];

function UIMiscellaneous() {
  return (
    <>
  <motion.div
                  {...usePageAnimation()}
                  className="overflow-hidden">
      <div className="rounded-lg shadow border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Alert
        </div>
         <div className="p-6">
          {alerts.map((alert) => (
          <div
            key={alert.id}
            className="rounded shadow-sm mb-7"
            style={alert.style}
          >
            <div className="p-4 flex justify-between items-start sm:items-center gap-5 sm:gap-2">
              <div className="flex gap-3 sm:gap-5 items-start sm:items-center">
                <img src={alert.icon} alt="icon" />
                <h3 className="font-bold text-white">
                  <span className="font-black">{alert.title}</span> {alert.message}
                </h3>
              </div>
              <div><X className="text-[#9FCBFF]" /></div>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="rounded-lg shadow border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Badge
        </div>
        <div className="p-6">
      {/* Text style badges */}
      <div className="flex gap-6 md:gap-10 items-center flex-wrap">
        <BadgeButton label="Notifications" badge="5+" variant="blue" type="text" />
        <BadgeButton label="Notifications" badge="5+" variant="gray" type="text" />
        <BadgeButton label="Notifications" badge="5+" variant="green" type="text" />
        <BadgeButton label="Notifications" badge="5+" variant="orange" type="text" />
        <BadgeButton label="Notifications" badge="5+" variant="red" type="text" />
        <BadgeButton label="Notifications" badge="5+" variant="info" type="text" />
      </div>
     <div className="my-8 border border-gray-100"/>
      {/* Number style badges */}
      <div className="flex gap-6 md:gap-10 items-center flex-wrap">
        <BadgeButton label="Inbox" badge="99+" variant="blue" type="number" />
        <BadgeButton label="Inbox" badge="99+" variant="gray" type="number" />
        <BadgeButton label="Inbox" badge="99+" variant="green" type="number" />
        <BadgeButton label="Inbox" badge="99+" variant="orange" type="number" />
        <BadgeButton label="Inbox" badge="99+" variant="red" type="number" />
        <BadgeButton label="Inbox" badge="99+" variant="info" type="number" />
      </div>
      <div className="my-8 border border-gray-100"/>
      {/* Dot style badges */}
      <div className="flex gap-6 md:gap-10 items-center flex-wrap">
        <BadgeButton label="Profile" variant="blue" type="dot" />
        <BadgeButton label="Profile" variant="gray" type="dot" />
        <BadgeButton label="Profile" variant="green" type="dot" />
        <BadgeButton label="Profile" variant="orange" type="dot" />
        <BadgeButton label="Profile" variant="red" type="dot" />
        <BadgeButton label="Profile" variant="info" type="dot" />
      </div>
        </div>
      </div>
      <div className="rounded-lg shadow border border-gray-200 bg-white mb-7">
        <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Tooltip
        </div>
         <div className="p-6">
      <div className="flex gap-2 items-center flex-wrap border-b border-gray-100 pb-4 sm:pb-6">
        <Tooltip text="This top tooltip is  themed via CSS variables. Tooltip on Primary" color='#3e97ff'>
          <button className="px-5 py-2 rounded text-white bg-blue-text font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
            Tooltip Primary
          </button>
        </Tooltip>

        <Tooltip text="This top tooltip is themed via CSS variables. Tooltip on Secondary" color='#505863'>
          <button className="px-5 py-2 rounded text-white bg-[#505863] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
            Tooltip Secondary
          </button>
        </Tooltip>

        <Tooltip text="This top tooltip is themed via CSS variables. Tooltip on Success" color='#25b865'>
          <button className="px-5 py-2 rounded text-white bg-[#25b865] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
            Tooltip Success
          </button>
        </Tooltip>

        <Tooltip text="This top tooltip is themed via CSS variables. Tooltip on Info" color='#02a0e4'>
          <button className="px-5 py-2 rounded text-white bg-[#02a0e4] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
            Tooltip Info
          </button>
        </Tooltip>

        <Tooltip text="This top tooltip is themed via CSS variables. Tooltip on Warning" color='#e49e3d'>
          <button className="px-5 py-2 rounded text-white bg-[#e49e3d] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
            Tooltip Warning
          </button>
        </Tooltip>

        <Tooltip text="This top tooltip is themed via CSS variables. Tooltip on Danger" color='#d13b4c'>
          <button className="px-5 py-2 rounded text-white bg-[#d13b4c] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
            Tooltip Danger
          </button>
        </Tooltip>
      </div>
    </div>
      </div>
   <div className="rounded-lg shadow border border-gray-200 bg-white mb-7">
  <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
    Popover
  </div>
  <div className="p-6">
    <div className="flex gap-2 items-center flex-wrap border-b border-gray-100 pb-4 sm:pb-6">
      <PopoverTooltip text="This top tooltip is themed via CSS variables. Tooltip on Primary" bgcolor="#3e97ff" head='Primary'>
        <button className="px-5 py-2 rounded text-white bg-blue-text font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
          Popover Primary
        </button>
      </PopoverTooltip>

      <PopoverTooltip text="This top tooltip is themed via CSS variables. Tooltip on Secondary" bgcolor="#505863" head='Secondary'>
        <button className="px-5 py-2 rounded text-white bg-[#505863] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
          Popover Secondary
        </button>
      </PopoverTooltip>

      <PopoverTooltip text="This top tooltip is themed via CSS variables. Tooltip on Success" bgcolor="#25b865" head='Success'>
        <button className="px-5 py-2 rounded text-white bg-[#25b865] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
          Popover Success
        </button>
      </PopoverTooltip>

      <PopoverTooltip text="This top tooltip is themed via CSS variables. Tooltip on Info" bgcolor="#02a0e4" head='Info'>
        <button className="px-5 py-2 rounded text-white bg-[#02a0e4] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
          Popover Info
        </button>
      </PopoverTooltip>

      <PopoverTooltip text="This top tooltip is themed via CSS variables. Tooltip on Warning" bgcolor="#e49e3d" head='Warning'>
        <button className="px-5 py-2 rounded text-white bg-[#e49e3d] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
          Popover Warning
        </button>
      </PopoverTooltip>

      <PopoverTooltip text="This top tooltip is themed via CSS variables. Tooltip on Danger" bgcolor="#d13b4c" head='Danger'>
        <button className="px-5 py-2 rounded text-white bg-[#d13b4c] font-semibold text-sm cursor-pointer hover:opacity-85 transition-all duration-500">
          Popover Danger
        </button>
      </PopoverTooltip>
    </div>
  </div>
</div>
 </motion.div>
    </>
  );
}

export default UIMiscellaneous;
