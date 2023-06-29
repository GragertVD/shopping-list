import styled from 'styled-components';

export const ContainerForm = styled.form`
  width: 480px;
  max-height: 85vh;
  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.white : props.theme.colors.darkGrey};
  border-radius: 5px;
  padding: 32px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  /* margin-top: 60px; */
  /* transition: all 0.3s; */
  max-width: 90%;
  ${props => props.theme.beforeMobileL}{
    padding: 18px;
  }

  overflow-y: auto;
`;

export const TitleNewProduct = styled.h3`
  width: 100%;
  color: ${props => props.theme.theme === "light" ? props.theme.colors.black : props.theme.colors.white};

`;

export const InputTitleContainer = styled.div`
  width: 100%;
  p{
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;

    color: ${props => props.theme.theme === "light" ? props.theme.colors.mediumGrey : props.theme.colors.white};
    margin-bottom: 8px;
  }
  
  input{
    width: 100%;
    height: 40px;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid rgba(130, 143, 163, 0.25);
    background-color: ${props => props.theme.theme === "light" ? props.theme.colors.white : props.theme.colors.darkGrey};
    color: ${props => props.theme.theme === "light" ? props.theme.colors.black : props.theme.colors.white};;

  }
`;

export const Background = styled.div`
  /* background-color: black; */
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  transition: all 0.35s;
  background-color: rgba(0, 0, 0,  0.35);
  pointer-events: all;
  
  padding: 30px 0;
  
`;
