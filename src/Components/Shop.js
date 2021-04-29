import React from 'react';
import fakeData from '../fakeData';
import { useState } from 'react';
import './Shop.css'

const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    return (
        <div className="shop_container">
            <div className="product_container">
                <h1>This is a Shop</h1>
                <h3>Number of Product: {products.length}</h3>
                <ul>
                    {
                        products.map(product => <li>{product.name}</li>)

                    }
                </ul>
            </div>
            <div className="cart_container">
                <h3>Thsi is cart Area</h3>
            </div>


        </div>
    );
};

export default Shop;