import { FC, useState } from "react";
import { ProductList } from "../../components/ProductList";
import { CreateProduct } from "../../components/CreateProduct";
import Button from "../../components/UI/Button";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ProductsButtonContainer } from "./style";


const Catalog: FC = () => {

  const state = useTypedSelector(state => state.products);
  const [openCreateProduct, setOpenCreateProduct] = useState(false);

  if (state.loading) return (<h1>Loading process</h1>)

  return (
    <>
      <h1 style={{ display: "none" }}>{'Список продуктов'}</h1>
      <ProductList products={state.productsArray} />
      <ProductsButtonContainer>
        <Button onClick={() => { setOpenCreateProduct(true) }} text='Создать новый товар' colorBG='rebeccapurple' />
      </ProductsButtonContainer>
      {
        openCreateProduct
          ?
          <CreateProduct setOpen={setOpenCreateProduct} />
          :
          <></>
      }
    </>
  )
};

export default Catalog;
