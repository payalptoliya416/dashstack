
// --CRM start
export type ChartData = {
  name: string;
  value: number;
  color: string;
}[];

export type ProposalStatus = "New" | "Rejected" | "Sent";
export type WorkStatus = "In Progress" | "Not Interested" | "Completed";

export interface UserRow {
  name: string;
  email: string;
  image: string;
  proposal: ProposalStatus;
  date: string;
  status: WorkStatus;
};

export interface ChartData20 {
  name: string;
  uv: number;
}

export interface projectChartData {
  month: string;
  tasksCompleted: number;
  upcomingProjects: number;
  projectPending: number;
}

export interface Meeting {
  id: number;
  date: string; 
  month: string; 
  bgColor: string;
  textColor: string;
  tagColor: string;
  tagBg: string;
  tagText: string;
  title: string;
  time: string;
  urgency: "Urgent" | "Normal";
  joinBtnColor: string;
}

export type ProgressBarProps = {
  label: string;
  amount: string;
  percentage: number;
  barColor?: string; 
};

export interface ProjectChartData {
  month: string;
  tasksCompleted: number;
  upcomingProjects: number;
  projectPending: number;
}

export interface ProjectStatisticChartProps {
  data: ProjectChartData[];
   showLine?: boolean;
}

// --analytics start
export type Product = {
  id: number;
  image: string;
  title: string;
  code: string;
  reviews: number;
};

export interface projectChartData {
  month: string;
  tasksCompleted: number;
  upcomingProjects: number;
  projectPending: number;
}
export interface AnalyticCardtype {
  name: string;
  uv: number;
}
export type PaginatedListProps<T> = {
  data: T[];
  pageSize?: number;
  renderItem: (item: T) => React.ReactNode;
};

export interface AnalyticsCardProps {
  title: string;
  value: string;
  prevValue: string;
  isIncrease: boolean;
  color: string; 
  chartData: AnalyticCardtype[];
}

export type CampaignStatus =
  | "In Progress"
  | "Upcoming"
  | "Completed"
  | "Rejected"
  | "Updating";

export type CampaignRow = {
  id: number;
  name: string;
  description: string;
  status: CampaignStatus;
  stateColors: string[];
};

export type DonutChartProps = {
  percentage: number; 
  color: string;
  title: string;
  subtitle: string;
  description: string;
};

export type CountrySales = {
  name: string;
  color: string;
  value: number;
  coordinates: [number, number];
};

export type Status = "Completed" | "Reject" | "Pending";

export type Recent = {
  invoiceId: string;
  customerName: string;
  customerEmail: string;
  customerImage: string;
  couponCode: string | null;
  productName: string;
  productImage: string;
  paymentMethod: string;
  status: Status;
};

export type KV = { name: string; value: number };

