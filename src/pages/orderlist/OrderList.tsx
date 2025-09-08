import MainTitle from "../../hooks/useMainTitle";
import { Transition, Popover } from "@headlessui/react";
import { ChevronDown, Funnel, RotateCcw } from "lucide-react";
import React, { useState, Fragment } from "react";
import type {
  DateFilterProps,
  FilterButtonProps,
  OrderStatusFilterProps,
  OrderTypeFilterProps,
} from "../../types/Dashboard";
import { Table } from "../../hooks/useFilterTable";
import type { ColumnDef } from "@tanstack/react-table";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";
import { useFadeIn } from "../../hooks/useFadeIn";

type Order = {
  id: string;
  name: string;
  address: string;
  date: string;
  type: string;
  status: string;
};

const data: Order[] = [
  {
    id: "00001",
    name: "Christine Brooks",
    address: "089 Kutch Green Apt. 448",
    date: "01 Sep 2019",
    type: "Electric",
    status: "Completed",
  },
  {
    id: "00002",
    name: "Rosie Pearson",
    address: "979 Immanuel Ferry Suite 526",
    date: "28 May 2019",
    type: "Book",
    status: "Processing",
  },
  {
    id: "00003",
    name: "Darrell Caldwell",
    address: "8587 Frida Ports",
    date: "23 Nov 2019",
    type: "Medicine",
    status: "Rejected",
  },
  {
    id: "00004",
    name: "Gilbert Johnston",
    address: "768 Destiny Lake Suite 600",
    date: "05 Feb 2019",
    type: "Mobile",
    status: "Completed",
  },
  {
    id: "00005",
    name: "Alan Cain",
    address: "042 Mylene Throughway",
    date: "29 Jul 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00006",
    name: "Alfred Murray",
    address: "543 Weinman Mountain",
    date: "15 Aug 2019",
    type: "Medicine",
    status: "Completed",
  },
  {
    id: "00007",
    name: "Maggie Sullivan",
    address: "New Scottieberg",
    date: "21 Dec 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00008",
    name: "Rosie Todd",
    address: "New Jon",
    date: "30 Apr 2019",
    type: "Medicine",
    status: "On Hold",
  },
  {
    id: "00009",
    name: "Dollie Hines",
    address: "124 Lyla Forge Suite 975",
    date: "09 Jan 2019",
    type: "Book",
    status: "In Transit",
  },
];

const statusColors: Record<string, string> = {
  Completed: "bg-[#00B69B]/30 text-[#00B69B]",
  Processing: "bg-[#6226EF]/30 text-[#6226EF]",
  Rejected: "bg-[#EF3826]/30 text-[#EF3826]",
  "On Hold": "bg-[#FFA756]/30 text-[#FFA756]",
  "In Transit": "bg-[#BA29FF]/30 text-[#BA29FF]",
};

const columns: ColumnDef<Order>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "NAME" },
  { accessorKey: "address", header: "ADDRESS" },
  { accessorKey: "date", header: "DATE" },
  { accessorKey: "type", header: "TYPE" },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <button
          className={`rounded-md text-xs font-bold py-1 px-4 w-[93px] focus:outline-none ${statusColors[status]}`}
        >
          {status}
        </button>
      );
    },
  },
];

