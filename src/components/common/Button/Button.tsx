import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger"; // Hacer 'variant' opcional
  disabled?: boolean;
}

// Proporcionar un valor predeterminado para 'variant'
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary", // Valor predeterminado para 'variant'
  disabled = false,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
