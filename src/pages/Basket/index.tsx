import { FC } from "react";
import { ProductList } from "../../components/ProductList";
import Button from "../../components/UI/Button";
import { useDispatch } from "react-redux";
import { BasketActionTypes } from "../../types/basket";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { BasketButtonContainer } from "./style";


const Basket: FC = () => {
  const state = useTypedSelector(state => state.basket);
  const dispatch = useDispatch();


  return (
    <>
      <h1 style={{ display: "none" }}>{'Список продуктов в корзине'}</h1>
      <BasketButtonContainer>
        <Button
          onClick={() => {
            dispatch({ type: BasketActionTypes.CLEARE_BASKET, payload: 'asd' });
            alert(`Вы купили проуктов на сумму ${state.price}`)
          }}
          text={`Купить всё на сумму ${state.price}`}
          colorBG='rebeccapurple'
          disabled={state.productsArray.length === 0}
        />
        <Button
          onClick={() => {
            dispatch({ type: BasketActionTypes.CLEARE_BASKET, payload: 'asd' });
            alert('Корзина очищена')
          }}
          text='Очистить корзину'
          colorBG='rebeccapurple'
          disabled={state.productsArray.length === 0}
        />
      </BasketButtonContainer>
      <ProductList products={state.productsArray} />
    </>
  )
};

export default Basket;
