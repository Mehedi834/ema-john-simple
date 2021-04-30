import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css'
import Product from '../../Components/Product/Product';


const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0, 15);
    const [products, setProducts] = useState(first10);

    const handleAddProduct = (products) => {
        console.log('Product Added', products);

    }
    return (
        <div className="shop_container">
            <div className="product_container">


                {
                    products.map(pd => <Product 
                        products={pd} 
                        handleAddProduct={handleAddProduct}
                    
                    ></Product>)

                }

            </div>
            <div className="cart_container">
                <h3>This is cart Area</h3>
            </div>


        </div>
    );
};

export default Shop;