import { FC } from "react";
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
