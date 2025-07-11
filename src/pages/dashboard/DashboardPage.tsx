import {
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import type { DashboardCard } from "../../types/Dashboard";
import SalesDetails from "../../components/charts/SalesDetails";
import Revenue from "../../components/charts/Revenue";
import Dealsetails from "../../components/tables/Dealsetails";
import YearlyLineChart from "../../components/charts/YearlyLineChart";
import Customers from "../../components/charts/Customers";
import FeaturedProductSlider from "./FeaturedProductSlider";
import MainTitle from "../../hooks/MainTitle";

const dashboardData: DashboardCard[] = [
  {
    title: "Total User",
    value: "40,689",
    image: "/images/im1.png",
    trend: "up",
    change: "8.5%",
    description: "Up from yesterday",
  },
  {
    title: "Total Order",
    value: "10,293",
    image: "/images/im2.png",
    trend: "up",
    change: "1.3%",
    description: "Up from past week",
  },
  {
    title: "Total Sales",
    value: "$89,000",
    image: "/images/im3.png",
    trend: "down",
    change: "4.3%",
    description: "Down from yesterday",
  },
  {
    title: "Total Pending",
    value: "2,040",
    image: "/images/im4.png",
    trend: "up",
    change: "1.8%",
    description: "Up from yesterday",
  },
];

function DashboardPage() {
  return (
    <>
       <MainTitle title="Dashboard"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[30px] mb-7">
        {dashboardData.map((card, index) => (
          <div key={index} className="shadow-sm p-4 bg-white rounded-[14px]">
            <div className="flex justify-between items-center mb-[29px]">
              <div>
                <h4 className="mb-[14px] text-[#202224] text-base font-semibold">
                  {card.title}
                </h4>
                <h2 className="text-[#202224] text-xl sm:text-[28px] font-bold">
                  {card.value}
                </h2>
              </div>
              <img src={card.image} alt={card.title} className="w-12 xl:auto" />
            </div>

            <p className="text-base text-[#202224]">
              <span
                className={`mr-1 ${
                  card.trend === "up" ? "text-[#00B69B]" : "text-[#F93C65]"
                }`}
              >
                {card.trend === "up" ? (
                  <TrendingUp className="mr-[10px] inline-block" />
                ) : (
                  <TrendingDown className="mr-[10px] inline-block" />
                )}
                {card.change}
              </span>
              {card.description}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow-lg p-3 sm:p-6 mb-7">
        <SalesDetails />
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 mb-7">
        <Revenue />
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6 mb-7">
        <Dealsetails />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <Customers />
        <FeaturedProductSlider />
        <YearlyLineChart />
      </div>
    </>
  );
}

export default DashboardPage;
