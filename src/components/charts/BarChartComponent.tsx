import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type BarChartProps = {
  data: any[];
  xKey: string;
  barKeys: { key: string; color: string }[];
  stacked?: boolean;
  fullRounded?: boolean;
};

const BarChartComponent: React.FC<BarChartProps> = ({
  data,
  xKey,
  barKeys,
  stacked = false,
  fullRounded = false,
}) => {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart data={data} barCategoryGap="15%">
        <XAxis dataKey={xKey} hide />
        <YAxis hide />
        <Tooltip />
        <CartesianGrid vertical={false} stroke="none" />
        {barKeys.map((bar, idx) => (
          <Bar
            key={idx}
            dataKey={bar.key}
            fill={bar.color}
            barSize={8}
            stackId={stacked ? "a" : undefined} // only if stacked
            radius={
              fullRounded
                ? [6, 6, 6, 6]
                : [6, 6, 0, 0] // top only
            }
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};


export default BarChartComponent;
