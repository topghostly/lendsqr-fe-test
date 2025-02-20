import React, { CSSProperties, ReactEventHandler, ReactNode } from "react";

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
