import { FC } from "react";
import { Link, useLocation } from 'react-router-dom';
import { LinksContainer, NavbarContainer } from './style';
import { useTypedSelector } from "../../hooks/useTypedSelector";


const navigation = [
  { id: 1, title: 'Hello', path: '/' },
  { id: 2, title: 'Каталог', path: '/catalog' },
  { id: 3, title: 'Корзина', path: '/basket' },
];

const Navbar: FC = () => {
  const state = useTypedSelector(state => state.basket);
  const location = useLocation();
  
  return (
    <NavbarContainer>
      <LinksContainer>
        {navigation.map(({ id, title, path }) => (
          <li key={id}>
            <Link className={location.pathname === path ? "active" : ""} to={path}>
              {title + (title === 'Корзина' ? ` (${state.price.toString()} ₽)` : '')}
            </Link>
          </li>
        ))}
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
