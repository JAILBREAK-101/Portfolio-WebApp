import React from "react";

export type ButtonVariant = "primary" | "secondary" | "danger" | "default";
export type ButtonSize = "large" | "small" | "xsmall" | "default";

export interface ButtonProps {
  loading?: boolean;
  variant?: ButtonVariant;
  disabled?: boolean;
  btnClass?: string;
  withIcon?: React.ReactNode;
  body: string | React.ReactNode;
  type?: "button" | "submit" | "reset";
  size?: ButtonSize;
  onClick?: () => void;
  title?: string;
}
