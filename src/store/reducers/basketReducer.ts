import { BasketAction, BasketActionTypes, BasketState } from "../../types/basket";
import { Product } from "../../types/products";

const initState: BasketState = {
  productsArray: [],
  price: 0,
}

export const basketReducer = (state: BasketState = initState, action: BasketAction): BasketState => {
  let tempState = { ...state };

  switch (action.type) {

    case BasketActionTypes.ADD_PRODUCT_BASKET:
      tempState.productsArray.push(action.payload);
      tempState.price += action.payload.price;
      return tempState;

    case BasketActionTypes.REMOVE_PRODUCT_BASKET:
      tempState.productsArray = tempState.productsArray.filter((el) => el.id !== action.payload.id);
      tempState.price -= action.payload.price;
      return tempState;

    case BasketActionTypes.CLEARE_BASKET:
      tempState = initState;
      return tempState;

    case BasketActionTypes.PAY_BASKET:
      tempState = initState;
      return tempState;

    default:
      return state;
  }
}

