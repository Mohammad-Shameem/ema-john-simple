import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = ({ product, handlAddToCart }) => {  //destructure in param
    // const{product,handlAddToCart}=props;
    const { name, img, seller, ratings, price } = product;
    // const { name, img, seller, ratings, price } = props.product;
    // const { handlAddToCart } = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} start</small></p>
            </div>
            <button onClick={() => handlAddToCart(product)} className='btn-cart'>
                <p>Add to Cart <span className='btn-logo'>  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></p>

            </button>
        </div>
    );
};

export default Product;