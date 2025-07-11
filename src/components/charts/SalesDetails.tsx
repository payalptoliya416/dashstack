import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import type { SalesDataItem } from "../../types/Dashboard";

const salesData: SalesDataItem[] = [
  { name: "5k", value: 20 },
  { name: "10k", value: 45 },
  { name: "15k", value: 42 },
  { name: "20k", value: 64.37 },
  { name: "25k", value: 48 },
  { name: "30k", value: 47 },
  { name: "35k", value: 20 },
  { name: "40k", value: 39 },
  { name: "45k", value: 59 },
  { name: "50k", value: 52 },
  { name: "55k", value: 47 },
  { name: "60k", value: 50 },
];

function SalesDetails() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-lg sm:text-2xl mb-[35px] font-bold">Sales Details</h2>
        <select className="border rounded px-2 py-1 text-sm border-[#D5D5D5] text-[#2B303466] focus:outline-none">
          <option>October</option>
          <option>November</option>
        </select>
      </div>
      <div className="h-[200px] sm:h-[300px]">
      <ResponsiveContainer width="100%" height='100%'>
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{ r: 4, fill: "#3B82F6" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </>
  );
}

export default SalesDetails;
