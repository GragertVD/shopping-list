import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-image: linear-gradient(to bottom,
      rgba(189, 189, 189, 0.192),
      rgba(112, 112, 112, 0.5));
  text-align: center;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  flex-direction: column;
  padding: 8px;
`;

export const ContactsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;  
  a{
    color: black;
  }
`;


