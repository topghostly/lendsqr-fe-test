import React, { ReactNode } from "react";

export interface ChildrenLayoutProp {
  children: ReactNode;
}

export interface BtnProp {
  children: React.ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  color?: "primary" | "secondary";
  variant: "fill" | "outline" | "text";
  onClick: () => void;
  fullWidth?: boolean;
  customClass?: React.CSSProperties;
}

export interface userDetailsPageProp {
  currentUserID: string | string[] | undefined;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export interface MatricsCardProps {
  icon: string;
  label: string;
  value: number;
  color: string;
}

export interface FilterPageProps {
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
}
