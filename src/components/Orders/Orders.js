import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
const Orders = () => {
    const [products, setProducts] = useProducts();   /* (eta hocche custom Hook) Eta amader banano ekta function jetake amra state er moto kore use kortechi.et kora jay.ebong amader ei function ti ja return korche ta amra state er mote kore niye nicchi. */
    const [cart, setCart] = useCart(products)
    const navigate = useNavigate()

    const handleRemoveProduct = product => {
        if (cart.includes(product)) {
            const rest = cart.filter(pd => pd.id !== product.id);
            setCart(rest)  /* kono state e array thakle sekhan theke kono element sorate hole mane remove korte hole sekhane filter kore oi array er jetake remove korte chai seta bade sobguloke select kore fela ebong setake state e set kore fela. */
            removeFromDb(product.id)
        }
    }
    return (
        <div className='orderReview-parent'>
            <div className='orderReview-container' >  {/* ekhane amra shop er moto call use korar mane holo shop e je css gulo amra lekhchi sgulor subudha bhog kora.amra css gulo evabe likhtam shopModule.css tahole sgulo pawa jetona tai amra jehetu shop.css likhchi tai er shubidha pawa mane amra shei css gulo puro react jure use korte pari.*/}
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>

            <div className='orderCart-parent'>
                <div className='order-cart'>
                    <Cart cart={cart}>

                        <button onClick={() => navigate("/inventory")} className='proceed-chekcout-button'>
                            <p>Proceed Checkout</p>
                            {<FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>}
                        </button>

                    </Cart>   {/* cart ke props dite hobe. tai amra props hishebe cart ke pathalam */}

                </div>
            </div>


        </div>
    );
};

export default Orders;