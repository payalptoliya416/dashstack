import { ChevronDown, Funnel } from "lucide-react";
import BarChartComponent from "../../components/charts/BarChartComponent";
import DonutChartComponent from "../../components/charts/DonutChartComponent";
import PieChartComponent from "../../components/charts/PieChartComponent";
import MainTitle from "../../hooks/MainTitle";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

function UIElement() {
  const barData = Array.from({ length: 10 }, (_, i) => ({
    name: `Item ${i + 1}`,
    value1: Math.floor(Math.random() * 50) + 20,
    value2: Math.floor(Math.random() * 50) + 20,
  }));
  const [chartFilter, setChartFilter] = useState<
    "all" | "bar" | "pie" | "donut"
  >("all");

  const pieChartDataList = [
    [
      { name: "A", value: 75 },
      { name: "B", value: 25 },
    ],
    [
      { name: "A", value: 25 },
      { name: "B", value: 75 },
    ],
    [
      { name: "A", value: 40 },
      { name: "B", value: 60 },
    ],
    [
      { name: "A", value: 80 },
      { name: "B", value: 40 },
    ],
  ];

  const donutChartDataList = [
    [
      { name: "A", value: 25 },
      { name: "B", value: 75 },
    ],
    [
      { name: "A", value: 35 },
      { name: "B", value: 40 },
      { name: "C", value: 25 },
    ],
    [
      { name: "A", value: 50 },
      { name: "B", value: 35 },
      { name: "B", value: 25 },
    ],
    [
      { name: "A", value: 40 },
      { name: "B", value: 35 },
      { name: "C", value: 15 },
      { name: "D", value: 10 },
    ],
  ];

  const colorSetsDonut = [
    ["#1CCAB8", "#E1E4E8"],
    ["#448EFC", "#FF8743", "#E1E4E8"],
    ["#1CCAB8", "#4393FF", "#FFD56D"],
    ["#1CCAB8", "#4393FF", "#FF8743", "#FFD56D"],
  ];

  const colorSets = [
    ["#E9EFFC", "#4049FF"],
    ["#B140FFC3", "#E9EFFC"],
    ["#FF8743", "#E9EFFC"],
    ["#E9EFFC", "#4393FF"],
  ];

  return (
    <>
      <div className="flex items-center justify-between flex-wrap">
        <MainTitle title="UI Elements" />
        <div className="flex flex-wrap items-center border border-[#B9B9B9]/50 rounded-lg bg-[#F9F9FB] lg:w-max mb-6 justify-center">
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
                  className={`flex items-center gap-12 px-4 py-1 sm:p-3 xl:p-6 border-r border-[#B9B9B9]/50 text-[#202224] text-sm font-bold focus:outline-none cursor-pointer
                    ${open ? "bg-blue-50" : ""}`}
                >
                  Charts
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
                  <Popover.Panel className="absolute z-50 mt-3 transform -translate-x-1/2 -left-6 sm:left-1/4">
                    <div className="bg-white rounded-2xl shadow-xl w-[200px] p-5 space-y-3">
                      <ul className="space-y-2 text-base text-gray-700">
                        <li
                          onClick={() => setChartFilter("all")}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          {" "}
                          All Charts
                        </li>
                        <li
                          onClick={() => setChartFilter("bar")}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          Bar Chart
                        </li>
                        <li
                          onClick={() => setChartFilter("pie")}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          {" "}
                          Pie Chart
                        </li>
                        <li
                          onClick={() => setChartFilter("donut")}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          {" "}
                          Donut Chart
                        </li>
                      </ul>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>

      {/* Main content area for charts */}
      {(chartFilter === "all" || chartFilter === "bar") && (
        <div className="bg-white border border-[#B9B9B9]/30 rounded-xl mb-4">
          <h2 className="font-bold text-2xl p-6 pb-0 mb-[10px]">Bar Chart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-12 p-5 xl:p-[50px]">
            {/* 1st chart: only top-rounded */}
            <BarChartComponent
              data={barData}
              xKey="name"
              stacked={false}
              barKeys={[{ key: "value1", color: "#5286F8" }]}
            />

            {/* 2nd chart: fully rounded */}
            <BarChartComponent
              data={barData}
              xKey="name"
              stacked={true}
              fullRounded={true}
              barKeys={[
                { key: "value2", color: "rgba(0, 189, 174, 1)" },
                { key: "value1", color: "rgba(227, 249, 248, 1)" },
              ]}
            />

            {/* 3rd chart: only top-rounded */}
            <BarChartComponent
              data={barData}
              xKey="name"
              stacked={false}
              barKeys={[
                { key: "value1", color: "#0057FF" },
                { key: "value2", color: "#FF8C00" },
              ]}
            />
            {/* 4th chart: fully rounded */}
            <BarChartComponent
              data={barData}
              xKey="name"
              stacked={true}
              fullRounded={true}
              barKeys={[
                { key: "value2", color: "rgba(255, 113, 162, 1)" },
                { key: "value1", color: "rgba(255, 203, 221, 1)" },
              ]}
            />
          </div>
        </div>
      )}

      {/* Pie Charts Section */}
      {(chartFilter === "all" || chartFilter === "pie") && (
        <div className="bg-white border border-[#B9B9B9]/30 rounded-xl mb-4">
          <h2 className="font-bold text-2xl p-6 pb-0 mb-[10px]">Pie Chart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-12 p-5 xl:p-[50px]">
            {pieChartDataList.map((data, idx) => (
              <PieChartComponent
                key={idx}
                data={data}
                colors={colorSets[idx % colorSets.length]}
              />
            ))}
          </div>
        </div>
      )}

      {/* Donut Charts Section */}
      {(chartFilter === "all" || chartFilter === "donut") && (
        <div className="bg-white border-[0.3px] border-[#B9B9B9]/30 rounded-xl mb-4">
          <h2 className="font-bold text-2xl p-6 pb-0 mb-[10px]">Donut Chart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-12 p-5 xl:p-[50px]">
            {donutChartDataList.map((data, idx) => (
              <DonutChartComponent
                key={idx}
                data={data}
                colors={colorSetsDonut[idx % colorSetsDonut.length]}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default UIElement;
