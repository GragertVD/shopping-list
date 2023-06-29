import { ThemeProvider } from "styled-components";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { lightTheme } from './them';
import { Layout } from "./components/Layout";
import Error from "./pages/404";
import { FC, useEffect } from "react";
import Catalog from "./pages/Catalog";
import Hello from "./pages/Hello";
import Basket from "./pages/Basket";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./store/action-creators/products";

const App: FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts()(dispatch);
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hello />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="basket" element={<Basket />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider >

  );
}

export default App;
