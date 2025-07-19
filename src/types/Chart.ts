export interface BarChartProps {
  data: any[];
  xKey: string;
  barKeys: { key: string; color: string }[];
  stacked?: boolean;
  fullRounded?: boolean;
};

export interface DonutData {
  name: string;
  value: number;
}

export interface DonutChartProps {
  data: { name: string; value: number }[];
  colors: string[];
};

export interface PieChartProps {
  data: { name: string; value: number }[];
  colors: string[];
};