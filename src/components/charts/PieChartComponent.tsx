import { PieChart, Pie, Cell, Tooltip } from "recharts";
import type { PieChartProps } from "../../types/Chart";

const PieChartComponent: React.FC<PieChartProps> = ({ data, colors }) => {
  return (
    <div className="flex justify-center items-center">
      <PieChart width={155} height={155}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={70}
          startAngle={90}
          endAngle={-280}
          isAnimationActive={false}
        >
          {data.map((_, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
