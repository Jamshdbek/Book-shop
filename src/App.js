import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./routes/Cart";
import Layout from "./routes/Layout";
import Shop from "./routes/Shop";
// umumiy scss link ulnagan va hamma sasslar shunga inport qilngan
import './styles/styles.scss'
//bootstrap react css
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
