import { FC } from 'react';
import { ProductListContainer } from './style';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ProductItem from '../ProductItem';


export const ProductList: FC = () => {

  const state = useTypedSelector(state => state.products);

  if (state.loading) return (<h1>Loading process</h1>)

  return (
    <>
      <h1 style={{ display: "none" }}>{'Список продуктов'}</h1>
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

