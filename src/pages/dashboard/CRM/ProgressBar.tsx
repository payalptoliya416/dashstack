import React from "react";
import type { ProgressBarProps } from "../../../types/DashboardModule";

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  amount,
  percentage,
  barColor = "#E49E3D",
}) => {
  return (
    <div className="space-y-2">
      {/* Top row */}
      <div className="flex justify-between items-center">
        <h4 className="text-[13px] text-[#4B5675]">{label}</h4>
        <h4 className="text-[13px] text-[#4B5675]">
          {amount} ({percentage}%)
        </h4>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 bg-[#EEF0F3] rounded">
        <div
          className="h-1 rounded"
          style={{
            width: `${percentage}%`,
            backgroundColor: barColor,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
