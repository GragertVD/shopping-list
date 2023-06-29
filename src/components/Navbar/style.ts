import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: 0 10px;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;

    &.active,
    &:hover {
      background-color: ${props => props.theme.theme === "light" ? props.theme.colors.mediumGrey : props.theme.colors.veryDarkGrey};
    }
  }
`;

export const LinksContainer = styled.ul`
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;

  li{
    height: 100%;
  }

`;


