import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
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

function Revenue() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-lg sm:text-2xl mb-[35px] font-bold">Revenue</h2>
        <select className="border rounded px-2 py-1 text-sm border-[#D5D5D5] text-[#2B303466] focus:outline-none">
          <option>October</option>
          <option>November</option>
        </select>
      </div>
      <div className="h-[200px] sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF8F6DCC" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FF8F6DCC" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DBA5FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#DBA5FF" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#FB7185"
              fillOpacity={1}
              fill="url(#colorSales)"
            />
            <Area
              type="monotone"
              dataKey="profit"
              stroke="#C084FC"
              fillOpacity={1}
              fill="url(#colorProfit)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Revenue;
