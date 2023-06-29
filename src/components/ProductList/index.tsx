import { FC } from 'react';
import { ProductListContainer } from './style';
import ProductItem from '../ProductItem';
import { Product } from '../../types/products';


interface IPropsProductList {
  products: Product[];
}

export const ProductList: FC<IPropsProductList> = ({products}) => {

  return (
    <>
      <ProductListContainer>
        {
          products.map((product) =>
            <ProductItem key={product.id} product={product} />
          )
        }
      </ProductListContainer>
    </>
  )
};

