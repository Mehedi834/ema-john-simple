import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css'
import Product from '../../Components/Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0, 15);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (products) => {
        console.log('Product Added', products);
        const newCart = [...cart, products];
        setCart(newCart);

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
                <Cart cart ={cart}></Cart>
                
            </div>


        </div>
    );
};

export default Shop;