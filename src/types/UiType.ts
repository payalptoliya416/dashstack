import type { JSX } from "react";

export interface ButtonType {
  label: string;
  color: string;
}
export interface ButtonIconType {
  color: string;
}
export interface IconButton {
  size: string;
  iconSize: number;
  color: string;
}
export interface BrandButton {
  color: string;
  icon: JSX.Element;
}
export interface SocialButton {
  color: string;
  icon: JSX.Element;
  label: string;
}
export interface SizeButton {
  label: string;
  padding: string;
}
export interface Option {
  reference: string;
  details: React.ReactNode;
}

export interface CardData {
  image: string;
  title: string;
  description: string;
  items: string[];
  links: { label: string; color: string; hoverBg: string }[];
}

export type CardUIType = {
  id: number;
  title: string;
  variant: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  bg: string;
  border: string;
};

export type FlushCard = {
  id: number;
  title: string;
  description: string;
};
export interface DropdownProps {
  color: string;
  label: string;
}

export interface MenuItemRenderProps {
  active: boolean;
}