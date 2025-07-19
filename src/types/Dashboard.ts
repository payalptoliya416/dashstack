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

// ----calender

export interface Event {
  id: number;
  avatar: string;
  title: string;
  dateTime: string;
  address: string;
  attendees:  { image: string }[];
  extraAttendeeCount?: number;
  startDate?: string;
  endDate?: string;  
}
export interface Attendee {
  image: string;
}
export interface EventPopover {
  id: number;
  title: string;
  dateTime: string;
  address: string;
  location: string;
  attendees: Attendee[];
  extraAttendeeCount?: number;
  color: string;
  bg: string;
  text: string;
  avatar : string;
}

export interface EventProps {
  event: EventPopover;
   multiDay?: boolean;
  duration?: number;
}

// ---todolist 
export interface Task {
  id: number;
  title: string;
  completed: boolean;
  important: boolean;
}

// ---contact
export interface ContactItem {
  id: number;
  name: string;
  email: string;
  image: string;
}

// ---invoice
export interface InvoiceData {
  serialno: string;
  description: string;
  quantity: string;
  basecost: string;
  totalcost: string;
}

// --team memnder 
export interface TeamMember  {
 id: number;       
  name: string;
  email: string;
  phone: string;      
  position: string;
  gender: string;    
  image: string;
};

// ---profuctslider \
export interface SlideData {
  date: string;
  title: string;
  desc: string;
  bg: string;
  heartColor?: string;
}