const FilterButton: React.FC<FilterButtonProps> = ({
  children,
  onClick,
  className,
  isActive,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-darkgray text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-[#979797] font-semibold w-full  whitespace-nowrap
                ${
                  isActive
                    ? "bg-blue-light text-white shadow-md"
                    : "hover:bg-blue-light hover:text-white hover:border-blue-light"
                }
                ${className || ""}`}
    >
      {children}
    </button>
  );
};

const DateFilter: React.FC<DateFilterProps> = ({
  selectedDate,
  onSelectDate,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDates, setSelectedDates] = useState<string[]>(
    selectedDate ? [selectedDate] : []
  );

  const daysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month: number, year: number) =>
    new Date(year, month, 1).getDay();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleDateClick = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const dateString = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    setSelectedDates((prev) => {
      if (prev.includes(dateString)) {
        return prev.filter((d) => d !== dateString);
      } else {
        return [...prev, dateString];
      }
    });
  };

  const renderCalendarDays = () => {
    const totalDays = daysInMonth(currentMonth, currentYear);
    const startDay = firstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Fill leading empty days
    for (let i = 0; i < startDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="w-10 h-10 flex items-center justify-center text-gray-400"
        ></div>
      );
    }

    // Fill actual days
    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const dateString = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      const isSelected = selectedDates.includes(dateString);
      const today = new Date();
      const isToday =
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-medium
                    ${
                      isSelected
                        ? "bg-[#6085FF] text-white"
                        : "text-darkgray/50 hover:bg-gray-100"
                    }
                    ${isToday && !isSelected ? "border border-blue-500" : ""}
                `}
        >
          {day}
        </button>
      );
    }
    return days;
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg w-[280px] sm:w-[387px]">
      <div className="flex justify-between items-center py-5 sm:py-[25px] px-5 sm:px-[31px] border-b border-[#979797]/50">
        <span className="text-darkgray text-[15px] font-bold">
          {monthNames[currentMonth]} {currentYear}
        </span>
        <div className="flex gap-3">
          <button
            onClick={goToPreviousMonth}
            className="p-1 rounded-md hover:bg-gray-100 bg-[#E7E9EE]"
          >
            <ChevronDown className="w-4 h-4 rotate-90 text-[#121212]" />
          </button>
          <button
            onClick={goToNextMonth}
            className="p-1 rounded-md hover:bg-gray-100 bg-[#E7E9EE]"
          >
            <ChevronDown className="w-4 h-4 -rotate-90 text-[#121212]" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 text-center text-xs font-medium text-darkgray p-3 sm:p-6">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
      <div className="grid grid-cols-7 gap-1 pb-3 sm:pb-6  px-5 sm:px-[31px]  border-b border-[#979797]/50">
        {renderCalendarDays()}
      </div>
      <p className="text-xs text-gray-500 pt-2 sm:pt-4 pb-4 sm:pb-8  px-5 sm:px-[31px]">
        *You can choose multiple dates
      </p>
      <div className="text-center pb-3 sm:pb-[29px]">
        <button
          onClick={() => {
            onSelectDate(selectedDates);
          }}
          className=" text-xs font-bold py-[9px] px-6 sm:px-[33px] rounded-lg bg-blue-light text-white"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

const orderTypes = [
  "Health & Medicine",
  "Book & Stationery",
  "Services & Industry",
  "Fashion & Beauty",
  "Home & Living",
  "Electronics",
  "Mobile & Phone",
  "Accessories",
];

