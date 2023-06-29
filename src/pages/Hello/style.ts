import styled from 'styled-components';

export const HelloPageContainer = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 12px;

  padding: 16px 0;

  p{
    font-size: 1.1em;
  }
`;

export const ApplicationInfoContainer = styled.div`
  min-height: 100%;
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 8px;


  text-align: left;
  div{
    padding: 16px;
    
  }

  ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    padding-top: 8px;
    li{
      list-style-type: circle;
    }
  }
`;



