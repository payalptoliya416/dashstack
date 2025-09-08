import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import type { DonutData } from "../../types/Chart";

const donutData: DonutData[] = [
  { name: "New Customers", value: 34249 },
  { name: "Repeated", value: 1420 },
];

const donutColors: string[] = ["#3B82F6", "#CBD5E1"]; 

const Customers: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
      <h2 className="text-lg sm:text-[22px] text-darkgray font-semibold mb-4 self-start">
        Customers
      </h2>

      <div className="mx-auto mb-[38px]">
        <PieChart width={140} height={140}>
          <Pie
            data={donutData}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={60}
            dataKey="value"
          >
            {donutData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={donutColors[index % donutColors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>

      <div className="flex justify-center gap-10 text-center">
        <div>
          <h3 className="text-darkgray mb-1 font-bold text-[22px]">34,249</h3>
          <p className="text-darkgray opacity-80 text-sm">
            <span className="w-3 h-3 rounded-full bg-blue-light mr-1 inline-block"></span>
            New Customers
          </p>
        </div>
        <div>
          <h3 className="text-darkgray mb-1 font-bold text-[22px]">1420</h3>
          <p className="text-darkgray opacity-80 text-sm">
            <span className="w-3 h-3 rounded-full bg-[#C0D2F0] mr-1 inline-block"></span>
            Repeated
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
