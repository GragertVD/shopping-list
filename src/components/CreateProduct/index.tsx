import { useDispatch } from "react-redux";
import { useInput } from "../../hooks/useInput";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Product, ProductsActionTypes } from "../../types/products";
import Button from "../UI/Button";
import { Background, ContainerForm, InputTitleContainer, TitleNewProduct } from "./style";
import { Dispatch, FormEvent, SetStateAction, useRef } from 'react';

interface ICreateProduct {
  setOpen: Dispatch<SetStateAction<boolean>>;
}


export const CreateProduct: React.FC<ICreateProduct> = ({ setOpen }) => {
  const dispatch = useDispatch();

  const refContainer = useRef(null);
  useOutsideClick({ element: refContainer, setStateOutsideClick: setOpen })

  const inputTitle = useInput('');
  const inputPrice = useInput('');
  const inputURL = useInput('');

  const MySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputTitle.value.length < 1) {
      alert("Нельзя создать продукт без названия")
      return;
    }

    const newProduct: Product = {
      id: 0,
      title: inputTitle.value,
      price: Number(inputPrice.value),
      images: [inputURL.value],
      inBasket: false,
    }

    console.log(newProduct);
    dispatch({ type: ProductsActionTypes.ADD_PRODUCT, payload: newProduct });

    setOpen(false);
  }

  return (
    <>
      <Background >
        <ContainerForm ref={refContainer} onSubmit={MySubmit}>
          <TitleNewProduct>Создание продукта</TitleNewProduct>
          <InputTitleContainer>
            <p>Название</p>
            <input {...inputTitle} placeholder="Samsung S9" type="text" />
          </InputTitleContainer>
          <InputTitleContainer>
            <p>Цена (руб.)</p>
            <input {...inputPrice} placeholder="100" type="number" />
          </InputTitleContainer>
          <InputTitleContainer>
            <p>Ссыка на картинку (URL)</p>
            <input {...inputURL} placeholder="https://pngicon.ru/file/uploads/red_phone.png" type="text" />
          </InputTitleContainer>
          <Button type="submit" colorBG='cornflowerblue' width="100%" height="40px" text="Create Task" />
        </ContainerForm>
      </Background >
    </>
  )
}
