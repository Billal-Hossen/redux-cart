import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  Route, Routes
} from "react-router-dom";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/products/Cart';
import ProductDetails from './components/products/ProductDetails';
import Products from './components/products/Products';
function App() {
  return (
   
   <>

   <Header/>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/products" element={<Products/>}/>
     <Route path="/products/:id" element={<ProductDetails/>}/>
     <Route path="/cart" element={<Cart/>}/>
   </Routes>
 
 
   </>
  );
}

export default App;
