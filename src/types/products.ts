
export enum ProductsActionTypes {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
  ADD_PRODUCT = "ADD_PRODUCT",
  ADD_PRODUCTS_IN_BASKET = "ADD_PRODUCTS_IN_BASKET",
  REMOVE_PRODUCTS_IN_BASKET = "REMOVE_PRODUCTS_IN_BASKET",
  CLEARE_BASKET = "CLEARE_BASKET",
}

interface FetchProductsAction {
  type: ProductsActionTypes.FETCH_PRODUCTS;
}

interface FetchSuccessProductsAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

interface FetchErrorProductsAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}

interface AddProductsProductsAction {
  type: ProductsActionTypes.ADD_PRODUCT;
  payload: Product;
}

interface AddInBasketProductsAction {
  type: ProductsActionTypes.ADD_PRODUCTS_IN_BASKET;
  payload: number;
}

interface RemoveInBasketProductsAction {
  type: ProductsActionTypes.REMOVE_PRODUCTS_IN_BASKET;
  payload: number;
}

interface CleareBasketProductsAction {
  type: ProductsActionTypes.CLEARE_BASKET;
}


export type ProductsAction = FetchProductsAction | FetchSuccessProductsAction | FetchErrorProductsAction | AddInBasketProductsAction | RemoveInBasketProductsAction | AddProductsProductsAction | CleareBasketProductsAction;


export interface ProductsState {
  productsArray: Product[],
  loading: boolean,
  error: string | null,
}

export interface Product {
  id: number,
  title: string,
  price: number,
  images: string[],
  inBasket: boolean,
}