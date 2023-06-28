import { Product } from "./products";

export enum BasketActionTypes {
  CLEARE_BASKET = "CLEARE_BASKET",
  PAY_BASKET = "PAY_BASKET",
  ADD_PRODUCT_BASKET = "ADD_PRODUCT_BASKET",
  REMOVE_PRODUCT_BASKET = "REMOVE_PRODUCT_BASKET",
}

interface CleareBasketAction {
  type: BasketActionTypes.CLEARE_BASKET;
}

interface PayBasketAction {
  type: BasketActionTypes.PAY_BASKET;
}

interface AddBasketAction {
  type: BasketActionTypes.ADD_PRODUCT_BASKET;
  payload: Product;
}

interface RemoveBasketAction {
  type: BasketActionTypes.REMOVE_PRODUCT_BASKET;
  payload: Product;
}

export type BasketAction = CleareBasketAction | PayBasketAction | AddBasketAction | RemoveBasketAction;

export interface BasketState {
  productsArray: Product[],
  price: number,
}
