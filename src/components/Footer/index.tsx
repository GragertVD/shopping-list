import { FC } from "react";
import { ContactsContainer, FooterContainer } from './style';


const Footer: FC = () => (
  <FooterContainer>
    <h3>Created by Gragert</h3>
    <ContactsContainer>
      <h4>Contacts: </h4>
      <a href="https://t.me/gragert_vd" target="_blank" >Telegrem</a>
      <a href="https://github.com/GragertVD" target="_blank" >GitHub</a>
    </ContactsContainer>
  </FooterContainer>
);

export default Footer;
