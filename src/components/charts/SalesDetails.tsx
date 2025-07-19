import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CustomTooltip } from "./CustomTooltip";
import { useState } from "react";

const salesData = [
  { month: "October", name: "5k", value: 20 },
  { month: "October", name: " ", value: 25 },
  { month: "October", name: "  ", value: 30 },
  { month: "October", name: "   ", value: 48 },
  { month: "October", name: "10k", value: 40 },
  { month: "October", name: "    ", value: 45 },
  { month: "October", name: "     ", value: 38 },
  { month: "October", name: "15k", value: 32 },
  { month: "October", name: "      ", value: 40 },
  { month: "October", name: "       ", value: 55 },
  { month: "October", name: "20k", value: 88 },
  { month: "October", name: "        ", value: 35 },
  { month: "October", name: "         ", value: 48 },
  { month: "October", name: "          ", value: 52 },
  { month: "October", name: "25k", value: 45 },
  { month: "October", name: "           ", value: 50 },
  { month: "October", name: "            ", value: 55 },
  { month: "October", name: "            ", value: 50 },
  { month: "October", name: "30k", value: 45 },

  { month: "November", name: "             ", value: 55 },
  { month: "November", name: "              ", value: 62 },
  { month: "November", name: "35k", value: 22 },
  { month: "November", name: "               ", value: 25 },
  { month: "November", name: "                ", value: 30 },
  { month: "November", name: "                 ", value: 45 },
  { month: "November", name: "40k", value: 48 },
  { month: "November", name: "                  ", value: 42 },
  { month: "November", name: "                   ", value: 72 },
  { month: "November", name: "                    ", value: 68 },
  { month: "November", name: "45k", value: 58 },
  { month: "November", name: "                     ", value: 62 },
  { month: "November", name: "                      ", value: 58 },
  { month: "November", name: "50k", value: 52 },
  { month: "November", name: "                       ", value: 50 },
  { month: "November", name: "                        ", value: 58 },
  { month: "November", name: "55k", value: 42 },
  { month: "November", name: "                         ", value: 50 },
  { month: "November", name: "                          ", value: 55 },
  { month: "November", name: "60k", value: 48 },
  { month: "November", name: "                           ", value: 56 },
];

function SalesDetails() {
    const [selectedMonth, setSelectedMonth] = useState("October");

  const filteredData = salesData.filter(
    (item) => item.month === selectedMonth
  );
  return (
    <div className="bg-white rounded-x">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg sm:text-2xl font-bold">Sales Details</h2>
        <select className="border rounded-md px-3 py-1 text-sm border-[#D5D5D5] focus:outline-none"   value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}> 
         <option value="October">October</option>
          <option value="November">November</option>
        </select>
      </div>

      <div className="h-[220px] sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={filteredData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#E5E7EB" vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              padding={{ left: 20, right: 20 }}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />
            <YAxis
              domain={[0, 100]}
              tickFormatter={(value) => `${value.toFixed(1)}%`}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              fill="url(#colorValue)"
              strokeWidth={2}
              dot={{ r: 4, fill: "#3B82F6" }} 
               activeDot={{ r: 6, fill: "#3B82F6", strokeWidth: 0 }} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesDetails;
