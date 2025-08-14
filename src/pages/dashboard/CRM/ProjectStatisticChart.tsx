import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { ProjectStatisticChartProps } from "../../../types/DashboardModule";

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white p-3 rounded-lg shadow-lg text-xs">
        <p className="font-semibold">{label}</p>
        <p className="text-blue-400">Tasks Completed: {payload[0]?.value}</p>
        <p className="text-orange-400">
          Upcoming Projects: {payload[1]?.value}
        </p>
        <p className="text-gray-300">Project Pending: {payload[2]?.value}</p>
      </div>
    );
  }
  return null;
};

const ProjectStatisticChart: React.FC<ProjectStatisticChartProps> = ({
  data,
  showLine = true,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Project Statistic</h3>
        <select className="border border-gray-100 rounded px-3 py-1 text-sm">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Yearly</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="month" tick={{ fill: "#6B7177", fontSize: 10 }} />
          <YAxis tick={{ fill: "#6B7177", fontSize: 10 }} />
          <Tooltip content={<CustomTooltip />} />

          <Bar
            dataKey="tasksCompleted"
            barSize={10}
            fill="#3B82F6"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="projectPending"
            barSize={10}
            fill="#E5E7EB"
            radius={[4, 4, 0, 0]}
          />

          {/* Thinner line */}
          {showLine && (
            <Line
              type="monotone"
              dataKey="upcomingProjects"
              stroke="#F59E0B"
              strokeWidth={1}
              dot={{ r: 2 }}
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectStatisticChart;
