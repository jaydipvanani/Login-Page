import React from 'react'
import ForgotPassword from './Login-pages/Forgotpassword'
import Signup from './Login-pages/Signup'
import { Routes, Route } from "react-router-dom";
import Login from './Login-pages/Login';
import Product from './Products/Products';
import Addproduct from './Products/Addproduct';
import ViewProduct from './Products/Viewproduct';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ForgotPassword/*" element={<ForgotPassword />} />
        <Route path="/SignUp/*" element={<Signup />} />
        <Route path="/Addproduct" element={<Addproduct />} />
        <Route path="/viewProduct" element={<ViewProduct />} />
      </Routes>
    </>
  )
}

export default App