import type { JSX } from "react";

export interface DashboardCard {
  title: string;
  value: string;
  image: string;
  trend: "up" | "down";
  change: string;
  description: string;
}

export interface SalesDataItem  {
  name: string;
  value: number;
};

export interface LineChartDataItem {
  year: number;
  sales: number;
  profit: number;
};

export interface RevenueDataItem {
  name: string;
  sales: number;
  profit: number;
};

export interface DonutDataItem {
  name: string;
  value: number;
};

// ---inbox --

export interface MailItem {
  label: string;
  icon: JSX.Element;
  count: string | number;
};

export interface CheckboxItem {
  id: string;
  label: string;
  color: string;
}

export interface MessageProps {
  id: number;
  name: string;
  label?: "Primary" | "Work" | "Social" | "Friends";
  labelColor?: string;
  message: string;
  time: string;
  important: boolean;
  onToggleStar: () => void;
}

export interface ChatMessage {
  id: number;
  sender: "me" | "user";
  text: string;
  time: string;
  type?: "text" | "file" | "link" | "image";
}

// --order list--

export interface FilterButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
}

export interface DateFilterProps {
  selectedDate: string | null;
  onSelectDate: (date: string | null) => void;
}

export interface OrderTypeFilterProps {
  selectedTypes: string[];
  onSelectTypes: (types: string[]) => void;
}

export interface OrderStatusFilterProps {
  selectedStatuses: string[];
  onSelectStatuses: (statuses: string[]) => void;
}


// --product stock
export interface Product {
  image: string;
  name: string;
  category: string;
  price: number;
  pieces: number;
  colors: string[];
};

// ----Pricing 
export interface PricingFeature {
  label: string;
  enabled: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: PricingFeature[];
  isPopular?: boolean;
}
