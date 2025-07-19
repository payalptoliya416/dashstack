import {
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Download,
  Mail,
  Pencil,
  Plus,
  Search,
  Send,
  Star,
  Trash,
  Trash2,
  TriangleAlert,
} from "lucide-react";
import MainTitle from "../../hooks/useMainTitle";
import type {
  CheckboxItem,
  MailItem,
  MessageProps,
} from "../../types/Dashboard";
import MessageRow from "../../components/ui/MessageRow";
import { useEffect, useMemo, useState } from "react";
import SentChatView from "./SentChatView";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { SidebarItem } from "./SidebarItem";
import { LabelCheckbox } from "./LabelCheckbox";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";

const mailItems: MailItem[] = [
  { label: "Inbox", icon: <Mail size={16} />, count: 1253 },
  { label: "Starred", icon: <Star size={16} />, count: 245 },
  { label: "Sent", icon: <Send size={16} />, count: "24,532" },
  { label: "Draft", icon: <Pencil size={16} />, count: "09" },
  { label: "Spam", icon: <TriangleAlert size={16} />, count: 14 },
  { label: "Important", icon: <Star size={16} />, count: 18 },
  { label: "Bin", icon: <Trash2 size={16} />, count: 9 },
];

const checkboxData: CheckboxItem[] = [
  { id: "primary", label: "Primary", color: "#00B69B" },
  { id: "social", label: "Social", color: "#5A8CFF" },
  { id: "work", label: "Work", color: "#FD9A56" },
  { id: "friends", label: "Friends", color: "#D456FD" },
];
export type MessageData = Omit<MessageProps, 'onToggleStar'>;
const messages: MessageData[] = [
  {
    id: 1,
    name: "Jullu Jalal",
    label: "Primary",
    labelColor: "#00B69B",
    message: "Our Bachelor of Commerce program is ACBSP-accredited.",
    time: "8:38 AM",
    important: false,
  },
  {
    id: 2,
    name: "Minerva Barnett",
    label: "Work",
    labelColor: "#FD9A56",
    message: "Get Best Advertiser In Your Side Pocket",
    time: "8:13 AM",
    important: false,
  },
  {
    id: 3,
    name: "Peter Lewis",
    label: "Friends",
    labelColor: "#D456FD",
    message: "Vacation Home Rental Success",
    time: "7:52 PM",
    important: false,
  },
  {
    id: 4,
    name: "Anthony Briggs",
    message: "Free Classifieds Using Them To Promote Your Stuff Online",
    time: "7:52 PM",
    important: true,
  },
  {
    id: 5,
    name: "Clifford Morgan",
    label: "Social",
    labelColor: "#5A8CFF",
    message: "Enhance Your Brand Potential With Giant Advertising Blimps",
    time: "4:13 PM",
    important: false,
  },
  {
    id: 6,
    name: "Cecilia Webster",
    label: "Friends",
    labelColor: "#D456FD",
    message: "Always Look On The Bright Side Of Life",
    time: "3:52 PM",
    important: false,
  },
  {
    id: 7,
    name: "Harvey Manning",
    message: "Curling Irons Are As Individual As The Women Who Use Them",
    time: "2:30 PM",
    important: true,
  },
  {
    id: 8,
    name: "Willie Blake",
    label: "Primary",
    labelColor: "#00B69B",
    message: "Our Bachelor of Commerce program is ACBSP-accredited.",
    time: "8:38 AM",
    important: false,
  },
  {
    id: 9,
    name: "Minerva Barnett",
    label: "Work",
    labelColor: "#FD9A56",
    message: "Get Best Advertiser In Your Side Pocket",
    time: "8:13 AM",
    important: false,
  },
  {
    id: 10,
    name: "Fanny Weaver",
    message: "Free Classifieds Using Them To Promote Your Stuff Online",
    time: "7:52 PM",
    important: true,
  },
  {
    id: 11,
    name: "Olga Hogan",
    label: "Social",
    labelColor: "#5A8CFF",
    message: "Enhance Your Brand Potential With Giant Advertising Blimps",
    time: "4:13 PM",
    important: false,
  },
  {
    id: 12,
    name: "Lora Houston",
    label: "Friends",
    labelColor: "#D456FD",
    message: "Vacation Home Rental Success",
    time: "7:52 PM",
    important: false,
  },
  {
    id: 13,
    name: "Lora Houston",
    label: "Friends",
    labelColor: "#D456FD",
    message: "Vacation Home Rental Success",
    time: "7:52 PM",
    important: false,
  },

  {
    id: 14,
    name: "Jullu Jalal",
    message: "Our Bachelor of Commerce program is ACBSP-accredited.",
    time: "8:38 AM",
    important: true,
  },
  {
    id: 15,
    name: "Minerva Barnett",
    message: "Get Best Advertiser In Your Side Pocket",
    time: "8:13 AM",
    important: true,
  },
  {
    id: 16,
    name: "Peter Lewis",
    message: "Vacation Home Rental Success",
    time: "7:52 PM",
    important: true,
  },
  {
    id: 17,
    name: "Anthony Briggs",
    message: "Free Classifieds Using Them To Promote Your Stuff Online",
    time: "7:52 PM",
    important: true,
  },
  {
    id: 18,
    name: "Clifford Morgan",
    message: "Enhance Your Brand Potential With Giant Advertising Blimps",
    time: "4:13 PM",
    important: true,
  },
  {
    id: 19,
    name: "Cecilia Webster",
    message: "Always Look On The Bright Side Of Life",
    time: "3:52 PM",
    important: true,
  },
  {
    id: 20,
    name: "Harvey Manning",
    message: "Curling Irons Are As Individual As The Women Who Use Them",
    time: "2:30 PM",
    important: true,
  },
  {
    id: 21,
    name: "Willie Blake",
    message: "Our Bachelor of Commerce program is ACBSP-accredited.",
    time: "8:38 AM",
    important: true,
  },
  {
    id: 22,
    name: "Minerva Barnett",
    message: "Get Best Advertiser In Your Side Pocket",
    time: "8:13 AM",
    important: true,
  },
  {
    id: 23,
    name: "Fanny Weaver",
    message: "Free Classifieds Using Them To Promote Your Stuff Online",
    time: "7:52 PM",
    important: true,
  },
  {
    id: 24,
    name: "Olga Hogan",
    message: "Enhance Your Brand Potential With Giant Advertising Blimps",
    time: "4:13 PM",
    important: true,
  },
  {
    id: 25,
    name: "Lora Houston",
    message: "Vacation Home Rental Success",
    time: "7:52 PM",
    important: true,
  },
];

