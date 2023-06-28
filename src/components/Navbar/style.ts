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
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const LinksContainer = styled.ul`
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;

`;


