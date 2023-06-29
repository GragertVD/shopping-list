import styled from 'styled-components';

export const LayoutContainer = styled.div`

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;


  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.lightGrey : props.theme.colors.veryDarkGrey};
`;

