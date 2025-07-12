import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import type { RevenueDataItem } from "../../types/Dashboard";

const revenueData: RevenueDataItem[] = [
  { name: "5k", sales: 20, profit: 20 },
  { name: "10k", sales: 30, profit: 70 },
  { name: "15k", sales: 25, profit: 40 },
  { name: "20k", sales: 20, profit: 30 },
  { name: "25k", sales: 50, profit: 50 },
  { name: "30k", sales: 40, profit: 60 },
  { name: "35k", sales: 90, profit: 30 },
  { name: "40k", sales: 45, profit: 50 },
  { name: "45k", sales: 65, profit: 60 },
  { name: "50k", sales: 60, profit: 40 },
  { name: "55k", sales: 55, profit: 70 },
  { name: "60k", sales: 20, profit: 90 },
];

const CustomLegend = () => {
  return (
    <div className="flex justify-center gap-6 mt-5">
      <div className="flex items-center gap-2">
        <span className="w-[14px] h-[14px] rounded-full bg-[#FF8F6D]"></span>
        <span className="text-[#282D32] text-base font-bold">Sales</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-[14px] h-[14px] rounded-full bg-[#DBA5FF]"></span>
        <span className="text-[#282D32] text-base font-bold">Profit</span>
      </div>
    </div>
  );
};

function Revenue() {
  return (
    <div className="bg-white ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg sm:text-2xl font-bold">Revenue</h2>
        <select className="border rounded-md px-3 py-1 text-sm border-[#D5D5D5] focus:outline-none">
          <option>October</option>
          <option>November</option>
        </select>
      </div>

      {/* Chart */}
      <div className="h-[220px] sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={revenueData}
            margin={{ top: 10, right: 0, left: 0, bottom: 20 }}
          >
            {/* Gradient Fills */}
           <defs>
          {/* Sales (solid orange) */}
          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF8F6D" stopOpacity={1} />
            <stop offset="100%" stopColor="#FF8F6D" stopOpacity={1} />
          </linearGradient>

          {/* Profit (semi-transparent purple) */}
          <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DBA5FF" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#DBA5FF" stopOpacity={0.3} />
          </linearGradient>
        </defs>

            {/* Horizontal grid lines only */}
            <CartesianGrid stroke="#E5E7EB" vertical={false} />

            {/* Axes */}
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />
            <YAxis
              domain={[0, 100]}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />

            {/* Tooltip */}
            <Tooltip />

            {/* Area Charts */}
            <Area
  type="monotone"
  dataKey="sales"
  stroke="#FF8F6DCC"
  fill="url(#colorSales)"
  strokeWidth={2}
  name="Sales"
/>
<Area
  type="monotone"
  dataKey="profit"
  stroke="#DBA5FF"
  fill="url(#colorProfit)"
  strokeWidth={2}
  name="Profit"
/>

<Legend content={<CustomLegend />} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Revenue;
