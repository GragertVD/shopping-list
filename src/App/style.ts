import styled from 'styled-components';

export const AppContainer = styled.div`

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;


  background-color: #55c5ff;
  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.blue : props.theme.colors.veryDarkGrey};
`;

