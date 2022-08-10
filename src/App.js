import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./routes/Cart";
import Layout from "./routes/Layout";
import Shop from "./routes/Shop";
// umumiy scss link ulnagan va hamma sasslar shunga inport qilngan
import './styles/styles.scss'
//bootstrap react css
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./routes/About";
import Contact from "./routes/Contact";
import Category from "./routes/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='category' element={<Category/>}/>
          <Route path="cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
