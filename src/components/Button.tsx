import { BtnProp, ChildrenLayoutProp } from "@/types/layout";
import React from "react";

const Button: React.FC<BtnProp> = ({ children, btnStyle }) => {
  return (
    <button
      style={{
        ...btnStyle,
        display: "grid",
        placeContent: "center",
        fontSize: "0.875rem",
        borderRadius: "0.3125rem",
        border: "none",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
