import styled from 'styled-components';

export const HeaderContainer = styled.header`

  background-image: linear-gradient(to bottom,
      rgba(189, 189, 189, 0.192),
      rgba(112, 112, 112, 0.5));
      
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 100;

  /* background-color: #55c5ff;
  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.blue : props.theme.colors.veryDarkGrey};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px; */
`;

export const HeaderDummy = styled.div`
  width: 100%;
  height: 60px;
`;