const ITEMS_PER_PAGE = 12;

function Inbox() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>("Inbox");
  const [allMessages, setAllMessages] = useState<MessageData[]>(messages);

  const filteredMessages = useMemo(() => {
  let result = allMessages;
  if (activeTab === "Starred") {
    result = allMessages.filter((msg) => msg.important);
  }
  return result.filter(
    (msg) =>
      msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.message.toLowerCase().includes(searchQuery.toLowerCase())
  );
}, [searchQuery, activeTab, allMessages]);


  const totalPages = Math.ceil(filteredMessages.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentMessages = filteredMessages.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  }; 

  const handleToggleStar = (id: number) => {
  setAllMessages((prev) =>
    prev.map((msg) =>
      msg.id === id ? { ...msg, important: !msg.important } : msg
    )
  );
};

  return (
   <motion.div
    {...usePageAnimation()}
    className="overflow-hidden"
  >

      <MainTitle title="Inbox" />
      <div className="grid grid-cols-12 gap-[21px]">
        <div className="col-span-12 xl:col-span-3 h-full bg-white rounded-xl px-3 xl:px-6 py-3 xl:py-6 border border-[#B9B9B9]/50 flex  items-center justify-center sm:justify-between xl:flex-none xl:block flex-wrap gap-3 ">

          <button className="bg-[#4880FF] text-white py-2 xl:py-3 xl:w-full rounded-md xl:rounded-xl xl:mb-6 px-4 xl:px-6 text-sm order-1 hover:bg-[#3A6FD9] active:bg-[#2E5DC3] focus:ring-offset-2 focus:ring-[#4880FF] transition duration-150 ease-in-out cursor-pointer">
            + Compose
          </button>
          <div className="xl:mb-8 order-3 sm:order-2 mx-4 sm:mx-0">
          <h3 className="text-[#202224] xl:mb-4 font-bold text-base hidden xl:block">My Email</h3>
          <div className="hidden xl:block">
            {mailItems.map((item, index) => (
              <SidebarItem
                key={index}
                item={item}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            ))}
          </div>

          <div className="xl:hidden">
            <Popover className="relative">
              <PopoverButton className="text-[#202224] font-bold text-base focus:outline-none">
                  My Email
              </PopoverButton>

              <PopoverPanel
                anchor="bottom"
                className="mt-2 rounded-xl bg-white p-2 sm:p-4 shadow-xl border border-[#B9B9B9]/50"
              >
                {mailItems.map((item, index) => (
                  <SidebarItem
                    key={index}
                    item={item}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                ))}
              </PopoverPanel>
            </Popover>
          </div>
          </div>
          <div className="order-4 sm:order-3 mx-4 sm:mx-0">
          <h3 className="text-[#202224] mb-8 font-bold text-base hidden xl:block">Label</h3>

          <div className="hidden xl:flex gap-6 flex-col mb-10">
            {checkboxData.map((item) => (
              <LabelCheckbox key={item.id} item={item} />
            ))}
          </div>

          <div className="xl:hidden">
            <Popover className="relative">
              <PopoverButton className="text-[#202224] font-bold text-base focus:outline-none">
                Select Labels
              </PopoverButton>

              <PopoverPanel  anchor="bottom" className="mt-2 bg-white p-4 rounded-xl shadow-xl border border-[#B9B9B9]/50 space-y-4">
                {checkboxData.map((item) => (
                  <LabelCheckbox key={item.id} item={item} />
                ))}
              </PopoverPanel>
            </Popover>
          </div>
          </div>
          <div className="flex items-center gap-[14px] text-[#202224] opacity-[60%] font-semibold text-sm px-4 order-2 sm:order-4">
            <Plus size={18} className="text-[#202224]" /> Create New Label
          </div>

        </div>
        <div className="col-span-12 xl:col-span-9 h-full">
          <div className="bg-white rounded-xl border border-[#B9B9B9]/50">
            <div
              className={`flex justify-between sm:items-center mb-8 px-3 sm:px-6 pt-3 sm:pt-6 gap-3 flex-col sm:flex-row ${
                activeTab === "Sent" ? "border-b border-[#E0E0E0]/50 pb-5" : ""
              }`}
            >
              <div
                className={`flex items-center bg-gray-100 bg-opacity-[60%] rounded-full w-full sm:w-auto xl:w-[350px] px-4 py-[10px] border border-[#D5D5D5] ${
                  activeTab === "Sent" ? "hidden" : ""
                }`}
              >
                <Search className="text-[#202224] w-5 h-5 mr-[13px]" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent focus:outline-none w-full text-sm text-gray-700 placeholder-[#202224]"
                />
              </div>
              <div
                className={`flex items-center gap-4  ${
                  activeTab === "Sent" ? "" : "hidden"
                }`}
              >
                <div className="w-6 h-6 rounded-md bg-[#F5F5F5] flex justify-center items-center">
                  <ChevronLeft size={17} />
                </div>
                <h3 className="text-[#202224] text-xl font-bold">
                  Minerva Barnett
                </h3>
                <button className="text-xs px-[10px] py-1 bg-[#D456FD]/20 text-[#D456FD] rounded-md">
                  Friends
                </button>
              </div>

              <div className="border border-[#D5D5D5] rounded-xl bg-[#FAFBFD] flex items-center w-max ml-auto">
                <div className="py-2 sm:py-3 px-2 sm:px-[14px] border-r border-[#D5D5D5]">
                  <Download size={18} />
                </div>
                <div className="py-2 sm:py-3 px-2 sm:px-[14px] border-r border-[#D5D5D5]">
                  <CircleAlert size={18} />
                </div>
                <div className="py-2 sm:py-3 px-2">
                  <Trash size={18} />
                </div>
              </div>
            </div>

            <div className="w-full">
              {activeTab === "Sent" ? (
                <SentChatView />
              ) : currentMessages.length > 0 ? (
                currentMessages.map((msg) => (
                 <MessageRow key={msg.id} {...msg} onToggleStar={() => handleToggleStar(msg.id)} />
                ))
              ) : (
                <div className="text-center text-gray-500 py-6">
                  No messages found
                </div>
              )}
            </div>
          </div>

          <div
            className={`flex justify-between pt-4 items-center ${
              activeTab === "Sent" ? "hidden" : ""
            }`}
          >
            <h3 className="text-[#202224] text-opacity-[60%] text-sm">
              Showing {filteredMessages.length === 0 ? 0 : startIndex + 1}–
              {Math.min(startIndex + ITEMS_PER_PAGE, filteredMessages.length)}{" "}
              of {filteredMessages.length}
            </h3>
            <div className="flex bg-[#FAFBFD] border border-[#979797] rounded-lg overflow-hidden">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`py-1 md:py-[9px] px-3 md:px-[18px] border-r border-[#979797] ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <ChevronLeft size={17} />
              </button>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages || totalPages === 0}
                className={`py-1 md:py-[9px] px-3 md:px-[18px] ${
                  currentPage === totalPages || totalPages === 0
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
     </motion.div>
  );
}

export default Inbox;
