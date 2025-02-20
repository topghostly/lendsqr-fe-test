import { BtnProp } from "@/types/layout";
import React from "react";

const Button: React.FC<BtnProp> = ({
  children,
  variant,
  fullWidth,
  onClick,
  customClass,
  type,
  color,
}) => {
  return (
    <button
      className={`btn ${color} ${variant} ${fullWidth ? "fw" : null}`}
      style={{ ...customClass }}
      onClick={() => onClick()}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
