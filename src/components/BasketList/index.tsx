import { FC, useEffect } from 'react';
import { ProductListContainer } from './style';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/action-creators/products';
import ProductItem from '../ProductItem';


export const BasketList: FC = () => {
  const state = useTypedSelector(state => state.basket);
  
  return (
    <>
      <h1 style={{ display: "none" }}>{'Список продуктов в корзине'}</h1>
      <ProductListContainer>
        {
          state.productsArray.map((product) =>
            <ProductItem key={product.id} product={product} />
          )
        }
      </ProductListContainer>
    </>
  )
};

