import { FC } from "react";
import styles from './style.module.scss';
import { HeaderContainer, HeaderDummy } from './style';
import Navbar from "../Navbar";


const Header: FC = () => (
  <>
    <HeaderDummy></HeaderDummy>
    <HeaderContainer>
      <Navbar />
    </HeaderContainer>
  </>
);

export default Header;
