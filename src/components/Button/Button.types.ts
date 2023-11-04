import { MouseEventHandler } from "react";

export interface ButtonProps {
  text?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
