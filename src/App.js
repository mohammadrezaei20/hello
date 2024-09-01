import React from 'react';
import Header from './sabzlearn/Erwinrommel/Header/Header.js'
import Nav from './sabzlearn/Erwinrommel/Header/Nav.js'
import Article from './sabzlearn/Erwinrommel/Article/Article.js'
import Product from './sabzlearn/Sabzproduct/Product.js';
export default function App() {
    return (
        <div className='d-flex justify-content-evenly'>
            <Product />
            <Product />
            <Product />
        </div>
    )
}