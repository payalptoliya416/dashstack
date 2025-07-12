import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  type TooltipProps,
} from "recharts";
import { CustomTooltip } from "./CustomTooltip";

const salesData = [
  { name: "5k", value: 20 },
  { name: " ", value: 25 },
  { name: "  ", value: 30 },
  { name: "   ", value: 48 },
  { name: "10k", value: 40 },
  { name: "    ", value: 45 },
  { name: "     ", value: 38 },
  { name: "15k", value: 32 },
  { name: "      ", value: 40 },
  { name: "       ", value: 55 },
  { name: "20k", value: 88 },
  { name: "        ", value: 35 },
  { name: "         ", value: 48 },
  { name: "          ", value: 52 },
  { name: "25k", value: 45 },
  { name: "           ", value: 50 },
  { name: "            ", value: 55 },
  { name: "            ", value: 50 },
  { name: "30k", value: 45 },
  { name: "             ", value: 55 },
  { name: "              ", value: 62 },
  { name: "35k", value: 22 },
  { name: "               ", value: 25 },
  { name: "                ", value: 30 },
  { name: "                 ", value: 45 },
  { name: "40k", value: 48 },
  { name: "                  ", value: 42 },
  { name: "                   ", value: 72 },
  { name: "                    ", value: 68 },
  { name: "45k", value: 58 },
  { name: "                     ", value: 62 },
  { name: "                      ", value: 58 },
  { name: "50k", value: 52 },
  { name: "                       ", value: 50 },
  { name: "                        ", value: 58 },
  { name: "55k", value: 42 },
  { name: "                         ", value: 50 },
  { name: "                          ", value: 55 },
  { name: "60k", value: 48 },
  { name: "                           ", value: 56 },
];

function SalesDetails() {
  return (
    <div className="bg-white rounded-x">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg sm:text-2xl font-bold">Sales Details</h2>
        <select className="border rounded-md px-3 py-1 text-sm border-[#D5D5D5] focus:outline-none">
          <option>October</option>
          <option>November</option>
        </select>
      </div>

      <div className="h-[220px] sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={salesData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
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
