import { CSSProperties, ReactEventHandler, ReactNode } from "react";

export interface ChildrenLayoutProp {
  children: ReactNode;
}

export interface BtnProp {
  children: React.ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  variant: "primary" | "secondary" | "outline" | "text";
  onClick: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  customClass?: string;
}
