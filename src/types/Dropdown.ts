export interface DropdownProps {
  color?: string;
  label: string;
  closeType: 'default' | 'outside' | 'inside' | 'manual';
  width: string; 
}

export interface MenuItemRenderProps {
  active: boolean;
}