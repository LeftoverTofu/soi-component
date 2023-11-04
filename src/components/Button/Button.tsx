import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  color: ${(props) => (props.variant === "secondary" ? "cyan" : "orange")};
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
      ? "9px 30px 11px"
      : "14px 30px 16px"};
  border: 1px solid
    ${(props) => (props.variant === "secondary" ? "cyan" : "orange")};
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  background: ${(props) =>
    props.disabled
      ? "rgb(0, 0, 0, 0.1)"
      : "linear-gradient(#fff2, transparent)"};
  box-shadow: 0 25px, 25px rgb(0, 0, 0, 0.25);

  &:hover {
    background: ${(props) =>
      props.disabled ? "rgb(0, 0, 0, 0.1)" : "rgb(0, 0, 0, 0.1)"};
  }
`;
const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      disabled={disabled}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
