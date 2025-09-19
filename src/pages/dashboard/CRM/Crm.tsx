import {
  BriefcaseBusiness,
  CirclePlus,
  EllipsisVertical,
  Star,
  Users,
  Briefcase,
  CalendarDays,
  ArrowRight,
  Camera,
  Video,
  MapPin,
  SquareUser,
} from "lucide-react";
import EllipsisMenu from "../ecommerce/EllipsisMenu";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import { LatestLeadTable } from "./LatestLeadTable";
import { ChartCard } from "./TransactionChart";
import ProjectStatisticChart from "./ProjectStatisticChart";
import { useState } from "react";
import type {
  ChartData,
  ChartData20,
  Meeting,
  projectChartData,
  UserRow,
} from "../../../types/DashboardModule";
import MainTitle from "../../../hooks/useMainTitle";
import { usePageAnimation } from "../../../hooks/usePageAnimation";
import { motion } from "framer-motion";
import UseProgressBar from "../../../hooks/useProgressBar";

const data: ChartData = [
  { name: "Contacted", value: 37.74, color: "#3E97FF" },
  { name: "Customer", value: 34.23, color: "#E49E3D" },
  { name: "Proposal", value: 22.65, color: "#8E44AD" },
  { name: "Working", value: 24.47, color: "#27AE60" },
  { name: "Progress", value: 22.65, color: "#222222" },
  { name: "Projects", value: 24.47, color: "#C0392B" },
];

const usersData: UserRow[] = [
  {
    name: "Archie Cantones",
    email: "arcie.tones@gmail.com",
    image: "/images/recent1.png",
    proposal: "Sent",
    date: "11/06/2023 10:53",
    status: "Completed",
  },
  {
    name: "Holmes Cherryman",
    email: "golms.chan@gmail.com",
    image: "/images/recent2.png",
    proposal: "New",
    date: "11/06/2023 10:53",
    status: "In Progress",
  },
  {
    name: "Malanie Hanvey",
    email: "lanie.nveyn@gmail.com",
    image: "/images/recent3.png",
    proposal: "Sent",
    date: "11/06/2023 10:53",
    status: "Completed",
  },
  {
    name: "Kenneth Hunes",
    email: "nneth.une@gmail.com",
    image: "/images/recent4.png",
    proposal: "Rejected",
    date: "11/06/2023 10:53",
    status: "Not Interested",
  },
  {
    name: "Valentine Maton",
    email: "alenine.aton@gmail.com",
    image: "/images/recent5.png",
    proposal: "Sent",
    date: "11/06/2023 10:53",
    status: "Completed",
  },
];

const customerData: ChartData20[] = [
  { name: "Mon", uv: 10000 },
  { name: "Tue", uv: 15000 },
  { name: "Wed", uv: 12000 },
  { name: "Thu", uv: 18000 },
  { name: "Fri", uv: 16000 },
  { name: "Sat", uv: 20000 },
  { name: "Sun", uv: 23650 },
];

