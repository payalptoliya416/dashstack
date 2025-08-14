import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import type { AnalyticsCardProps } from "../../../types/DashboardModule";

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  title,
  value,
  prevValue,
  isIncrease,
  color,
  chartData,
}) => {
  const Icon = isIncrease ? TrendingUp : TrendingDown;
  const gradientId = `gradient-${title.replace(/\s+/g, "-")}`;

  return (
    <div className="rounded-lg shadow-sm bg-white flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-start p-6">
        <div>
          <h3 className="text-sm font-semibold mb-1">{title}</h3>
          <p className="text-[12px] leading-[12px]">
            <Icon
              className={`inline-block me-1 ${
                isIncrease ? "text-[#25b865]" : "text-[#d13b4c]"
              }`}
              size={14}
            />
            {prevValue} (Prev)
          </p>
        </div>
        <h2 className="text-lg font-bold text-[#202224]">{value}</h2>
      </div>

      {/* Chart */}
      <div className="w-full h-[100px] mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.2} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip content={() => null} />
            <Area
              type="monotone"
              dataKey="uv"
              stroke={color}
              strokeWidth={2}
              fillOpacity={1}
              fill={`url(#${gradientId})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsCard;
