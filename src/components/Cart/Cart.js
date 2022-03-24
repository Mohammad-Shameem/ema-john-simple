import './Cart.css'
import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2))/* ekhane amra 10% tax nicchi.toFixed diya amra joto iccha toto decimal porjonto cut korte pari.tobe numberta string hoye jabe.tai ei numbertake onno kono number er sathe add korte chaile ei numbertake parseInt kore nite hobe. */
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected Item: <span className='item-count'>{quantity}</span></p>
            <p >Total Price: <span className='common'>$ {total}</span></p>
            <p >Total Shipping Price: <span className='common'>$ {shipping}</span></p>
            <p >Tax: <span className='common'>$ {tax}</span></p>
            <h4 >Grand Total: <span className='grandTotal'>${grandTotal}</span></h4>
        </div>


    );
};

export default Cart;