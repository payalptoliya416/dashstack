import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { ChartData20 } from "../../../types/DashboardModule";

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const dataKey = payload[0].dataKey;
    const value = payload[0].value;
    const color = payload[0].stroke;

    const valueLabel = dataKey === "uv" ? "Value" : "Transactions";

    return (
      <div className="bg-white p-2 rounded shadow-lg border border-gray-200">
        <p className="text-sm font-semibold">{label}</p>
        <p className={`text-sm`} style={{ color }}>
          {`${valueLabel}: ${value}`}
        </p>
      </div>
    );
  }
  return null;
};

export const ChartCard: React.FC<{
  title: string;
  value: string;
  growthText: string;
  growthColor: string;
  icon: React.ReactNode;
  iconBgColor: string;
  chartColor: string;
  data: ChartData20[];
}> = ({
  title,
  value,
  growthText,
  growthColor,
  icon,
  iconBgColor,
  chartColor,
  data,
}) => (
  <div className="rounded-lg shadow-sm bg-white">
    <div className="flex justify-between items-center p-6">
      <div className="flex items-center gap-2">
        <div
          className={`w-[47px] h-[47px] rounded flex items-center justify-center ${iconBgColor}`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-[17px] text-darkgray font-semibold">{title}</h3>
          <h4 className="text-13 text-graytext">
            <span className={growthColor}>{growthText} </span>from last week
          </h4>
        </div>
      </div>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
    <div className="mt-4" style={{ width: "100%", height: 100 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient
              id={`colorGradient-${title.replace(/\s+/g, "-")}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor={chartColor} stopOpacity={0.2} />
              <stop offset="100%" stopColor={chartColor} stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            strokeOpacity={0.1}
          />
          <XAxis hide />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />

          <Area
            type="monotone"
            dataKey="uv"
            stroke={chartColor}
            strokeWidth={2}
            fill={`url(#colorGradient-${title.replace(/\s+/g, "-")})`}
            isAnimationActive
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);
