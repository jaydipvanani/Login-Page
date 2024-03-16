import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from '../Componant/Navbar'
import Cards from '../Componant/Cards'

import Addproduct from './Addproduct'
import ViewProduct from './Viewproduct'

const Product = () => {
    return (
        <>
            <Navbar />
            <Addproduct />
            {/* <ViewProduct /> */}
            <Cards />
        </>
    )
}

export default Product