import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const product = (props) => {
    // console.log(props)
    const { img, name, seller, price, stock } = props.products;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h3 className="product-color">{name}</h3>
                <p><small>{seller}</small></p>
                <h3>{price}</h3>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button className="main-button" onClick ={() => props.handleAddProduct(props.products)}>
                    
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default product;