const projectData: ChartData20[] = [
  { name: "Mon", uv: 80000 },
  { name: "Tue", uv: 72000 },
  { name: "Wed", uv: 75000 },
  { name: "Thu", uv: 70000 },
  { name: "Fri", uv: 73000 },
  { name: "Sat", uv: 76000 },
  { name: "Sun", uv: 72420 },
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

const primary = "#3e97ff";
const bgRing = "#eef6ff";
const performanceValue = 60;
const performanceData = [
  { name: "progress", value: performanceValue },
  { name: "rest", value: 100 - performanceValue },
];

const meetings: Meeting[] = [
  {
    id: 1,
    date: "22",
    month: "FEB",
    bgColor: "#fbeff1",
    textColor: "#d13b4c",
    tagColor: "#d13b4c",
    tagBg: "#fbeff1",
    tagText: "Urgent",
    title: "Standup team meeting",
    time: "4:30 to 7:00pm - 2h 30min",
    urgency: "Urgent",
    joinBtnColor: "#a72f3d",
  },
  {
    id: 2,
    date: "22",
    month: "FEB",
    bgColor: "#e9f8f0",
    textColor: "#25b865",
    tagColor: "#25b865",
    tagBg: "#e9f8f0",
    tagText: "Normal",
    title: "Standup team meeting",
    time: "4:30 to 7:00pm - 2h 30min",
    urgency: "Normal",
    joinBtnColor: "#25b865",
  },
  {
    id: 3,
    date: "22",
    month: "FEB",
    bgColor: "#fcf3e8",
    textColor: "#e49e3d",
    tagColor: "#e49e3d",
    tagBg: "#fcf3e8",
    tagText: "Normal",
    title: "Standup team meeting",
    time: "4:30 to 7:00pm - 2h 30min",
    urgency: "Normal",
    joinBtnColor: "#e49e3d",
  },
];

function Crm() {
  const pageVariants = usePageAnimation();

  const [joiningId, setJoiningId] = useState<number | null>(null);
  const [joinedIds, setJoinedIds] = useState<number[]>([]);

  const handleJoin = (id: number) => {
    setJoiningId(id);

    setTimeout(() => {
      setJoiningId(null);
      setJoinedIds((prev) => [...prev, id]);
    }, 2000);
  };

  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const handleLoadMore = (): void => {
    setLoadingMore(true);

    setTimeout(() => {
      setLoadingMore(false);
    }, 2000);
  };

  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <MainTitle title="CRM Dashboard" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[30px] mb-7">
          <div className="p-6 rounded-lg shadow-sm bg-white">
            <div className="flex  justify-between mb-8">
              <div className="flex gap-3 items-center">
                <div className="w-[55px] h-[55px] bg-[#fcf3e8] rounded flex justify-center items-center">
                  <CirclePlus className="text-[#e49e3d]" size={20} />
                </div>
                <div>
                  <h2 className="text-2xl text-[#252F4A] font-bold">37/50</h2>
                  <h3 className="text-sm">Awaiting payment</h3>
                </div>
              </div>
              <EllipsisVertical size={17} className="mt-1" />
            </div>
            <UseProgressBar
              label="Awaiting payment"
              amount="$5,569"
              percentage={56}
            />
          </div>
          <div className="p-6 rounded-lg shadow-sm bg-white">
            <div className="flex  justify-between mb-8">
              <div className="flex gap-3 items-center">
                <div className="w-[55px] h-[55px] bg-[#fbeff1] rounded flex justify-center items-center">
                  <BriefcaseBusiness className="text-[#d13b4c]" size={20} />
                </div>
                <div>
                  <h2 className="text-2xl text-[#252F4A] font-bold">23/40</h2>
                  <h3 className="text-sm">Converted leads</h3>
                </div>
              </div>
              <EllipsisVertical size={17} className="mt-1" />
            </div>
            <UseProgressBar
              label="Converted leads"
              amount="$2,326 "
              percentage={67}
              barColor="#d13b4c"
            />
          </div>
          <div className="p-6 rounded-lg shadow-sm bg-white">
            <div className="flex  justify-between mb-8">
              <div className="flex gap-3 items-center">
                <div className="w-[55px] h-[55px] bg-[#e9f8f0] rounded flex justify-center items-center">
                  <Star className="text-[#25b865]" size={20} />
                </div>
                <div>
                  <h2 className="text-2xl text-[#252F4A] font-bold">16/20</h2>
                  <h3 className="text-sm">Projects progress</h3>
                </div>
              </div>
              <EllipsisVertical size={17} className="mt-1" />
            </div>
            <UseProgressBar
              label="Projects progress"
              amount="$3,478"
              percentage={78}
              barColor="#25b865"
            />
          </div>
        </div>

        {/* -- */}
        <div className="grid grid-cols-12 gap-[30px] mb-7">
          <div className="col-span-12 xl:col-span-8 p-6 rounded-lg shadow-sm bg-white">
            <ProjectStatisticChart data={projectChartData} showLine={true} />
          </div>
          <div className="col-span-12 xl:col-span-4 rounded-lg shadow-sm bg-white">
            <div className="flex px-6 py-4 border-b border-gray-100  items-center justify-between">
              <h3 className="text-lg font-semibold">Leads Overview</h3>
              <EllipsisMenu />
            </div>
            <div className="px-6 pb-6">
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

              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-2 gap-2">
                {data.map((entry, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 border border-gray-100 rounded p-2 text-sm"
                  >
                    <span
                      className="w-[7px] h-[7px] rounded-full inline-block"
                      style={{ backgroundColor: entry.color }}
                    ></span>
                    <h3>
                      {entry.name}{" "}
                      <span className="text-[12px]">
                        ({entry.value.toFixed(2)}%)
                      </span>
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="grid grid-cols-12 gap-[30px] mb-7">
          <div className="col-span-12 xl:col-span-8 rounded-lg shadow-sm bg-white">
            <div className="flex px-6 py-4 border-b border-gray-100  items-center justify-between">
              <h3 className="text-lg font-semibold">Latest Leads</h3>
              <EllipsisMenu />
            </div>
            <LatestLeadTable data={usersData} />
          </div>
          <div className="col-span-12 xl:col-span-4">
            <div className="bg-gray-100 md:flex items-center gap-[30px] xl:block">
              <div className="mb-7 md:mb-0 xl:mb-7 w-full">
                <ChartCard
                  title="New Customer"
                  value="23.65K"
                  growthText="(2.8% more)"
                  growthColor="text-[#25b865]"
                  icon={<Users className="text-[#25b865]" size={16} />}
                  iconBgColor="bg-[#e9f8f0]"
                  chartColor="#25b865"
                  data={customerData}
                />
              </div>
              <div className="w-full">
                <ChartCard
                  title="New Projects"
                  value="72.42K"
                  growthText="(-2.5% more)"
                  growthColor="text-red-500"
                  icon={<Briefcase className="text-red-500" size={16} />}
                  iconBgColor="bg-red-100"
                  chartColor="red"
                  data={projectData}
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] mb-7">
          <div className="rounded-lg shadow-sm bg-white">
            <div className="flex px-6 py-4 border-b border-gray-100  items-center justify-between">
              <h3 className="text-lg font-semibold">Billing Stats</h3>
              <EllipsisMenu />
            </div>
            <div>
              <div className="w-full h-48 relative p-6">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    {/* Background ring */}
                    <Pie
                      data={[{ name: "bg", value: 100 }]}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                      innerRadius="90%"
                      outerRadius="100%"
                      isAnimationActive={false}
                    >
                      <Cell fill={bgRing} />
                    </Pie>

                    {/* Progress ring */}
                    <Pie
                      data={performanceData}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                      innerRadius="80%"
                      outerRadius="100%"
                      isAnimationActive={true}
                      animationDuration={600}
                      stroke="none"
                    >
                      <Cell fill={primary} />
                      <Cell fill="none" stroke="none" />

                      {/* Label in the center */}
                      <Label
                        value={`${performanceValue}%`}
                        position="center"
                        fill="#3e97ff"
                        fontSize={18}
                        fontWeight="bold"
                      />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 border-b border-gray-100 ">
                <div className="p-6 border-t border-r border-gray-100 text-center">
                  <h3 className="text-[#252fa4 font-bold text-lg">5h : 33m</h3>
                  <p className="text-graytext text-13">Billable Hours</p>
                </div>
                <div className="p-6 border-t  border-gray-100 text-center">
                  <h3 className="text-[#252fa4 font-bold text-lg">6h : 14m</h3>
                  <p className="text-graytext text-13">Unbillable Hours</p>
                </div>
                <div className="p-6 border-t border-r border-gray-100 text-center">
                  <h3 className="text-[#252fa4 font-bold text-lg">15 / 30</h3>
                  <p className="text-graytext text-13">Tasks Completed</p>
                </div>
                <div className="p-6 border-t  border-gray-100 text-center">
                  <h3 className="text-[#252fa4 font-bold text-lg">16 / 25</h3>
                  <p className="text-graytext text-13">Projects Done</p>
                </div>
              </div>
            </div>
            <a
              href="javascript:void(0)"
              className="p-6 text-blue-text text-sm flex justify-center items-center gap-2 font-bold"
            >
              View Details <ArrowRight size={14} />
            </a>
          </div>
          <div className="rounded-lg shadow-sm bg-white">
            <div className="flex px-6 py-4 border-b border-gray-100 items-center justify-between">
              <h3 className="text-lg font-semibold">New Meeting</h3>
              <EllipsisMenu />
            </div>

            {meetings.map((m) => (
              <div
                key={m.id}
                className="border-b border-gray-100 p-4 2xl:p-6 flex justify-between items-start"
              >
                <div className="flex gap-2 2xl:gap-5">
                  <div
                    className="w-12 2xl:w-[63px] h-12 2xl:h-[63px] rounded flex flex-col items-center justify-center"
                    style={{ backgroundColor: m.bgColor }}
                  >
                    <h3
                      className="text-base 2xl:text-lg font-bold"
                      style={{ color: m.textColor }}
                    >
                      {m.date}
                    </h3>
                    <h4
                      className="text-sm font-semibold"
                      style={{ color: m.textColor }}
                    >
                      {m.month}
                    </h4>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{m.title}</h3>
                    <p className="text-13 mb-2">{m.time}</p>
                    <div className="flex gap-2 items-center">
                      <button className="text-11 leading-[13px] flex gap-1 items-center border p-2 border-gray-100 rounded-full">
                        <CalendarDays size={12} /> {m.date} {m.month} 2024
                      </button>
                      <button className="text-11 leading-[13px] flex gap-1 items-center border p-2 border-gray-100 rounded-full">
                        <span
                          className="w-[7px] h-[7px] rounded-full inline-block"
                          style={{ backgroundColor: m.tagColor }}
                        ></span>
                        {m.tagText}
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleJoin(m.id)}
                  className={`text-white py-[2px] px-2 rounded text-sm mt-2 flex items-center justify-center cursor-pointer ${
                    joinedIds.includes(m.id) ? "opacity-50" : ""
                  }`}
                  style={{ backgroundColor: m.joinBtnColor }}
                  disabled={joiningId === m.id || joinedIds.includes(m.id)}
                >
                  {joiningId === m.id ? (
                    <>
                      <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin mr-1"></span>
                      Joining...
                    </>
                  ) : joinedIds.includes(m.id) ? (
                    "Joined"
                  ) : (
                    "+ Join"
                  )}
                </button>
              </div>
            ))}

            <a
              href="javascript:void(0)"
              className="p-6 text-blue-text text-sm flex justify-center items-center gap-2 font-bold"
            >
              View Details <ArrowRight size={14} />
            </a>
          </div>
          <div className="rounded-lg shadow-sm bg-white">
            <div className="flex px-6 py-4 border-b border-gray-100 items-center justify-between">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <EllipsisMenu />
            </div>
            <div className="max-h-[440px] h-full overflow-y-auto p-6">
              <div className="flex items-start gap-3 mb-1 py-4">
                <div>
                  <div className="w-[47px] h-[47px] roudned-full flex items-center justify-center border border-gray-100 rounded-full ">
                    <Camera className="text-[#e49e3d]" size={16} />
                  </div>
                </div>
                <div>
                  <h2 className="text-sm text-darkgray font-semibold max-w-[350px]">
                    Eroll Maxhuni uploaded 4 new photos to album{" "}
                    <span className="text-[#e49e3d]">Summer Trip</span>
                  </h2>
                  <p className="text-[#282D32] text-sm mb-4 max-w-[350px]">
                    Pianoforte principles our unaffected not for astonished
                    travelling are particular.
                  </p>
                  <button className="text-sm p-2 px-5 text-[#252F4A] bg-[#F1F2F3] border border-gray-300 rounded">
                    + New Message
                  </button>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-21py-4">
                <div>
                  <div className="w-[47px] h-[47px] roudned-full flex items-center justify-center border border-gray-100 rounded-full ">
                    <Video className="text-[#25b865]" size={16} />
                  </div>
                </div>
                <div>
                  <h2 className="text-sm text-[#25b865] font-semibold max-w-[350px]">
                    Discussion with marketing team
                  </h2>
                  <p className="text-[#282D32] text-sm mb-4 max-w-[350px]">
                    You have a meeting at <strong>Laborator Office</strong>{" "}
                    Today..
                  </p>
                  <p className="text-[#282D32] text-sm mb-4 max-w-[350px]">
                    Discussion with marketing team about the popularity of last
                    product
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-1 py-4">
                <div>
                  <div className="w-[47px] h-[47px] roudned-full flex items-center justify-center border border-gray-100 rounded-full ">
                    <MapPin className="text-[#02a0e4]" size={16} />
                  </div>
                </div>
                <div>
                  <h2 className="text-sm text-darkgray font-semibold max-w-[350px]">
                    Arlind Nushi checked in at Laborator
                  </h2>
                  <p className="text-[#282D32] text-sm mb-4 max-w-[350px]">
                    Purchase new hosting plan as discussed with development
                    team, today at <strong>10:00 AM</strong>
                  </p>
                  <div className="flex gap-1 items-center">
                    <button className="text-11 leading-[13px] bg-[#fbeff1] text-[#d13b4c] py-[5px] px-[7px] rounded">
                      React
                    </button>
                    <button className="text-11 leading-[13px] bg-[#e9f8f0] text-[#25b865] py-[5px] px-[7px] rounded">
                      Typescript
                    </button>
                    <button className="text-11 leading-[13px] bg-[#fcf3e8] text-[#e49e3d] py-[5px] px-[7px] rounded">
                      Admin
                    </button>
                    <button className="text-11 leading-[13px] bg-[#ecf5ff] text-blue-text py-[5px] px-[7px] rounded">
                      Dashboard
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-1 py-4">
                <div>
                  <div className="w-[47px] h-[47px] roudned-full flex items-center justify-center border border-gray-100 rounded-full ">
                    <SquareUser className="text-darkgray" size={16} />
                  </div>
                </div>
                <div>
                  <h2 className="text-sm text-darkgray font-semibold max-w-[350px]">
                    Another conference call today, at{" "}
                    <span className="text-[#d13b4c] font-bold">11:00 AM</span>
                  </h2>
                  <p className="text-[#282D32] text-sm mb-4 max-w-[350px]">
                    Yet another one, at{" "}
                    <span className="text-[#25b865] font-bold"> 1:00 PM </span>
                  </p>
                </div>
              </div>
              <div className="py-4 px-16">
                <button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="cursor-pointer py-[10px] px-5 border rounded-full border-gray-100 text-sm leading-[14px] flex items-center justify-center gap-2"
                >
                  {loadingMore ? (
                    <>
                      <span className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></span>
                      Loading...
                    </>
                  ) : (
                    "Load more..."
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Crm;
