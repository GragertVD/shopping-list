import styled from 'styled-components';

export const StyledButton = styled.button<{ colorBG?: string, color?: string, height: string, width: string | undefined }>`
  &:not(&:disabled){
    cursor: pointer;
  }
  color:${props => props.color || 'white'};
  background: ${props => props.colorBG || 'grey'};
  padding: 15px 25px;
  height: ${props => props.height};
  width: ${props => props.width || 'auto'};
  border: none;
  border-radius: 24px;
  transition: all 0.12s;
  &:focus:not(&:disabled){
    outline: none;
    border: 3px solid ${props => props.color ? props.color : props.theme.colors.gren};
    transform: scale(1.02);
  }

  &:disabled{
    background: grey;  
  }

  @media (any-hover: hover) {
    &:hover:not(&:disabled){
      background: ${props => props.colorBG || props.theme.colors.mainPurpleHover};
      filter: grayscale(${props => props.colorBG ? "1" : "0"});
    }
  }

`