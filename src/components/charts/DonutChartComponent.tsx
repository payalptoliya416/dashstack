import { PieChart, Pie, Cell } from "recharts";

type DonutChartProps = {
  data: { name: string; value: number }[];
  colors: string[];
};

const DonutChartComponent: React.FC<DonutChartProps> = ({ data, colors }) => {
  return (
    <div className="flex justify-center items-center">
      <PieChart width={155} height={155}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={70}
           startAngle={90}
          endAngle={-280}
          isAnimationActive={false}
        >
          {data.map((_, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default DonutChartComponent;
