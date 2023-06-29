import styled from 'styled-components';

export const HeaderContainer = styled.header`

  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.black : props.theme.colors.veryDarkGrey};
      
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 100;

`;

export const HeaderDummy = styled.div`
  width: 100%;
  height: 60px;
`;


