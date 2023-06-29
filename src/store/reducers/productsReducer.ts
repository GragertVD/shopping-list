import { Product, ProductsAction, ProductsActionTypes, ProductsState } from "../../types/products";


const initState: ProductsState = {
  productsArray: [],
  loading: false,
  error: null,
}

export const productsReducer = (state: ProductsState = initState, action: ProductsAction): ProductsState => {
  let tempState = { ...state };
  tempState.error = null;
  switch (action.type) {
    case ProductsActionTypes.FETCH_PRODUCTS:
      tempState.loading = true;
      return tempState;

    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      //Закоментирована логика добавления полученных данных к уже существующим. Надо подумать что будет интереснее
      //Подумал, если товаров много добавить подзагрузку частями при скролле, так бесполезно

      // tempState.productsArray = [...tempState.productsArray,
      // ...action.payload.map(
      //   (el): Product => {
      //     return ({ id: el.id, price: el.price, title: el.title, images: el.images, inBasket: false })
      //   })
      // ];
      tempState.productsArray = action.payload.map(
        (el): Product => {
          return ({ id: el.id, price: el.price, title: el.title, images: el.images, inBasket: false })
        });
      tempState.loading = false;
      return tempState;

    case ProductsActionTypes.FETCH_PRODUCTS_ERROR:
      tempState.loading = false;
      tempState.error = action.payload;
      return tempState;

    case ProductsActionTypes.ADD_PRODUCT:
      action.payload.id = tempState.productsArray.length + 1;
      tempState.productsArray.push(action.payload);
      return tempState;

    case ProductsActionTypes.ADD_PRODUCTS_IN_BASKET:
      tempState.productsArray = tempState.productsArray.map((el) => {
        if (el.id === action.payload) {
          el.inBasket = true;
        }
        return el;
      });
      return tempState;

    case ProductsActionTypes.REMOVE_PRODUCTS_IN_BASKET:
      tempState.productsArray = tempState.productsArray.map((el) => {
        if (el.id === action.payload) {
          el.inBasket = false;
        }
        return el;
      });
      return tempState;

    case ProductsActionTypes.CLEARE_BASKET:
      tempState.productsArray = tempState.productsArray.map((el) => {
        el.inBasket = false;
        return el;
      });
      return tempState;

    default:
      return state;
  }
}

