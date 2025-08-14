import type { LucideIcon } from "lucide-react";

export interface SidebarChildLink {
  name: string;
  path: string;
}

export interface SidebarLink {
  name: string;
  path?: string;
  icon: LucideIcon;
  children?: SidebarChildLink[];
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
