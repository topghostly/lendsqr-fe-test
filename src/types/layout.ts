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
  disabled?: boolean;
  customClass?: React.CSSProperties;
}
