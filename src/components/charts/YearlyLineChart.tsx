import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import type { LineChartDataItem } from "../../types/Dashboard";

const lineData: LineChartDataItem[] = [
  { year: 2015, sales: 25, profit: 0 },
  { year: 2016, sales: 65, profit: 55 },
  { year: 2017, sales: 55, profit: 40 },
  { year: 2018, sales: 50, profit: 25 },
  { year: 2019, sales: 100, profit: 90 },
];

const YearlyLineChart: React.FC = () => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <h2 className="text-lg font-semibold mb-3">Sales Analytics</h2>
     <div className="h-[200px] sm:h-[300px]">
    <ResponsiveContainer width="100%" height='100%'>
     <LineChart data={lineData}>
  <CartesianGrid strokeDasharray="0" stroke="#E5E7EB" vertical={false} />
  <XAxis
    dataKey="year"
    tick={{ fontSize: 12, fill: "#9CA3AF" }}
    axisLine={false}
    tickLine={false}
  />
  <YAxis
    domain={[0, 100]}
    tick={{ fontSize: 12, fill: "#9CA3AF" }}
    axisLine={false}
    tickLine={false}
  />
  <Tooltip />
  <Line
    type="monotone"
    dataKey="sales"
    stroke="#3B82F6"
    strokeWidth={3}
    dot={{ r: 4, strokeWidth: 2, stroke: "#3B82F6", fill: "#10B981" }}
  />
  <Line
    type="monotone"
    dataKey="profit"
    stroke="#10B981"
    strokeWidth={3}
    dot={{ r: 5, strokeWidth: 1, stroke: "#fff", fill: "#10B981" }}
  />
</LineChart>

    </ResponsiveContainer>
     </div>
  </div>
);

export default YearlyLineChart;
