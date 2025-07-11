import type { LucideIcon } from "lucide-react";

export interface SidebarLink {
  name: string;
  path: string;
  icon: LucideIcon;
}

export interface SidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export interface productData {
  images: string[];
  title: string;
  price: string;
  rating: number;
  reviewsCount: number;
}