const OrderTypeFilter: React.FC<OrderTypeFilterProps> = ({
  selectedTypes,
  onSelectTypes,
}) => {
  const [currentSelectedTypes, setCurrentSelectedTypes] =
    useState<string[]>(selectedTypes);

  const handleTypeClick = (type: string) => {
    setCurrentSelectedTypes((prev) => {
      if (prev.includes(type)) {
        return prev.filter((t) => t !== type);
      } else {
        return [...prev, type];
      }
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg w-[180px] sm:w-[521px] ">
      <h3 className="font-bold text-base sm:text-lg text-darkgray px-3 sm:px-6 pt-3 sm:pt-6">
        Select Order Type
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-3 sm:p-6 border-b border-[#979797]/50">
        {orderTypes.map((type) => (
          <FilterButton
            key={type}
            onClick={() => handleTypeClick(type)}
            isActive={currentSelectedTypes.includes(type)}
          >
            {type}
          </FilterButton>
        ))}
      </div>
      <p className="text-xs text-gray-500 px-6 pt-2 sm:pt-4 pb-4 sm:pb-8">
        *You can choose multiple Order types
      </p>
      <div className="text-center pb-3  sm:pb-6">
        <button
          onClick={() => onSelectTypes(currentSelectedTypes)}
          className=" text-xs font-bold py-[9px] px-6 sm:px-[33px] rounded-lg bg-blue-light text-white"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

const orderStatuses = [
  "Completed",
  "Processing",
  "Rejected",
  "On Hold",
  "In Transit",
];

const OrderStatusFilter: React.FC<OrderStatusFilterProps> = ({
  selectedStatuses,
  onSelectStatuses,
}) => {
  const [currentSelectedStatuses, setCurrentSelectedStatuses] =
    useState<string[]>(selectedStatuses);

  const handleStatusClick = (status: string) => {
    setCurrentSelectedStatuses((prev) => {
      if (prev.includes(status)) {
        return prev.filter((s) => s !== status);
      } else {
        return [...prev, status];
      }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg  w-[180px] sm:w-[521px]">
      <h3 className="font-bold text-base sm:text-lg text-darkgray px-3 sm:px-6 pt-3 sm:pt-6">
        Select Order Status
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-3 sm:p-6 border-b border-[#979797]/50">
        {orderStatuses.map((status) => (
          <FilterButton
            key={status}
            onClick={() => handleStatusClick(status)}
            isActive={currentSelectedStatuses.includes(status)}
          >
            {status}
          </FilterButton>
        ))}
      </div>
      <p className="text-xs text-[#434343]/82 py-4 px-6">
        *You can choose multiple Order statuses
      </p>
      <div className="text-center pb-3  sm:pb-6">
        <button
          onClick={() => onSelectStatuses(currentSelectedStatuses)}
          className=" text-xs font-bold py-[9px] px-6 sm:px-[33px] rounded-lg bg-blue-light text-white"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

function OrderList() {
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [selectedOrderTypes, setSelectedOrderTypes] = useState<string[]>([]);
  const [selectedOrderStatuses, setSelectedOrderStatuses] = useState<string[]>(
    []
  );

  const resetFilters = () => {
    setSelectedDates([]);
    setSelectedOrderTypes([]);
    setSelectedOrderStatuses([]);
  };

  const filteredData = data.filter((order) => {
    const matchesDate =
      selectedDates.length > 0
        ? selectedDates.includes(
            new Date(order.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          )
        : true;
    const matchesType =
      selectedOrderTypes.length > 0
        ? selectedOrderTypes.includes(order.type)
        : true;

    const matchesStatus =
      selectedOrderStatuses.length > 0
        ? selectedOrderStatuses.includes(order.status)
        : true;

    return matchesDate && matchesType && matchesStatus;
  });

  const pageAnimation = usePageAnimation();

  return (
    <motion.div
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <MainTitle title="Order Lists" />
      <motion.div
        variants={useFadeIn()}
        initial="hidden"
        animate="visible"
        custom={0}
        className="flex flex-wrap items-center border border-[#B9B9B9]/50 rounded-lg bg-[#F9F9FB] lg:w-max mb-6 justify-center"
      >
        <div className="px-4 py-1 sm:p-3 xl:p-6 border-r border-[#B9B9B9]/50 flex items-center justify-center my-2 sm:my-0">
          <Funnel className="w-5 h-5" />
        </div>
        <div className="px-4 py-1 sm:p-3 xl:p-6 border-r border-[#B9B9B9]/50  font-bold text-sm my-2 sm:my-0">
          Filter By
        </div>
        <Popover className="relative my-2 sm:my-0">
          {({ open }) => (
            <>
              <Popover.Button
                className={`flex items-center gap-2 px-4 py-1 sm:p-3 xl:p-6 border-r border-[#B9B9B9]/50 text-darkgray text-sm font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75 cursor-pointer
                        ${open ? "bg-blue-50" : ""}`}
              >
                Date
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-50 mt-3 transform -translate-x-1/2 -left-6 sm:left-1/2">
                  {({ close }) => (
                    <DateFilter
                      selectedDate={selectedDates[0]}
                      onSelectDate={(dates) => {
                        setSelectedDates(dates); 
                        close();
                      }}
                    />
                  )}
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative my-2 sm:my-0">
          {({ open }) => (
            <>
              <Popover.Button
                className={`flex items-center gap-2 px-4 py-1 sm:p-3 xl:p-6 border-r border-[#B9B9B9]/50  font-bold text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75 cursor-pointer
                        ${open ? "bg-blue-50" : ""}`}
              >
                Order Type
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-50 mt-3 transform -translate-x-1/2 left-1/2">
                  {({ close }) => (
                    <OrderTypeFilter
                      selectedTypes={selectedOrderTypes}
                      onSelectTypes={(types) => {
                        setSelectedOrderTypes(types);
                        close();
                      }}
                    />
                  )}
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative my-2 sm:my-0">
          {({ open }) => (
            <>
              <Popover.Button
                className={`flex items-center gap-2 px-4 py-1 sm:p-3 xl:p-6 border-r border-[#B9B9B9]/50  font-bold text-sm  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75 cursor-pointer
                        ${open ? "bg-blue-50" : ""}`}
              >
                Order Status
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-50 mt-3 transform -translate-x-1/2 left-1/2">
                  {({ close }) => (
                    <OrderStatusFilter
                      selectedStatuses={selectedOrderStatuses}
                      onSelectStatuses={(statuses) => {
                        setSelectedOrderStatuses(statuses);
                        close();
                      }}
                    />
                  )}
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <button
          onClick={resetFilters}
          className="flex items-center gap-2 px-4 py-1 sm:p-3 xl:p-6 text-[#EA0234] font-bold text-sm focus:outline-none my-2 sm:my-0 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-opacity-75 rounded-r-lg cursor-pointer"
        >
          <RotateCcw className="w-5 h-5" /> Reset Filter
        </button>
      </motion.div>
      <Table data={filteredData} columns={columns} />
    </motion.div>
  );
}

export default OrderList;
