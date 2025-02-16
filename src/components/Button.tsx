import { BtnProp } from "@/types/layout";
import React from "react";
import styles from "../styles/components/_button.module.scss";

const Button: React.FC<BtnProp> = ({
  children,
  variant,
  fullWidth,
  disabled,
  onClick,
  customClass,
  type,
  color,
}) => {
  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${styles[color]} ${
        disabled ? styles.disable : ""
      } ${fullWidth ? styles.fw : ""}`}
      style={{ ...customClass }}
      onClick={() => onClick()}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
