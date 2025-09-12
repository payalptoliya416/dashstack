import type { ReactNode } from "react";

export interface NotificationCategory {
  title: string;
}

export interface RadioOption {
  id: string;
  title: string;
  description: string;
}

export interface SwitchOption {
  id: string;
  title: string;
  description: string;
}

export interface FormRowProps {
  label: string;
  children: ReactNode;
}

export interface Integration {
  id: number;
  name: string;
  installs: string;
  icon: string;
  description: string;
  enabled: boolean;
}
export interface Available {
  id: number;
  name: string;
  installs: string;
  icon: string;
  description: string;
  enabled: boolean;
}

export interface PaymentMethod {
  id: number;
  image: string;
  title: string;
  subText: string;
  isDefault: boolean;
}

export interface FormRowProps {
  label: string;
  children: ReactNode;
}

export interface SecurityOption {
  title: string;
  description: string;
  type: "switch" | "button";
  buttonLabel?: string;
}
