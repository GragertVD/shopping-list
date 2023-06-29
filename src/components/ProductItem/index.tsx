import { ProductItemContainer } from './style';
import { useInView } from 'react-intersection-observer';
import { FC } from 'react';
import { Product, ProductsActionTypes } from '../../types/products';
import Button from '../UI/Button';
import { useDispatch } from 'react-redux';
import { BasketActionTypes } from '../../types/basket';

interface IPropsProductItem {
  product: Product;
}

const ProductItem: FC<IPropsProductItem> = ({ product }) => {
  const dispatch = useDispatch();

  //Хук для отслеживания видимости карточки
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <ProductItemContainer ref={ref} className={`${inView ? "opacity_1" : "opacity_0"}`} >
      <img loading="lazy" decoding="async" src={inView ? product.images[0] : ''} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.price} <span>p</span></p>
        {
          product.inBasket
            ?
            <Button
              onClick={() => {
                dispatch({ type: ProductsActionTypes.REMOVE_PRODUCTS_IN_BASKET, payload: product.id });
                dispatch({ type: BasketActionTypes.REMOVE_PRODUCT_BASKET, payload: product });
              }
              }
              colorBG='rebeccapurple'
              text='Убрать из корзины'
            />
            :
            <Button
              onClick={() => {
                dispatch({ type: ProductsActionTypes.ADD_PRODUCTS_IN_BASKET, payload: product.id });
                dispatch({ type: BasketActionTypes.ADD_PRODUCT_BASKET, payload: product });
              }
              }
              colorBG='cornflowerblue' //rebeccapurple   cornflowerblue
              text='В корзину'
            />
        }

      </div>
    </ProductItemContainer>
  )
};

export default ProductItem;
