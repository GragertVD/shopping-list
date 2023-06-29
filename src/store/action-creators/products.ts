import { Dispatch } from "react"
import axios from "axios";
import { ProductsAction, ProductsActionTypes } from "../../types/products";


export const fetchProducts = () => {
  const url = 'https://dummyjson.com/products?limit=10';

  return async (dispatch: Dispatch<ProductsAction>) => {
    dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS });
    // setTimeout(() => {
    axios.get(url)
      .then(
        (res) => {
          dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: res.data.products });
        },
        (err) => {
          dispatch({
            type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
            payload: err.name
          });
        }
      )
    // }, 1000);
  }
}
