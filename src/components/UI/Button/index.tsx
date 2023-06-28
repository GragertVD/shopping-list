import React from 'react'
import { StyledButton } from './style';


interface IPropsButton {
  onClick?: () => void;
  colorBG?: string;
  color?: string;
  text: string;
  height?: string;
  width?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const Button: React.FC<IPropsButton> = ({ colorBG, text, onClick, height = "48px", width, color, type = "button", disabled = false }) =>
  <StyledButton type={type} onClick={onClick} disabled={disabled} colorBG={colorBG} color={color} height={height} width={width}>{text}</StyledButton>

export default Button;