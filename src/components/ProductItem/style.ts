import styled from 'styled-components';

export const ProductItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  // flex: 1 0 280px;
  flex: 1 0 250px;

  transition: opacity 1s;

  img {
    width: 150px;
    height: 150px;
    border-radius: 5px;
    cursor: pointer;

    transition: all 0.3s;

    @media (any-hover: hover) {
      &:hover {
        transform: scale(1.04);
      }
    }
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



