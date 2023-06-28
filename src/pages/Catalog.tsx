import { FC, useState } from "react";
import { ProductList } from "../components/ProductList";
import { CreateProduct } from "../components/CreateProduct";
import Button from "../components/UI/Button";


const Catalog: FC = () => {

  const [openCreateProduct, setOpenCreateProduct] = useState(false);


  return (
    <>
      <ProductList />
      <Button onClick={() => { setOpenCreateProduct(true) }} text='+ new product' />
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
