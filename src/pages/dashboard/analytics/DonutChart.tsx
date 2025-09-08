import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import type { DonutChartProps } from "../../../types/DashboardModule";

export const DonutChart: React.FC<DonutChartProps> = ({
  percentage,
  color,
  title,
  subtitle,
  description,
}) => {
  const bgRing = "#e5e7eb";
  const primary = color;

  const data = [
    { name: "progress", value: percentage },
    { name: "empty", value: 100 - percentage },
  ];

  return (
    <div className="rounded-lg shadow-sm bg-white p-6 flex gap-6 items-center">
      <div className="relative w-32 h-32 flex-shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={[{ name: "bg", value: 100 }]}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              innerRadius="85%"
              outerRadius="100%"
              isAnimationActive={false}
            >
              <Cell fill={bgRing} />
            </Pie>
            <Pie
              data={data}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              innerRadius="85%"
              outerRadius="100%"
              isAnimationActive={true}
              animationDuration={800}
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
            aria-label={`${percentage}%`}
          >
            {percentage}%
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-21 font-bold mb-1">{title}</h3>
        <p className="font-semibold text-sm mb-1">{subtitle}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};
