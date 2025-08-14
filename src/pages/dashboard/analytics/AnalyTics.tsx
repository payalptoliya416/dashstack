import { Rocket } from "lucide-react";
import ProjectStatisticChart from "../CRM/ProjectStatisticChart";
import AnalyticsCard from "./AnalyticsCard";
import EllipsisMenu from "../ecommerce/EllipsisMenu";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import CampaignStateTable from "./CampaignStateTable";
import { BrowserUsedCard } from "./BrowserUsedCard";
import { SalesLocationCard } from "./SalesLocationCard";
import { DonutChart } from "./DonutChart";
import type {
  AnalyticCardtype,
  projectChartData,
} from "../../../types/DashboardModule";
import MainTitle from "../../../hooks/useMainTitle";
import { usePageAnimation } from "../../../hooks/usePageAnimation";
import { motion } from "framer-motion";

const bounceData: AnalyticCardtype[] = [
  { name: "Mon", uv: 10000 },
  { name: "Tue", uv: 15000 },
  { name: "Wed", uv: 12000 },
  { name: "Thu", uv: 18000 },
  { name: "Fri", uv: 16000 },
  { name: "Sat", uv: 20000 },
  { name: "Sun", uv: 23650 },
];

const pageViewsData: AnalyticCardtype[] = [
  { name: "Mon", uv: 9000 },
  { name: "Tue", uv: 11000 },
  { name: "Wed", uv: 14000 },
  { name: "Thu", uv: 13000 },
  { name: "Fri", uv: 15000 },
  { name: "Sat", uv: 17000 },
  { name: "Sun", uv: 20000 },
];

const projectChartData: projectChartData[] = [
  { month: "Jan", tasksCompleted: 18, upcomingProjects: 12, projectPending: 8 },
  {
    month: "Feb",
    tasksCompleted: 24,
    upcomingProjects: 18,
    projectPending: 10,
  },
  {
    month: "Mar",
    tasksCompleted: 10,
    upcomingProjects: 20,
    projectPending: 15,
  },
  {
    month: "Apr",
    tasksCompleted: 28,
    upcomingProjects: 22,
    projectPending: 12,
  },
  {
    month: "May",
    tasksCompleted: 30,
    upcomingProjects: 25,
    projectPending: 10,
  },
  {
    month: "Jun",
    tasksCompleted: 32,
    upcomingProjects: 23,
    projectPending: 14,
  },
  {
    month: "Jul",
    tasksCompleted: 12,
    upcomingProjects: 15,
    projectPending: 20,
  },
  {
    month: "Aug",
    tasksCompleted: 20,
    upcomingProjects: 18,
    projectPending: 15,
  },
  {
    month: "Sep",
    tasksCompleted: 25,
    upcomingProjects: 12,
    projectPending: 18,
  },
  {
    month: "Oct",
    tasksCompleted: 18,
    upcomingProjects: 20,
    projectPending: 15,
  },
  {
    month: "Nov",
    tasksCompleted: 30,
    upcomingProjects: 22,
    projectPending: 12,
  },
  {
    month: "Dec",
    tasksCompleted: 24,
    upcomingProjects: 18,
    projectPending: 10,
  },
];

const data = [
  { name: "Desktop", value: 37.74, change: 2.6, color: "#3E97FF" },
  { name: "Mobile", value: 34.23, change: 3.2, color: "#e49e3d" },
  { name: "Tablet", value: 22.65, change: 2.2, color: "#25b865" },
  { name: "Others", value: 24.47, change: 2.8, color: "#d13b4c" },
];

function AnalyTics() {
  const pageVariants = usePageAnimation();
  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <MainTitle title="Analytics" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[30px] mb-7">
          <AnalyticsCard
            title="Bounce Rate"
            value="55%"
            prevValue="25%"
            isIncrease={true}
            color="#25b865"
            chartData={bounceData}
          />
          <AnalyticsCard
            title="Page Views"
            value="85%"
            prevValue="35%"
            isIncrease={false}
            color="#3e97ff"
            chartData={pageViewsData}
          />
          <AnalyticsCard
            title="Site Impressions"
            value="75%"
            prevValue="50%"
            isIncrease={true}
            color="#e49e3d"
            chartData={bounceData}
          />
          <AnalyticsCard
            title="Conversions Rate"
            value="80%"
            prevValue="20%"
            isIncrease={false}
            color="#d13b4c"
            chartData={pageViewsData}
          />
        </div>
        <div className="grid grid-cols-12 gap-[30px] mb-7">
          <div className="col-span-12 xl:col-span-8 p-6 rounded-lg shadow-sm bg-white">
            <ProjectStatisticChart data={projectChartData} showLine={false} />
          </div>
          <div className="col-span-12 xl:col-span-4 rounded-lg shadow-sm bg-white bg-[url('/images/bg-analytic.svg')] bg-[100% 100%] bg-no-repeat w-full h-full py-16 xl:py-24 px-6">
            <div className="flex justify-center items-center flex-col  text-center">
              <Rocket size={50} className="text-[#3e97ff] -rotate-45 mb-7" />
              <h3 className="text-5 font-bold mb-6">
                Grow faster with pro's help
              </h3>
              <p className="text-sm text-[#6B7177] mb-6 max-w-[300px]">
                Experience top-notch features with our services and insights.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <button className="py-2 px-5 text-white rounded bg-[#3E97FF] text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-[30px] mb-7">
          <div className="col-span-12 xl:col-span-4 rounded-lg shadow-sm bg-white">
            <div className="flex px-6 py-4 border-b border-gray-100  items-center justify-between">
              <h3 className="text-lg font-semibold">Session Device</h3>
              <EllipsisMenu />
            </div>
            <div className="flex justify-center">
              <PieChart width={180} height={180}>
                <Pie
                  data={data}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={75}
                  startAngle={90}
                  endAngle={-270}
                  isAnimationActive={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => `${value.toFixed(2)}%`}
                />
              </PieChart>
            </div>
            <div className="grid grid-cols-2 gap-4  p-6 ">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="shadow-sm flex items-start gap-1 rounded-xl p-4"
                >
                  <span
                    className="w-[7px] h-[7px] rounded-full inline-block mt-[5px]"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">{item.name}</h3>
                    <h3 className="font-bold text-base">
                      {item.value.toFixed(2)}%
                      <span className="text-[13px] font-light">
                        {" "}
                        (+{item.change.toFixed(1)})
                      </span>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 xl:col-span-8 rounded-lg shadow-sm bg-white">
            <div className="flex px-6 py-4 border-b border-gray-100  items-center justify-between">
              <h3 className="text-lg font-semibold">Campaign State</h3>
              <EllipsisMenu />
            </div>
            <CampaignStateTable />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px]">
          <div className="rounded-lg shadow-sm bg-white">
            <BrowserUsedCard />
          </div>
          <div className="rounded-lg shadow-sm bg-white">
            <SalesLocationCard />
          </div>
          <div className="flex flex-col gap-6">
            <DonutChart
              percentage={62}
              color="#22c55e" // green-500
              title="08m : 36s"
              subtitle="Time to resolved complaint"
              description="The average time taken to resolve complaints."
            />
            <DonutChart
              percentage={66}
              color="#f59e0b" // amber-500
              title="04m : 32s"
              subtitle="Average speed of answer"
              description="The average time taken to resolve complaints."
            />
            <DonutChart
              percentage={56}
              color="#3b82f6" // blue-500
              title="05m : 22s"
              subtitle="Agerage time on site spent"
              description="The average time taken to resolve complaints."
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default AnalyTics;
