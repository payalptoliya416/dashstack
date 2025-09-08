import { type FC } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  BarChart,
  Bar,
  YAxis,
} from "recharts";
import BarChartComponent from "../../../components/charts/BarChartComponent";
import {
  BadgeDollarSign,
  ChartColumn,
  ChartNoAxesCombined,
  Grid3x3,
  ShoppingCart,
  Star,
} from "lucide-react";
import EllipsisMenu from "./EllipsisMenu";
import { RecentOrderTable } from "./RecentOrderTable";
import type { KV, Product, Recent } from "../../../types/DashboardModule";
import ProductCard from "./ProductCard";
import { PaginatedList } from "./PaginatedList";
import MainTitle from "../../../hooks/useMainTitle";
import { usePageAnimation } from "../../../hooks/usePageAnimation";
import { motion } from "framer-motion";

const RecentTableData: Recent[] = [
  {
    invoiceId: "896574",
    customerName: "Archie Tones",
    customerEmail: "archie@example.com",
    customerImage: "/images/recent1.png",
    couponCode: "SU56HD246K",
    productName: "Edifier headphone",
    productImage: "/images/dash1.png",
    paymentMethod: "visa",
    status: "Completed",
  },
  {
    invoiceId: "478523",
    customerName: "Holmes Cherry",
    customerEmail: "holmes@example.com",
    customerImage: "/images/recent2.png",
    couponCode: "SU56HD246K",
    productName: "Apple watch ultra",
    productImage: "/images/dash2.png",
    paymentMethod: "Strip",
    status: "Reject",
  },
  {
    invoiceId: "568745",
    customerName: "Malanie Hanvey",
    customerEmail: "malanie@example.com",
    customerImage: "/images/recent3.png",
    couponCode: "SU56HD246K",
    productName: "Google Pixel Buds",
    productImage: "/images/dash3.png",
    paymentMethod: "Pay",
    status: "Completed",
  },
  {
    invoiceId: "674523",
    customerName: "Kenneth Hune",
    customerEmail: "kenneth@example.com",
    customerImage: "/images/recent4.png",
    couponCode: "SU56HD246K",
    productName: "iPhone 15 pro max",
    productImage: "/images/dash4.png",
    paymentMethod: "Pay",
    status: "Pending",
  },
  {
    invoiceId: "558746",
    customerName: "Valentine Maton",
    customerEmail: "valentine@example.com",
    customerImage: "/images/recent5.png",
    couponCode: "SU56HD246K",
    productName: "Canon camera kit",
    productImage: "/images/dash1.png",
    paymentMethod: "Stripe",
    status: "Completed",
  },
];
const products: Product[] = [
  {
    id: 1,
    image: "/images/dash1.png",
    title: "Edifier headphone",
    code: "#WLH-001",
    reviews: 895,
  },
  {
    id: 2,
    image: "/images/dash2.png",
    title: "Apple watch ultra",
    code: "#PCK-202",
    reviews: 732,
  },
  {
    id: 3,
    image: "/images/dash3.png",
    title: "Google pixel buds",
    code: "#SHS-303",
    reviews: 621,
  },
  {
    id: 4,
    image: "/images/dash4.png",
    title: "iPhone 15 pro max",
    code: "#UHD-404",
    reviews: 543,
  },
  {
    id: 5,
    image: "/images/dash5.png",
    title: "Canon camera kit",
    code: "#GPL-505",
    reviews: 467,
  },
];
const ECommerce: FC = () => {
  const pageVariants = usePageAnimation();
  const performanceValue = 60;
  const performanceData: KV[] = [
    { name: "progress", value: performanceValue },
    { name: "rest", value: 100 - performanceValue },
  ];

  const growthData: KV[] = [
    { name: "Jan", value: 4 },
    { name: "Feb", value: 6 },
    { name: "Mar", value: 5 },
    { name: "Apr", value: 7 },
    { name: "May", value: 6.5 },
    { name: "Jun", value: 8 },
    { name: "Jul", value: 7.3 },
    { name: "Aug", value: 8.6 },
  ];

  const earningsData: KV[] = [
    { name: "Jan", value: 1.2 },
    { name: "Feb", value: 2 },
    { name: "Mar", value: 1 },
    { name: "Apr", value: 2.8 },
    { name: "May", value: 2.3 },
    { name: "Jun", value: 3.5 },
    { name: "Jul", value: 3 },
    { name: "Aug", value: 4 },
  ];

  const salesReportData = [
    { name: "Jan", sales: 25, revenue: 35 },
    { name: "Feb", sales: 40, revenue: 55 },
    { name: "Mar", sales: 20, revenue: 30 },
    { name: "Apr", sales: 65, revenue: 80 },
    { name: "May", sales: 35, revenue: 45 },
    { name: "Jun", sales: 60, revenue: 75 },
    { name: "Jul", sales: 55, revenue: 70 },
    { name: "Aug", sales: 70, revenue: 90 },
    { name: "Sep", sales: 60, revenue: 80 },
    { name: "Oct", sales: 75, revenue: 95 },
    { name: "Nov", sales: 55, revenue: 70 },
    { name: "Dec", sales: 90, revenue: 120 },
  ];

  const primary = "#3e97ff";
  const bgRing = "#eef6ff";
  const barData = Array.from({ length: 10 }, (_, i) => ({
    name: `Item ${i + 1}`,
    value1: Math.floor(Math.random() * 50) + 20,
    value2: Math.floor(Math.random() * 50) + 20,
  }));

  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <MainTitle title="eCommerce" />
        {/* --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[30px] mb-7">
          <div className="px-6 py-4 rounded-lg shadow-sm flex items-center justify-between bg-white">
            <div>
              <h3 className="text-lg mb-2 font-semibold">Performance Goal</h3>
              <p className="text-13 text-gray-600 mb-2">
                Monthly performance reports
              </p>
              <p className="text-sm text-gray-600 font-semibold mb-3 mt-16">
                Sales:{" "}
                <span className="text-lg text-blue-text font-bold ">
                  $5.65K
                </span>
              </p>
              <button className="py-2 px-4 text-sm bg-blue-light text-white rounded">
                View Reports
              </button>
            </div>

            <div className="relative w-32 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
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

                  <Pie
                    data={performanceData}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    innerRadius="80%"
                    outerRadius="100%"
                    isAnimationActive={true}
                    animationDuration={600}
                  >
                    <Cell fill={primary} />
                    <Cell fill="transparent" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                  className="text-sm font-semibold"
                  style={{ color: primary }}
                >
                  {Math.round(performanceValue)}%
                </span>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 rounded-lg shadow-sm bg-white flex justify-between flex-col">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600">Store Growth</p>
                <h3 className="text-lg font-semibold">12.65%</h3>
              </div>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded">
                (+) 3.6%
              </span>
            </div>

            <div className="w-full h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData}>
                  <XAxis dataKey="name" hide />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={primary}
                    strokeWidth={2}
                    dot={{ r: 1.4, fill: primary }}
                    isAnimationActive={true}
                    animationDuration={700}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="px-6 py-4 rounded-lg shadow-sm bg-white flex justify-between flex-col">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600">Monthly Earning</p>
                <h3 className="text-lg font-semibold">32.46K</h3>
              </div>
              <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded">
                (-) 2.4%
              </span>
            </div>

            <div className="w-full h-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={earningsData}>
                  <XAxis dataKey="name" hide />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    radius={[6, 6, 0, 0]}
                    fill={primary}
                    isAnimationActive={true}
                    animationDuration={700}
                    barSize={7}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* --- */}
        <div className="grid grid-cols-12 gap-[30px] mb-7">
          <div className="px-6 py-4 rounded-lg shadow-sm bg-white flex flex-col col-span-12 lg:col-span-8 justify-between">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg mb-2 font-semibold">Sales Report</h3>
              <select className="border rounded-md px-3 py-1 text-sm border-[#D5D5D5] focus:outline-none">
                <option value="monthly">Monthly</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="yearly">Yearly</option>
                <option value="all">All Times</option>
              </select>
            </div>

            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesReportData}>
                  <XAxis
                    dataKey="name"
                    stroke="#999"
                    tick={{ fontSize: 10, fill: "#666" }}
                  />
                  <YAxis
                    ticks={[0, 30, 60, 90, 120]}
                    domain={[0, 120]}
                    tickFormatter={(value) => `${value}K`}
                    stroke="#999"
                    tick={{ fontSize: 10, fill: "#666" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#111827",
                      borderRadius: "6px",
                      border: "none",
                      color: "#fff",
                    }}
                    formatter={(value: number, name: string) => [
                      `${value}K`,
                      name.charAt(0).toUpperCase() + name.slice(1),
                    ]}
                    labelStyle={{ color: "#fff" }}
                    labelFormatter={(label) => `${label}`}
                  />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#3e97ff"
                    dot={{ r: 0 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#f6a600"
                    strokeDasharray="5 5"
                    dot={{ r: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4  rounded-lg shadow-sm bg-white">
            <div className="flex justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold">Store Overview </h3>
              <EllipsisMenu />
            </div>
            <div className="px-6 py-4">
              <div className="mb-6 p-4 rounded-lg border border-gray-100 flex justify-between items-center">
                <div className="bg-[#fbeff1] w-[56px] h-[56px] flex justify-center items-center rounded">
                  <ShoppingCart className="text-[#d13b4c]" size={30} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">$89,585</h4>
                  <p className="text-13">Store Sales</p>
                </div>
              </div>
              <div className="mb-6 p-4 rounded-lg border border-gray-100 flex justify-between items-center">
                <div className="bg-[#fcf3e8] w-[56px] h-[56px] flex justify-center items-center rounded">
                  <ShoppingCart className="text-[#e49e3d]" size={30} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">$42,455</h4>
                  <p className="text-13">Store Orders</p>
                </div>
              </div>
              <div className="p-4 rounded-lg border border-gray-100 flex justify-between items-center">
                <div className="bg-[#e9f8f0] w-[56px] h-[56px] flex justify-center items-center rounded">
                  <BadgeDollarSign className="text-[#25b865]" size={30} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">$38,625</h4>
                  <p className="text-13">Store Earnings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[30px] mb-7">
          <div className="rounded-lg shadow-sm bg-white">
            <div className="flex px-6 py-4 border-b border-gray-100  items-center justify-between">
              <h3 className="text-lg font-semibold">Weekly Stats </h3>
              <EllipsisMenu />
            </div>
            <div className="py-4 px-6">
              <div className="border-b border-gray-100 pb-6">
                <BarChartComponent
                  data={barData}
                  xKey="name"
                  stacked={true}
                  fullRounded={true}
                  barKeys={[
                    { key: "value2", color: "rgba(72, 128, 255, 1)" },
                    { key: "value1", color: "rgba(237, 240, 244, 1)" },
                  ]}
                />
              </div>
              <div className="flex justify-between py-4 items-center border-b border-gray-100">
                <div className="flex gap-3 items-center ">
                  <div className="w-[55px] h-[55px] bg-[#ecf5ff] rounded-lg justify-center items-center flex">
                    <ShoppingCart size={20} className="text-[#3E98FF]" />
                  </div>
                  <div>
                    <h3 className="text-sm mb-1 font-semibold">Total Sales</h3>
                    <p className="text-xs">2,456 Sales</p>
                  </div>
                </div>
                <div className="text-[#3E98FF] bg-[#ecf5ff] text-11 px-[7px] py-[5px] rounded font-bold">
                  $5,458
                </div>
              </div>
              <div className="flex justify-between py-4 items-center border-b border-gray-100">
                <div className="flex gap-3 items-center ">
                  <div className="w-[55px] h-[55px] bg-[#e9f8f0] rounded-lg justify-center items-center flex">
                    <Star size={20} className="text-[#25b865]" />
                  </div>
                  <div>
                    <h3 className="text-sm mb-1 font-semibold">
                      Total Revenue
                    </h3>
                    <p className="text-xs">Expected earningss</p>
                  </div>
                </div>
                <div className="text-[#25b865] bg-[#e9f8f0] text-11 px-[7px] py-[5px] rounded font-bold">
                  $8,568
                </div>
              </div>
              <div className="flex justify-between py-4 items-center">
                <div className="flex gap-3 items-center ">
                  <div className="w-[55px] h-[55px] bg-[#fbeff1] rounded-lg justify-center items-center flex">
                    <ChartNoAxesCombined size={20} className="text-[#d13b4c]" />
                  </div>
                  <div>
                    <h3 className="text-sm mb-1 font-semibold">Net Profit</h3>
                    <p className="text-xs">Overview of Profit</p>
                  </div>
                </div>
                <div className="text-[#d13b4c] bg-[#fbeff1] text-11 px-[7px] py-[5px] rounded font-bold">
                  $76,578
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-sm bg-white">
            <div className="flex px-6 py-4 border-b border-gray-100  items-center justify-between">
              <h3 className="text-lg font-semibold">Best Selling</h3>
              <EllipsisMenu />
            </div>
            <div>
              <PaginatedList
                data={products}
                pageSize={7}
                renderItem={(product) => (
                  <ProductCard key={product.code} product={product} />
                )}
              />
            </div>
          </div>
          <div className="rounded-lg shadow-sm bg-white">
            <div className="flex px-6 py-4 border-b border-gray-100  items-center justify-between">
              <h3 className="text-lg font-semibold">Sales History</h3>
              <EllipsisMenu />
            </div>
            <div className="flex justify-between py-4 px-6 items-center border-b border-gray-100">
              <div className="flex gap-3 items-center ">
                <div className="w-[55px] h-[55px] bg-[#ecf5ff] rounded-lg justify-center items-center flex">
                  <Grid3x3 size={20} className="text-[#3E98FF]" />
                </div>
                <div>
                  <h3 className="text-sm mb-1 font-semibold">Timothy Boyd</h3>
                  <p className="text-xs">24 DEC, 2023</p>
                </div>
              </div>
              <div className="text-[#3E98FF] bg-[#ecf5ff] text-11 px-[7px] py-[5px] rounded font-bold">
                $250.0
              </div>
            </div>
            <div className="flex justify-between py-4  px-6 items-center  border-b border-gray-100">
              <div className="flex gap-3 items-center ">
                <div className="w-[55px] h-[55px] bg-[#fbeff1] rounded-lg justify-center items-center flex">
                  <Grid3x3 size={20} className="text-[#d13b4c]" />
                </div>
                <div>
                  <h3 className="text-sm mb-1 font-semibold">Adrian Monino</h3>
                  <p className="text-xs">23 DEC, 2023</p>
                </div>
              </div>
              <div className="text-[#d13b4c] bg-[#fbeff1] text-11 px-[7px] py-[5px] rounded font-bold">
                $220.00
              </div>
            </div>
            <div className="flex justify-between py-4  px-6 items-center border-b border-gray-100">
              <div className="flex gap-3 items-center ">
                <div className="w-[55px] h-[55px] bg-[#e9f8f0] rounded-lg justify-center items-center flex">
                  <Grid3x3 size={20} className="text-[#25b865]" />
                </div>
                <div>
                  <h3 className="text-sm mb-1 font-semibold">
                    Socrates Itumay
                  </h3>
                  <p className="text-xs">22 DEC, 2023</p>
                </div>
              </div>
              <div className="text-[#25b865] bg-[#e9f8f0] text-11 px-[7px] py-[5px] rounded font-bold">
                $180.00
              </div>
            </div>
            <div className="flex justify-between py-4  px-6 items-center border-b border-gray-100">
              <div className="flex gap-3 items-center ">
                <div className="w-[55px] h-[55px] bg-[#fcf3e8] rounded-lg justify-center items-center flex">
                  <Grid3x3 size={20} className="text-[#e49e3d]" />
                </div>
                <div>
                  <h3 className="text-sm mb-1 font-semibold">Althea Cabardo</h3>
                  <p className="text-xs">21 DEC, 2023</p>
                </div>
              </div>
              <div className="text-[#e49e3d] bg-[#fcf3e8] text-11 px-[7px] py-[5px] rounded font-bold">
                $150.00
              </div>
            </div>
            <div className="flex justify-between py-4  px-6 items-center">
              <div className="flex gap-3 items-center ">
                <div className="w-[55px] h-[55px] bg-[#e6f6fc] rounded-lg justify-center items-center flex">
                  <Grid3x3 size={20} className="text-[#02a0e4]" />
                </div>
                <div>
                  <h3 className="text-sm mb-1 font-semibold">Laura Foreman</h3>
                  <p className="text-xs">20 DEC, 2023</p>
                </div>
              </div>
              <div className="text-[#02a0e4] bg-[#e6f6fc] text-11 px-[7px] py-[5px] rounded font-bold">
                $200.00
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 mb-7">
          <div className="col-span-12">
            <div className="rounded-lg shadow-sm bg-white px-6 py-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Recent Orders</h3>
                <button className="px-5 py-2 rounded flex items-center text-sm border border-gray-200 gap-1 bg-[#f1f2f3]">
                  <ChartColumn size={14} />
                  Order Report
                </button>
              </div>
              <RecentOrderTable data={RecentTableData} />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ECommerce;
