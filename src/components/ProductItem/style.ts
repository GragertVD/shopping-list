import styled from 'styled-components';

export const ProductItemContainer = styled.div`
  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.lavender : props.theme.colors.veryDarkGrey};
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  flex: 1 0 230px;
  max-width: 300px;

  transition: opacity 1s;

  img {
    width: 150px;
    height: 150px;
    border-radius: 5px;
    /* cursor: pointer; */

    transition: all 0.3s;
  }

  div {
    text-align: center;
  
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
  }
`;



